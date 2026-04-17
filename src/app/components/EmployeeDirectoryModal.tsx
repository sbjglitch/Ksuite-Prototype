import { useState, useEffect, useMemo, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X, Search, MessageSquareText, ChevronLeft, Phone, Mail, IdCard } from "lucide-react";
import imgAvatar from "figma:asset/3bbe168eab287460eef89ff5351e750f87e0634b.png";
import imgUserPhoto from "figma:asset/beb2533f2c85b048fc5f30200142b8dfd0889992.png";

const BORDER = "#e4e9ef";
const TEXT_MUTED = "#5c6e93";
const TEXT_DARK = "#232f50";
const LINK_BLUE = "#0c3080";

export interface EmployeeDirectoryModalProps {
  open: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
}

type EmployeeRow = {
  id: string;
  name: string;
  designation: string;
  level: string;
  pen: string;
  photo?: string;
  initials: string;
  /** Shown on profile: "Designation — **…**" */
  profileDesignation: string;
  /** Shown on profile: "PEN — **…**" */
  profilePen: string;
  phone: string;
  email: string;
  address: string;
};

const MOCK_EMPLOYEES: EmployeeRow[] = [
  {
    id: "1",
    name: "Sara Woodman",
    designation: "Assistant Manager",
    level: "E1",
    pen: "678 234",
    photo: imgAvatar,
    initials: "SW",
    profileDesignation: "Project Coordinator",
    profilePen: "987 654",
    phone: "+91 9876 543211",
    email: "riya.s@example.com",
    address: "GXF4+892, Kuravankonam, Thiruvananthapuram, Kerala 695003",
  },
  {
    id: "2",
    name: "James Parker",
    designation: "Marketing Lead",
    level: "E2",
    pen: "789 456",
    photo: imgUserPhoto,
    initials: "JP",
    profileDesignation: "Marketing Lead",
    profilePen: "789 456",
    phone: "+91 98470 22110",
    email: "james.parker@ksuite.gov.in",
    address: "Block A, Technopark Phase 3, Kazhakoottam, Kerala 695582",
  },
  {
    id: "3",
    name: "Lily Turner",
    designation: "Software Engineer",
    level: "E3",
    pen: "345 678",
    initials: "LT",
    profileDesignation: "Software Engineer",
    profilePen: "345 678",
    phone: "+91 98765 11002",
    email: "lily.turner@ksuite.gov.in",
    address: "42 MG Road, Kochi, Kerala 682016",
  },
  {
    id: "4",
    name: "Michael King",
    designation: "Product Designer",
    level: "E4",
    pen: "123 456",
    initials: "MK",
    profileDesignation: "Product Designer",
    profilePen: "123 456",
    phone: "+91 98460 99001",
    email: "michael.king@ksuite.gov.in",
    address: "Infopark Cherthala, Alappuzha, Kerala 688541",
  },
  {
    id: "5",
    name: "Alice Davis",
    designation: "Project Lead",
    level: "E2",
    pen: "554 201",
    initials: "AD",
    profileDesignation: "Project Lead",
    profilePen: "554 201",
    phone: "+91 98765 44003",
    email: "alice.davis@ksuite.gov.in",
    address: "Civil Station, Kozhikode, Kerala 673020",
  },
];

function AvatarCell({ row }: { row: EmployeeRow }) {
  return (
    <div className="flex items-center gap-[10px] min-w-0">
      <div
        className="relative rounded-full shrink-0 size-[34px] overflow-hidden flex items-center justify-center"
        style={{
          background: row.photo ? "transparent" : "var(--secondary)",
          border: "1px solid #e8eff4",
        }}
      >
        {row.photo ? (
          <img src={row.photo} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="font-['Manrope',sans-serif] font-bold text-[11px] text-white">{row.initials}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="font-['Manrope',sans-serif] font-semibold text-[11px] text-[#1a2235] truncate leading-[16px]">
          {row.name}
        </p>
        <p className="font-['Manrope',sans-serif] font-medium text-[10px] truncate mt-[2px] leading-[14px]" style={{ color: TEXT_MUTED }}>
          {row.designation}{" "}
          <span className="ml-[4px]">{row.level}</span>
          <span className="ml-[12px]">PEN:{row.pen}</span>
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
  fullWidth,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`rounded-[10px] px-[12px] py-[10px] ${fullWidth ? "col-span-2" : ""}`}
      style={{ border: `1px solid ${BORDER}`, background: "#fff" }}
    >
      <div className="flex items-start gap-[10px]">
        <div className="shrink-0 pt-[1px]" style={{ color: TEXT_DARK }}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-['Manrope',sans-serif] font-medium text-[10px] leading-[14px] mb-[4px]" style={{ color: TEXT_MUTED }}>
            {label}
          </p>
          <p className="font-['Manrope',sans-serif] font-semibold text-[11px] leading-[16px] break-words" style={{ color: TEXT_DARK }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export function EmployeeDirectoryModal({ open, onClose, anchorRect }: EmployeeDirectoryModalProps) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedId(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (selectedId) {
        setSelectedId(null);
        return;
      }
      onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, selectedId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_EMPLOYEES;
    return MOCK_EMPLOYEES.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.designation.toLowerCase().includes(q) ||
        r.pen.replace(/\s/g, "").includes(q.replace(/\s/g, ""))
    );
  }, [query]);

  const selected = useMemo(
    () => (selectedId ? MOCK_EMPLOYEES.find((e) => e.id === selectedId) ?? null : null),
    [selectedId]
  );

  if (!open) return null;

  const width = 348;
  const top = anchorRect ? Math.round(anchorRect.bottom + 8) : 90;
  const preferredLeft = anchorRect ? Math.round(anchorRect.right - width) : window.innerWidth - width - 24;
  const left = Math.min(Math.max(16, preferredLeft), window.innerWidth - width - 16);

  return createPortal(
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
        aria-labelledby="employee-directory-title"
      >
        <div
          className="flex gap-[10px] items-start pt-[16px] px-[16px] pb-[12px] shrink-0"
          style={{ borderBottom: `1px solid ${BORDER}` }}
        >
          <div
            className="rounded-[10px] shrink-0 size-[36px] flex items-center justify-center"
            style={{
              background: "#fff",
              border: `1px solid ${BORDER}`,
              boxShadow: "0px 1px 2px rgba(15,23,42,0.06)",
            }}
          >
            <MessageSquareText size={15} color={TEXT_DARK} strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0 pt-[1px]">
            <h2 id="employee-directory-title" className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#1a2235] leading-[19px]">
              Employee Directory
            </h2>
            <p className="font-['Manrope',sans-serif] font-normal text-[10px] leading-[14px] mt-[2px]" style={{ color: TEXT_MUTED }}>
              View other employees
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

        {selected ? (
          <div className="flex-1 min-h-0 overflow-auto flex flex-col">
            <div className="px-[14px] pt-[10px] pb-[6px] shrink-0">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center gap-[4px] font-['Manrope',sans-serif] font-semibold text-[11px] cursor-pointer bg-transparent border-0 p-0"
                style={{ color: LINK_BLUE }}
              >
                <ChevronLeft size={14} strokeWidth={2.5} />
                Employee Directory
              </button>
            </div>

            <div className="flex flex-col items-center px-[16px] pt-[4px] pb-[12px]">
              <div
                className="relative rounded-full size-[72px] overflow-hidden flex items-center justify-center mb-[10px]"
                style={{
                  background: selected.photo ? "transparent" : "var(--secondary)",
                  border: "1.5px solid #e8eff4",
                }}
              >
                {selected.photo ? (
                  <img src={selected.photo} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-['Manrope',sans-serif] font-bold text-[22px] text-white">{selected.initials}</span>
                )}
              </div>
              <p className="font-['Manrope',sans-serif] font-semibold text-[16px] text-[#1a2235] leading-[22px] text-center">
                {selected.name}
              </p>
              <p className="font-['Manrope',sans-serif] text-[11px] leading-[17px] mt-[8px] text-center" style={{ color: TEXT_MUTED }}>
                Designation —{" "}
                <span className="font-semibold" style={{ color: TEXT_DARK }}>
                  {selected.profileDesignation}
                </span>
              </p>
              <p className="font-['Manrope',sans-serif] text-[11px] leading-[17px] mt-[4px] text-center" style={{ color: TEXT_MUTED }}>
                PEN —{" "}
                <span className="font-semibold" style={{ color: TEXT_DARK }}>
                  {selected.profilePen}
                </span>
              </p>
            </div>

            <div className="px-[14px] pb-[14px] grid grid-cols-2 gap-[8px]">
              <InfoCard icon={<Phone size={16} strokeWidth={2} />} label="Contact" value={selected.phone} />
              <InfoCard icon={<Mail size={16} strokeWidth={2} />} label="Email" value={selected.email} />
              <InfoCard icon={<IdCard size={16} strokeWidth={2} />} label="Address" value={selected.address} fullWidth />
            </div>
          </div>
        ) : (
          <>
            <div className="px-[16px] pt-[10px] pb-[8px] shrink-0">
              <div className="relative">
                <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none" size={15} color={TEXT_MUTED} strokeWidth={2} />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by typing name of the employee"
                  className="w-full rounded-[8px] pl-[38px] pr-[12px] py-[8px] font-['Manrope',sans-serif] text-[11px] outline-none placeholder:text-[#74809d]"
                  style={{ border: `1px solid ${BORDER}`, color: TEXT_DARK }}
                  autoFocus
                />
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-auto px-[16px] pb-[10px]">
              <h3 className="font-['Manrope',sans-serif] font-semibold text-[11px] mb-[6px]" style={{ color: TEXT_DARK }}>
                Recent Searches
              </h3>

              {filtered.length === 0 ? (
                <p className="font-['Manrope',sans-serif] text-[12px] py-[14px] text-center" style={{ color: TEXT_MUTED }}>
                  No employees match your search.
                </p>
              ) : (
                <div className="flex flex-col gap-[2px]">
                  {filtered.map((row) => (
                    <button
                      key={row.id}
                      type="button"
                      onClick={() => setSelectedId(row.id)}
                      className="w-full min-w-0 text-left cursor-pointer rounded-[6px] px-[2px] py-[5px] hover:bg-[#f6f9fb] border-0 bg-transparent"
                    >
                      <AvatarCell row={row} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
