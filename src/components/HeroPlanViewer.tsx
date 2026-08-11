"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { HERO_PLAN } from "@content/pages/hero-plan";

type DragState = {
  active: boolean;
  pointerId: number;
  x: number;
  y: number;
  left: number;
  top: number;
};

const initialDrag: DragState = {
  active: false,
  pointerId: -1,
  x: 0,
  y: 0,
  left: 0,
  top: 0,
};

export function HeroPlanViewer() {
  const [activePage, setActivePage] = useState(0);
  const [animationRun, setAnimationRun] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState>({ ...initialDrag });
  const page = HERO_PLAN.pages[activePage];

  useEffect(() => {
    HERO_PLAN.pages.slice(1).forEach(({ asset }) => {
      const preload = new window.Image();
      preload.src = asset;
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      viewportRef.current?.scrollTo({ left: 0, top: 0 });
    });
  }, [activePage, animationRun]);

  const showPage = (index: number) => {
    setActivePage(index);
    setAnimationRun((run) => run + 1);
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    const drag = dragRef.current;
    if (!drag.active || !viewport) return;

    drag.active = false;
    setIsDragging(false);
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  const startDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport || event.pointerType !== "mouse" || event.button !== 0) return;

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: viewport.scrollLeft,
      top: viewport.scrollTop,
    };
    setIsDragging(true);
    viewport.setPointerCapture(event.pointerId);
  };

  const moveDrawing = (event: ReactPointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    const drag = dragRef.current;
    if (!drag.active || !viewport || drag.pointerId !== event.pointerId) return;

    viewport.scrollLeft = drag.left - (event.clientX - drag.x);
    viewport.scrollTop = drag.top - (event.clientY - drag.y);
  };

  return (
    <div className="plan-viewer">
      <div className="plan-toolbar">
        <strong>
          {HERO_PLAN.reference} <span aria-hidden="true">·</span>{" "}
          <span>{page.toolbarLabel}</span>
        </strong>
        <div className="plan-toolbar-actions">
          <span className="plan-inspect">{HERO_PLAN.controls.inspect}</span>
          <div className="plan-tabs" role="tablist" aria-label={HERO_PLAN.controls.pagesLabel}>
            {HERO_PLAN.pages.map((item, index) => (
              <button
                key={item.asset}
                className="plan-tab"
                type="button"
                role="tab"
                aria-controls="hero-plan-page"
                aria-label={item.tabLabel}
                aria-selected={activePage === index}
                tabIndex={activePage === index ? 0 : -1}
                onClick={() => showPage(index)}
              >
                {item.tab}
              </button>
            ))}
          </div>
          <button
            className="plan-replay"
            type="button"
            onClick={() => setAnimationRun((run) => run + 1)}
          >
            {HERO_PLAN.controls.replay} <span aria-hidden="true">↻</span>
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={`plan-viewport${isDragging ? " is-dragging" : ""}`}
        role="region"
        aria-label={`Scrollable ${HERO_PLAN.reference} plan, page ${activePage + 1} of ${HERO_PLAN.pages.length}`}
        tabIndex={0}
        onPointerDown={startDragging}
        onPointerMove={moveDrawing}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <figure
          id="hero-plan-page"
          key={`${activePage}-${animationRun}`}
          className="plan-sheet is-animating"
        >
          <div className="plan-image">
            <Image
              className="plan-layer plan-ghost"
              src={page.asset}
              alt={page.alt}
              fill
              sizes="(max-width: 900px) 1040px, 1320px"
              priority={activePage === 0}
              unoptimized
              draggable={false}
            />
            <div
              className="plan-layer plan-drawing"
              aria-hidden="true"
              style={{ backgroundImage: `url(${page.asset})` }}
            />
            <div className="plan-sketch-edge" aria-hidden="true" />
            {page.stamp && (
              <div className="plan-status-stamp" aria-label={`Issued for ${page.stamp}`}>
                <span>Issued for</span>
                <span>{page.stamp}</span>
              </div>
            )}
            <div className="plan-marker" aria-live="polite">{page.marker}</div>
          </div>

          <figcaption className="plan-titleblock">
            <div className="plan-title-cell plan-title-logo" aria-label="Sightline Traffic Engineers logo">
              <Image
                className="plan-title-logo-image"
                src="/brand/Sightline_Logo_Horizontal_Primary.svg"
                width={480}
                height={118}
                alt="Sightline Traffic Engineers"
                draggable={false}
              />
            </div>
            <div className="plan-title-cell">
              <span className="plan-title-label">{HERO_PLAN.fields.project}</span>
              <span className="plan-title-value" style={{ "--field-delay": "7.2s" } as CSSProperties}>
                {HERO_PLAN.project}
              </span>
            </div>
            <div className="plan-title-cell plan-title-status">
              <span className="plan-title-label">{HERO_PLAN.fields.status}</span>
              <span className="plan-title-value" style={{ "--field-delay": "7.48s" } as CSSProperties}>
                {page.status}
              </span>
            </div>
            <div className="plan-title-cell">
              <span className="plan-title-label">{HERO_PLAN.fields.title}</span>
              <span className="plan-title-value" style={{ "--field-delay": "7.76s" } as CSSProperties}>
                {page.drawingTitle}
              </span>
            </div>
            <div className="plan-title-cell plan-title-page">
              <span className="plan-title-label">{HERO_PLAN.fields.page}</span>
              <span className="plan-title-value" style={{ "--field-delay": "8.04s" } as CSSProperties}>
                {page.pageNumber}
              </span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
