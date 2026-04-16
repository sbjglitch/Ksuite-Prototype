import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ───────── Figma SVG icon paths ───────── */
import successSvgPaths from "../../imports/svg-380fmauguj";
import warningSvgPaths from "../../imports/svg-278z18aakq";
import errorSvgPaths from "../../imports/svg-o8ofa81mkk";
import infoSvgPaths from "../../imports/svg-1ymceu9lkd";

/* ───────── Types ───────── */

export type ToastType = "success" | "warning" | "error" | "info" | "neutral";

export interface ToastData {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextValue {
  addToast: (toast: Omit<ToastData, "id">) => void;
  removeToast: (id: string) => void;
}

/* ───────── Context ───────── */

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

/* ───────── Icons (from Figma SVGs) ───────── */

function SuccessIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d={successSvgPaths.p1e306f00}
          fill="#1EBE72"
          fillRule="evenodd"
        />
        <path
          d="M16 10L11 15L8 12"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function WarningIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d={warningSvgPaths.p1a840500}
          fill="#F1B940"
          fillRule="evenodd"
        />
        <path
          d="M12 10V14"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          clipRule="evenodd"
          d={warningSvgPaths.p2e494600}
          fill="white"
          fillRule="evenodd"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function ErrorIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d={errorSvgPaths.p39406200}
          fill="var(--destructive)"
          fillRule="evenodd"
        />
        <path
          d="M10 10L14 14"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M14 10L10 14"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function InfoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d={infoSvgPaths.p343243c0}
          fill="var(--secondary)"
          fillRule="evenodd"
        />
        <path
          d="M12 8V13"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          clipRule="evenodd"
          d={infoSvgPaths.p32589100}
          fill="white"
          fillRule="evenodd"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function NeutralIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="var(--muted-foreground)" />
        <path
          d="M12 8V13"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="16.25" r="0.75" fill="white" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path
        d="M8 8L16 16"
        stroke="#A2A7B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16 8L8 16"
        stroke="#A2A7B4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const ICON_MAP: Record<ToastType, React.FC> = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  neutral: NeutralIcon,
};

/* ───────── Single Toast Card ───────── */

function ToastCard({
  toast,
  onClose,
  stackIndex,
  totalVisible,
}: {
  toast: ToastData;
  onClose: (id: string) => void;
  stackIndex: number;
  totalVisible: number;
}) {
  const IconComponent = ICON_MAP[toast.type];
  // stackIndex 0 = front-most (newest), 1 = behind, 2 = furthest back
  const offset = stackIndex * 6;
  const scale = 1 - stackIndex * 0.03;
  const zIndex = totalVisible - stackIndex;
  const opacity = stackIndex === 0 ? 1 : stackIndex === 1 ? 0.85 : 0.7;

  return (
    <motion.div
      layout
      initial={{ y: -80, opacity: 0, scale: 0.95 }}
      animate={{
        y: offset,
        opacity,
        scale,
        transition: { type: "spring", stiffness: 400, damping: 30 },
      }}
      exit={{
        y: -80,
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex,
        pointerEvents: stackIndex === 0 ? "auto" : "none",
      }}
      role="status"
      aria-live="polite"
    >
      <div
        className="bg-card relative w-full"
        style={{ borderRadius: "var(--radius)" }}
      >
        <div
          className="flex items-start justify-between overflow-clip px-[16px] py-[16px] w-full"
          style={{ borderRadius: "inherit" }}
        >
          {/* Message container */}
          <div className="flex flex-1 gap-[12px] items-center min-w-0">
            {/* Icon */}
            <IconComponent />
            {/* Text content */}
            <div className="flex flex-col gap-[4px] items-start justify-center min-w-0">
              <p
                className="font-[var(--font-family-manrope)] font-[var(--font-weight-semibold)] text-[var(--text-base)] text-foreground leading-[24px]"
              >
                {toast.title}
              </p>
              {toast.description && (
                <p
                  className="font-[var(--font-family-manrope)] font-[var(--font-weight-normal)] text-[var(--text-sm)] text-muted-foreground leading-[20px]"
                >
                  {toast.description}
                </p>
              )}
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={() => onClose(toast.id)}
            className="relative shrink-0 size-[24px] cursor-pointer rounded-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Dismiss notification"
            style={{ minHeight: "44px", minWidth: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div className="size-[24px]">
              <CloseIcon />
            </div>
          </button>
        </div>
        {/* Border + shadow overlay (from Figma) */}
        <div
          aria-hidden="true"
          className="absolute border border-border inset-0 pointer-events-none"
          style={{
            borderRadius: "var(--radius)",
            boxShadow:
              "0px 20px 24px -4px rgba(10,13,18,0.08), 0px 8px 8px -4px rgba(10,13,18,0.03)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ───────── Toast Container (stacking logic) ───────── */

function ToastContainer({
  toasts,
  removeToast,
}: {
  toasts: ToastData[];
  removeToast: (id: string) => void;
}) {
  // Show max 3 visible layers; oldest beyond 3 are hidden
  const visibleToasts = toasts.slice(0, 3);

  return (
    <div
      className="fixed top-[24px] left-1/2 z-50"
      style={{
        transform: "translateX(-50%)",
        width: "min(380px, calc(100vw - 32px))",
      }}
    >
      {/* Reserve height for stacking; tallest card ~80px + offsets */}
      <div className="relative" style={{ minHeight: visibleToasts.length > 0 ? "80px" : 0 }}>
        <AnimatePresence mode="popLayout">
          {visibleToasts.map((toast, i) => (
            <ToastCard
              key={toast.id}
              toast={toast}
              onClose={removeToast}
              stackIndex={i}
              totalVisible={visibleToasts.length}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ───────── Provider ───────── */

let toastCounter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const removeToast = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<ToastData, "id">) => {
      const id = `toast-${++toastCounter}`;
      const duration = toast.duration ?? 5000;
      const newToast: ToastData = { ...toast, id };

      setToasts((prev) => {
        // Prepend newest to front; keep max 5 in memory
        const updated = [newToast, ...prev].slice(0, 5);
        return updated;
      });

      // Auto-dismiss
      const timer = setTimeout(() => {
        removeToast(id);
      }, duration);
      timersRef.current.set(id, timer);
    },
    [removeToast]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}
