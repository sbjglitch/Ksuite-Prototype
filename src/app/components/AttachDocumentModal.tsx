import React, { useState, useRef, useCallback, useEffect } from "react";
import { X, FileText, CheckCircle, Maximize2 } from "lucide-react";

/* ───────── types ───────── */

export interface AttachedFileInfo {
  name: string;
  size: number;
  url: string;
  type: string;
}

interface AttachDocumentModalProps {
  open: boolean;
  file: File | null;
  onClose: () => void;
  onAttach: (info: AttachedFileInfo) => void;
}

/* ───────── helpers ───────── */

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/* ───────── Fullscreen document viewer ───────── */

function DocumentFullscreenViewer({
  url,
  name,
  type,
  onClose,
}: {
  url: string;
  name: string;
  type: string;
  onClose: () => void;
}) {
  const isImage = type.startsWith("image/");

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-[5vh_5vw]">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: "90vw",
          height: "90vh",
          borderRadius: 12,
          background: "#0f1624",
          boxShadow: "0px 24px 48px -12px rgba(0,0,0,0.5)",
          border: "1px solid #1c2840",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-[20px] py-[13px] shrink-0"
          style={{ borderBottom: "1px solid #1c2840" }}
        >
          <div className="flex items-center gap-[10px]">
            <FileText size={15} color="#5c6e93" />
            <span
              className="font-['Manrope',sans-serif] font-medium text-[14px] text-white"
              style={{ maxWidth: 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="size-[32px] rounded-[8px] flex items-center justify-center cursor-pointer transition-colors"
            style={{ border: "1px solid #2a3448" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#1c2335")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          >
            <X size={16} color="#a2a7b4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 flex items-center justify-center p-[20px]">
          {isImage ? (
            <img
              src={url}
              alt={name}
              className="max-h-full max-w-full rounded-[4px]"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <iframe
              src={url}
              className="w-full h-full rounded-[4px] border-none"
              title={name}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────── Document thumbnail ───────── */

function DocumentThumbnail({
  url,
  name,
  type,
  onOpenFullscreen,
}: {
  url: string;
  name: string;
  type: string;
  onOpenFullscreen: () => void;
}) {
  const isImage = type.startsWith("image/");
  const isPDF = type === "application/pdf";
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onOpenFullscreen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full rounded-[10px] overflow-hidden cursor-pointer"
      style={{
        height: 200,
        background: "#f0f4f8",
        border: hovered ? "1px solid #00b2eb" : "1px solid #e8eff4",
        boxShadow: hovered ? "0px 0px 0px 3px rgba(0,178,235,0.15)" : "none",
        transition: "border-color 180ms, box-shadow 180ms",
      }}
      title="Click to view document"
    >
      {isImage && (
        <img src={url} alt={name} className="w-full h-full" style={{ objectFit: "cover" }} />
      )}
      {isPDF && (
        <iframe
          src={`${url}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
          className="w-full h-full border-none"
          title={name}
          style={{ pointerEvents: "none" }}
        />
      )}
      {!isImage && !isPDF && (
        <div className="flex flex-col items-center justify-center w-full h-full gap-[10px]">
          <div
            className="size-[56px] rounded-[12px] flex items-center justify-center"
            style={{ background: "white", border: "1px solid #e8eff4", boxShadow: "0px 1px 2px rgba(10,13,18,0.05)" }}
          >
            <FileText size={28} color="#5c6e93" />
          </div>
          <span className="font-['Manrope',sans-serif] font-medium text-[13px] text-[#5c6e93] px-[12px] text-center"
            style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {name}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity"
        style={{ background: "rgba(0,0,0,0.22)", opacity: hovered ? 1 : 0 }}
      >
        <div
          className="flex items-center gap-[7px] rounded-[8px] px-[14px] py-[8px]"
          style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0px 4px 12px rgba(0,0,0,0.15)" }}
        >
          <Maximize2 size={14} color="#232f50" />
          <span className="font-['Manrope',sans-serif] font-semibold text-[12px] text-[#232f50]">
            View full document
          </span>
        </div>
      </div>
    </button>
  );
}

/* ───────── Main modal ───────── */

export function AttachDocumentModal({
  open,
  file,
  onClose,
  onAttach,
}: AttachDocumentModalProps) {
  const [phase, setPhase] = useState<"uploading" | "done">("uploading");
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [docName, setDocName] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Start simulated upload whenever the file / open state changes */
  useEffect(() => {
    if (!open || !file) return;

    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setPhase("uploading");
    setProgress(0);
    setFullscreenOpen(false);
    // Pre-fill the document name with the filename minus extension
    setDocName(file.name.replace(/\.[^/.]+$/, ""));

    let p = 0;
    intervalRef.current = setInterval(() => {
      p += Math.random() * 14 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(intervalRef.current!);
        setProgress(100);
        setTimeout(() => setPhase("done"), 400);
      } else {
        setProgress(Math.round(p));
      }
    }, 160);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [open, file]);

  /* Cleanup on close */
  useEffect(() => {
    if (!open) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(0);
      setPhase("uploading");
      setFullscreenOpen(false);
      setDocName("");
    }
  }, [open]);

  const handleCancel = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    onClose();
  }, [onClose]);

  const handleAttach = useCallback(() => {
    if (!file || !fileUrl) return;
    const displayName = docName.trim() || file.name.replace(/\.[^/.]+$/, "");
    onAttach({ name: displayName, size: file.size, url: fileUrl, type: file.type });
  }, [file, fileUrl, docName, onAttach]);

  if (!open || !file) return null;

  return (
    <>
      {/* Fullscreen viewer (z-60, above modal) */}
      {fullscreenOpen && fileUrl && (
        <DocumentFullscreenViewer
          url={fileUrl}
          name={file.name}
          type={file.type}
          onClose={() => setFullscreenOpen(false)}
        />
      )}

      {/* Backdrop + modal (z-50) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={phase === "done" ? handleCancel : undefined}
        />

        <div
          className="relative bg-white flex flex-col overflow-hidden"
          style={{
            width: "min(480px, 95vw)",
            borderRadius: 12,
            boxShadow:
              "0px 20px 24px -4px rgba(10,13,18,0.08), 0px 8px 8px -4px rgba(10,13,18,0.03)",
          }}
        >
          {/* ── Header ── */}
          <div className="flex gap-[16px] items-start pt-[24px] px-[24px] pb-[20px]">
            {/* Icon */}
            <div
              className="rounded-[10px] shrink-0 size-[48px] flex items-center justify-center"
              style={{
                background: "white",
                border: "1px solid #e9eaeb",
                boxShadow: "0px 1px 2px 0px rgba(10,13,18,0.05)",
              }}
            >
              {phase === "uploading" ? (
                /* Animated upload icon */
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 14V3M11 3L7 7M11 3L15 7"
                    stroke="#232F50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 15V17C3 18.1046 3.89543 19 5 19H17C18.1046 19 19 18.1046 19 17V15"
                    stroke="#232F50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <CheckCircle size={20} color="#1EBE72" />
              )}
            </div>

            {/* Titles */}
            <div className="flex-1 flex flex-col gap-[3px] pt-[2px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[16px] text-[#181d27]">
                {phase === "uploading" ? "Uploading Document…" : "Upload Complete"}
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[14px] text-[#535862]">
                {phase === "uploading"
                  ? "Please wait while your file is being uploaded."
                  : "Your document is ready to attach to the note."}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={handleCancel}
              className="rounded-[8px] size-[32px] flex items-center justify-center cursor-pointer transition-colors shrink-0"
              style={{
                background: "white",
                border: "1px solid #e8eff4",
                boxShadow: "0px 1px 2px 0px rgba(10,13,18,0.05)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f9fafb")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "white")}
            >
              <X size={16} color="#323232" />
            </button>
          </div>

          <div style={{ height: 1, background: "#e9eaeb" }} />

          {/* ── Body ── */}
          <div className="px-[24px] py-[20px] flex flex-col gap-[14px]">
            {phase === "uploading" ? (
              <>
                {/* File info row */}
                <div
                  className="flex items-center gap-[12px] p-[14px] rounded-[8px]"
                  style={{ background: "#f6f9fb", border: "1px solid #e8eff4" }}
                >
                  <div
                    className="size-[40px] rounded-[8px] flex items-center justify-center shrink-0"
                    style={{
                      background: "white",
                      border: "1px solid #e8eff4",
                      boxShadow: "0px 1px 2px 0px rgba(10,13,18,0.05)",
                    }}
                  >
                    <FileText size={20} color="#5c6e93" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-['Manrope',sans-serif] font-semibold text-[13px] text-[#232f50]"
                      style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {file.name}
                    </p>
                    <p className="font-['Manrope',sans-serif] font-normal text-[12px] text-[#a2a7b4] mt-[2px]">
                      {formatBytes(file.size)}
                    </p>
                  </div>
                  <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#00b2eb] shrink-0">
                    {progress}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="w-full rounded-full overflow-hidden"
                  style={{ height: 6, background: "#e8eff4" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: "#00b2eb",
                      transition: "width 160ms ease-out",
                    }}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Thumbnail */}
                {fileUrl && (
                  <DocumentThumbnail
                    url={fileUrl}
                    name={file.name}
                    type={file.type}
                    onOpenFullscreen={() => setFullscreenOpen(true)}
                  />
                )}

                  {/* File details row */}
                <div
                  className="flex items-center gap-[12px] p-[12px] rounded-[8px]"
                  style={{ background: "#f6f9fb", border: "1px solid #e8eff4" }}
                >
                  <div
                    className="size-[36px] rounded-[8px] flex items-center justify-center shrink-0"
                    style={{
                      background: "white",
                      border: "1px solid #e8eff4",
                      boxShadow: "0px 1px 2px 0px rgba(10,13,18,0.05)",
                    }}
                  >
                    <CheckCircle size={18} color="#1EBE72" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-['Manrope',sans-serif] font-semibold text-[13px] text-[#232f50]"
                      style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {file.name}
                    </p>
                    <p className="font-['Manrope',sans-serif] font-normal text-[12px] text-[#a2a7b4] mt-[2px]">
                      {formatBytes(file.size)} · Ready to attach
                    </p>
                  </div>
                </div>

                {/* Document name input */}
                <div className="flex flex-col gap-[6px]">
                  <label
                    htmlFor="doc-name-input"
                    className="font-['Manrope',sans-serif] font-medium text-[12px] text-[#5c6e93]"
                  >
                    Document name
                  </label>
                  <input
                    id="doc-name-input"
                    type="text"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    placeholder="Enter a name for this document…"
                    className="w-full rounded-[8px] px-[12px] py-[9px] font-['Manrope',sans-serif] font-normal text-[13px] text-[#232f50] placeholder:text-[#a2a7b4] outline-none transition-all"
                    style={{
                      background: "white",
                      border: "1px solid #e8eff4",
                      boxShadow: "0px 1px 2px 0px rgba(10,13,18,0.05)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid #00b2eb";
                      e.currentTarget.style.boxShadow = "0px 0px 0px 3px rgba(0,178,235,0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid #e8eff4";
                      e.currentTarget.style.boxShadow = "0px 1px 2px 0px rgba(10,13,18,0.05)";
                    }}
                  />
                </div>
              </>
            )}
          </div>

          {/* ── Footer ── */}
          <div
            className="px-[24px] py-[16px] flex items-center justify-end gap-[8px]"
            style={{ borderTop: "1px solid #e9eaeb" }}
          >
            <button
              onClick={handleCancel}
              className="px-[16px] py-[9px] rounded-[8px] font-['Manrope',sans-serif] font-semibold text-[14px] text-[#5c6e93] cursor-pointer transition-colors"
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f6f9fb")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
            >
              {phase === "uploading" ? "Cancel Upload" : "Cancel"}
            </button>

            {phase === "done" && (
              <button
                onClick={handleAttach}
                className="px-[16px] py-[9px] rounded-[8px] font-['Manrope',sans-serif] font-semibold text-[14px] text-white cursor-pointer transition-colors"
                style={{
                  background: "#00b2eb",
                  boxShadow: "0px 1px 2px 0px rgba(10,13,18,0.05)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#009fd4")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#00b2eb")}
              >
                Attach
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
