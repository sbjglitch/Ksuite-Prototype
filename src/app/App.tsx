import { useState, useCallback, useRef, useEffect } from "react";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Paperclip,
  MessageSquare,
  Plus,
  FileText,
  Pencil,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
} from "lucide-react";
import imgAvatar from "figma:asset/3bbe168eab287460eef89ff5351e750f87e0634b.png";
import imgAvatarAlt from "figma:asset/e43c588f502755e8f59060d98927ab6e9871038c.png";
import headerSvgPaths from "../imports/svg-7g96wuas1r";
import { MarkDocumentModal, ATTACHMENTS, type Rectangle } from "./components/MarkDocumentModal";
import { NoteEditorWithMarkup } from "./components/NoteEditorWrapper";
import { DocumentPage } from "./components/DocumentPages";
import { TooltipProvider } from "./components/TooltipProvider";
import { ToastProvider, useToast } from "./components/Toast";
import { SendMessageModal, type MessageRecipient } from "./components/SendMessageModal";
import { QuickAccessDropdown } from "./components/QuickAccessDropdown";
import { Phone as LucidePhone, Mail as LucideMail } from "lucide-react";
import imgUserPhoto from "figma:asset/beb2533f2c85b048fc5f30200142b8dfd0889992.png";
import imgTableData from "figma:asset/f739562be998d02a6ba61cbb5e682aaac93ef8b2.png";
import noteCardSvgPaths from "../imports/svg-xipt6l5h8s";

/* ───────── Header (top bar + breadcrumb) ───────── */

function Header() {
  return (
    <div className="bg-muted flex flex-col gap-px items-start relative w-full" style={{ boxShadow: 'var(--elevation-sm)' }}>
      {/* Top bar */}
      <div className="bg-card h-[64px] relative shrink-0 w-full">
        <div className="flex items-center overflow-clip size-full">
          <div className="flex items-center justify-between px-[40px] py-[8px] size-full">
            {/* Left: Logo + Dropdown */}
            <div className="flex gap-[25px] items-center shrink-0">
              {/* KSuite Logo */}
              <div className="h-[36px] overflow-clip relative shrink-0 w-[72px]">
                <div className="absolute inset-[0_65.48%_20.23%_7.53%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4294 28.7166">
                    <path d={headerSvgPaths.p1b864180} fill="var(--primary)" />
                  </svg>
                </div>
                <div className="absolute inset-[18.77%_91.13%_33.9%_0]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.38431 17.039">
                    <path d={headerSvgPaths.p1e819000} fill="var(--primary)" />
                  </svg>
                </div>
                <div className="absolute inset-[65.07%_48.98%_0.98%_26.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7755 12.2191">
                    <path d={headerSvgPaths.p344e5740} fill="var(--secondary)" />
                  </svg>
                </div>
                <div className="absolute inset-[12.25%_15.87%_44.48%_72.72%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.21623 15.5752">
                    <path d={headerSvgPaths.p2384e800} fill="#0C3080" />
                  </svg>
                </div>
                <div className="absolute inset-[6.94%_28.52%_44.98%_63.26%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.91905 17.3055">
                    <path d={headerSvgPaths.p362aa700} fill="#0C3080" />
                  </svg>
                </div>
                <div className="absolute inset-[19.67%_38.01%_44.42%_45.57%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8213 12.9284">
                    <path d={headerSvgPaths.p952f00} fill="#0C3080" />
                  </svg>
                </div>
                <div className="absolute inset-[19.23%_56.47%_44.48%_29.06%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4201 13.0638">
                    <path d={headerSvgPaths.p46f8100} fill="#0C3080" />
                  </svg>
                </div>
                <div className="absolute inset-[19.23%_0.07%_44.48%_84.44%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.155 13.0636">
                    <path d={headerSvgPaths.p376bebc0} fill="var(--secondary)" />
                  </svg>
                </div>
              </div>
              {/* Organization dropdown */}
              <div className="flex items-center self-stretch">
                <div className="h-full relative shrink-0 w-[229px]">
                  <div className="absolute bg-card flex flex-col gap-[5px] inset-0 items-start justify-center px-[18px] py-[16px] rounded-[var(--radius)]">
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
                    <div className="flex items-center justify-between relative shrink-0 w-full">
                      <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] leading-[20px] shrink-0 text-foreground text-[var(--text-sm)] whitespace-nowrap">Information Kerala Mission</p>
                      <div className="h-[6px] relative shrink-0 w-[12px]">
                        <div className="absolute inset-[-16.67%_-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="16 16 16 16">
                            <path d="M1 1L7 7L13 1" stroke="var(--border)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: User card + Bell */}
            <div className="flex gap-[24px] items-center justify-end shrink-0">
              {/* User card */}
              <div className="flex gap-[12px] items-center shrink-0">
                <div className="overflow-clip relative rounded-[46px] shrink-0 size-[40px]" style={{ backgroundColor: '#cad9fa' }}>
                  <p className="-translate-x-1/2 absolute font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] leading-[normal] left-[calc(50%-0.5px)] text-[#0c3080] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
                  <div className="absolute left-0 pointer-events-none rounded-[200px] size-[40px] top-0">
                    <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                      <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
                    </div>
                    <div aria-hidden="true" className="absolute border-[1.5px] border-card inset-[-1.5px] rounded-[201.5px]" />
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[42px] left-1/2 top-[calc(50%+1px)] w-[40px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAvatarAlt} />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center shrink-0">
                  <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[20px] shrink-0 text-foreground text-[var(--text-sm)] whitespace-nowrap">Sara Woodman</p>
                  <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[16px] shrink-0 text-muted-foreground text-[12px] whitespace-nowrap">Assistant Manager</p>
                </div>
              </div>
              {/* Notification bell */}
              <div className="flex flex-col gap-[8px] items-center relative rounded-[var(--radius)] shrink-0 size-[40px]">
                <div className="bg-card flex-1 min-h-px min-w-px relative rounded-[var(--radius)] w-full">
                  <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="flex items-center justify-center p-[10px] size-full">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={headerSvgPaths.p2a262e00} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={headerSvgPaths.p34a31d80} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M11.6667 16.6667H8.33333" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb bar */}
      <div className="bg-card h-[48px] relative shrink-0 w-full">
        <div className="flex items-center size-full">
          <div className="flex items-center justify-between px-[40px] size-full">
            {/* Left: Back + Breadcrumb */}
            <div className="flex gap-[8px] items-center py-[4px] shrink-0">
              {/* Back button */}
              <div className="flex flex-col gap-[8px] items-center relative rounded-[var(--radius)] shrink-0 size-[36px]">
                <div className="bg-card flex-1 min-h-px min-w-px relative rounded-[var(--radius)] w-full">
                  <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="flex items-center justify-center p-[8px] size-full">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d="M3.33333 8H12.6667" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={headerSvgPaths.pb2e4280} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M6.66667 11.3333L3.33333 8" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Inbox */}
              <div className="flex gap-[4px] items-center shrink-0">
                <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] leading-[20px] shrink-0 text-muted-foreground text-[var(--text-sm)] text-center whitespace-nowrap">Inbox</p>
              </div>
              {/* Arrow + File number */}
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="flex items-center shrink-0">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M10 16L14 12L10 8" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[20px] shrink-0 text-[#0c3080] text-[var(--text-sm)] whitespace-pre">{`File  No. 178-E3-2025-IKM`}</p>
              </div>
            </div>
            {/* Right: Action buttons */}
            <div className="flex items-center shrink-0">
              <QuickAccessDropdown />
              {/* Route Keys and Users */}
              <div className="flex items-start rounded-[var(--radius)] shrink-0">
                <div className="bg-card flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] rounded-[var(--radius)] shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={headerSvgPaths.pc45d380} stroke="#0C3080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                      <circle cx="7.33333" cy="4.66667" r="2.66667" stroke="#0C3080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                      <circle cx="11.6296" cy="11.037" r="2.37037" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                      <path d="M9.95352 12.7131L8.66667 14" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[20px] shrink-0 text-foreground text-[var(--text-sm)] whitespace-nowrap">Route Keys and Users</p>
                </div>
              </div>
              {/* File Summary */}
              <div className="flex items-start rounded-[var(--radius)] shrink-0 w-[141px]">
                <div className="bg-card flex-1 min-h-px min-w-px relative rounded-[var(--radius)]">
                  <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="flex gap-[8px] items-center justify-center px-[14px] py-[8px] w-full">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d="M4.66667 8H11.3333" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                          <rect height="12" rx="2.5" stroke="#0C3080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" width="12" x="2" y="2" />
                          <path d="M4.66667 10.6667H11.3333" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                          <path d="M4.66667 5.33333H8" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </div>
                      <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[20px] shrink-0 text-foreground text-[var(--text-sm)] whitespace-nowrap">File Summary</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hamburger menu */}
              <div className="flex flex-col gap-[8px] items-center relative rounded-[var(--radius)] shrink-0 size-[36px]">
                <div className="bg-card relative rounded-[var(--radius)] shrink-0 w-full aspect-square">
                  <div className="flex items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="flex items-center justify-center p-[8px] size-full">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
                          <path d="M3.66838 8.00334H12.3384" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M3.66838 10.6711H12.3384" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M3.66815 5.33556H12.3382" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Shared SVG icons for NoteCard ───────── */

function NcPenIcon() {
  return (
    <div className="opacity-80 relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <rect fill="var(--primary)" height="12.005" rx="3.33333" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12.005" x="2.00063" y="2.00008" />
        <path clipRule="evenodd" d={noteCardSvgPaths.p18ff9400} fill="white" fillRule="evenodd" />
        <path d="M9.33722 11.3388H11.3381" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function NcArrowIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M11.3 4.7L4.7 11.3" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.p418ba00} stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function NcDraftIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M4.66667 8H11.3333" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <rect height="12" rx="3" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" width="12" x="2" y="2" />
        <path d="M4.66667 10.6667H11.3333" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d="M4.66667 5.33333H8" stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function NcAttachIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 14.533 11.1997">
        <path d={noteCardSvgPaths.p30818700} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={noteCardSvgPaths.p1dd55200} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function NcMessageIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={noteCardSvgPaths.p78b8d80} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.p7d16800} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.p3824a100} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.p482a80} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M6.75333 12.86L4.4 14.0267" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.p185101c0} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.p103138d0} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={noteCardSvgPaths.pe3b8b00} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ───────── NoteCard types ───────── */

interface NoteMarkerData {
  id: string;
  attachmentName: string;
}

interface NoteDraftData {
  label: string;
}

interface NoteAttachData {
  name: string;
}

interface NoteCardProps {
  name: string;
  role: string;
  noteNum: string;
  dateTime: string;
  phone?: string;
  email?: string;
  bodyTitle?: string;
  bodyText: string;
  bodyExtended?: string;
  hasTable?: boolean;
  markers?: NoteMarkerData[];
  drafts?: NoteDraftData[];
  attachments?: NoteAttachData[];
  onMarkerClick?: (marker: NoteMarkerData) => void;
}

/* ───────── NoteCard ───────── */

function NoteCard({
  name,
  role,
  noteNum,
  dateTime,
  phone,
  email,
  bodyTitle,
  bodyText,
  bodyExtended,
  hasTable,
  markers,
  drafts,
  attachments,
  onMarkerClick,
}: NoteCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const canExpand = !!(bodyExtended || hasTable);

  const contactPhone = phone ?? "+91 98765 43210";
  const contactEmail = email ?? `${name.toLowerCase().replace(/\s+/g, ".")}@ksuite.gov.in`;

  const recipient: MessageRecipient = {
    name,
    role,
    phone: contactPhone,
    email: contactEmail,
    avatarUrl: imgUserPhoto,
    avatarInitials: name
      .split(/\s+/)
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase(),
  };

  return (
    <div className="bg-card relative rounded-[var(--radius)] w-full">
      <div className="flex flex-col gap-[12px] isolate items-start overflow-clip p-[16px] rounded-[inherit]">
        {/* ── Header row: user card + date/time ── */}
        <div className="flex items-center justify-between w-full z-[2]">
          <div className="flex gap-[16px] items-center">
            {/* Avatar */}
            <div className="relative rounded-[46px] shrink-0 size-[32px]" style={{ backgroundColor: 'var(--secondary)' }}>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <p className="-translate-x-1/2 absolute font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] leading-[normal] left-[calc(50%-0.5px)] text-secondary text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
                <div className="absolute left-0 pointer-events-none rounded-[200px] size-[32px] top-0">
                  <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                    <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgUserPhoto} />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[1.5px] border-secondary inset-[-1.5px] pointer-events-none rounded-[47.5px]" />
            </div>
            {/* Employee info */}
            <div className="flex flex-col shrink-0">
              <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[var(--text-sm)] text-foreground leading-[20px]">{name}</p>
              <div className="flex gap-[8px] items-center font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-muted-foreground leading-[16px]">
                <span>{role}</span>
              </div>
            </div>
            {/* Message button — with rich hover tooltip (phone + email) */}
            <div
              className="relative"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              <button
                onClick={() => setMessageModalOpen(true)}
                className="bg-card relative rounded-[var(--radius)] shrink-0 size-[36px] cursor-pointer transition-colors hover:bg-muted"
                aria-label={`Message ${name}`}
              >
                <div className="flex items-center justify-center size-full p-[8px]">
                  <NcMessageIcon />
                </div>
                <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
              </button>

              {/* Rich hover tooltip */}
              {contactHover && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ top: "calc(100% + 8px)", zIndex: 50 }}
                >
                  <div
                    className="flex flex-col gap-[6px] rounded-[8px] px-[12px] py-[10px] whitespace-nowrap"
                    style={{
                      background: "var(--foreground)",
                      boxShadow: "0px 8px 16px -4px rgba(0,0,0,0.25)",
                      minWidth: 200,
                    }}
                  >
                    <div className="flex items-center gap-[8px]">
                      <LucidePhone size={12} color="#a2a7b4" />
                      <span
                        className="font-['Manrope',sans-serif] font-medium text-[12px] leading-[16px]"
                        style={{ color: "var(--background)" }}
                      >
                        {contactPhone}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <LucideMail size={12} color="#a2a7b4" />
                      <span
                        className="font-['Manrope',sans-serif] font-medium text-[12px] leading-[16px]"
                        style={{ color: "var(--background)" }}
                      >
                        {contactEmail}
                      </span>
                    </div>
                    <span
                      className="font-['Manrope',sans-serif] font-normal text-[10px] leading-[14px] pt-[2px]"
                      style={{ color: "#a2a7b4", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 2, paddingTop: 6 }}
                    >
                      Click to send a message
                    </span>
                    {/* Arrow */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2"
                      style={{
                        top: -5,
                        width: 10,
                        height: 10,
                        background: "var(--foreground)",
                        transform: "translateX(-50%) rotate(45deg)",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Date / time */}
          <div className="flex items-center gap-[8px]">
            <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-muted-foreground leading-[16px] shrink-0 whitespace-nowrap">{dateTime}</p>
          </div>
        </div>

        {/* ── Body content: note number column + text ── */}
        <div className="flex flex-col gap-[16px] items-start w-full z-[1]">
          {/* Note text with left number column */}
          <div className="w-full">
            <div className="flex gap-[22px] items-start pl-[8px] w-full">
              {/* Note number column */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] leading-[20px] text-[#0c3080] text-[var(--text-sm)] text-center w-[25px]">{noteNum}</p>
              </div>
              {/* Body text column */}
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1 min-w-0">
                <div className="font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] leading-[normal] w-full text-foreground text-[var(--text-sm)]">
                  {bodyTitle && <p className="font-[var(--font-weight-bold)] mb-0">{bodyTitle}</p>}
                  <p>{bodyText}</p>
                </div>
                {/* Table image (expandable) */}
                {expanded && hasTable && (
                  <div className="h-[48px] relative shrink-0 w-[481px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="Data table" className="absolute h-[350%] left-[0.04%] max-w-none top-0 w-[100.12%]" src={imgTableData} />
                    </div>
                  </div>
                )}
                {/* Extended body text (comma-separated, expandable) */}
                {expanded && bodyExtended && (
                  <div className="font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] leading-[normal] w-full text-foreground text-[var(--text-sm)]">
                    <p>{bodyExtended}</p>
                  </div>
                )}
                {/* Show More / Show Less */}
                {canExpand && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex gap-[8px] items-center cursor-pointer shrink-0"
                  >
                    <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[var(--text-sm)] text-secondary leading-[20px] whitespace-nowrap">
                      {expanded ? 'Show Less' : 'Show More'}
                    </p>
                    <div className="relative shrink-0 size-[16px]" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={noteCardSvgPaths.p367e8cc0} stroke="var(--secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── Marker chips row ── */}
          {markers && markers.length > 0 && (
            <div className="w-full">
              <div className="flex gap-[8px] items-center px-[56px] flex-wrap">
                {markers.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => onMarkerClick?.(m)}
                    className="bg-card flex gap-[8px] items-center p-[6px] relative rounded-[var(--radius)] shrink-0 cursor-pointer"
                  >
                    <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
                    <div className="flex gap-[4px] items-center">
                      <NcPenIcon />
                      <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">Marker in</span>
                      <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[var(--text-sm)] text-foreground whitespace-nowrap">{m.attachmentName}</span>
                    </div>
                    <NcArrowIcon />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── All chips row (drafts + attachments together) ── */}
          {((drafts && drafts.length > 0) || (attachments && attachments.length > 0)) && (
            <div className="w-full">
              <div className="flex gap-[5px] items-center pl-[56px] flex-wrap">
                {/* Draft chips */}
                {drafts?.map((d, i) => (
                  <div key={`draft-${i}`} className="flex items-start relative rounded-[var(--radius)] shrink-0">
                    <div className="flex-1 min-h-px min-w-px relative rounded-[var(--radius)]" style={{ backgroundColor: 'rgba(0,178,235,0.1)' }}>
                      <div className="flex items-center overflow-clip rounded-[inherit] size-full">
                        <div className="flex gap-[8px] items-center px-[14px] py-[8px]">
                          <NcDraftIcon />
                          <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-secondary whitespace-nowrap leading-[16px]">{d.label}</p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-secondary/40 inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
                    </div>
                  </div>
                ))}
                {/* Attachment chips */}
                {attachments?.map((a, i) => (
                  <div key={`att-${i}`} className="flex items-start relative rounded-[var(--radius)] shrink-0">
                    <div className="bg-card relative rounded-[var(--radius)]">
                      <div className="flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] rounded-[inherit]">
                        <NcAttachIcon />
                        <p className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-foreground whitespace-nowrap leading-[16px]">{a.name}</p>
                      </div>
                      <div aria-hidden="true" className="absolute border border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-border inset-0 pointer-events-none rounded-[var(--radius)]" style={{ boxShadow: 'var(--elevation-sm)' }} />

      {/* Send message modal — rendered via portal inside the modal component */}
      <SendMessageModal
        open={messageModalOpen}
        recipient={recipient}
        onClose={() => setMessageModalOpen(false)}
      />
    </div>
  );
}

const MIN_EDITOR_HEIGHT = 160;
const MAX_EDITOR_HEIGHT = 600;
const DEFAULT_EDITOR_HEIGHT = 280;
const MINIMIZED_EDITOR_HEIGHT = 56;

function NotesPanel({ onMarkDocument, savedMarkers, onMarkerChipClick, onNoteCardMarkerClick }: {
  onMarkDocument: () => void;
  savedMarkers: Rectangle[];
  onMarkerChipClick: (markerId: string) => void;
  onNoteCardMarkerClick?: (marker: NoteMarkerData) => void;
}) {
  const [editorHeight, setEditorHeight] = useState(DEFAULT_EDITOR_HEIGHT);
  const [isEditorMinimized, setIsEditorMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heightBeforeMinimize = useRef(DEFAULT_EDITOR_HEIGHT);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartHeight = useRef(0);

  const handleMinimize = useCallback(() => {
    heightBeforeMinimize.current = editorHeight;
    setIsAnimating(true);
    setIsEditorMinimized(true);
    setEditorHeight(MINIMIZED_EDITOR_HEIGHT);
  }, [editorHeight]);

  const handleExpand = useCallback(() => {
    setIsAnimating(true);
    setIsEditorMinimized(false);
    setEditorHeight(heightBeforeMinimize.current);
  }, []);

  // Clear animating flag after transition ends
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  // Shift+N keyboard shortcut to expand/focus the editor
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "N" && isEditorMinimized) {
        e.preventDefault();
        handleExpand();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isEditorMinimized, handleExpand]);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartHeight.current = editorHeight;

    const handleMouseMove = (ev: MouseEvent) => {
      if (!isDragging.current) return;
      // Dragging up = smaller Y = increase height
      const delta = dragStartY.current - ev.clientY;
      const newHeight = Math.min(
        MAX_EDITOR_HEIGHT,
        Math.max(MIN_EDITOR_HEIGHT, dragStartHeight.current + delta)
      );
      setEditorHeight(newHeight);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.body.style.cursor = "row-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [editorHeight]);

  // Build marker chips from saved markers
  const markerChips = savedMarkers.map((rect, idx) => {
    const att = ATTACHMENTS.find((a) => a.id === rect.attachmentId);
    return {
      id: rect.id,
      markerIndex: idx + 1,
      attachmentName: att?.name.replace(".pdf", "") || "Document",
    };
  });

  return (
    <div className="flex flex-col gap-[8px] flex-1 min-w-0 h-full">
      {/* Notes header */}
      <div className="bg-[#fefefe] rounded-lg h-[54px] shrink-0">
        <div className="flex items-center justify-between h-full px-[16px] py-[8px]">
          <div className="flex gap-[8px] items-center">
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] text-[16px] text-[#09327b]">
              Notes
            </span>
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] text-[14px] text-foreground">
              (04)
            </span>
          </div>
          <div className="flex gap-[8px] items-center">
            <button className="bg-card rounded-lg size-[36px] flex items-center justify-center border border-border" style={{ boxShadow: 'var(--elevation-sm)' }} data-tooltip="Search Notes">
              <Search size={16} className="text-foreground" />
            </button>
            <button className="bg-card rounded-lg size-[36px] flex items-center justify-center border border-border" style={{ boxShadow: 'var(--elevation-sm)' }} data-tooltip="Expand">
              <Maximize2 size={16} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Notes list */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-[12px] min-h-0">
        <NoteCard
          name="Saleena P"
          role="Assistant Manager  E1  PEN: 678 234"
          phone="+91 98765 43210"
          email="saleena.p@ksuite.gov.in"
          noteNum="01"
          dateTime="Thu, Jan 23 2025, 04:48 PM"
          bodyTitle="Gsgah"
          bodyText="[File 687-E1-2025-IKM created on 19/09/2025 12:51:20]"
          hasTable
          bodyExtended="Draft No 1 (Proceedings) created by Saleena P(100059) on 17/10/2025 10:57:10, Draft No 2 (Proceedings) created by Saleena P(100059) on 07/10/2025 15:26:46, Draft No 3 (Letter) created by Saleena P(100059) on 17/10/2025 10:36:32"
          markers={[
            { id: 'nc-marker-1', attachmentName: 'Legal Notice' },
            { id: 'nc-marker-2', attachmentName: 'Legal Notice' },
          ]}
          drafts={[
            { label: 'Draft 1' },
            { label: 'Draft 2' },
            { label: 'Draft 3' },
          ]}
          attachments={[
            { name: 'Aadhar_card.pdf' },
            { name: 'Pan Card.jpg' },
            { name: 'Aadhar_card.pdf' },
            { name: 'Legaldocument.pdf' },
          ]}
          onMarkerClick={onNoteCardMarkerClick}
        />
        <NoteCard
          name="Saleena P"
          role="Assistant Manager  E1  PEN: 678 234"
          phone="+91 98765 43210"
          email="saleena.p@ksuite.gov.in"
          noteNum="02"
          dateTime="Thu, Jan 23 2025, 04:48 PM"
          bodyTitle="Subject : G"
          bodyText="[File 91-E1-2025-IKM created on 23/01/2025 16:45:35, Draft No 1 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:20, Draft No 2 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:55]"
          drafts={[
            { label: 'Draft 1' },
            { label: 'Draft 2' },
          ]}
          attachments={[
            { name: 'Aadhar_card.pdf' },
          ]}
        />
      </div>

      {/* Editor – vertically resizable */}
      <div
        className="shrink-0 relative overflow-hidden"
        style={{
          height: editorHeight,
          transition: isAnimating ? 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Resize handle – hidden when minimized or animating */}
        {!isEditorMinimized && !isAnimating && (
          <div
            onMouseDown={handleResizeStart}
            className="absolute -top-[5px] left-0 right-0 h-[10px] z-10 cursor-row-resize flex items-center justify-center group"
          >
            <div
              className="w-[40px] h-[4px] rounded-full bg-border group-hover:bg-muted-foreground transition-colors"
            />
          </div>
        )}
        <NoteEditorWithMarkup
          onMarkDocument={onMarkDocument}
          markerChips={markerChips.length > 0 ? markerChips : undefined}
          onMarkerChipClick={onMarkerChipClick}
          isMinimized={isEditorMinimized}
          onMinimize={handleMinimize}
          onExpand={handleExpand}
        />
      </div>
    </div>
  );
}

// Page dimensions for document preview
const PREVIEW_PAGE_HEIGHT = 792;

// Mock markers representing another user's (Saleena P's) markings on the Legal Notice document
const MOCK_NOTE_CARD_MARKERS: Rectangle[] = [
  { id: 'nc-mock-1', x: 60, y: 120, width: 480, height: 55, attachmentId: 1, pageNumber: 1, comment: 'Important clause regarding notice period' },
  { id: 'nc-mock-2', x: 60, y: 320, width: 480, height: 40, attachmentId: 1, pageNumber: 1, comment: 'Liability terms to review' },
];

/* ───────── NoteCardMarkerPanel – pink-colored markers from another user ───────── */

function NoteCardMarkerPanel({ userName, onClose }: {
  userName: string;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col flex-1 min-w-0 h-full">
      {/* Tabs */}
      <div className="bg-card rounded-t-lg p-[8px] shrink-0">
        <div className="bg-muted rounded-full h-[38px] flex">
          <div className="bg-secondary rounded-full flex-1 flex items-center justify-center">
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] text-[12px] text-secondary-foreground">
              All Document
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] text-[12px] text-muted-foreground">
              Drafts
            </span>
          </div>
        </div>
      </div>

      {/* Document viewer area */}
      <div className="bg-card flex-1 rounded-b-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 pt-[8px] px-[16px] pb-[16px] gap-[16px]">
          {/* Document header */}
          <div className="flex items-center justify-between shrink-0">
            <div className="flex gap-[24px] items-center">
              <div className="flex gap-[12px] items-center">
                <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-foreground">
                  Legal Notice
                </span>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <path d="M4 10L8 6L12 10" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] items-center">
              <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[14px] text-primary">
                {userName}
              </span>
              <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-muted-foreground">
                @ Note 01
              </span>
              <button
                onClick={onClose}
                className="bg-card rounded-lg border border-border flex items-center p-[6px] cursor-pointer hover:bg-muted/50 transition-colors ml-[4px]"
                style={{ boxShadow: 'var(--elevation-sm)' }}
                data-tooltip="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="var(--muted-foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Document preview with pink markers */}
          <div className="bg-muted flex-1 min-h-0 rounded-sm relative overflow-hidden">
            <p className="absolute top-[16px] left-[16px] font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-muted-foreground z-10">
              Legal_Notice.jpg
            </p>

            <div className="flex items-start justify-center overflow-auto h-full pt-[48px] pb-[60px]">
              <div className="relative" style={{ transform: 'scale(0.58)', transformOrigin: 'top center' }}>
                <DocumentPage pageNumber={1} />
                {/* Render pink-colored marker overlays */}
                {MOCK_NOTE_CARD_MARKERS.map((rect, idx) => (
                  <div
                    key={rect.id}
                    className="absolute"
                    style={{
                      left: rect.x,
                      top: rect.y,
                      width: rect.width,
                      height: rect.height,
                      border: '2px solid var(--primary)',
                      borderRadius: 1,
                      backgroundColor: 'rgba(232, 58, 122, 0.08)',
                    }}
                  >
                    <div
                      className="absolute -top-[10px] -left-[10px] size-[22px] rounded-full flex items-center justify-center bg-primary text-primary-foreground text-[11px] font-[var(--font-weight-semibold)] font-[var(--font-family-manrope)] shadow-sm"
                    >
                      {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom toolbar */}
            <div className="absolute bottom-[16px] left-[16px] flex gap-[8px] items-center">
              <div className="bg-card rounded-lg border border-border flex items-center gap-[10px] p-[6px]" style={{ boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.04)' }}>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Zoom In" data-tooltip-pos="bottom">
                  <ZoomIn size={16} className="text-muted-foreground" />
                </button>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Zoom Out" data-tooltip-pos="bottom">
                  <ZoomOut size={16} className="text-muted-foreground" />
                </button>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Fit to View" data-tooltip-pos="bottom">
                  <Maximize2 size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Annotation scroll track on right – pink */}
            <div className="absolute top-[8px] right-[2px] bottom-[8px] w-[18px]">
              <div className="absolute left-[8px] top-0 bottom-0 w-[2px] rounded-full" style={{ backgroundColor: 'rgba(232, 58, 122, 0.15)' }} />
              {MOCK_NOTE_CARD_MARKERS.map((rect) => {
                const yRatio = (rect.y + rect.height / 2) / PREVIEW_PAGE_HEIGHT;
                return (
                  <div
                    key={rect.id}
                    className="absolute left-[2px]"
                    style={{ top: `${Math.min(Math.max(yRatio * 100, 2), 98)}%`, width: 14, height: 3, backgroundColor: 'var(--primary)', borderRadius: 2 }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarkedDocumentPanel({ savedMarkers, onEdit }: {
  savedMarkers: Rectangle[];
  onEdit: () => void;
}) {
  const [previewPage, setPreviewPage] = useState(0);
  const totalPages = 2; // Show 2 pages in the preview pagination

  // Get markers for the first attachment (Legal_Notice.pdf) for preview
  const att1Markers = savedMarkers.filter((r) => r.attachmentId === 1);

  return (
    <div className="flex flex-col flex-1 min-w-0 h-full">
      {/* Tabs */}
      <div className="bg-card rounded-t-lg p-[8px] shrink-0">
        <div className="bg-muted rounded-full h-[38px] flex">
          <div className="bg-secondary rounded-full flex-1 flex items-center justify-center">
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] text-[12px] text-secondary-foreground">
              All Document
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-bold)] text-[12px] text-muted-foreground">
              Drafts
            </span>
          </div>
        </div>
      </div>

      {/* Document viewer area */}
      <div className="bg-card flex-1 rounded-b-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 pt-[8px] px-[16px] pb-[16px] gap-[16px]">
          {/* Document header */}
          <div className="flex items-center justify-between shrink-0">
            <div className="flex gap-[24px] items-center">
              <div className="flex gap-[12px] items-center">
                <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-foreground">
                  Legal Notice
                </span>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <path d="M4 10L8 6L12 10" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="bg-card flex gap-[12px] items-center justify-center px-[16px] py-[8px] rounded-lg border border-border">
                <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[14px] text-foreground">
                  All Documents
                </span>
                <ChevronRight size={12} className="text-muted-foreground rotate-90" />
              </div>
            </div>
            <div className="flex gap-[8px] items-center">
              <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[14px] text-foreground">
                Timple Magi P S
              </span>
              <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[12px] text-muted-foreground">
                @ Note 10
              </span>
            </div>
          </div>

          {/* Document preview */}
          <div className="bg-muted flex-1 min-h-0 rounded-sm relative overflow-hidden">
            {/* Document label */}
            <p className="absolute top-[16px] left-[16px] font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-muted-foreground z-10">
              Legal_Notice.jpg
            </p>

            {/* Scaled document */}
            <div className="flex items-start justify-center overflow-auto h-full pt-[48px] pb-[60px]">
              <div className="relative" style={{ transform: 'scale(0.58)', transformOrigin: 'top center' }}>
                <DocumentPage pageNumber={1} />
                {/* Render saved marker overlays */}
                {att1Markers.map((rect, idx) => (
                  <div
                    key={rect.id}
                    className="absolute"
                    style={{
                      left: rect.x,
                      top: rect.y,
                      width: rect.width,
                      height: rect.height,
                      border: '2px solid var(--secondary)',
                      borderRadius: 1,
                      backgroundColor: 'rgba(0, 178, 235, 0.08)',
                    }}
                  >
                    {/* Marker number badge */}
                    <div
                      className="absolute -top-[10px] -left-[10px] size-[22px] rounded-full flex items-center justify-center bg-secondary text-secondary-foreground text-[11px] font-[var(--font-weight-semibold)] font-[var(--font-family-manrope)] shadow-sm"
                    >
                      {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom toolbar */}
            <div className="absolute bottom-[16px] left-[16px] flex gap-[8px] items-center">
              {/* Zoom/view controls */}
              <div className="bg-card rounded-lg border border-border flex items-center gap-[10px] p-[6px]" style={{ boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.04)' }}>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Zoom In" data-tooltip-pos="bottom">
                  <ZoomIn size={16} className="text-muted-foreground" />
                </button>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Zoom Out" data-tooltip-pos="bottom">
                  <ZoomOut size={16} className="text-muted-foreground" />
                </button>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Fit to View" data-tooltip-pos="bottom">
                  <Maximize2 size={16} className="text-muted-foreground" />
                </button>
              </div>
              {/* Download/Print */}
              <div className="bg-card rounded-lg border border-border flex items-center gap-[9px] p-[6px]" style={{ boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.04)' }}>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Download" data-tooltip-pos="bottom">
                  <Download size={16} className="text-muted-foreground" />
                </button>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Share" data-tooltip-pos="bottom">
                  <Share2 size={16} className="text-muted-foreground" />
                </button>
              </div>
              {/* Edit markup button */}
              <button
                onClick={onEdit}
                className="bg-card rounded-lg border border-border flex items-center p-[6px] cursor-pointer hover:bg-muted/50 transition-colors"
                style={{ boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.04)' }}
                data-tooltip="Edit Markup"
                data-tooltip-pos="bottom"
              >
                <Pencil size={16} className="text-muted-foreground" />
              </button>
            </div>

            {/* Annotation scroll track on right */}
            {att1Markers.length > 0 && (
              <div className="absolute top-[8px] right-[2px] bottom-[8px] w-[18px]">
                <div className="absolute left-[8px] top-0 bottom-0 w-[2px] bg-secondary/15 rounded-full" />
                {att1Markers.map((rect, idx) => {
                  const yRatio = (rect.y + rect.height / 2) / PREVIEW_PAGE_HEIGHT;
                  return (
                    <div
                      key={rect.id}
                      className="absolute left-[2px]"
                      style={{ top: `${Math.min(Math.max(yRatio * 100, 2), 98)}%`, width: 14, height: 3, backgroundColor: 'var(--secondary)', borderRadius: 2 }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between shrink-0">
            <div className="flex gap-[8px] items-center">
              <button
                className="size-[39px] rounded-lg border border-border flex items-center justify-center bg-card"
                disabled={previewPage <= 0}
                onClick={() => setPreviewPage((p) => Math.max(0, p - 1))}
                data-tooltip="Previous Page"
              >
                <ChevronLeft size={16} className="text-foreground opacity-80" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPreviewPage(i)}
                  className="size-[39px] rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: previewPage === i ? 'var(--primary)' : 'var(--card)',
                    border: previewPage === i ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <span
                    className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[14px]"
                    style={{ color: previewPage === i ? 'var(--primary-foreground)' : 'var(--muted-foreground)' }}
                  >
                    {i + 1}
                  </span>
                </button>
              ))}
              <button
                className="size-[39px] rounded-lg border border-border flex items-center justify-center bg-card"
                disabled={previewPage >= totalPages - 1}
                onClick={() => setPreviewPage((p) => Math.min(totalPages - 1, p + 1))}
                data-tooltip="Next Page"
              >
                <ChevronRight size={16} className="text-foreground opacity-80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentsPanel() {
  return (
    <div className="flex flex-col flex-1 min-w-0 h-full">
      {/* Tabs */}
      <div className="bg-white rounded-t-[8px] p-[8px] shrink-0">
        <div className="bg-[#e7eff5] rounded-full h-[38px] flex">
          <div className="bg-[#00b2ec] rounded-full flex-1 flex items-center justify-center">
            <span className="font-['Manrope',sans-serif] font-bold text-[12px] text-white">
              Documents
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-['Manrope',sans-serif] font-bold text-[12px] text-[#5c6e93]">
              Drafts
            </span>
          </div>
        </div>
      </div>

      {/* Document area */}
      <div className="bg-white flex-1 rounded-b-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] flex flex-col p-[16px] gap-[16px]">
        {/* Pagination header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <button className="size-[32px] rounded-[8px] border border-[#e8eff4] flex items-center justify-center opacity-50" data-tooltip="Previous Page">
              <ChevronLeft size={16} className="text-[#323232]" />
            </button>
            <div className="bg-[#09327b] rounded-[7px] size-[32px] flex items-center justify-center">
              <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-white">
                1
              </span>
            </div>
            <button className="size-[32px] rounded-[8px] border border-[#e8eff4] flex items-center justify-center" data-tooltip="Next Page">
              <ChevronRight size={16} className="text-[#323232]" />
            </button>
            <div className="bg-white flex gap-[12px] items-center px-[16px] py-[8px] rounded-[8px] border border-[#e7eff5]">
              <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#232f50]">
                Approved Drafts
              </span>
              <ChevronRight
                size={12}
                className="text-[#5c6e93] rotate-90"
              />
            </div>
          </div>
          <button className="flex items-center gap-[6px] px-[14px] py-[8px] rounded-[8px] border border-[#e83a7a] cursor-pointer bg-white hover:bg-pink-50 transition-colors">
            <Plus size={16} className="text-[#e83a7a]" />
            <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#e83a7a]">
              Create Draft
            </span>
          </button>
        </div>

        {/* Empty draft state */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[16px]">
          <div className="flex flex-col items-center gap-[8px]">
            {/* Placeholder illustration */}
            <div className="relative w-[200px] h-[160px]">
              <div className="absolute top-[20px] left-[30px] w-[140px] h-[100px] bg-[#f2f6ff] rounded-[8px] border border-[#e8eff4]" />
              <div className="absolute top-[10px] left-[50px] w-[140px] h-[100px] bg-[#f8fafc] rounded-[8px] border border-[#e8eff4]">
                <div className="p-[16px] flex flex-col gap-[8px]">
                  <div className="flex gap-[8px] items-center">
                    <FileText size={20} className="text-[#c4cdd5]" />
                    <div className="h-[8px] bg-[#e8eff4] rounded w-[60px]" />
                  </div>
                  <div className="h-[6px] bg-[#e8eff4] rounded w-full" />
                  <div className="h-[6px] bg-[#e8eff4] rounded w-[80%]" />
                </div>
              </div>
            </div>
            <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-[#232f50]">
              No Draft to show
            </span>
            <span className="font-['Manrope',sans-serif] font-normal text-[14px] text-[#5c6e93]">
              Create or clone a draft to list here
            </span>
          </div>
          <button className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-[8px] bg-[#e83a7a] cursor-pointer hover:bg-[#d42f6c] transition-colors">
            <Plus size={16} className="text-white" />
            <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-white">
              Create Draft
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const [showMarkModal, setShowMarkModal] = useState(false);
  const [savedMarkers, setSavedMarkers] = useState<Rectangle[]>([]);
  const [focusMarkerId, setFocusMarkerId] = useState<string | null>(null);
  const [noteCardMarkerView, setNoteCardMarkerView] = useState<{ userName: string } | null>(null);

  const { addToast } = useToast();

  const handleSaveMarkers = (markers: Rectangle[]) => {
    setSavedMarkers(markers);
    addToast({
      type: "success",
      title: "Markers saved successfully",
      description: `${markers.length} marker${markers.length !== 1 ? "s" : ""} saved to the document.`,
    });
  };

  const handleMarkerChipClick = (markerId: string) => {
    setFocusMarkerId(markerId);
    setShowMarkModal(true);
  };

  const handleEditMarkup = () => {
    setFocusMarkerId(null);
    setShowMarkModal(true);
  };

  const handleNoteCardMarkerClick = (_marker: NoteMarkerData) => {
    setNoteCardMarkerView({ userName: 'Saleena P' });
  };

  return (
    <div className="bg-muted flex flex-col h-screen w-full font-[var(--font-family-manrope)]">
      {/* Fixed Headers */}
      <div className="flex flex-col shrink-0 sticky top-0 z-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 px-[40px] py-[15px]">
        <div className="flex gap-[16px] h-full">
          <NotesPanel
            onMarkDocument={() => { setFocusMarkerId(null); setShowMarkModal(true); }}
            savedMarkers={savedMarkers}
            onMarkerChipClick={handleMarkerChipClick}
            onNoteCardMarkerClick={handleNoteCardMarkerClick}
          />
          {noteCardMarkerView ? (
            <NoteCardMarkerPanel
              userName={noteCardMarkerView.userName}
              onClose={() => setNoteCardMarkerView(null)}
            />
          ) : savedMarkers.length > 0 ? (
            <MarkedDocumentPanel savedMarkers={savedMarkers} onEdit={handleEditMarkup} />
          ) : (
            <DocumentsPanel />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card shrink-0 border-t border-border">
        <div className="flex items-center justify-between px-[48px] py-[6px]">
          <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-foreground">
            Copyright &copy; 2023, KSmart, Government of Kerala.
          </span>
          <div className="flex gap-[27px]">
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-foreground">
              Terms & Conditions
            </span>
            <span className="font-[var(--font-family-manrope)] font-[var(--font-weight-medium)] text-[14px] text-foreground">
              Privacy & Policy
            </span>
          </div>
        </div>
      </div>

      {/* Mark Document Modal */}
      <MarkDocumentModal
        open={showMarkModal}
        onClose={() => { setShowMarkModal(false); setFocusMarkerId(null); }}
        onSave={handleSaveMarkers}
        initialRectangles={savedMarkers}
        focusRectId={focusMarkerId}
      />

      {/* Global portal-based tooltip provider */}
      <TooltipProvider />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}