import { useState, useRef, useEffect, type ReactNode } from "react";
import headerSvgPaths from "../../imports/svg-7g96wuas1r";
import { EmployeeDirectoryModal } from "./EmployeeDirectoryModal";
import { OtherLinksModal } from "./OtherLinksModal";

const NAVY = "#232f50";
const ACCENT = "var(--primary)";

/** Chat bubble (navy) + two people silhouettes (accent) */
function IconEmployeeDirectory() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="shrink-0">
      <path
        d="M4.5 6.25C4.5 5.42157 5.17157 4.75 6 4.75H13.25C14.0784 4.75 14.75 5.42157 14.75 6.25V10.75C14.75 11.5784 14.0784 12.25 13.25 12.25H10.25L7.75 15V12.25H6C5.17157 12.25 4.5 11.5784 4.5 10.75V6.25Z"
        stroke={NAVY}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1 9.1C8.1 8.55 8.55 8.1 9.1 8.1C9.65 8.1 10.1 8.55 10.1 9.1C10.1 9.65 9.65 10.1 9.1 10.1C8.55 10.1 8.1 9.65 8.1 9.1Z"
        fill={ACCENT}
      />
      <path
        d="M7.35 10.85C7.35 10.85 7.6 10.1 9.1 10.1C10.6 10.1 10.85 10.85 10.85 10.85V11.35H7.35V10.85Z"
        fill={ACCENT}
      />
      <path
        d="M11.4 9.1C11.4 8.55 11.85 8.1 12.4 8.1C12.95 8.1 13.4 8.55 13.4 9.1C13.4 9.65 12.95 10.1 12.4 10.1C11.85 10.1 11.4 9.65 11.4 9.1Z"
        fill={ACCENT}
      />
      <path
        d="M10.65 10.85C10.65 10.85 10.9 10.1 12.4 10.1C13.9 10.1 14.15 10.85 14.15 10.85V11.35H10.65V10.85Z"
        fill={ACCENT}
      />
    </svg>
  );
}

function IconFileTrack() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="shrink-0">
      <path
        d="M6.5 3.5H12.5L15.5 6.5V17.5C15.5 18.0523 15.0523 18.5 14.5 18.5H6.5C5.94772 18.5 5.5 18.0523 5.5 17.5V4.5C5.5 3.94772 5.94772 3.5 6.5 3.5Z"
        stroke={NAVY}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 3.5V6.5H15.5" stroke={NAVY} strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.75" cy="15.25" r="2.35" stroke={ACCENT} strokeWidth="1.15" />
      <path d="M7.75 14V15.25H9" stroke={ACCENT} strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconOtherWebsite() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="shrink-0">
      <circle cx="11" cy="11" r="7" stroke={NAVY} strokeWidth="1.15" />
      <path d="M4.25 11H17.75" stroke={NAVY} strokeWidth="1.1" />
      <path
        d="M11 4.25C13.2 6.55 14.35 8.75 14.35 11C14.35 13.25 13.2 15.45 11 17.75C8.8 15.45 7.65 13.25 7.65 11C7.65 8.75 8.8 6.55 11 4.25Z"
        stroke={NAVY}
        strokeWidth="1.1"
      />
      <circle cx="15.75" cy="15.75" r="2.65" stroke={ACCENT} strokeWidth="1.15" />
      <path d="M17.6 17.6L19.25 19.25" stroke={ACCENT} strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconFileSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden className="shrink-0">
      <path
        d="M6.5 3.5H12.5L15.5 6.5V17.5C15.5 18.0523 15.0523 18.5 14.5 18.5H6.5C5.94772 18.5 5.5 18.0523 5.5 17.5V4.5C5.5 3.94772 5.94772 3.5 6.5 3.5Z"
        stroke={NAVY}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 3.5V6.5H15.5" stroke={NAVY} strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="15" r="2.35" stroke={ACCENT} strokeWidth="1.15" />
      <path d="M9.15 16.65L10.85 18.35" stroke={ACCENT} strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export type QuickAccessItemId = "employee-directory" | "file-track" | "other-website" | "file-search";

export interface QuickAccessDropdownProps {
  onSelect?: (id: QuickAccessItemId) => void;
}

const ITEMS: { id: QuickAccessItemId; label: string; icon: ReactNode }[] = [
  { id: "employee-directory", label: "Employee directory", icon: <IconEmployeeDirectory /> },
  { id: "file-track", label: "File Track", icon: <IconFileTrack /> },
  { id: "other-website", label: "Other Website", icon: <IconOtherWebsite /> },
  { id: "file-search", label: "File Search", icon: <IconFileSearch /> },
];

export function QuickAccessDropdown({ onSelect }: QuickAccessDropdownProps) {
  const [open, setOpen] = useState(false);
  const [employeeDirectoryOpen, setEmployeeDirectoryOpen] = useState(false);
  const [employeeDirectoryAnchor, setEmployeeDirectoryAnchor] = useState<DOMRect | null>(null);
  const [otherLinksOpen, setOtherLinksOpen] = useState(false);
  const [otherLinksAnchor, setOtherLinksAnchor] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          if (employeeDirectoryOpen) {
            setEmployeeDirectoryOpen(false);
            return;
          }
          if (otherLinksOpen) {
            setOtherLinksOpen(false);
            return;
          }
          setOpen((v) => !v);
        }}
        aria-expanded={open || employeeDirectoryOpen || otherLinksOpen}
        aria-haspopup="menu"
        aria-label="Quick access menu"
        className="relative bg-card flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] rounded-[var(--radius)] shrink-0 cursor-pointer hover:bg-muted/40 transition-colors"
      >
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={headerSvgPaths.p1c98fc00} fillRule="evenodd" stroke="#0C3080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d="M13.3333 2.66667H8" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d="M10.6667 5.33333H13.3333" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
        <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[20px] shrink-0 text-foreground text-[var(--text-sm)] whitespace-nowrap">
          Quick Access
        </p>
        <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: "var(--elevation-sm)" }} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-[6px] z-[200] py-[6px] px-[6px] min-w-[248px] bg-white rounded-[14px]"
          style={{
            boxShadow: "0px 12px 40px -8px rgba(15, 23, 42, 0.18), 0px 4px 12px -4px rgba(15, 23, 42, 0.08)",
            border: "1px solid #e8edf2",
          }}
          role="menu"
        >
          {ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              className="w-full flex gap-[12px] items-center text-left px-[12px] py-[11px] rounded-[10px] cursor-pointer transition-colors hover:bg-[#f6f9fb]"
              onMouseDown={(e) => {
                e.preventDefault();
                if (item.id === "employee-directory") {
                  setOtherLinksOpen(false);
                  setEmployeeDirectoryAnchor(triggerRef.current?.getBoundingClientRect() ?? null);
                  setEmployeeDirectoryOpen(true);
                }
                if (item.id === "other-website") {
                  setEmployeeDirectoryOpen(false);
                  setOtherLinksAnchor(triggerRef.current?.getBoundingClientRect() ?? null);
                  setOtherLinksOpen(true);
                }
                onSelect?.(item.id);
                setOpen(false);
              }}
            >
              {item.icon}
              <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] leading-[20px] text-[#232f50]">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}

      <EmployeeDirectoryModal
        open={employeeDirectoryOpen}
        onClose={() => setEmployeeDirectoryOpen(false)}
        anchorRect={employeeDirectoryAnchor}
      />
      <OtherLinksModal open={otherLinksOpen} onClose={() => setOtherLinksOpen(false)} anchorRect={otherLinksAnchor} />
    </div>
  );
}
