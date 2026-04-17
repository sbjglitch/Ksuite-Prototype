import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link2, X, Upload, FileText, Globe, Maximize2, Search, SlidersHorizontal, Paperclip, ChevronDown, ChevronLeft, ChevronRight, Check, Eye } from "lucide-react";

const BORDER = "#e4e9ef";
const TEXT_MUTED = "#5c6e93";
const TEXT_DARK = "#232f50";
const TAB_BG = "#e8edf2";
const PRIMARY = "#00b2eb";
const PRIMARY_PINK = "#e83a7a";
const GENERIC_SAMPLE_PDF_URL =
  "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbMyAwIFJdL0NvdW50IDE+PgplbmRvYmoKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL01lZGlhQm94WzAgMCA1OTUgODQyXS9Db250ZW50cyA0IDAgUi9SZXNvdXJjZXM8PC9Gb250PDwvRjEgNSAwIFI+Pj4+PgplbmRvYmoKNCAwIG9iago8PC9MZW5ndGggNTU+PnN0cmVhbQpCVAovRjEgMjQgVGYKMTAwIDcwMCBUZAooU2FtcGxlIERvY3VtZW50KSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhPj4KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNTMgMDAwMDAgbiAKMDAwMDAwMDEwMiAwMDAwMCBuIAowMDAwMDAwMjI5IDAwMDAwIG4gCjAwMDAwMDAzMzQgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDYvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgo0MjQKJSVFT0Y=";

export interface HyperlinkInsertPayload {
  displayText: string;
  href: string;
  file?: {
    name: string;
    type: string;
    size: number;
    url: string;
  };
}

interface HyperlinkModalProps {
  open: boolean;
  onClose: () => void;
  onInsert: (payload: HyperlinkInsertPayload) => void;
  initialDisplayText?: string;
}

type TabMode = "upload" | "file" | "url";

type FileLibraryRow = {
  id: string;
  name: string;
  type: "Attachment" | "Draft";
  date: string;
  href: string;
};

type SearchResultRow = {
  id: string;
  fileNo: string;
  date: string;
  title: string;
  applicant: string;
  service: string;
  status: string;
  href: string;
};

const FILE_LIBRARY_ROWS: FileLibraryRow[] = [
  { id: "file-1", name: "Legal Notice", type: "Attachment", date: "14/08/2024", href: "#legal-notice" },
  { id: "file-2", name: "Certificate", type: "Attachment", date: "14/08/2024", href: "#certificate" },
  { id: "file-3", name: "Proceedings", type: "Draft", date: "14/08/2024", href: "#proceedings" },
  { id: "file-4", name: "Aadhar Card", type: "Attachment", date: "14/08/2024", href: "#aadhar-card-1" },
  { id: "file-5", name: "Aadhar Card", type: "Attachment", date: "14/08/2024", href: "#aadhar-card-2" },
];

const FILE_SEARCH_RESULTS: SearchResultRow[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: `result-${idx + 1}`,
  fileNo: "1451-2025",
  date: "14/08/2024",
  title: "PMAY",
  applicant: "Abhilash CM",
  service: "Sanitation Certificate",
  status: "Running",
  href: `#search-result-${idx + 1}`,
}));

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function HyperlinkFilePreview({
  url,
  name,
  type,
  onRemove,
}: {
  url: string;
  name: string;
  type: string;
  onRemove: () => void;
}) {
  const isImage = type.startsWith("image/");
  const isPDF = type === "application/pdf";
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-[10px]">
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full rounded-[12px] overflow-hidden cursor-default"
        style={{
          height: 190,
          background: "#f0f4f8",
          border: hovered ? "1px solid #00b2eb" : "1px solid #e8eff4",
          boxShadow: hovered ? "0px 0px 0px 3px rgba(0,178,235,0.15)" : "none",
          transition: "border-color 180ms, box-shadow 180ms",
        }}
      >
        {isImage && <img src={url} alt={name} className="w-full h-full" style={{ objectFit: "cover" }} />}
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
              File preview
            </span>
          </div>
        </div>
      </button>

      <div
        className="rounded-[10px] p-[10px] flex items-center justify-between gap-[8px]"
        style={{ border: `1px solid ${BORDER}`, background: "#f9fbfd" }}
      >
        <div className="min-w-0">
          <p
            className="font-['Manrope',sans-serif] font-semibold text-[13px] leading-[18px] truncate"
            style={{ color: TEXT_DARK }}
            title={name}
          >
            {name}
          </p>
          <p className="font-['Manrope',sans-serif] text-[11px] leading-[15px]" style={{ color: TEXT_MUTED }}>
            {type || "Unknown type"}
          </p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="shrink-0 size-[30px] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#eef3f8]"
          title="Remove file"
        >
          <X size={16} color="#5c6e93" />
        </button>
      </div>
    </div>
  );
}

export function HyperlinkModal({ open, onClose, onInsert, initialDisplayText }: HyperlinkModalProps) {
  const [displayText, setDisplayText] = useState("");
  const [mode, setMode] = useState<TabMode>("upload");
  const [urlValue, setUrlValue] = useState("");
  const [pickedFile, setPickedFile] = useState<File | null>(null);
  const [pickedFileUrl, setPickedFileUrl] = useState<string | null>(null);
  const [fileSearchQuery, setFileSearchQuery] = useState("");
  const [selectedLibraryFileId, setSelectedLibraryFileId] = useState<string | null>(null);
  const [selectedSearchResultId, setSelectedSearchResultId] = useState<string | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showSearchHistoryList, setShowSearchHistoryList] = useState(false);
  const [selectedSearchHistoryFileNo, setSelectedSearchHistoryFileNo] = useState<string>("");
  const [selectedPageFrom, setSelectedPageFrom] = useState("");
  const [selectedPageTo, setSelectedPageTo] = useState("");
  const [selectedFromFileHref, setSelectedFromFileHref] = useState<string>("");
  const [fileFilterOpen, setFileFilterOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setDisplayText(initialDisplayText?.trim() ?? "");
    setMode("upload");
    setUrlValue("");
    setPickedFile(null);
    setPickedFileUrl(null);
    setFileSearchQuery("");
    setSelectedLibraryFileId(null);
    setSelectedSearchResultId(null);
    setShowSearchResults(false);
    setShowSearchHistoryList(false);
    setSelectedSearchHistoryFileNo("");
    setSelectedPageFrom("");
    setSelectedPageTo("");
    setSelectedFromFileHref("");
    setFileFilterOpen(false);
  }, [open, initialDisplayText]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (fileFilterOpen) {
        setFileFilterOpen(false);
        return;
      }
      if (showSearchHistoryList) {
        setShowSearchHistoryList(false);
        return;
      }
      onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, fileFilterOpen, showSearchHistoryList]);

  const filteredLibraryRows = useMemo(() => {
    const q = fileSearchQuery.trim().toLowerCase();
    if (!q) return FILE_LIBRARY_ROWS;
    return FILE_LIBRARY_ROWS.filter((row) => row.name.toLowerCase().includes(q));
  }, [fileSearchQuery]);

  const selectedLibraryFile = useMemo(
    () => FILE_LIBRARY_ROWS.find((row) => row.id === selectedLibraryFileId) ?? null,
    [selectedLibraryFileId]
  );

  const filteredSearchResults = useMemo(() => {
    const q = fileSearchQuery.trim().toLowerCase();
    if (!q) return FILE_SEARCH_RESULTS;
    return FILE_SEARCH_RESULTS.filter(
      (row) =>
        row.fileNo.toLowerCase().includes(q) ||
        row.title.toLowerCase().includes(q) ||
        row.applicant.toLowerCase().includes(q)
    );
  }, [fileSearchQuery]);

  const resolvedHref = useMemo(() => {
    if (mode === "url") {
      const trimmed = urlValue.trim();
      if (!trimmed) return "";
      return trimmed.startsWith("http://") || trimmed.startsWith("https://")
        ? trimmed
        : `https://${trimmed}`;
    }
    if (mode === "file") {
      return selectedFromFileHref || selectedLibraryFile?.href || "";
    }
    return pickedFileUrl ?? "";
  }, [mode, pickedFileUrl, selectedFromFileHref, selectedLibraryFile, urlValue]);

  useEffect(() => {
    if (!pickedFile) {
      setPickedFileUrl(null);
      return;
    }
    const url = URL.createObjectURL(pickedFile);
    setPickedFileUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [pickedFile]);

  const canInsert = displayText.trim().length > 0 && resolvedHref.length > 0;

  const handleInsert = () => {
    if (!canInsert) return;
    const payload: HyperlinkInsertPayload =
      mode === "url"
        ? {
            displayText: displayText.trim(),
            href: resolvedHref,
          }
        : {
            displayText: displayText.trim(),
            href: resolvedHref,
            file: pickedFile
              ? {
                  name: pickedFile.name,
                  type: pickedFile.type || "application/octet-stream",
                  size: pickedFile.size,
                  url: resolvedHref,
                }
              : undefined,
          };
    onInsert({
      ...payload,
    });
    onClose();
  };

  const handlePickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setPickedFile(f);
    if (f && !displayText.trim()) {
      setDisplayText(f.name.replace(/\.[^/.]+$/, ""));
    }
    e.target.value = "";
  };

  const handleClearPickedFile = () => {
    setPickedFile(null);
    setPickedFileUrl(null);
  };

  const handleSelectLibraryFile = (row: FileLibraryRow) => {
    setSelectedLibraryFileId(row.id);
    setSelectedFromFileHref(row.href);
    if (!displayText.trim()) {
      setDisplayText(row.name);
    }
  };

  const handlePreviewLibraryFile = () => {
    window.open(GENERIC_SAMPLE_PDF_URL, "_blank", "noopener,noreferrer");
  };

  const handleSelectSearchResult = (row: SearchResultRow) => {
    setSelectedSearchResultId(row.id);
    setSelectedSearchHistoryFileNo(row.fileNo);
    setShowSearchHistoryList(true);
    setSelectedFromFileHref("");
    if (!displayText.trim()) {
      setDisplayText(row.title);
    }
  };

  const runFileSearch = () => {
    setFileFilterOpen(false);
    setShowSearchResults(true);
    setShowSearchHistoryList(false);
    setSelectedSearchHistoryFileNo("");
    setSelectedPageFrom("");
    setSelectedPageTo("");
    setSelectedSearchResultId(null);
    setSelectedFromFileHref("");
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-[16px]">
      <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.45)" }} onClick={onClose} />
      <div
        className="relative w-full max-w-[760px] bg-white flex flex-col overflow-hidden"
        style={{
          borderRadius: 18,
          border: `1px solid ${BORDER}`,
          boxShadow: "0px 24px 48px -12px rgba(15,23,42,0.22)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hyperlink-title"
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handlePickFile}
          accept=".pdf,.doc,.docx,.csv,.jpg,.jpeg,.png,.txt"
        />

        <div className="flex gap-[12px] items-start pt-[20px] px-[20px] pb-[14px]" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div
            className="rounded-[10px] shrink-0 size-[40px] flex items-center justify-center"
            style={{
              background: "#fff",
              border: `1px solid ${BORDER}`,
              boxShadow: "0px 1px 2px rgba(15,23,42,0.06)",
            }}
          >
            <Link2 size={18} color={TEXT_DARK} strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0 pt-[1px]">
            <h2 id="hyperlink-title" className="font-['Manrope',sans-serif] font-semibold text-[16px] text-[#1a2235] leading-[22px]">
              Hyperlink
            </h2>
            <p className="font-['Manrope',sans-serif] font-normal text-[13px] leading-[18px] mt-[4px]" style={{ color: TEXT_MUTED }}>
              Create hyperlinks to documents and attach files from your computer.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-[8px] size-[32px] flex items-center justify-center cursor-pointer shrink-0 bg-white"
            style={{ border: `1px solid ${BORDER}`, boxShadow: "0px 1px 2px rgba(15,23,42,0.06)" }}
            aria-label="Close"
          >
            <X size={16} color="#323232" />
          </button>
        </div>

        <div className="px-[20px] py-[16px] flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="hyperlink-display" className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
              Display Text <span style={{ color: "var(--primary)" }}>*</span>
            </label>
            <input
              id="hyperlink-display"
              type="text"
              value={displayText}
              onChange={(e) => setDisplayText(e.target.value)}
              placeholder="Place Holder"
              className="w-full rounded-[10px] px-[12px] py-[10px] font-['Manrope',sans-serif] text-[14px] outline-none placeholder:text-[#a8b0c4]"
              style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
            />
          </div>

          <div className="rounded-[999px] p-[4px] flex items-center gap-[4px]" style={{ background: TAB_BG }}>
            {(
              [
                ["upload", "Upload"],
                ["file", "From a file"],
                ["url", "URL"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className="flex-1 rounded-[999px] py-[8px] font-['Manrope',sans-serif] font-semibold text-[14px] cursor-pointer transition-colors"
                style={{
                  background: mode === id ? PRIMARY : "transparent",
                  color: mode === id ? "white" : TEXT_MUTED,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {mode === "upload" ? (
            <div
              className="rounded-[14px] border border-dashed p-[22px] flex flex-col items-center justify-center text-center gap-[10px]"
              style={{ borderColor: "#d8e0eb", background: "#f7fafc", minHeight: 240 }}
            >
              {pickedFile && pickedFileUrl ? (
                <div className="w-full flex flex-col gap-[10px]">
                  <HyperlinkFilePreview
                    url={pickedFileUrl}
                    name={pickedFile.name}
                    type={pickedFile.type}
                    onRemove={handleClearPickedFile}
                  />
                  <div className="flex items-center justify-between">
                    <p className="font-['Manrope',sans-serif] text-[11px]" style={{ color: TEXT_MUTED }}>
                      {formatBytes(pickedFile.size)}
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-[14px] py-[7px] rounded-[9px] font-['Manrope',sans-serif] font-semibold text-[12px] bg-white cursor-pointer"
                      style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                    >
                      Replace file
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="rounded-[12px] size-[52px] bg-white flex items-center justify-center" style={{ border: `1px solid ${BORDER}` }}>
                    {mode === "upload" ? <Upload size={22} color={TEXT_DARK} /> : <FileText size={22} color={TEXT_DARK} />}
                  </div>
                  <p className="font-['Manrope',sans-serif] font-semibold text-[14px]" style={{ color: TEXT_DARK }}>
                    Choose a file or Drag and drop here
                  </p>
                  <p className="font-['Manrope',sans-serif] text-[11px]" style={{ color: TEXT_MUTED }}>
                    PDF, DOCX, JPG, CSV, PNG up to 50 MB
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-[16px] py-[8px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[14px] bg-white cursor-pointer"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                  >
                    Browse Files
                  </button>
                </>
              )}
            </div>
          ) : mode === "file" ? (
            <div
              className="rounded-[12px] p-[10px] flex flex-col gap-[10px]"
              style={{ background: "#eaf0f5", border: "1px solid #dce5ef" }}
            >
              {!showSearchHistoryList && (
                <div className="relative">
                  <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none" size={16} color={TEXT_MUTED} />
                  <input
                    type="search"
                    value={fileSearchQuery}
                    onChange={(e) => setFileSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        runFileSearch();
                      }
                    }}
                    placeholder="Search by file No."
                    className="w-full rounded-[10px] pl-[38px] pr-[108px] py-[10px] font-['Manrope',sans-serif] text-[14px] outline-none placeholder:text-[#7e8ba8]"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK, background: "#fff" }}
                  />
                  <button
                    type="button"
                    onClick={runFileSearch}
                    className="absolute right-[40px] top-1/2 -translate-y-1/2 h-[28px] px-[10px] rounded-[8px] font-['Manrope',sans-serif] font-semibold text-[12px] text-white cursor-pointer"
                    style={{ background: PRIMARY_PINK }}
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={() => setFileFilterOpen(true)}
                    className="absolute right-[8px] top-1/2 -translate-y-1/2 size-[28px] rounded-[8px] flex items-center justify-center cursor-pointer"
                    style={{ border: "1px solid #d9e2ec", background: "#f3f8fc" }}
                    aria-label="Open filters"
                  >
                    <SlidersHorizontal size={16} color="#6aa9c0" />
                  </button>
                </div>
              )}

              {fileFilterOpen ? (
                <div className="rounded-[10px] p-[10px]" style={{ border: `1px solid ${BORDER}`, background: "#fff" }}>
                  <div className="grid grid-cols-2 gap-[10px]">
                    {[
                      ["Applicant Name", false],
                      ["Mobile No.", false],
                      ["Module", true],
                      ["Sub- Module", true],
                      ["Service", true],
                      ["Department Name", true],
                      ["Seat", true],
                      ["File Status", true],
                      ["File Type", false],
                      ["Source Type", false],
                    ].map(([label, withChevron]) => (
                      <div key={label as string} className="flex flex-col gap-[4px]">
                        <label className="font-['Manrope',sans-serif] font-medium text-[11px]" style={{ color: TEXT_DARK }}>
                          {label as string}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Placeholder"
                            className="w-full rounded-[8px] px-[10px] py-[8px] font-['Manrope',sans-serif] text-[12px] outline-none placeholder:text-[#a8b0c4]"
                            style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                          />
                          {withChevron ? (
                            <ChevronDown size={14} color="#98a4bb" className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none" />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-[8px] mt-[12px]">
                    <button
                      type="button"
                      onClick={() => setFileFilterOpen(false)}
                      className="px-[14px] py-[8px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[13px] bg-white cursor-pointer"
                      style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={runFileSearch}
                      className="px-[20px] py-[8px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[13px] text-white cursor-pointer"
                      style={{ background: PRIMARY_PINK }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {showSearchHistoryList ? (
                    <>
                      <div className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => {
                            setShowSearchHistoryList(false);
                            setSelectedPageFrom("");
                            setSelectedPageTo("");
                            setSelectedFromFileHref("");
                          }}
                          className="size-[20px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#dde6f0]"
                          aria-label="Back to search result"
                        >
                          <ChevronLeft size={16} color={TEXT_DARK} />
                        </button>
                        <p className="font-['Manrope',sans-serif] font-semibold text-[14px]" style={{ color: TEXT_DARK }}>
                          From a file
                        </p>
                        <span className="font-['Manrope',sans-serif] font-semibold text-[14px]" style={{ color: TEXT_DARK }}>
                          {selectedSearchHistoryFileNo}
                        </span>
                      </div>

                      <div className="rounded-[12px] overflow-hidden" style={{ border: `1px solid #dde5ef`, background: "#fff" }}>
                        <table className="w-full border-collapse text-left">
                          <thead>
                            <tr style={{ background: "#f4f6fb" }}>
                              <th className="w-[28px] px-[10px] py-[14px] border-b" style={{ borderColor: BORDER }}>
                                <div className="size-[14px] rounded-[4px]" style={{ border: "1px solid #c9d3e0", background: "#fff" }} />
                              </th>
                              <th className="px-[8px] py-[14px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: "#5f6f91" }}>
                                Name
                              </th>
                              <th className="px-[8px] py-[14px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: "#5f6f91" }}>
                                Type
                              </th>
                              <th className="px-[8px] py-[14px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: "#5f6f91" }}>
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredLibraryRows.map((row) => {
                              const selected = selectedLibraryFileId === row.id;
                              return (
                                <Fragment key={row.id}>
                                  <tr
                                    className="cursor-pointer"
                                    style={{ background: selected ? "#fcfdff" : "#fff" }}
                                    onClick={() => handleSelectLibraryFile(row)}
                                  >
                                    <td className="w-[28px] px-[10px] py-[14px] border-b" style={{ borderColor: BORDER }}>
                                      <div
                                        className="size-[14px] rounded-[4px] flex items-center justify-center"
                                        style={{
                                          border: `1px solid ${selected ? PRIMARY_PINK : "#c9d3e0"}`,
                                          background: selected ? PRIMARY_PINK : "#fff",
                                        }}
                                      >
                                        {selected ? <Check size={11} color="#fff" strokeWidth={3} /> : null}
                                      </div>
                                    </td>
                                    <td className="px-[8px] py-[14px] border-b" style={{ borderColor: BORDER }}>
                                      <div className="flex items-center justify-between gap-[8px]">
                                        <div className="flex items-center gap-[8px] min-w-0">
                                        {row.type === "Attachment" ? (
                                          <Link2 size={14} color={PRIMARY} />
                                        ) : (
                                          <FileText size={14} color="#e83a7a" />
                                        )}
                                        <span className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                                          {row.name}
                                        </span>
                                        </div>
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handlePreviewLibraryFile();
                                          }}
                                          className="shrink-0 size-[28px] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#edf3f8]"
                                          aria-label={`View ${row.name}`}
                                          title="View document"
                                        >
                                          <Eye size={15} color={TEXT_MUTED} />
                                        </button>
                                      </div>
                                    </td>
                                    <td className="px-[8px] py-[14px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                      {row.type}
                                    </td>
                                    <td className="px-[8px] py-[14px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                      {row.date}
                                    </td>
                                  </tr>
                                  {selected ? (
                                    <tr>
                                      <td className="border-b" style={{ borderColor: BORDER, background: "#fff" }} />
                                      <td colSpan={3} className="px-[8px] py-[12px] border-b" style={{ borderColor: BORDER, background: "#fff" }}>
                                        <div className="flex items-center gap-[12px]">
                                          <span className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                                            Pages
                                          </span>
                                          <input
                                            type="text"
                                            value={selectedPageFrom}
                                            onChange={(e) => setSelectedPageFrom(e.target.value)}
                                            placeholder="From"
                                            className="w-[102px] h-[38px] rounded-[8px] px-[12px] font-['Manrope',sans-serif] text-[13px] outline-none placeholder:text-[#a8b0c4]"
                                            style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK, background: "#fff" }}
                                          />
                                          <input
                                            type="text"
                                            value={selectedPageTo}
                                            onChange={(e) => setSelectedPageTo(e.target.value)}
                                            placeholder="To"
                                            className="w-[102px] h-[38px] rounded-[8px] px-[12px] font-['Manrope',sans-serif] text-[13px] outline-none placeholder:text-[#a8b0c4]"
                                            style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK, background: "#fff" }}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  ) : null}
                                </Fragment>
                              );
                            })}
                            {filteredLibraryRows.length === 0 && (
                              <tr>
                                <td colSpan={4} className="px-[12px] py-[16px] text-center font-['Manrope',sans-serif] text-[12px]" style={{ color: TEXT_MUTED }}>
                                  No files found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </>
                  ) : showSearchResults ? (
                    <>
                      <div className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => {
                            setShowSearchResults(false);
                            setSelectedSearchResultId(null);
                            setSelectedFromFileHref("");
                          }}
                          className="size-[20px] rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-[#dde6f0]"
                          aria-label="Back to file list"
                        >
                          <ChevronLeft size={16} color={TEXT_DARK} />
                        </button>
                        <p className="font-['Manrope',sans-serif] font-semibold text-[14px]" style={{ color: TEXT_DARK }}>
                          Search Result
                        </p>
                        <span className="font-['Manrope',sans-serif] font-medium text-[14px]" style={{ color: "#98a5bc" }}>
                          ({String(filteredSearchResults.length).padStart(2, "0")})
                        </span>
                      </div>

                      <div className="rounded-[10px] overflow-hidden" style={{ border: `1px solid ${BORDER}`, background: "#fff" }}>
                        <table className="w-full border-collapse text-left">
                          <thead>
                            <tr style={{ background: "#f5f8fb" }}>
                              <th className="px-[10px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                File No.
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Title
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Applicant
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Service
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Status
                              </th>
                              <th className="w-[26px] px-[6px] py-[10px] border-b" style={{ borderColor: BORDER }} />
                            </tr>
                          </thead>
                          <tbody>
                            {filteredSearchResults.map((row) => {
                              const selected = selectedSearchResultId === row.id;
                              return (
                                <tr
                                  key={row.id}
                                  className="cursor-pointer"
                                  style={{ background: selected ? "#f1f8fc" : "#fff" }}
                                  onClick={() => handleSelectSearchResult(row)}
                                >
                                  <td className="px-[10px] py-[10px] border-b" style={{ borderColor: BORDER }}>
                                    <div className="font-['Manrope',sans-serif] text-[13px]" style={{ color: TEXT_DARK }}>
                                      {row.fileNo}
                                    </div>
                                    <div className="font-['Manrope',sans-serif] text-[12px]" style={{ color: TEXT_MUTED }}>
                                      {row.date}
                                    </div>
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                    {row.title}
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                    {row.applicant}
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                    {row.service}
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                    {row.status}
                                  </td>
                                  <td className="px-[6px] py-[10px] border-b text-right" style={{ borderColor: BORDER }}>
                                    <ChevronRight size={16} color={TEXT_MUTED} />
                                  </td>
                                </tr>
                              );
                            })}
                            {filteredSearchResults.length === 0 && (
                              <tr>
                                <td colSpan={6} className="px-[12px] py-[16px] text-center font-['Manrope',sans-serif] text-[12px]" style={{ color: TEXT_MUTED }}>
                                  No search results found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-['Manrope',sans-serif] font-semibold text-[14px]" style={{ color: TEXT_DARK }}>
                        From This File
                      </p>

                      <div className="rounded-[10px] overflow-hidden" style={{ border: `1px solid ${BORDER}`, background: "#fff" }}>
                        <table className="w-full border-collapse text-left">
                          <thead>
                            <tr style={{ background: "#f5f8fb" }}>
                              <th className="w-[28px] px-[10px] py-[10px] border-b" style={{ borderColor: BORDER }}>
                                <input type="checkbox" disabled className="size-[14px]" />
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Name
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Type
                              </th>
                              <th className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] font-medium text-[12px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredLibraryRows.map((row) => {
                              const selected = selectedLibraryFileId === row.id;
                              return (
                                <tr
                                  key={row.id}
                                  className="cursor-pointer"
                                  style={{ background: selected ? "#f1f8fc" : "#fff" }}
                                  onClick={() => handleSelectLibraryFile(row)}
                                >
                                  <td className="w-[28px] px-[10px] py-[10px] border-b" style={{ borderColor: BORDER }}>
                                    <input
                                      type="checkbox"
                                      checked={selected}
                                      readOnly
                                      className="size-[14px]"
                                      style={{ accentColor: PRIMARY }}
                                    />
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b" style={{ borderColor: BORDER }}>
                                    <div className="flex items-center justify-between gap-[8px]">
                                      <div className="flex items-center gap-[8px] min-w-0">
                                      {row.type === "Attachment" ? (
                                        <Paperclip size={14} color={PRIMARY} />
                                      ) : (
                                        <FileText size={14} color="#e83a7a" />
                                      )}
                                      <span className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                                        {row.name}
                                      </span>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handlePreviewLibraryFile();
                                        }}
                                        className="shrink-0 size-[26px] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#edf3f8]"
                                        aria-label={`View ${row.name}`}
                                        title="View document"
                                      >
                                        <Eye size={14} color={TEXT_MUTED} />
                                      </button>
                                    </div>
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                    {row.type}
                                  </td>
                                  <td className="px-[8px] py-[10px] border-b font-['Manrope',sans-serif] text-[13px]" style={{ borderColor: BORDER, color: TEXT_DARK }}>
                                    {row.date}
                                  </td>
                                </tr>
                              );
                            })}
                            {filteredLibraryRows.length === 0 && (
                              <tr>
                                <td colSpan={4} className="px-[12px] py-[16px] text-center font-['Manrope',sans-serif] text-[12px]" style={{ color: TEXT_MUTED }}>
                                  No files found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="hyperlink-url" className="font-['Manrope',sans-serif] font-medium text-[13px]" style={{ color: TEXT_DARK }}>
                URL <span style={{ color: "var(--primary)" }}>*</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none" size={16} color={TEXT_MUTED} />
                <input
                  id="hyperlink-url"
                  type="url"
                  value={urlValue}
                  onChange={(e) => setUrlValue(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full rounded-[10px] pl-[38px] pr-[12px] py-[10px] font-['Manrope',sans-serif] text-[14px] outline-none placeholder:text-[#a8b0c4]"
                  style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="px-[20px] py-[14px] flex items-center justify-end gap-[8px]" style={{ borderTop: `1px solid ${BORDER}` }}>
          <button
            type="button"
            onClick={onClose}
            className="px-[18px] py-[9px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[14px] cursor-pointer bg-white"
            style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleInsert}
            disabled={!canInsert}
            className="px-[20px] py-[9px] rounded-[10px] font-['Manrope',sans-serif] font-semibold text-[14px] text-white cursor-pointer"
            style={{
              background: canInsert ? PRIMARY_PINK : "#f5b4ce",
              boxShadow: "0px 1px 2px rgba(15,23,42,0.08)",
              cursor: canInsert ? "pointer" : "not-allowed",
            }}
          >
            Insert
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

