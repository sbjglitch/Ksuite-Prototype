import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Global tooltip provider – uses mouseover/mouseout (which bubble reliably)
 * and renders a fixed-position tooltip via a React portal so it is never
 * clipped by overflow containers. Mount once at the app root.
 *
 * All existing `data-tooltip` / `data-tooltip-pos` attributes work unchanged.
 */

const GAP = 6;
const VIEWPORT_PAD = 8;

export function TooltipProvider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeEl = useRef<HTMLElement | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Create the tooltip DOM once (no React re-renders needed)
    const wrapper = document.createElement("div");
    wrapper.style.cssText = `
      position:fixed; pointer-events:none; z-index:99999;
      padding:4px 10px;
      border-radius:calc(var(--radius) - 2px);
      background:var(--foreground);
      color:var(--background);
      font-family:var(--font-family-manrope);
      font-weight:var(--font-weight-medium);
      font-size:12px; line-height:1.4;
      white-space:nowrap;
      box-shadow:0px 2px 6px rgba(0,0,0,0.15);
      opacity:0; transition:opacity 0.12s ease;
      visibility:hidden;
    `;

    document.body.appendChild(wrapper);
    containerRef.current = wrapper;

    return () => {
      document.body.removeChild(wrapper);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const tooltip = containerRef.current!;

    function positionTooltip(el: HTMLElement) {
      const text = el.getAttribute("data-tooltip");
      if (!text) return;

      const pos = el.getAttribute("data-tooltip-pos") === "bottom" ? "bottom" : "top";
      const rect = el.getBoundingClientRect();

      // Set text content
      tooltip.textContent = text;

      // Show so we can measure
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "0";
      // force layout
      const tw = tooltip.offsetWidth;
      const th = tooltip.offsetHeight;

      const cx = rect.left + rect.width / 2;
      let left = cx - tw / 2;
      let top: number;

      if (pos === "bottom") {
        top = rect.bottom + GAP;
      } else {
        top = rect.top - GAP - th;
      }

      // Clamp horizontally
      if (left < VIEWPORT_PAD) left = VIEWPORT_PAD;
      if (left + tw > window.innerWidth - VIEWPORT_PAD) {
        left = window.innerWidth - VIEWPORT_PAD - tw;
      }

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
      tooltip.style.transform = "none";

      // Fade in
      rafId.current = requestAnimationFrame(() => {
        tooltip.style.opacity = "1";
      });
    }

    function hideTooltip() {
      activeEl.current = null;
      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
    }

    function onMouseOver(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest?.("[data-tooltip]") as HTMLElement | null;
      if (!target) return;
      if (target === activeEl.current) return; // already showing for this element
      activeEl.current = target;
      positionTooltip(target);
    }

    function onMouseOut(e: MouseEvent) {
      if (!activeEl.current) return;
      const related = e.relatedTarget as HTMLElement | null;
      // If the mouse moved to a child of the same tooltip trigger, don't hide
      if (related && activeEl.current.contains(related)) return;
      // If the mouse moved to another element that shares the same tooltip ancestor, don't hide
      const newTooltipEl = related?.closest?.("[data-tooltip]") as HTMLElement | null;
      if (newTooltipEl === activeEl.current) return;
      hideTooltip();
    }

    function onPointerDown() {
      // Hide on any click/tap
      if (activeEl.current) hideTooltip();
    }

    document.addEventListener("mouseover", onMouseOver, true);
    document.addEventListener("mouseout", onMouseOut, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("resize", hideTooltip);

    return () => {
      document.removeEventListener("mouseover", onMouseOver, true);
      document.removeEventListener("mouseout", onMouseOut, true);
      document.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("resize", hideTooltip);
    };
  }, []);

  // We don't render anything via React — the tooltip DOM is managed imperatively
  return null;
}