import React, { useRef, useCallback, useState, useEffect } from "react";
import { X, Eye } from "lucide-react";
import svgPaths from "../../imports/svg-t9ef4vzcyk";
import { AttachDocumentModal, type AttachedFileInfo } from "./AttachDocumentModal";
import { HyperlinkModal, type HyperlinkInsertPayload } from "./HyperlinkModal";

/* ───────── types ───────── */

interface MarkerChipData {
  id: string;
  markerIndex: number;
  attachmentName: string;
}

/* ───────── execCommand helper ───────── */

type FormatCmd =
  | "bold"
  | "italic"
  | "strikeThrough"
  | "underline"
  | "insertUnorderedList"
  | "insertOrderedList"
  | "formatBlock"
  | "insertTable"
  | "createLink"
  | "fontSize";

function execFormat(cmd: FormatCmd, value?: string) {
  document.execCommand(cmd, false, value);
}

function queryActive(cmd: string): boolean {
  try {
    return document.queryCommandState(cmd);
  } catch {
    return false;
  }
}

/* ───────── tiny toolbar button ───────── */

function TBtn({
  children,
  onClick,
  active,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  title?: string;
}) {
  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault(); // keep focus in editor
        onClick();
      }}
      data-tooltip={title}
      className="cursor-pointer flex items-center justify-center p-[8px] shrink-0 rounded-sm transition-colors"
      style={{
        backgroundColor: active ? "var(--muted)" : "transparent",
      }}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="bg-border h-full shrink-0 w-px" />;
}

/* ───────── Undo / Redo icons ───────── */

function UndoIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M4 6h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M6 3L3.5 5.5L6 8" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    </div>
  );
}

function RedoIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M12 6H6a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h3" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M10 3l2.5 2.5L10 8" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    </div>
  );
}

/* ───────── Figma SVG icon wrappers (kept as‑is) ───────── */

function ItalicIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g /><path d={svgPaths.p1dd3b600} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function BoldIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><path d={svgPaths.p3dcbdf00} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><g /></g>
      </svg>
    </div>
  );
}

function StrikethroughIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g><path d={svgPaths.p27e000} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.66667 8.66664H13.3333" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p35acc780} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g><g /></g>
      </svg>
    </div>
  );
}

function UnderlineIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g /><path d="M4 13.3333H12" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p264e7600} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function BulletListIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g /><path d="M5.66667 3.99999H13.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.33334 3.99999H3.00001" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.33334 7.99999H3.00001" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.33334 12H3.00001" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.66667 7.99999H13.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.66667 12H13.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function TableIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g><g /><path d={svgPaths.p13d67cc0} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M12.005 7.00287H2.00085" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M7.00294 2.00079V12.005" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path clipRule="evenodd" d={svgPaths.p1221dd00} fillRule="evenodd" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function LineHeightIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g><path d="M2.00084 13.3389H7.3364" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.00084 10.6712H6.00251" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.00084 8.00337H7.3364" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.00084 5.33559H6.00251" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M2.00084 2.66783H7.3364" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M12.005 13.3389V2.66782" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p36f3d180} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p1b778b00} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><g /></g>
      </svg>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><path d={svgPaths.p367e8cc0} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><g /></g>
      </svg>
    </div>
  );
}

function InsertIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g /><path d="M8 5.33333V10.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M10.6667 8H5.33333" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path clipRule="evenodd" d={svgPaths.p231b48c0} fillRule="evenodd" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function AttachDocumentIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M13.3333 7.33333L7.33333 13.3333C6.22876 14.4379 4.43791 14.4379 3.33333 13.3333C2.22876 12.2288 2.22876 10.4379 3.33333 9.33333L9.33333 3.33333C10.0697 2.59695 11.2636 2.59695 12 3.33333C12.7364 4.06971 12.7364 5.26362 12 6L6.66667 11.3333C6.29848 11.7015 5.70152 11.7015 5.33333 11.3333C4.96514 10.9652 4.96514 10.3682 5.33333 10L10 5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    </div>
  );
}

function ReferenceNoteIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M8.66667 2H4C3.26362 2 2.66667 2.59695 2.66667 3.33333V12.6667C2.66667 13.403 3.26362 14 4 14H12C12.7364 14 13.3333 13.403 13.3333 12.6667V6.66667L8.66667 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M8.66667 2V6.66667H13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M10.6667 8.66667H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M10.6667 11.3333H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M6.66667 6H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    </div>
  );
}

function InsertDropdown({ onAttachDocument, onReferenceNote }: {
  onAttachDocument?: () => void;
  onReferenceNote?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="bg-card relative rounded-lg shrink-0" ref={ref}>
      <TBtn
        onClick={() => setOpen((v) => !v)}
        active={open}
        title="Insert"
      >
        <InsertIcon />
      </TBtn>
      <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
      {open && (
        <div className="absolute top-full right-0 mt-[4px] bg-card border border-border rounded-lg z-50 py-[4px] min-w-[160px]" style={{ boxShadow: 'var(--elevation-sm)' }}>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              onAttachDocument?.();
              setOpen(false);
            }}
            className="w-full flex gap-[8px] items-center px-[8px] py-[8px] hover:bg-muted cursor-pointer rounded-sm transition-colors"
          >
            <AttachDocumentIcon />
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[12px] text-foreground whitespace-nowrap leading-[16px]">
              Attach Document
            </span>
          </button>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              onReferenceNote?.();
              setOpen(false);
            }}
            className="w-full flex gap-[8px] items-center px-[8px] py-[8px] hover:bg-muted cursor-pointer rounded-sm transition-colors"
          >
            <ReferenceNoteIcon />
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[12px] text-foreground whitespace-nowrap leading-[16px]">
              Reference Note
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function TemplateIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g /><path d="M8.66667 7.33333H10.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M9.33333 5.33333H10.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.33333 9.33333H10.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M5.33333 5.33333H7.33333" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d="M6.33333 5.33333V7.33333" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path clipRule="evenodd" d={svgPaths.p35183500} fillRule="evenodd" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function MarkDocIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><path d="M10.6667 9.33334H9.33333" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path clipRule="evenodd" d={svgPaths.p140fca00} fillRule="evenodd" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path clipRule="evenodd" d={svgPaths.p35183500} fillRule="evenodd" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><g /></g>
      </svg>
    </div>
  );
}

function LinkIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g><g /><path d="M5.33333 8H10.6667" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p17d61200} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p24de3c00} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g>
      </svg>
    </div>
  );
}

function MinusIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g><g /><path d="M9.375 6H2.625" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" /></g>
      </svg>
    </div>
  );
}

function FullscreenIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" viewBox="0 0 9.9375 9.9375">
        <g><path d={svgPaths.p193b9a40} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" /><path d={svgPaths.p3bc06a0} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" /><path d={svgPaths.p30155390} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" /><path d={svgPaths.p1e6dd180} stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" /></g>
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g><g /><path d={svgPaths.p24beea00} fill="var(--fill-0, white)" /></g>
      </svg>
    </div>
  );
}

/* ───────── Marker chip ───────── */

function MarkerChip({ marker, onClick }: { marker: MarkerChipData; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-card cursor-pointer flex gap-[6px] items-center p-[6px] relative rounded-lg shrink-0"
      style={{ border: '1px solid var(--border)', boxShadow: 'var(--elevation-sm)' }}
    >
      {/* Pink pen icon */}
      <div className="opacity-80 relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
          <g>
            <rect fill="var(--primary)" height="12.005" rx="3.33333" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12.005" x="2.00063" y="2.00008" />
            <path clipRule="evenodd" d="M7.33655 5.33487L5.13567 7.53576C5.00054 7.67088 4.92416 7.85358 4.92365 8.04434V9.33754C4.92365 9.34231 4.92389 9.34708 4.92437 9.35182C4.93373 9.44135 5.00899 9.51092 5.09899 9.51307C5.10175 9.5131 5.10452 9.51306 5.10728 9.51294L6.39232 9.50821C6.58308 9.50769 6.76577 9.43131 6.9009 9.29619L9.10658 7.09051C9.23793 6.95917 9.23793 6.7495 9.10658 6.61816L7.80905 5.33487C7.67542 5.20485 7.46793 5.20356 7.33655 5.33487Z" fill="white" fillRule="evenodd" />
            <path d="M9.33722 11.3388H11.3381" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
      <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">
        Marker in
      </span>
      <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">
        {marker.attachmentName}
      </span>
      {/* Arrow link icon */}
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d="M11.3 4.7L4.7 11.3" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M11.3 4.7H6.7M11.3 4.7V9.3" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </button>
  );
}

/* ───────── Font size dropdown ───────── */

const FONT_SIZES = [12, 14, 16, 18, 20, 24, 28, 32];

function FontSizeDropdown() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(16);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onMouseDown={(e) => { e.preventDefault(); setOpen(!open); }}
        className="flex items-center gap-0 p-[8px] cursor-pointer shrink-0"
      >
        <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">
          {size} px
        </span>
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-[2px] bg-card border border-border rounded-lg shadow-lg z-50 py-[4px] min-w-[70px]">
          {FONT_SIZES.map((s) => (
            <button
              key={s}
              onMouseDown={(e) => {
                e.preventDefault();
                setSize(s);
                // execCommand fontSize uses 1-7 scale; use inline style instead
                document.execCommand("fontSize", false, "7");
                // find the font element and replace with span
                const sel = window.getSelection();
                if (sel && sel.rangeCount) {
                  const container = sel.getRangeAt(0).commonAncestorContainer;
                  const parent = container.nodeType === 3 ? container.parentElement : (container as HTMLElement);
                  const fonts = parent?.closest("[contenteditable]")?.querySelectorAll('font[size="7"]');
                  fonts?.forEach((f) => {
                    (f as HTMLElement).removeAttribute("size");
                    (f as HTMLElement).style.fontSize = `${s}px`;
                  });
                }
                setOpen(false);
              }}
              className="w-full text-left px-[12px] py-[4px] font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] text-[var(--text-sm)] text-foreground hover:bg-muted cursor-pointer"
            >
              {s} px
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───────── Heading dropdown ───────── */

const HEADINGS = [
  { label: "H1", tag: "h1" },
  { label: "H2", tag: "h2" },
  { label: "H3", tag: "h3" },
  { label: "H4", tag: "h4" },
  { label: "P", tag: "p" },
];

function HeadingDropdown() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("H1");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onMouseDown={(e) => { e.preventDefault(); setOpen(!open); }}
        className="flex items-center gap-0 p-[8px] cursor-pointer shrink-0"
      >
        <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">
          {current}
        </span>
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-[2px] bg-card border border-border rounded-lg shadow-lg z-50 py-[4px] min-w-[60px]">
          {HEADINGS.map((h) => (
            <button
              key={h.tag}
              onMouseDown={(e) => {
                e.preventDefault();
                execFormat("formatBlock", h.tag);
                setCurrent(h.label);
                setOpen(false);
              }}
              className="w-full text-left px-[12px] py-[4px] font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] text-[var(--text-sm)] text-foreground hover:bg-muted cursor-pointer"
            >
              {h.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───────── Line height dropdown ───────── */

const LINE_HEIGHTS = [1, 1.15, 1.5, 2, 2.5, 3];

function LineHeightDropdown() {
  const [open, setOpen] = useState(false);
  const [lh, setLh] = useState(1.5);
  const ref = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative shrink-0 flex items-center gap-[4px]" ref={ref}>
      <LineHeightIcon />
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          // capture the editable
          const sel = window.getSelection();
          if (sel && sel.rangeCount) {
            const container = sel.getRangeAt(0).commonAncestorContainer;
            const el = container.nodeType === 3 ? container.parentElement : (container as HTMLElement);
            editorRef.current = el?.closest("[contenteditable]") as HTMLElement;
          }
          setOpen(!open);
        }}
        className="flex items-center gap-0 cursor-pointer shrink-0"
      >
        <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">
          {lh}
        </span>
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-[2px] bg-card border border-border rounded-lg shadow-lg z-50 py-[4px] min-w-[60px]">
          {LINE_HEIGHTS.map((v) => (
            <button
              key={v}
              onMouseDown={(e) => {
                e.preventDefault();
                setLh(v);
                if (editorRef.current) {
                  editorRef.current.style.lineHeight = String(v);
                }
                setOpen(false);
              }}
              className="w-full text-left px-[12px] py-[4px] font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] text-[var(--text-sm)] text-foreground hover:bg-muted cursor-pointer"
            >
              {v}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───────── Status bar (Figma) ───────── */

function NoteStatusContainer() {
  return (
    <div className="bg-[#F6F9FB] relative shrink-0 w-full">
      <div className="flex items-center justify-between p-[8px]">
        <div className="flex gap-[8px] items-center justify-center px-[8px]">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g><g><path d={svgPaths.p2a591c00} stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.pb301600} stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p23564e80} stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /><path d={svgPaths.p3b15c300} stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" /></g><g /></g>
            </svg>
          </div>
          <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-muted-foreground whitespace-nowrap leading-[20px]">Note Saved</p>
        </div>
        <div className="flex items-start rounded-lg shrink-0 w-[132px]">
          <div className="bg-primary flex-1 min-h-px min-w-px relative rounded-lg">
            <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="flex gap-[8px] items-center justify-center px-[16px] py-[10px] w-full">
                <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[var(--text-sm)] text-primary-foreground whitespace-nowrap leading-[20px]">Send File</p>
                <SendIcon />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-primary inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Cyan plus icon (Figma) ───────── */

function CyanPlusIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M12 1.5C17.7994 1.5 22.5 6.20057 22.5 12C22.5 17.7994 17.7994 22.5 12 22.5C6.20057 22.5 1.5 17.7994 1.5 12C1.5 6.20057 6.20057 1.5 12 1.5Z" fill="var(--fill-0, #CCF0FB)" stroke="var(--stroke-0, #E5F7FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M12 8V16" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 12H8" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

/* ───────── Green checkmark icon (Figma) ───────── */

function GreenCheckIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path clipRule="evenodd" d="M8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8V8C14 11.314 11.314 14 8 14Z" fill="var(--fill-0, #1EBE72)" fillRule="evenodd" />
          <path d="M10.6667 6.66667L7.33333 10L5.33333 8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

/* ───────── Send File button (shared) ───────── */

function SendFileButton() {
  return (
    <div className="flex items-start rounded-[var(--radius)] shrink-0 w-[132px]">
      <div className="bg-primary flex-1 min-h-px min-w-px relative rounded-[var(--radius)]">
        <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="flex gap-[8px] items-center justify-center px-[16px] py-[10px] w-full">
            <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[var(--text-sm)] text-primary-foreground whitespace-nowrap leading-[20px]">Send File</p>
            <SendIcon />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-primary inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
      </div>
    </div>
  );
}

/* ───────── Minimized bar: default (empty editor) ───────── */

function MinimizedBarDefault({ onExpand }: { onExpand: () => void }) {
  return (
    <button
      onClick={onExpand}
      className="bg-muted/50 cursor-pointer relative rounded-xl size-full"
      data-name="Note Editor Minimized"
    >
      <div className="flex flex-col items-start overflow-clip rounded-[inherit] size-full">
        <div className="bg-card relative rounded-xl shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-xl" />
          <div className="flex flex-col gap-[8px] isolate items-start p-[8px] relative w-full">
            <div className="flex items-center justify-between relative shrink-0 w-full z-[1]">
              {/* Left: Plus icon + "Add Note" + Shortcuts */}
              <div className="flex gap-[8px] items-center justify-center pl-[8px]">
                <div className="flex gap-[4px] items-center">
                  <CyanPlusIcon />
                  <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[var(--text-base)] text-foreground whitespace-nowrap leading-[22px]">Add Note</p>
                </div>
                {/* Keyboard shortcut badges */}
                <div className="flex gap-[4px] items-center">
                  <div className="bg-muted relative rounded-md">
                    <div className="flex items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[inherit]">
                      <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-muted-foreground whitespace-nowrap leading-[16px]">Shift</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-md" style={{ boxShadow: 'var(--elevation-sm)' }} />
                  </div>
                  <div className="flex items-center justify-center overflow-clip py-[4px]">
                    <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] text-[12px] text-muted-foreground whitespace-nowrap leading-[16px]">+</p>
                  </div>
                  <div className="bg-muted relative rounded-md">
                    <div className="flex items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[inherit]">
                      <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-muted-foreground whitespace-nowrap leading-[16px]">N</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-md" style={{ boxShadow: 'var(--elevation-sm)' }} />
                  </div>
                </div>
              </div>
              {/* Right: Send File button */}
              <SendFileButton />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-xl shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" />
    </button>
  );
}

/* ───────── Minimized bar: active (has content / saved) ───────── */

function MinimizedBarActive({ onExpand }: { onExpand: () => void }) {
  return (
    <button
      onClick={onExpand}
      className="bg-[#F6F9FB] cursor-pointer relative rounded-xl size-full"
      data-name="Note Editor Minimized Active"
    >
      <div className="flex flex-col items-start overflow-clip rounded-[inherit] size-full">
        <div className="bg-card relative rounded-xl shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-xl" />
          <div className="flex flex-col gap-[8px] isolate items-start p-[8px] relative w-full">
            <div className="flex items-center justify-between relative shrink-0 w-full z-[1]">
              {/* Left: Plus icon + Green check + "Note Saved" */}
              <div className="flex items-center justify-center pl-[8px]">
                <div className="flex gap-[8px] items-center">
                  <CyanPlusIcon />
                  <div className="flex gap-[4px] items-center">
                    <GreenCheckIcon />
                    <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-base)] text-muted-foreground whitespace-nowrap leading-[20px]">Note Saved</p>
                  </div>
                </div>
              </div>
              {/* Right: Send File button */}
              <SendFileButton />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-xl shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" />
    </button>
  );
}

/* ───────── Attached file chip ───────── */

function AttachedFileChip({
  info,
  onView,
  onRemove,
}: {
  info: AttachedFileInfo;
  onView: () => void;
  onRemove: () => void;
}) {
  return (
    <div
      className="bg-card flex gap-[6px] items-center px-[8px] py-[6px] relative rounded-lg shrink-0"
      style={{ border: "1px solid var(--border)", boxShadow: "var(--elevation-sm)" }}
    >
      {/* Clip icon */}
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
          <path
            d="M13.3333 7.33333L7.33333 13.3333C6.22876 14.4379 4.43791 14.4379 3.33333 13.3333C2.22876 12.2288 2.22876 10.4379 3.33333 9.33333L9.33333 3.33333C10.0697 2.59695 11.2636 2.59695 12 3.33333C12.7364 4.06971 12.7364 5.26362 12 6L6.66667 11.3333C6.29848 11.7015 5.70152 11.7015 5.33333 11.3333C4.96514 10.9652 4.96514 10.3682 5.33333 10L10 5.33333"
            stroke="var(--secondary)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
        </svg>
      </div>

      <span
        className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap"
        style={{ maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {info.name}
      </span>

      {/* View button */}
      <button
        onClick={onView}
        className="flex items-center justify-center rounded-sm p-[2px] cursor-pointer transition-colors hover:bg-muted"
        title="View document"
      >
        <Eye size={12} className="text-muted-foreground" />
      </button>

      {/* Remove button */}
      <button
        onClick={onRemove}
        className="flex items-center justify-center rounded-sm p-[2px] cursor-pointer transition-colors hover:bg-muted"
        title="Remove attachment"
      >
        <X size={12} className="text-muted-foreground" />
      </button>
    </div>
  );
}

/* ───────── Fullscreen viewer for already-attached files ───────── */

function AttachedFileViewer({
  info,
  onClose,
}: {
  info: AttachedFileInfo;
  onClose: () => void;
}) {
  const isImage = info.type.startsWith("image/");

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
            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
              <path d="M8.66667 2H4C3.26362 2 2.66667 2.59695 2.66667 3.33333V12.6667C2.66667 13.403 3.26362 14 4 14H12C12.7364 14 13.3333 13.403 13.3333 12.6667V6.66667L8.66667 2Z" stroke="#5c6e93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
              <path d="M8.66667 2V6.66667H13.3333" stroke="#5c6e93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            </svg>
            <span
              className="font-['Manrope',sans-serif] font-medium text-[14px] text-white"
              style={{ maxWidth: 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {info.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="size-[32px] rounded-[8px] flex items-center justify-center cursor-pointer transition-colors"
            style={{ border: "1px solid #2a3448" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#1c2335")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          >
            <X size={16} className="text-[#a2a7b4]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 flex items-center justify-center p-[20px]">
          {isImage ? (
            <img src={info.url} alt={info.name} className="max-h-full max-w-full rounded-[4px]" style={{ objectFit: "contain" }} />
          ) : (
            <iframe src={info.url} className="w-full h-full rounded-[4px] border-none" title={info.name} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────── Main exported component ───────── */

export function NoteEditorWithMarkup({ onMarkDocument, markerChips, onMarkerChipClick, isMinimized, onMinimize, onExpand }: {
  onMarkDocument: () => void;
  markerChips?: MarkerChipData[];
  onMarkerChipClick?: (markerId: string) => void;
  isMinimized?: boolean;
  onMinimize?: () => void;
  onExpand?: () => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const savedSelectionRef = useRef<Range | null>(null);
  const hyperlinkFileMapRef = useRef<Record<string, AttachedFileInfo>>({});
  const [, forceUpdate] = useState(0);
  const [hasContent, setHasContent] = useState(false);
  const refreshToolbar = useCallback(() => forceUpdate((n) => n + 1), []);

  /* ── Attach document state ── */
  const [attachModalOpen, setAttachModalOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFileInfo[]>([]);
  const [viewingFile, setViewingFile] = useState<AttachedFileInfo | null>(null);
  const [hyperlinkModalOpen, setHyperlinkModalOpen] = useState(false);
  const [hyperlinkInitialDisplayText, setHyperlinkInitialDisplayText] = useState("");

  const handleAttachDocumentClick = useCallback(() => {
    setTimeout(() => fileInputRef.current?.click(), 10);
  }, []);

  const handleFileSelected = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPendingFile(file);
      setAttachModalOpen(true);
    }
    e.target.value = "";
  }, []);

  const handleFileAttached = useCallback((info: AttachedFileInfo) => {
    setAttachedFiles((prev) => [...prev, info]);
    setAttachModalOpen(false);
    setPendingFile(null);
  }, []);

  const handleAttachModalClose = useCallback(() => {
    setAttachModalOpen(false);
    setPendingFile(null);
  }, []);

  const handleRemoveAttachment = useCallback((url: string) => {
    setAttachedFiles((prev) => prev.filter((f) => f.url !== url));
  }, []);

  // Track whether the editor has content
  const trackContent = useCallback(() => {
    if (editorRef.current) {
      const text = editorRef.current.textContent || "";
      setHasContent(text.trim().length > 0);
    }
  }, []);

  // Track active states
  const isBold = queryActive("bold");
  const isItalic = queryActive("italic");
  const isStrike = queryActive("strikeThrough");
  const isUnderline = queryActive("underline");

  const handleCreateLink = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedSelectionRef.current = selection.getRangeAt(0).cloneRange();
      setHyperlinkInitialDisplayText(selection.toString().trim());
    } else {
      savedSelectionRef.current = null;
      setHyperlinkInitialDisplayText("");
    }
    setHyperlinkModalOpen(true);
  }, []);

  const handleInsertHyperlink = useCallback((payload: HyperlinkInsertPayload) => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    const sel = window.getSelection();
    const savedRange = savedSelectionRef.current;
    if (sel) {
      if (savedRange) {
        sel.removeAllRanges();
        sel.addRange(savedRange);
      } else if (editorRef.current) {
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }

    const safeText = payload.displayText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const safeHref = payload.href.replace(/"/g, "&quot;");
    if (payload.file) {
      const fileLinkId = `file-link-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      hyperlinkFileMapRef.current[fileLinkId] = {
        name: payload.file.name,
        size: payload.file.size,
        url: payload.file.url,
        type: payload.file.type,
      };
      document.execCommand(
        "insertHTML",
        false,
        `<a href="${safeHref}" data-file-link-id="${fileLinkId}" class="text-[#0c3080] underline">${safeText}</a>`
      );
      savedSelectionRef.current = null;
      refreshToolbar();
      trackContent();
      return;
    }

    document.execCommand(
      "insertHTML",
      false,
      `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${safeText}</a>`
    );

    savedSelectionRef.current = null;
    refreshToolbar();
    trackContent();
  }, [refreshToolbar, trackContent]);

  const handleEditorClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest?.("a[data-file-link-id]") as HTMLAnchorElement | null;
    if (!anchor) return;
    e.preventDefault();
    const linkId = anchor.getAttribute("data-file-link-id");
    if (!linkId) return;
    const fileInfo = hyperlinkFileMapRef.current[linkId];
    if (fileInfo) setViewingFile(fileInfo);
  }, []);

  const handleInsertTable = useCallback(() => {
    const html = '<table style="border-collapse:collapse;width:100%;margin:8px 0"><tr><td style="border:1px solid var(--border);padding:6px 12px">&nbsp;</td><td style="border:1px solid var(--border);padding:6px 12px">&nbsp;</td></tr><tr><td style="border:1px solid var(--border);padding:6px 12px">&nbsp;</td><td style="border:1px solid var(--border);padding:6px 12px">&nbsp;</td></tr></table>';
    document.execCommand("insertHTML", false, html);
  }, []);

  const handleUndo = useCallback(() => {
    document.execCommand("undo");
    refreshToolbar();
  }, [refreshToolbar]);

  const handleRedo = useCallback(() => {
    document.execCommand("redo");
    refreshToolbar();
  }, [refreshToolbar]);

  /* Keyboard shortcut handler – intercepts Ctrl/Cmd+Z/Y/Shift+Z */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const mod = e.metaKey || e.ctrlKey;
    if (!mod) return;

    if (e.key === "z" && !e.shiftKey) {
      e.preventDefault();
      handleUndo();
    } else if ((e.key === "z" && e.shiftKey) || e.key === "y") {
      e.preventDefault();
      handleRedo();
    } else if (e.key === "b") {
      e.preventDefault();
      execFormat("bold");
      refreshToolbar();
    } else if (e.key === "i") {
      e.preventDefault();
      execFormat("italic");
      refreshToolbar();
    } else if (e.key === "u") {
      e.preventDefault();
      execFormat("underline");
      refreshToolbar();
    }
  }, [handleUndo, handleRedo, refreshToolbar]);

  // Determine which minimized bar to show
  const showActive = hasContent || (markerChips && markerChips.length > 0);

  return (
    <div className="relative rounded-xl size-full" data-name="Note Editor">
      {/* Hidden file input for "Attach Document" */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.gif,.webp"
        className="hidden"
        onChange={handleFileSelected}
      />

      {/* Attach document modal (uploading → success) */}
      <AttachDocumentModal
        open={attachModalOpen}
        file={pendingFile}
        onClose={handleAttachModalClose}
        onAttach={handleFileAttached}
      />

      <HyperlinkModal
        open={hyperlinkModalOpen}
        onClose={() => {
          setHyperlinkModalOpen(false);
          setHyperlinkInitialDisplayText("");
          savedSelectionRef.current = null;
        }}
        onInsert={handleInsertHyperlink}
        initialDisplayText={hyperlinkInitialDisplayText}
      />

      {/* Fullscreen viewer for attached files */}
      {viewingFile && (
        <AttachedFileViewer
          info={viewingFile}
          onClose={() => setViewingFile(null)}
        />
      )}
      {/* ── Layer 1: Minimized bar (absolute, fades in when minimized) ── */}
      <div
        className="absolute inset-0 z-[2] rounded-xl"
        style={{
          opacity: isMinimized ? 1 : 0,
          pointerEvents: isMinimized ? 'auto' : 'none',
          transition: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {showActive ? (
          <MinimizedBarActive onExpand={() => onExpand?.()} />
        ) : (
          <MinimizedBarDefault onExpand={() => onExpand?.()} />
        )}
      </div>

      {/* ── Layer 2: Full editor (fades out when minimized) ── */}
      <div
        className="relative rounded-xl size-full"
        style={{
          opacity: isMinimized ? 0 : 1,
          pointerEvents: isMinimized ? 'none' : 'auto',
          transition: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="bg-muted/50 relative rounded-xl size-full">
          <div className="flex flex-col overflow-clip rounded-[inherit] size-full">
            {/* Editor body (toolbar + editing area + chips) */}
            <div className="bg-card flex-[1_0_0] min-h-px flex flex-col relative w-full">
              <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none" />

              {/* Toolbar row: horizontally scrollable */}
              <div className="flex items-center shrink-0 w-full z-[2] p-[8px] gap-[8px]">
                {/* Scrollable format toolbar */}
                <div className="flex-1 min-w-0 overflow-x-auto toolbar-scroll">
                  <div className="bg-card flex h-[32px] items-center rounded-lg shrink-0 w-max relative">
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
                    {/* Undo */}
                    <TBtn onClick={handleUndo} title="Undo (Ctrl+Z)">
                      <UndoIcon />
                    </TBtn>
                    {/* Redo */}
                    <TBtn onClick={handleRedo} title="Redo (Ctrl+Shift+Z)">
                      <RedoIcon />
                    </TBtn>
                    <Divider />
                    {/* Italic */}
                    <TBtn onClick={() => { execFormat("italic"); refreshToolbar(); }} active={isItalic} title="Italic">
                      <ItalicIcon />
                    </TBtn>
                    {/* Bold */}
                    <TBtn onClick={() => { execFormat("bold"); refreshToolbar(); }} active={isBold} title="Bold">
                      <BoldIcon />
                    </TBtn>
                    {/* Strikethrough */}
                    <TBtn onClick={() => { execFormat("strikeThrough"); refreshToolbar(); }} active={isStrike} title="Strikethrough">
                      <StrikethroughIcon />
                    </TBtn>
                    {/* Underline */}
                    <TBtn onClick={() => { execFormat("underline"); refreshToolbar(); }} active={isUnderline} title="Underline">
                      <UnderlineIcon />
                    </TBtn>
                    <Divider />
                    {/* Bullet list */}
                    <TBtn onClick={() => execFormat("insertUnorderedList")} title="Bullet List">
                      <BulletListIcon />
                      <ChevronDownIcon />
                    </TBtn>
                    <Divider />
                    {/* Table */}
                    <TBtn onClick={handleInsertTable} title="Insert Table">
                      <TableIcon />
                      <ChevronDownIcon />
                    </TBtn>
                    <Divider />
                    {/* Font size */}
                    <FontSizeDropdown />
                    <Divider />
                    {/* Line height */}
                    <div className="flex items-center p-[8px] shrink-0">
                      <LineHeightDropdown />
                    </div>
                    <Divider />
                    {/* Heading */}
                    <HeadingDropdown />
                  </div>
                </div>

                {/* Right-side action icons (insert, template, mark, link) */}
                <div className="flex gap-[8px] items-center shrink-0">
                  <InsertDropdown onAttachDocument={handleAttachDocumentClick} />
                  <div className="bg-card relative rounded-lg shrink-0">
                    <TBtn onClick={() => {}} title="Template"><TemplateIcon /></TBtn>
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
                  </div>
                  <button
                    onMouseDown={(e) => { e.preventDefault(); onMarkDocument(); }}
                    className="bg-card relative rounded-lg shrink-0 cursor-pointer"
                    data-tooltip="Mark Document"
                  >
                    <div className="flex items-center justify-center p-[8px]"><MarkDocIcon /></div>
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
                  </button>
                  <div className="bg-card relative rounded-lg shrink-0">
                    <TBtn onClick={handleCreateLink} title="Hyperlink"><LinkIcon /></TBtn>
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
                  </div>
                </div>

                {/* Zoom +/- */}
                <div className="bg-card flex h-[32px] items-center rounded-lg shrink-0 relative">
                  <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-lg" style={{ boxShadow: 'var(--elevation-sm)' }} />
                  <button
                    onMouseDown={(e) => { e.preventDefault(); onMinimize?.(); }}
                    className="flex items-center p-[4px] cursor-pointer shrink-0"
                    data-tooltip="Minimize"
                  >
                    <MinusIcon />
                  </button>
                  <button onMouseDown={(e) => e.preventDefault()} className="flex items-center p-[4px] cursor-pointer shrink-0" data-tooltip="Fullscreen"><FullscreenIcon /></button>
                </div>
              </div>

              {/* ContentEditable rich text area */}
              <div className="flex-[1_0_0] min-h-0 overflow-y-auto px-[16px] pb-[8px] z-[1]">
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onClick={handleEditorClick}
                  onKeyUp={() => { refreshToolbar(); trackContent(); }}
                  onMouseUp={refreshToolbar}
                  onInput={trackContent}
                  className="outline-none min-h-full font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] text-[var(--text-base)] text-foreground leading-[1.5]"
                  style={{ caretColor: 'var(--foreground)' }}
                  data-placeholder="Type text here..."
                  onKeyDown={handleKeyDown}
                />
              </div>

              {/* Marker chips – pinned to bottom, max 30% of editor, scrollable */}
              {markerChips && markerChips.length > 0 && (
                <div
                  className="shrink-0 w-full overflow-y-auto px-[8px] pb-[8px]"
                  style={{ maxHeight: '30%' }}
                >
                  <div className="flex items-center gap-[8px] flex-wrap">
                    {markerChips.map((chip) => (
                      <MarkerChip
                        key={chip.id}
                        marker={chip}
                        onClick={() => onMarkerChipClick?.(chip.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Attached file chips */}
              {attachedFiles.length > 0 && (
                <div className="shrink-0 w-full px-[8px] pb-[8px]">
                  <div className="flex items-center gap-[6px] flex-wrap">
                    {attachedFiles.map((file) => (
                      <AttachedFileChip
                        key={file.url}
                        info={file}
                        onView={() => setViewingFile(file)}
                        onRemove={() => handleRemoveAttachment(file.url)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Status bar */}
            <NoteStatusContainer />
          </div>
          <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-xl shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" />
        </div>
      </div>
    </div>
  );
}