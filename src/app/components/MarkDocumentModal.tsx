import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Printer,
  PenLine,
  ChevronLeft,
  ChevronRight,
  Check,
  MessageCircle,
  Trash2,
  Pencil,
  FileText,
} from "lucide-react";
import { DocumentPage, TOTAL_PDF_PAGES } from "./DocumentPages";

// Page dimensions used for layout
const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const PAGE_GAP = 24;

// Mock attachments for footer pagination
export const ATTACHMENTS = [
  { id: 1, name: "Legal_Notice.pdf", pages: TOTAL_PDF_PAGES, type: "pdf" },
  { id: 2, name: "Exhibit_A_PSA.pdf", pages: 3, type: "pdf" },
  { id: 3, name: "Exhibit_B_Declaration.pdf", pages: 2, type: "pdf" },
  { id: 4, name: "Exhibit_C_Denial.pdf", pages: 1, type: "pdf" },
  { id: 5, name: "Exhibit_D_Guarantee.pdf", pages: 4, type: "pdf" },
];

export interface Rectangle {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  comment: string;
  attachmentId: number;
  state: "pending" | "confirmed" | "commenting" | "editing";
}

interface MarkDocumentModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (rectangles: Rectangle[]) => void;
  initialRectangles?: Rectangle[];
  focusRectId?: string | null;
}

export function MarkDocumentModal({ open, onClose, onSave, initialRectangles, focusRectId }: MarkDocumentModalProps) {
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStart, setDrawStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [currentRect, setCurrentRect] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [markupMode, setMarkupMode] = useState(true);
  const [currentAttachment, setCurrentAttachment] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [hoveredRect, setHoveredRect] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState("");
  const [resizing, setResizing] = useState<{
    id: string;
    handle: string;
    startX: number;
    startY: number;
    origRect: { x: number; y: number; width: number; height: number };
  } | null>(null);
  const [editingBackup, setEditingBackup] = useState<{
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    comment: string;
  } | null>(null);
  const [visiblePage, setVisiblePage] = useState(1);
  const [scrollRatio, setScrollRatio] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const attachment = ATTACHMENTS[currentAttachment];
  const attachmentPages =
    currentAttachment === 0 ? TOTAL_PDF_PAGES : attachment.pages;

  // Filter rectangles for the current attachment
  const attachmentRectangles = rectangles.filter(
    (r) => r.attachmentId === attachment.id
  );

  const pendingRect = rectangles.find((r) => r.state === "pending");
  const editingRect = rectangles.find((r) => r.state === "editing");
  const hasPending = !!pendingRect || !!editingRect;

  // Track which page is visible based on scroll position
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollTop = container.scrollTop;
    const pageWithGap = (PAGE_HEIGHT + PAGE_GAP) * zoom;
    const page = Math.floor((scrollTop + pageWithGap * 0.4) / pageWithGap) + 1;
    setVisiblePage(Math.min(Math.max(1, page), attachmentPages));
    setScrollRatio(scrollTop / (container.scrollHeight - container.clientHeight));
  }, [zoom, attachmentPages]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!markupMode || hasPending) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / zoom;
      const y = (e.clientY - rect.top) / zoom;
      setIsDrawing(true);
      setDrawStart({ x, y });
      setCurrentRect({ x, y, width: 0, height: 0 });
    },
    [markupMode, zoom, hasPending]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (resizing) {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const mouseX = (e.clientX - rect.left) / zoom;
        const mouseY = (e.clientY - rect.top) / zoom;
        const dx = mouseX - resizing.startX;
        const dy = mouseY - resizing.startY;
        const orig = resizing.origRect;

        let newX = orig.x,
          newY = orig.y,
          newW = orig.width,
          newH = orig.height;

        if (resizing.handle.includes("right")) {
          newW = Math.max(20, orig.width + dx);
        }
        if (resizing.handle.includes("left")) {
          newX = orig.x + dx;
          newW = Math.max(20, orig.width - dx);
        }
        if (resizing.handle.includes("bottom")) {
          newH = Math.max(20, orig.height + dy);
        }
        if (resizing.handle.includes("top")) {
          newY = orig.y + dy;
          newH = Math.max(20, orig.height - dy);
        }

        setRectangles((prev) =>
          prev.map((r) =>
            r.id === resizing.id
              ? { ...r, x: newX, y: newY, width: newW, height: newH }
              : r
          )
        );
        return;
      }

      if (!isDrawing || !drawStart) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / zoom;
      const y = (e.clientY - rect.top) / zoom;
      setCurrentRect({
        x: Math.min(drawStart.x, x),
        y: Math.min(drawStart.y, y),
        width: Math.abs(x - drawStart.x),
        height: Math.abs(y - drawStart.y),
      });
    },
    [isDrawing, drawStart, zoom, resizing]
  );

  const handleMouseUp = useCallback(() => {
    if (resizing) {
      setResizing(null);
      return;
    }
    if (!isDrawing || !currentRect) {
      setIsDrawing(false);
      return;
    }
    if (currentRect.width > 10 && currentRect.height > 10) {
      const newRect: Rectangle = {
        id: `rect-${Date.now()}`,
        ...currentRect,
        comment: "",
        attachmentId: attachment.id,
        state: "pending",
      };
      setRectangles((prev) => [...prev, newRect]);
    }
    setIsDrawing(false);
    setDrawStart(null);
    setCurrentRect(null);
  }, [isDrawing, currentRect, resizing, attachment.id]);

  const handleConfirmRect = (id: string) => {
    setRectangles((prev) =>
      prev.map((r) => (r.id === id ? { ...r, state: "confirmed" } : r))
    );
  };

  const handleCancelRect = (id: string) => {
    setRectangles((prev) => prev.filter((r) => r.id !== id));
  };

  const handleDeleteRect = (id: string) => {
    setRectangles((prev) => prev.filter((r) => r.id !== id));
    setHoveredRect(null);
  };

  const handleStartCommenting = (id: string) => {
    setRectangles((prev) =>
      prev.map((r) => (r.id === id ? { ...r, state: "commenting" } : r))
    );
    setCommentInput("");
  };

  const handleSubmitComment = (id: string) => {
    if (!commentInput.trim()) return;
    setRectangles((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, comment: commentInput.trim(), state: "confirmed" }
          : r
      )
    );
    setCommentInput("");
  };

  const handleDeleteComment = (id: string) => {
    setRectangles((prev) =>
      prev.map((r) => (r.id === id ? { ...r, comment: "" } : r))
    );
  };

  const handleStartEditing = (id: string) => {
    const rect = rectangles.find((r) => r.id === id);
    if (!rect) return;
    setEditingBackup({
      id: rect.id,
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      comment: rect.comment,
    });
    setRectangles((prev) =>
      prev.map((r) => (r.id === id ? { ...r, state: "editing" } : r))
    );
    setCommentInput(rect.comment);
    setHoveredRect(null);
  };

  const handleConfirmEdit = (id: string) => {
    setRectangles((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, comment: commentInput.trim(), state: "confirmed" }
          : r
      )
    );
    setCommentInput("");
    setEditingBackup(null);
  };

  const handleCancelEdit = (id: string) => {
    if (editingBackup && editingBackup.id === id) {
      setRectangles((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                x: editingBackup.x,
                y: editingBackup.y,
                width: editingBackup.width,
                height: editingBackup.height,
                comment: editingBackup.comment,
                state: "confirmed",
              }
            : r
        )
      );
    } else {
      setRectangles((prev) =>
        prev.map((r) => (r.id === id ? { ...r, state: "confirmed" } : r))
      );
    }
    setCommentInput("");
    setEditingBackup(null);
  };

  const startResize = (
    e: React.MouseEvent,
    rectId: string,
    handle: string
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const r = rectangles.find((rect) => rect.id === rectId);
    if (!r) return;
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;
    setResizing({
      id: rectId,
      handle,
      startX: (e.clientX - canvasRect.left) / zoom,
      startY: (e.clientY - canvasRect.top) / zoom,
      origRect: { x: r.x, y: r.y, width: r.width, height: r.height },
    });
  };

  const handleSave = () => {
    const confirmedToSave = rectangles
      .filter((r) => r.state !== "pending")
      .map((r) => ({ ...r, state: "confirmed" as const }));
    onSave?.(confirmedToSave);
    onClose();
  };

  const switchAttachment = (index: number) => {
    if (index >= 0 && index < ATTACHMENTS.length) {
      setCurrentAttachment(index);
      setVisiblePage(1);
      // Scroll to top when switching attachments
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  // Scroll to a specific annotation rectangle
  const scrollToAnnotation = useCallback(
    (rect: Rectangle) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      // rect.y is in unscaled canvas coords. The scroll container has:
      // paddingTop 44 (header pill) + inner padding 24
      const SCROLL_PADDING_TOP = 44 + 24;
      const targetScroll =
        rect.y * zoom + SCROLL_PADDING_TOP - container.clientHeight / 3;
      container.scrollTo({ top: Math.max(0, targetScroll), behavior: "smooth" });
    },
    [zoom]
  );

  // Total document height in unscaled coords for annotation track mapping
  const totalDocHeight =
    attachmentPages * PAGE_HEIGHT + (attachmentPages - 1) * PAGE_GAP;

  useEffect(() => {
    if (open) {
      // Restore rectangles from initial state
      if (initialRectangles && initialRectangles.length > 0) {
        setRectangles(initialRectangles);
      }
    } else {
      setRectangles([]);
      setCommentInput("");
      setCurrentAttachment(0);
      setZoom(1);
      setHoveredRect(null);
      setResizing(null);
      setEditingBackup(null);
      setVisiblePage(1);
    }
  }, [open]);

  // Scroll to focused rectangle when modal opens
  useEffect(() => {
    if (open && focusRectId && rectangles.length > 0) {
      const rect = rectangles.find((r) => r.id === focusRectId);
      if (rect) {
        // Switch to the correct attachment
        const attIdx = ATTACHMENTS.findIndex((a) => a.id === rect.attachmentId);
        if (attIdx >= 0 && attIdx !== currentAttachment) {
          setCurrentAttachment(attIdx);
        }
        // Delay scroll to allow layout to settle
        setTimeout(() => scrollToAnnotation(rect), 300);
      }
    }
  }, [open, focusRectId, rectangles.length]);

  // Attach scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !open) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [open, handleScroll]);

  if (!open) return null;

  const confirmedRects = rectangles.filter((r) => r.state !== "pending");
  const getMarkerIndex = (rect: Rectangle) => {
    return confirmedRects.indexOf(rect) + 1;
  };

  // Count annotations per attachment for dot indicators
  const getAttachmentAnnotationCount = (attId: number) =>
    rectangles.filter(
      (r) => r.attachmentId === attId && r.state !== "pending"
    ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative bg-white rounded-[8px] flex flex-col overflow-hidden shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)]"
        style={{ width: "min(964px, 95vw)", height: "min(803px, 90vh)" }}
      >
        {/* Header */}
        <div className="bg-white shrink-0 w-full z-[3]">
          <div className="flex gap-[16px] items-start pt-[24px] px-[24px]">
            {/* Icon */}
            <div className="bg-white rounded-[10px] shrink-0 size-[48px] flex items-center justify-center border border-[#e9eaeb] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
              <PenLine size={16} className="text-[#232F50]" />
            </div>
            {/* Title area */}
            <div className="flex-1 flex flex-col gap-[4px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[16px] text-[#181d27]">
                Markup
              </p>
              <div className="flex gap-[4px] items-center flex-wrap">
                <p className="font-['Manrope',sans-serif] font-normal text-[14px] text-[#535862]">
                  Mark The Document and add comment
                </p>
                {hasPending && (
                  <div className="bg-[#e8eff4] rounded-[4px] px-[8px] py-[4px]">
                    <p className="font-['Manrope',sans-serif] font-normal text-[14px] text-[#0c3080]">
                      Draw a rectangle over the part you want to highlight
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="bg-white rounded-[8px] size-[32px] flex items-center justify-center border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors"
              data-tooltip="Close"
            >
              <X size={16} className="text-[#323232]" />
            </button>
          </div>
          <div className="h-[20px]" />
          <div className="h-px bg-[#e9eaeb] w-full" />
        </div>

        {/* Document Viewer */}
        <div className="flex-1 min-h-0 w-full z-[2]">
          <div className="flex flex-col items-start p-[16px] h-full">
            <div
              className="bg-[#e8eff4] flex-1 w-full rounded-[4px] relative overflow-hidden"
              style={{
                border: markupMode
                  ? "1px solid #33c1ef"
                  : "1px solid #e8eff4",
                boxShadow: markupMode
                  ? "0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 4px #e5f7fd"
                  : "none",
              }}
            >
              {/* File name label + page indicator */}
              <div className="absolute top-[12px] left-[16px] z-10 flex items-center gap-[8px]">
                <div className="bg-white/90 backdrop-blur-sm rounded-[6px] px-[10px] py-[4px] flex items-center gap-[8px] shadow-sm border border-[#e8eff4]">
                  <FileText size={14} className="text-[#5c6e93]" />
                  <p className="font-['Manrope',sans-serif] font-medium text-[13px] text-[#5c6e93]">
                    {attachment.name}
                  </p>
                  <span className="font-['Manrope',sans-serif] font-normal text-[11px] text-[#a2a7b4]">
                    Page {visiblePage} of {attachmentPages}
                  </span>
                  {getAttachmentAnnotationCount(attachment.id) > 0 && (
                    <span className="bg-[#00b2eb] text-white text-[10px] font-semibold font-['Manrope',sans-serif] px-[6px] py-[1px] rounded-full">
                      {getAttachmentAnnotationCount(attachment.id)}
                    </span>
                  )}
                </div>
              </div>

              {/* Scrollable document area */}
              <div
                ref={scrollContainerRef}
                className="w-full h-full overflow-auto"
                style={{ paddingTop: 44 }}
              >
                <div
                  className="flex flex-col items-center"
                  style={{ padding: "24px 40px 40px" }}
                >
                  <div
                    ref={canvasRef}
                    className="relative"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: "top center",
                      width: PAGE_WIDTH,
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={() => {
                      if (resizing) setResizing(null);
                      if (isDrawing) {
                        setIsDrawing(false);
                        setDrawStart(null);
                        setCurrentRect(null);
                      }
                    }}
                  >
                    {/* All pages stacked vertically */}
                    <div
                      style={{
                        cursor:
                          markupMode && !hasPending ? "crosshair" : "default",
                      }}
                    >
                      {Array.from({ length: attachmentPages }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            marginBottom:
                              i < attachmentPages - 1 ? PAGE_GAP : 0,
                          }}
                        >
                          {currentAttachment === 0 ? (
                            <DocumentPage pageNumber={i + 1} />
                          ) : (
                            // Placeholder pages for other attachments
                            <div
                              className="bg-white select-none"
                              style={{
                                width: PAGE_WIDTH,
                                height: PAGE_HEIGHT,
                                padding: "60px 72px",
                                fontFamily:
                                  "'Times New Roman', 'Georgia', serif",
                                fontSize: 11.5,
                                lineHeight: 1.6,
                                color: "#1a1a1a",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "center",
                                  marginBottom: 24,
                                }}
                              >
                                <h1
                                  style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    marginBottom: 6,
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {attachment.name.replace(".pdf", "")}
                                </h1>
                                <p
                                  style={{
                                    fontSize: 10,
                                    color: "#888",
                                    fontStyle: "italic",
                                  }}
                                >
                                  Page {i + 1} of {attachmentPages}
                                </p>
                              </div>
                              <div style={{ marginTop: 40 }}>
                                <p style={{ marginBottom: 12 }}>
                                  This exhibit is part of the case materials for
                                  Johnson Holdings LLC v. Pacific Rim
                                  Development Corp., Case No. 2026-CV-04821.
                                </p>
                                <p style={{ marginBottom: 12 }}>
                                  The contents of this document are confidential
                                  and subject to attorney-client privilege. Any
                                  unauthorized distribution or reproduction is
                                  strictly prohibited.
                                </p>
                                {i === 0 && (
                                  <>
                                    <p
                                      style={{
                                        marginTop: 24,
                                        marginBottom: 8,
                                        fontWeight: 700,
                                      }}
                                    >
                                      DOCUMENT SUMMARY
                                    </p>
                                    <p>
                                      This document contains evidentiary
                                      materials referenced in the Motion for
                                      Summary Judgment filed on January 15,
                                      2026. All exhibits have been authenticated
                                      through declarations filed concurrently
                                      with the motion.
                                    </p>
                                  </>
                                )}
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: 32,
                                  left: 72,
                                  right: 72,
                                  borderTop: "1px solid #ccc",
                                  paddingTop: 8,
                                  display: "flex",
                                  justifyContent: "space-between",
                                  fontSize: 9,
                                  color: "#888",
                                }}
                              >
                                <span>
                                  {attachment.name} - Page {i + 1} of{" "}
                                  {attachmentPages}
                                </span>
                                <span>Confidential</span>
                              </div>
                            </div>
                          )}
                          {/* Page shadow between pages */}
                          {i < attachmentPages - 1 && (
                            <div
                              className="w-full"
                              style={{
                                height: 0,
                                boxShadow:
                                  "0 4px 12px rgba(0,0,0,0.08)",
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Existing rectangles for current attachment */}
                    {attachmentRectangles.map((rect) => {
                      const isPending = rect.state === "pending";
                      const isEditing = rect.state === "editing";
                      const isCommenting = rect.state === "commenting";
                      const isConfirmed = rect.state === "confirmed";
                      const isHovered = hoveredRect === rect.id;
                      const markerIdx = !isPending
                        ? getMarkerIndex(rect)
                        : 0;

                      return (
                        <div
                          key={rect.id}
                          className="absolute"
                          style={{
                            left: rect.x - 12,
                            top: rect.y - 40,
                            width: rect.width + 24,
                            height: rect.height + 52,
                            zIndex: isPending || isEditing ? 20 : 5,
                            pointerEvents:
                              isPending || isEditing ? "auto" : undefined,
                          }}
                          onMouseEnter={() => {
                            if (!isPending) setHoveredRect(rect.id);
                          }}
                          onMouseLeave={() => setHoveredRect(null)}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Inner rectangle */}
                          <div
                            className="absolute"
                            style={{
                              left: 12,
                              top: 40,
                              width: rect.width,
                              height: rect.height,
                            }}
                          >
                            {/* Rectangle border */}
                            <div
                              className="absolute inset-0 border-2"
                              style={{
                                borderColor: isEditing
                                  ? "#f59e0b"
                                  : "#00b2eb",
                                borderStyle:
                                  isPending || isEditing ? "dashed" : "solid",
                                backgroundColor: "rgba(0, 178, 235, 0.08)",
                              }}
                            />

                            {/* Pending/Editing: resize handles + confirm/cancel */}
                            {(isPending || isEditing) && (
                              <>
                                {[
                                  "top-left",
                                  "top-right",
                                  "bottom-left",
                                  "bottom-right",
                                ].map((handle) => {
                                  const pos: React.CSSProperties = {};
                                  if (handle.includes("top")) pos.top = -4;
                                  if (handle.includes("bottom"))
                                    pos.bottom = -4;
                                  if (handle.includes("left")) pos.left = -4;
                                  if (handle.includes("right"))
                                    pos.right = -4;
                                  const cursorMap: Record<string, string> = {
                                    "top-left": "nwse-resize",
                                    "top-right": "nesw-resize",
                                    "bottom-left": "nesw-resize",
                                    "bottom-right": "nwse-resize",
                                  };
                                  return (
                                    <div
                                      key={handle}
                                      className={`absolute size-[8px] bg-white border-2 rounded-[1px] z-30 ${isEditing ? "border-[#f59e0b]" : "border-[#00b2eb]"}`}
                                      style={{
                                        ...pos,
                                        cursor: cursorMap[handle],
                                      }}
                                      onMouseDown={(e) =>
                                        startResize(e, rect.id, handle)
                                      }
                                    />
                                  );
                                })}
                                {["top", "bottom", "left", "right"].map(
                                  (handle) => {
                                    const pos: React.CSSProperties = {
                                      position: "absolute",
                                    };
                                    if (handle === "top") {
                                      pos.top = -4;
                                      pos.left = "50%";
                                      pos.transform = "translateX(-50%)";
                                      pos.cursor = "ns-resize";
                                    }
                                    if (handle === "bottom") {
                                      pos.bottom = -4;
                                      pos.left = "50%";
                                      pos.transform = "translateX(-50%)";
                                      pos.cursor = "ns-resize";
                                    }
                                    if (handle === "left") {
                                      pos.left = -4;
                                      pos.top = "50%";
                                      pos.transform = "translateY(-50%)";
                                      pos.cursor = "ew-resize";
                                    }
                                    if (handle === "right") {
                                      pos.right = -4;
                                      pos.top = "50%";
                                      pos.transform = "translateY(-50%)";
                                      pos.cursor = "ew-resize";
                                    }
                                    return (
                                      <div
                                        key={handle}
                                        className={`size-[8px] bg-white border-2 rounded-[1px] z-30 ${isEditing ? "border-[#f59e0b]" : "border-[#00b2eb]"}`}
                                        style={pos}
                                        onMouseDown={(e) =>
                                          startResize(e, rect.id, handle)
                                        }
                                      />
                                    );
                                  }
                                )}

                                {/* Confirm & Cancel */}
                                <div
                                  className="absolute flex gap-[2px] z-30"
                                  style={{ top: -30, right: -4 }}
                                >
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      isEditing
                                        ? handleConfirmEdit(rect.id)
                                        : handleConfirmRect(rect.id);
                                    }}
                                    className={`size-[24px] rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-md ${isEditing ? "bg-[#f59e0b] hover:bg-[#d97706]" : "bg-[#00b2eb] hover:bg-[#009fd4]"}`}
                                    data-tooltip="Confirm"
                                  >
                                    <Check
                                      size={14}
                                      className="text-white"
                                      strokeWidth={3}
                                    />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      isEditing
                                        ? handleCancelEdit(rect.id)
                                        : handleCancelRect(rect.id);
                                    }}
                                    className="size-[24px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors shadow-md border border-[#e8eff4]"
                                    data-tooltip="Cancel"
                                  >
                                    <X
                                      size={14}
                                      className="text-[#535862]"
                                      strokeWidth={2.5}
                                    />
                                  </button>
                                </div>

                                {/* Comment input for editing mode */}
                                {isEditing && (
                                  <div
                                    className="absolute z-30"
                                    style={{
                                      top: rect.height + 8,
                                      left: 0,
                                    }}
                                  >
                                    <div className="flex items-center gap-[6px] bg-white rounded-[8px] shadow-lg border border-[#f59e0b] px-[8px] py-[6px] min-w-[200px]">
                                      <Pencil
                                        size={12}
                                        className="text-[#f59e0b] shrink-0"
                                      />
                                      <input
                                        type="text"
                                        autoFocus
                                        placeholder="Edit comment..."
                                        className="flex-1 bg-transparent border-none outline-none font-['Manrope',sans-serif] text-[12px] text-[#232f50] placeholder:text-[#a2a7b4] min-w-[120px]"
                                        value={commentInput}
                                        onChange={(e) =>
                                          setCommentInput(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter")
                                            handleConfirmEdit(rect.id);
                                          if (e.key === "Escape")
                                            handleCancelEdit(rect.id);
                                        }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </>
                            )}

                            {/* Confirmed: marker badge + hover actions */}
                            {(isConfirmed || isCommenting) && (
                              <>
                                <div className="absolute -top-[10px] -left-[10px] size-[22px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold font-['Manrope',sans-serif] bg-[#00b2eb] z-10 shadow-sm">
                                  {markerIdx}
                                </div>

                                {isHovered && isConfirmed && (
                                  <div
                                    className="absolute flex gap-[4px] z-30"
                                    style={{ top: -32, left: 12 }}
                                  >
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleStartCommenting(rect.id);
                                      }}
                                      className="size-[26px] bg-[#00b2eb] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#009fd4] transition-colors shadow-md"
                                      title="Add comment"
                                    >
                                      <MessageCircle
                                        size={14}
                                        className="text-white"
                                      />
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleStartEditing(rect.id);
                                      }}
                                      className="size-[26px] bg-[#f59e0b] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d97706] transition-colors shadow-md"
                                      title="Edit marking"
                                    >
                                      <Pencil
                                        size={14}
                                        className="text-white"
                                      />
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteRect(rect.id);
                                      }}
                                      className="size-[26px] bg-[#e83a7a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d42f6c] transition-colors shadow-md"
                                      title="Delete marking"
                                    >
                                      <Trash2
                                        size={14}
                                        className="text-white"
                                      />
                                    </button>
                                  </div>
                                )}

                                {isConfirmed && rect.comment && (
                                  <div
                                    className="absolute z-20 group/comment"
                                    style={{
                                      top: rect.height + 4,
                                      left: 0,
                                    }}
                                  >
                                    <div className="flex items-start gap-[6px] bg-white rounded-[6px] shadow-md border border-[#e8eff4] px-[10px] py-[6px] max-w-[220px]">
                                      <div className="size-[18px] rounded-full bg-[#00b2eb] flex items-center justify-center text-white text-[10px] font-semibold font-['Manrope',sans-serif] shrink-0 mt-[1px]">
                                        {markerIdx}
                                      </div>
                                      <p className="font-['Manrope',sans-serif] font-normal text-[12px] text-[#323232] flex-1 leading-[18px]">
                                        {rect.comment}
                                      </p>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDeleteComment(rect.id);
                                        }}
                                        className="size-[18px] rounded-full bg-[#e83a7a] flex items-center justify-center cursor-pointer opacity-0 group-hover/comment:opacity-100 transition-opacity shrink-0 mt-[1px]"
                                        title="Delete comment"
                                      >
                                        <Trash2
                                          size={10}
                                          className="text-white"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                )}

                                {isCommenting && (
                                  <div
                                    className="absolute z-30"
                                    style={{
                                      top: rect.height + 4,
                                      left: 0,
                                    }}
                                  >
                                    <div className="flex items-center gap-[6px] bg-white rounded-[8px] shadow-lg border border-[#e8eff4] px-[8px] py-[6px] min-w-[200px]">
                                      <input
                                        type="text"
                                        autoFocus
                                        placeholder="Add a comment..."
                                        className="flex-1 bg-transparent border-none outline-none font-['Manrope',sans-serif] text-[12px] text-[#232f50] placeholder:text-[#a2a7b4] min-w-[120px]"
                                        value={commentInput}
                                        onChange={(e) =>
                                          setCommentInput(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter")
                                            handleSubmitComment(rect.id);
                                          if (e.key === "Escape") {
                                            setRectangles((prev) =>
                                              prev.map((r) =>
                                                r.id === rect.id
                                                  ? {
                                                      ...r,
                                                      state: "confirmed",
                                                    }
                                                  : r
                                              )
                                            );
                                            setCommentInput("");
                                          }
                                        }}
                                      />
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleSubmitComment(rect.id);
                                        }}
                                        className="size-[24px] bg-[#00b2eb] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#009fd4] transition-colors shrink-0"
                                        data-tooltip="Submit Comment"
                                      >
                                        <Check
                                          size={12}
                                          className="text-white"
                                          strokeWidth={3}
                                        />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDeleteRect(rect.id);
                                        }}
                                        className="size-[24px] bg-[#e83a7a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d42f6c] transition-colors shrink-0"
                                        data-tooltip="Delete"
                                      >
                                        <Trash2
                                          size={12}
                                          className="text-white"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Currently drawing rectangle */}
                    {isDrawing && currentRect && (
                      <div
                        className="absolute border-2 border-dashed border-[#00b2eb] bg-[rgba(0,178,235,0.08)]"
                        style={{
                          left: currentRect.x,
                          top: currentRect.y,
                          width: currentRect.width,
                          height: currentRect.height,
                          pointerEvents: "none",
                          zIndex: 10,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Annotation scrollbar track — right edge */}
              {attachmentRectangles.filter((r) => r.state !== "pending")
                .length > 0 && (
                <div
                  className="absolute top-[44px] right-[2px] bottom-0 z-20 flex flex-col"
                  style={{ width: 22, pointerEvents: "none" }}
                >
                  <div className="relative w-full h-full">
                    {/* Thin track line */}
                    <div
                      className="absolute left-[10px] top-[8px] bottom-[8px]"
                      style={{
                        width: 2,
                        backgroundColor: "rgba(0, 178, 235, 0.15)",
                        borderRadius: 1,
                      }}
                    />
                    {/* Annotation markers */}
                    {attachmentRectangles
                      .filter((r) => r.state !== "pending")
                      .map((rect) => {
                        const markerIdx = getMarkerIndex(rect);
                        const yCenter = rect.y + rect.height / 2;
                        const yRatio =
                          totalDocHeight > 0 ? yCenter / totalDocHeight : 0;
                        const topPercent = Math.min(
                          Math.max(yRatio * 100, 1),
                          99
                        );

                        return (
                          <button
                            key={rect.id}
                            className="absolute flex items-center justify-center group/marker transition-all"
                            style={{
                              top: `calc(${topPercent}% - 8px)`,
                              left: 0,
                              width: 22,
                              height: 16,
                              pointerEvents: "auto",
                              cursor: "pointer",
                            }}
                            onClick={() => scrollToAnnotation(rect)}
                            title={
                              rect.comment
                                ? `#${markerIdx}: ${rect.comment}`
                                : `Annotation #${markerIdx}`
                            }
                          >
                            {/* Blue line indicator */}
                            <div
                              className="transition-all group-hover/marker:scale-y-150"
                              style={{
                                width: 16,
                                height: 3,
                                backgroundColor: "#00b2eb",
                                borderRadius: 2,
                                boxShadow: "0 0 4px rgba(0, 178, 235, 0.4)",
                              }}
                            />
                            {/* Tooltip on hover */}
                            <div
                              className="absolute right-[24px] opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none"
                              style={{ top: -2 }}
                            >
                              <div className="bg-[#00b2eb] text-white rounded-[4px] px-[6px] py-[2px] flex items-center gap-[4px] shadow-md whitespace-nowrap">
                                <span className="font-['Manrope',sans-serif] font-semibold text-[10px]">
                                  #{markerIdx}
                                </span>
                                {rect.comment && (
                                  <span className="font-['Manrope',sans-serif] font-normal text-[10px] max-w-[120px] truncate">
                                    {rect.comment}
                                  </span>
                                )}
                              </div>
                              {/* Arrow pointing right */}
                              <div
                                className="absolute top-[5px] -right-[4px]"
                                style={{
                                  width: 0,
                                  height: 0,
                                  borderTop: "4px solid transparent",
                                  borderBottom: "4px solid transparent",
                                  borderLeft: "4px solid #00b2eb",
                                }}
                              />
                            </div>
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 w-full z-[1] border-t border-[#e8eff4]">
          <div className="flex items-center justify-between px-[24px] py-[16px]">
            {/* Left tools */}
            <div className="flex gap-[8px] items-center">
              {/* Zoom controls */}
              <div className="bg-white rounded-[8px] border border-[#e7eff5] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] flex items-center gap-[10px] p-[6px]">
                <button
                  onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
                  className="size-[16px] flex items-center justify-center cursor-pointer"
                  data-tooltip="Zoom In"
                >
                  <ZoomIn size={16} className="text-[#5c6e93]" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(0.3, z - 0.1))}
                  className="size-[16px] flex items-center justify-center cursor-pointer"
                  data-tooltip="Zoom Out"
                >
                  <ZoomOut size={16} className="text-[#5c6e93]" />
                </button>
                <button
                  onClick={() => setZoom(1)}
                  className="size-[16px] flex items-center justify-center cursor-pointer"
                  data-tooltip="Reset Zoom"
                >
                  <Maximize2 size={16} className="text-[#5c6e93]" />
                </button>
              </div>

              {/* Download/Print */}
              <div className="bg-white rounded-[8px] border border-[#e7eff5] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04)] flex items-center gap-[10px] p-[6px]">
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Download">
                  <Download size={16} className="text-[#5c6e93]" />
                </button>
                <button className="size-[16px] flex items-center justify-center cursor-pointer" data-tooltip="Print">
                  <Printer size={16} className="text-[#5c6e93]" />
                </button>
              </div>

              {/* Markup toggle */}
              <button
                onClick={() => setMarkupMode(!markupMode)}
                className="rounded-[8px] size-[36px] flex items-center justify-center cursor-pointer transition-all"
                data-tooltip={markupMode ? "Disable Markup" : "Enable Markup"}
                style={{
                  backgroundColor: markupMode ? "#e83a7a" : "white",
                  border: markupMode
                    ? "1px solid #f6b0ca"
                    : "1px solid #e8eff4",
                  boxShadow: markupMode
                    ? "0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 4px #fdebf2"
                    : "0px 1px 2px 0px rgba(10,13,18,0.05)",
                }}
              >
                <PenLine
                  size={16}
                  className={
                    markupMode ? "text-white" : "text-[#5c6e93]"
                  }
                />
              </button>
            </div>

            {/* Right - attachment pagination & actions */}
            <div className="flex items-center gap-[6px]">
              {/* Previous attachment */}
              <button
                onClick={() => switchAttachment(currentAttachment - 1)}
                disabled={currentAttachment <= 0}
                className="bg-white rounded-[8px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex items-center gap-[6px] px-[10px] py-[8px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-colors hover:bg-gray-50"
              >
                <ChevronLeft size={12} className="text-[#a2a7b4]" />
                <span className="font-['Manrope',sans-serif] font-semibold text-[11px] text-[#a2a7b4]">
                  Previous
                </span>
              </button>

              {/* Attachment number buttons */}
              {ATTACHMENTS.map((att, idx) => (
                <button
                  key={att.id}
                  onClick={() => switchAttachment(idx)}
                  className="size-[26px] rounded-[7px] flex items-center justify-center cursor-pointer transition-all relative"
                  style={{
                    backgroundColor:
                      currentAttachment === idx ? "#00b2eb" : "white",
                    border:
                      currentAttachment === idx
                        ? "1px solid #00b2eb"
                        : "1px solid #e8eff4",
                    boxShadow:
                      currentAttachment === idx
                        ? "0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 4px #e5f7fd"
                        : "0px 1px 2px 0px rgba(10,13,18,0.05)",
                  }}
                  title={att.name}
                >
                  <span
                    className="font-['Manrope',sans-serif] font-semibold text-[13px]"
                    style={{
                      color:
                        currentAttachment === idx ? "white" : "#5c6e93",
                    }}
                  >
                    {idx + 1}
                  </span>
                  {/* Annotation dot indicator */}
                  {getAttachmentAnnotationCount(att.id) > 0 &&
                    currentAttachment !== idx && (
                      <div className="absolute -top-[3px] -right-[3px] size-[8px] bg-[#e83a7a] rounded-full border border-white" />
                    )}
                </button>
              ))}

              {/* Next attachment */}
              <button
                onClick={() => switchAttachment(currentAttachment + 1)}
                disabled={currentAttachment >= ATTACHMENTS.length - 1}
                className="bg-white rounded-[8px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex items-center gap-[6px] px-[10px] py-[8px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-colors hover:bg-gray-50"
              >
                <span className="font-['Manrope',sans-serif] font-semibold text-[11px] text-[#5c6e93]">
                  Next
                </span>
                <ChevronRight size={12} className="text-[#5c6e93]" />
              </button>

              {/* Cancel & Save */}
              <div className="flex items-center ml-[12px]">
                <button
                  onClick={onClose}
                  className="px-[16px] py-[7px] rounded-[8px] cursor-pointer bg-transparent border-none"
                >
                  <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#5c6e93]">
                    Cancel
                  </span>
                </button>
                <button
                  onClick={handleSave}
                  className="px-[16px] py-[8px] rounded-[8px] cursor-pointer bg-transparent border border-[#e83a7a]"
                >
                  <span className="font-['Manrope',sans-serif] font-bold text-[14px] text-[#e83a7a]">
                    Save
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}