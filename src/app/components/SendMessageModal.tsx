import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, MessageSquare, CheckCircle } from "lucide-react";

/* ───────── Types ───────── */

export interface MessageRecipient {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatarUrl?: string;
  avatarInitials?: string;
}

interface SendMessageModalProps {
  open: boolean;
  recipient: MessageRecipient | null;
  onClose: () => void;
  onSend?: (args: {
    recipient: MessageRecipient;
    mode: "text" | "email";
    labelName: string;
    subject: string;
    body: string;
    whatsappCopy: boolean;
  }) => void;
}

const TAB_BG = "#e8edf2";
const BORDER = "#e4e9ef";
const TEXT_MUTED = "#5c6e93";
const TEXT_DARK = "#232f50";
const PRIMARY_PINK = "#e8a4b8";
const PRIMARY_PINK_HOVER = "#df92aa";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

function RecipientRow({ recipient }: { recipient: MessageRecipient }) {
  return (
    <div className="flex items-center gap-[14px]">
      <div
        className="relative rounded-full shrink-0 size-[48px] overflow-hidden flex items-center justify-center"
        style={{
          background: recipient.avatarUrl ? "transparent" : "var(--secondary)",
          border: "1.5px solid #e8eff4",
        }}
      >
        {recipient.avatarUrl ? (
          <img src={recipient.avatarUrl} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-white">
            {recipient.avatarInitials || recipient.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
        <p className="font-['Manrope',sans-serif] font-semibold text-[15px] text-[#1a2235] leading-[22px]">
          {recipient.name}
        </p>
        <p
          className="font-['Manrope',sans-serif] font-medium text-[13px] leading-[18px]"
          style={{ color: TEXT_MUTED }}
        >
          {recipient.role}
        </p>
      </div>
    </div>
  );
}

/* ───────── Main modal ───────── */

export function SendMessageModal({ open, recipient, onClose, onSend }: SendMessageModalProps) {
  const [phase, setPhase] = useState<"compose" | "sent">("compose");
  const [contactTab, setContactTab] = useState<"text" | "email">("text");
  const [labelName, setLabelName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [body, setBody] = useState("");
  const [whatsappCopy, setWhatsappCopy] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) {
      setPhase("compose");
      setContactTab("text");
      setLabelName("");
      setEmailSubject("");
      setBody("");
      setWhatsappCopy(false);
      setSending(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleSend = useCallback(() => {
    if (!recipient) return;
    if (contactTab === "text") {
      if (!labelName.trim() || !body.trim()) return;
    } else {
      if (!emailSubject.trim() || !body.trim()) return;
    }
    setSending(true);
    setTimeout(() => {
      onSend?.({
        recipient,
        mode: contactTab,
        labelName: labelName.trim(),
        subject: contactTab === "email" ? emailSubject.trim() : "",
        body: body.trim(),
        whatsappCopy,
      });
      setSending(false);
      setPhase("sent");
    }, 700);
  }, [recipient, contactTab, labelName, emailSubject, body, whatsappCopy, onSend]);

  if (!open || !recipient) return null;

  const canSendText = labelName.trim().length > 0 && body.trim().length > 0 && !sending;
  const canSendEmail = emailSubject.trim().length > 0 && body.trim().length > 0 && !sending;
  const canSend = contactTab === "text" ? canSendText : canSendEmail;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-[16px]">
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} onClick={onClose} />

      <div
        className="relative bg-white flex flex-col overflow-hidden w-full"
        style={{
          maxWidth: 520,
          maxHeight: "90vh",
          borderRadius: 16,
          boxShadow: "0px 24px 48px -12px rgba(15, 23, 42, 0.18)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Header */}
        <div className="flex gap-[14px] items-start pt-[22px] px-[24px] pb-[18px]">
          <div
            className="rounded-[10px] shrink-0 size-[44px] flex items-center justify-center"
            style={{
              background: "#fff",
              border: `1px solid ${BORDER}`,
              boxShadow: "0px 1px 2px rgba(15,23,42,0.06)",
            }}
          >
            {phase === "sent" ? (
              <CheckCircle size={22} color="#1EBE72" strokeWidth={2} />
            ) : (
              <MessageSquare size={20} color={TEXT_DARK} strokeWidth={2} />
            )}
          </div>
          <div className="flex-1 min-w-0 pt-[1px]">
            <h2
              id="contact-modal-title"
              className="font-['Manrope',sans-serif] font-semibold text-[17px] text-[#1a2235] leading-[24px]"
            >
              {phase === "sent" ? "Message sent" : "Contact"}
            </h2>
            <p className="font-['Manrope',sans-serif] font-normal text-[13px] leading-[19px] mt-[4px]" style={{ color: TEXT_MUTED }}>
              {phase === "sent"
                ? `Your message was sent to ${recipient.name}.`
                : "See the file details and history of this file"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-[8px] size-[32px] flex items-center justify-center cursor-pointer shrink-0"
            style={{
              background: "#fff",
              border: `1px solid ${BORDER}`,
            }}
            aria-label="Close"
          >
            <X size={16} color="#323232" />
          </button>
        </div>

        <div style={{ height: 1, background: BORDER }} />

        <div className="px-[24px] py-[20px] flex flex-col gap-[20px] overflow-y-auto flex-1 min-h-0">
          {phase === "compose" ? (
            <>
              <RecipientRow recipient={recipient} />

              {/* Segmented tabs */}
              <div
                className="flex w-full p-[4px] rounded-[10px] gap-[4px]"
                style={{ background: TAB_BG }}
                role="tablist"
                aria-label="Contact method"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={contactTab === "text"}
                  onClick={() => setContactTab("text")}
                  className="flex-1 font-['Manrope',sans-serif] font-semibold text-[13px] leading-[18px] py-[10px] rounded-[8px] transition-shadow cursor-pointer"
                  style={{
                    background: contactTab === "text" ? "#fff" : "transparent",
                    color: contactTab === "text" ? TEXT_DARK : TEXT_MUTED,
                    boxShadow: contactTab === "text" ? "0px 1px 3px rgba(15,23,42,0.12)" : "none",
                  }}
                >
                  Text Message
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={contactTab === "email"}
                  onClick={() => setContactTab("email")}
                  className="flex-1 font-['Manrope',sans-serif] font-semibold text-[13px] leading-[18px] py-[10px] rounded-[8px] transition-shadow cursor-pointer"
                  style={{
                    background: contactTab === "email" ? "#fff" : "transparent",
                    color: contactTab === "email" ? TEXT_DARK : TEXT_MUTED,
                    boxShadow: contactTab === "email" ? "0px 1px 3px rgba(15,23,42,0.12)" : "none",
                  }}
                >
                  E-mail
                </button>
              </div>

              {contactTab === "text" ? (
                <>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-label-name" className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                      Label Name <span className="text-[#c44d6a]">*</span>
                    </label>
                    <input
                      id="contact-label-name"
                      type="text"
                      value={labelName}
                      onChange={(e) => setLabelName(e.target.value)}
                      placeholder="Place Holder"
                      className="w-full rounded-[10px] px-[14px] py-[11px] font-['Manrope',sans-serif] text-[14px] outline-none placeholder:text-[#a8b0c4]"
                      style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                    />
                  </div>

                  <label className="flex items-center gap-[10px] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={whatsappCopy}
                      onChange={(e) => setWhatsappCopy(e.target.checked)}
                      className="size-[18px] rounded border-gray-300 text-[#25D366] focus:ring-2 focus:ring-offset-0 cursor-pointer"
                      style={{ accentColor: "#25D366" }}
                    />
                    <WhatsAppGlyph />
                    <span className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                      Send a copy to WhatsApp
                    </span>
                  </label>

                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-msg-body" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="contact-msg-body"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      placeholder="Enter message here"
                      rows={5}
                      className="w-full rounded-[10px] px-[14px] py-[12px] font-['Manrope',sans-serif] text-[14px] outline-none resize-none placeholder:text-[#a8b0c4] min-h-[120px]"
                      style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-email-subject" className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                      Subject <span className="text-[#c44d6a]">*</span>
                    </label>
                    <input
                      id="contact-email-subject"
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      placeholder="Place Holder"
                      className="w-full rounded-[10px] px-[14px] py-[11px] font-['Manrope',sans-serif] text-[14px] outline-none placeholder:text-[#a8b0c4]"
                      style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label htmlFor="contact-email-body" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="contact-email-body"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      placeholder="Enter message here"
                      rows={5}
                      className="w-full rounded-[10px] px-[14px] py-[12px] font-['Manrope',sans-serif] text-[14px] outline-none resize-none placeholder:text-[#a8b0c4] min-h-[120px]"
                      style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                    />
                  </div>
                </>
              )}
            </>
          ) : (
            <div
              className="flex flex-col gap-[14px] rounded-[12px] p-[18px]"
              style={{ background: "#f1fbf5", border: "1px solid #d1f0dc" }}
            >
              <div className="flex items-center gap-[10px]">
                <CheckCircle size={18} color="#1EBE72" />
                <p className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#0b6b3b]">
                  {contactTab === "email" ? "E-mail sent" : "Message delivered"}
                  {contactTab === "email" && emailSubject ? ` · ${emailSubject}` : contactTab === "text" && labelName ? ` · ${labelName}` : ""}
                </p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[13px] text-[#2f7a53] leading-[21px] whitespace-pre-wrap">
                {body}
              </p>
            </div>
          )}
        </div>

        <div
          className={`px-[24px] py-[16px] flex items-center gap-[12px] ${phase === "compose" ? "justify-between" : "justify-end"}`}
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          {phase === "compose" ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-[18px] py-[10px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[14px] cursor-pointer bg-white"
                style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSend}
                disabled={!canSend}
                className="px-[22px] py-[10px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[14px] text-white transition-colors"
                style={{
                  background: canSend ? PRIMARY_PINK : "#f3c9d6",
                  cursor: canSend ? "pointer" : "not-allowed",
                  boxShadow: canSend ? "0px 1px 2px rgba(15,23,42,0.08)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (canSend) (e.currentTarget as HTMLButtonElement).style.background = PRIMARY_PINK_HOVER;
                }}
                onMouseLeave={(e) => {
                  if (canSend) (e.currentTarget as HTMLButtonElement).style.background = PRIMARY_PINK;
                }}
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-[22px] py-[10px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[14px] text-white cursor-pointer"
              style={{ background: PRIMARY_PINK, boxShadow: "0px 1px 2px rgba(15,23,42,0.08)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = PRIMARY_PINK_HOVER)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = PRIMARY_PINK)}
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
