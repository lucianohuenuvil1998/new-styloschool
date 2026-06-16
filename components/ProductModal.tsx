"use client";

import Image from "next/image";
import { useEffect } from "react";
import { SITE } from "@/lib/site";
import type { Product } from "@/lib/types";

interface Props {
  product: Product;
  collegeName?: string;
  onClose: () => void;
}

export function ProductModal({ product, collegeName, onClose }: Props) {
  /* Close on ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* Prevent body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const whatsappMsg = encodeURIComponent(
    `Hola! Me interesa "${product.title}"${collegeName ? ` del ${collegeName}` : ""}. ¿Pueden darme más información sobre precios y disponibilidad?`,
  );

  const priceLines = product.lines.filter((l) =>
    l.label.toLowerCase().includes("precio"),
  );
  const otherLines = product.lines.filter(
    (l) => !l.label.toLowerCase().includes("precio"),
  );

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="modal-card relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Image panel ── */}
        <div className="relative shrink-0 bg-white md:w-[340px]">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[360px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6"
              sizes="340px"
            />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-200">
            Imagen referencial
          </span>
        </div>

        {/* ── Details panel ── */}
        <div className="flex flex-1 flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-100 p-6 pb-4">
            <div>
              {collegeName && (
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand">
                  {collegeName}
                </p>
              )}
              <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                {product.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="ml-4 shrink-0 rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Prices */}
          {priceLines.length > 0 && (
            <div className="flex flex-wrap gap-3 px-6 pt-5">
              {priceLines.map((line) => (
                <div
                  key={line.label + line.value}
                  className="rounded-xl bg-brand-light px-4 py-2.5 text-center"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wide text-brand-dark">
                    {line.label}
                  </p>
                  <p className="text-lg font-bold text-brand">{line.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Other specs */}
          {otherLines.length > 0 && (
            <div className="mx-6 mt-5 overflow-hidden rounded-xl border border-slate-100">
              {otherLines.map((line, i) => (
                <div
                  key={line.label + line.value + i}
                  className={`flex items-center justify-between px-4 py-3 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <span className="text-slate-500">{line.label}</span>
                  <span className="font-semibold text-slate-800">{line.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto space-y-3 border-t border-slate-100 p-6 pt-5">
            <a
              href={`https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1ebe59]"
            >
              <i className="fab fa-whatsapp text-lg" />
              Consultar disponibilidad por WhatsApp
            </a>
            <p className="text-center text-[11px] text-slate-400">
              Este sitio es informativo. Los precios pueden variar según stock y temporada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
