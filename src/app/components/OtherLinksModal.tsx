import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Search, Plus, Globe } from "lucide-react";

const BORDER = "#e4e9ef";
const TEXT_MUTED = "#5c6e93";
const TEXT_DARK = "#232f50";
const ACTION_BLUE = "#00b2eb";

export interface OtherLinksModalProps {
  open: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
}

type LinkRow = { id: string; url: string };
const OTHER_LINKS_STORAGE_KEY = "ksuite.other-links.saved-urls";

const DEFAULT_LINKS: LinkRow[] = [
  { id: "1", url: "apple.com" },
  { id: "2", url: "StarkIndustries.com" },
  { id: "3", url: "StarkIndustries.com" },
  { id: "4", url: "StarkIndustries.com" },
  { id: "5", url: "StarkIndustries.com" },
];

/** Globe + magnifying glass (matches Quick Access “Other Website” icon) */
function HeaderGlobeSearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden className="shrink-0">
      <circle cx="11" cy="11" r="7" stroke={TEXT_DARK} strokeWidth="1.15" />
      <path d="M4.25 11H17.75" stroke={TEXT_DARK} strokeWidth="1.1" />
      <path
        d="M11 4.25C13.2 6.55 14.35 8.75 14.35 11C14.35 13.25 13.2 15.45 11 17.75C8.8 15.45 7.65 13.25 7.65 11C7.65 8.75 8.8 6.55 11 4.25Z"
        stroke={TEXT_DARK}
        strokeWidth="1.1"
      />
      <circle cx="15.75" cy="15.75" r="2.65" stroke="var(--primary)" strokeWidth="1.15" />
      <path d="M17.6 17.6L19.25 19.25" stroke="var(--primary)" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function hostnameFromEntry(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "";
  try {
    const withProto = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
    return new URL(withProto).hostname.replace(/^www\./i, "");
  } catch {
    return trimmed.split("/")[0].replace(/^www\./i, "");
  }
}

function LinkFavicon({ url }: { url: string }) {
  const [failed, setFailed] = useState(false);
  const host = hostnameFromEntry(url);
  const faviconSrc =
    host.length > 0 ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64` : "";

  if (failed || !faviconSrc) {
    return (
      <div className="shrink-0 size-[22px] rounded-[6px] flex items-center justify-center bg-[#f0f4f8]">
        <Globe size={14} color={TEXT_MUTED} strokeWidth={1.8} />
      </div>
    );
  }

  return (
    <img
      src={faviconSrc}
      alt=""
      width={22}
      height={22}
      className="shrink-0 size-[22px] rounded-[6px] object-cover bg-[#f0f4f8]"
      onError={() => setFailed(true)}
    />
  );
}

function normalizeStoredUrl(raw: string): string {
  return raw.trim().replace(/^https?:\/\//i, "").replace(/\/+$/, "");
}

export function OtherLinksModal({ open, onClose, anchorRect }: OtherLinksModalProps) {
  const [query, setQuery] = useState("");
  const [links, setLinks] = useState<LinkRow[]>(() => {
    try {
      const raw = window.localStorage.getItem(OTHER_LINKS_STORAGE_KEY);
      if (!raw) return DEFAULT_LINKS;
      const parsed = JSON.parse(raw) as LinkRow[];
      if (!Array.isArray(parsed)) return DEFAULT_LINKS;
      const sanitized = parsed.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          typeof item.id === "string" &&
          typeof item.url === "string" &&
          item.url.trim().length > 0
      );
      return sanitized.length > 0 ? sanitized : DEFAULT_LINKS;
    } catch {
      return DEFAULT_LINKS;
    }
  });
  const [addingInline, setAddingInline] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const inlineInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setAddingInline(false);
      setNewUrl("");
    }
  }, [open]);

  useEffect(() => {
    try {
      window.localStorage.setItem(OTHER_LINKS_STORAGE_KEY, JSON.stringify(links));
    } catch {
      // Ignore storage write failures (private mode/quota)
    }
  }, [links]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (addingInline) {
        setAddingInline(false);
        setNewUrl("");
        return;
      }
      onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, addingInline]);

  useEffect(() => {
    if (!addingInline) return;
    const t = window.setTimeout(() => inlineInputRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [addingInline]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return links;
    return links.filter((l) => l.url.toLowerCase().includes(q));
  }, [links, query]);

  const openInlineAdd = () => {
    setNewUrl("");
    setAddingInline(true);
  };

  const closeInlineAdd = () => {
    setAddingInline(false);
    setNewUrl("");
  };

  const submitNewLink = () => {
    const stored = normalizeStoredUrl(newUrl);
    if (!stored) return;
    setLinks((prev) => [...prev, { id: `${Date.now()}`, url: stored }]);
    closeInlineAdd();
  };

  const handleRemoveLink = useCallback((id: string) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }, []);

  if (!open) return null;

  const width = 348;
  const top = anchorRect ? Math.round(anchorRect.bottom + 8) : 90;
  const preferredLeft = anchorRect ? Math.round(anchorRect.right - width) : window.innerWidth - width - 24;
  const left = Math.min(Math.max(16, preferredLeft), window.innerWidth - width - 16);

  return createPortal(
    <>
    <div className="fixed inset-0 z-[1100] pointer-events-none">
      <div
        className="absolute bg-white flex flex-col overflow-hidden pointer-events-auto"
        style={{
          top,
          left,
          width,
          maxHeight: "78vh",
          borderRadius: 14,
          boxShadow: "0px 18px 45px -10px rgba(15, 23, 42, 0.2)",
          border: `1px solid ${BORDER}`,
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="other-links-title"
      >
        <div className="flex gap-[10px] items-start pt-[16px] px-[16px] pb-[12px] shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div
            className="rounded-[10px] shrink-0 size-[36px] flex items-center justify-center"
            style={{
              background: "#fff",
              border: `1px solid ${BORDER}`,
              boxShadow: "0px 1px 2px rgba(15,23,42,0.06)",
            }}
          >
            <HeaderGlobeSearchIcon />
          </div>
          <div className="flex-1 min-w-0 pt-[1px]">
            <h2 id="other-links-title" className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#1a2235] leading-[19px]">
              Other Links
            </h2>
            <p className="font-['Manrope',sans-serif] font-normal text-[10px] leading-[14px] mt-[2px]" style={{ color: TEXT_MUTED }}>
              External Links
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-[8px] size-[28px] flex items-center justify-center cursor-pointer shrink-0 bg-white"
            style={{ border: `1px solid ${BORDER}`, boxShadow: "0px 1px 2px rgba(15,23,42,0.06)" }}
            aria-label="Close"
          >
            <X size={14} color="#323232" />
          </button>
        </div>

        <div className="px-[16px] pt-[10px] pb-[8px] shrink-0">
          <div className="relative">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none" size={15} color={TEXT_MUTED} strokeWidth={2} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by typing the website or to add new website."
              className="w-full rounded-[10px] pl-[38px] pr-[12px] py-[9px] font-['Manrope',sans-serif] text-[11px] outline-none placeholder:text-[#74809d]"
              style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
              autoFocus
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-[16px] pb-[6px] shrink-0">
          <span className="font-['Manrope',sans-serif] font-semibold text-[11px]" style={{ color: TEXT_DARK }}>
            Website URL
          </span>
          <button
            type="button"
            onClick={openInlineAdd}
            className="inline-flex items-center gap-[6px] px-[10px] py-[6px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[10px] bg-white cursor-pointer"
            style={{
              border: `1px solid ${BORDER}`,
              color: TEXT_DARK,
              boxShadow: "0px 1px 2px rgba(15,23,42,0.06)",
            }}
          >
            <Plus size={12} strokeWidth={2.5} />
            Add link
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-auto px-[16px] pb-[12px] flex flex-col gap-[8px]">
          {addingInline && (
            <div
              className="flex items-center gap-[8px] rounded-[10px] px-[10px] py-[8px]"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <LinkFavicon url={newUrl || "new.site"} />
              <input
                ref={inlineInputRef}
                type="url"
                inputMode="url"
                autoComplete="url"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submitNewLink();
                  }
                }}
                placeholder="type new link here"
                className="min-w-0 flex-1 bg-transparent border-0 outline-none font-['Manrope',sans-serif] font-medium text-[12px] placeholder:text-[#8f99ac]"
                style={{ color: TEXT_DARK }}
              />
              <button
                type="button"
                onClick={submitNewLink}
                disabled={!normalizeStoredUrl(newUrl)}
                className="shrink-0 font-['Manrope',sans-serif] font-semibold text-[12px] cursor-pointer bg-transparent border-0"
                style={{
                  color: normalizeStoredUrl(newUrl) ? ACTION_BLUE : "#8ed8ef",
                  opacity: normalizeStoredUrl(newUrl) ? 1 : 0.7,
                }}
              >
                Add link
              </button>
              <button
                type="button"
                onClick={closeInlineAdd}
                className="shrink-0 flex size-[24px] items-center justify-center rounded-[8px] cursor-pointer hover:bg-[#e8edf2]"
                aria-label="Cancel adding link"
              >
                <X size={14} color={TEXT_MUTED} strokeWidth={2} />
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <p className="font-['Manrope',sans-serif] text-[12px] py-[12px] text-center" style={{ color: TEXT_MUTED }}>
              No links match your search.
            </p>
          ) : (
            filtered.map((row) => (
              <div
                key={row.id}
                className="group relative flex items-center gap-[8px] rounded-[10px] px-[10px] py-[8px] transition-colors hover:bg-[#f6f9fb]"
              >
                <a
                  href={`https://${row.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 flex-1 items-center gap-[12px] no-underline"
                >
                  <LinkFavicon url={row.url} />
                  <span className="font-['Manrope',sans-serif] font-semibold text-[12px] truncate" style={{ color: TEXT_DARK }}>
                    {row.url}
                  </span>
                </a>
                <button
                  type="button"
                  aria-label={`Remove ${row.url}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemoveLink(row.id);
                  }}
                  className="shrink-0 flex size-[26px] items-center justify-center rounded-[8px] cursor-pointer opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-[#e8edf2]"
                >
                  <X size={14} color={TEXT_MUTED} strokeWidth={2} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </>,
    document.body
  );
}
