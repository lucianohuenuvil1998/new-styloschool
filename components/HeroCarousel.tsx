"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

const DRAG_THRESHOLD = 50; // px mínimos para cambiar slide

export function HeroCarousel({
  slides,
  className = "",
}: {
  slides: Slide[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStart = useRef<number | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length],
  );

  // Auto-play — se pausa mientras se arrastra
  useEffect(() => {
    if (dragging) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, dragging]);

  // ── Mouse drag ──────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    dragStart.current = e.clientX;
    setDragging(true);
    setDragOffset(0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || dragStart.current === null) return;
    setDragOffset(e.clientX - dragStart.current);
  };
  const onMouseUp = () => {
    if (dragStart.current === null) return;
    if (dragOffset < -DRAG_THRESHOLD) next();
    else if (dragOffset > DRAG_THRESHOLD) prev();
    dragStart.current = null;
    setDragging(false);
    setDragOffset(0);
  };

  // ── Touch drag ─────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStart.current = e.touches[0].clientX;
    setDragging(true);
    setDragOffset(0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (dragStart.current === null) return;
    setDragOffset(e.touches[0].clientX - dragStart.current);
  };
  const onTouchEnd = () => {
    if (dragStart.current === null) return;
    if (dragOffset < -DRAG_THRESHOLD) next();
    else if (dragOffset > DRAG_THRESHOLD) prev();
    dragStart.current = null;
    setDragging(false);
    setDragOffset(0);
  };

  const translateX = -(index * 100) + (dragOffset / (typeof window !== "undefined" ? window.innerWidth : 1)) * 100;

  return (
    <section
      className={`group relative overflow-hidden ${className}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      {/* Slides */}
      <div
        className="flex will-change-transform"
        style={{
          transform: `translateX(${translateX}%)`,
          transition: dragging ? "none" : "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        {slides.map((slide, i) => (
          <div key={slide.src} className="w-full shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="block h-auto w-full select-none"
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-700 shadow-md opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg group-hover:opacity-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-700 shadow-md opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg group-hover:opacity-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-white shadow"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
