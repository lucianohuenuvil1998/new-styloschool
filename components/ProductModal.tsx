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
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
  const detailOrder = ["tipo", "material", "tallas disponibles"];
  const sortedOtherLines = [...otherLines].sort((a, b) => {
    const ai = detailOrder.indexOf(a.label.trim().toLowerCase());
    const bi = detailOrder.indexOf(b.label.trim().toLowerCase());
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      <div
        className="modal-card relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image — más baja en móvil */}
        <div className="relative shrink-0 bg-white md:w-[340px]">
          <div className="relative mx-auto h-[160px] w-full max-w-[280px] sm:h-[200px] md:mx-0 md:h-full md:max-w-none md:min-h-[360px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-3 md:p-6"
              sizes="(max-width: 768px) 280px, 340px"
            />
          </div>
          <span className="absolute left-2.5 top-2.5 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-700 ring-1 ring-amber-200 md:left-3 md:top-3 md:px-3 md:text-[11px]">
            Imagen referencial
          </span>
        </div>

        {/* Panel derecho: scroll + CTA fijo */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 px-4 py-3 md:p-6 md:pb-4">
              <div className="min-w-0 pr-2">
                {collegeName && (
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand md:mb-1 md:text-xs">
                    {collegeName}
                  </p>
                )}
                <h2 className="text-lg font-bold text-slate-800 md:text-2xl">
                  {product.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="ml-2 shrink-0 rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Precios compactos en grilla de 2 */}
            {priceLines.length > 0 && (
              <div
                className={`grid gap-2 px-4 pt-3 md:gap-3 md:px-6 md:pt-5 ${
                  priceLines.length > 1 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {priceLines.map((line) => (
                  <div
                    key={line.label + line.value}
                    className="rounded-xl bg-brand-light px-2.5 py-2 text-center md:px-4 md:py-2.5"
                  >
                    <p className="text-[10px] font-medium uppercase leading-tight tracking-wide text-brand-dark md:text-[11px]">
                      {line.label}
                    </p>
                    <p className="text-sm font-bold text-brand md:text-lg">
                      {line.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Detalles */}
            {sortedOtherLines.length > 0 && (
              <div className="mx-4 my-3 overflow-hidden rounded-xl border border-slate-100 md:mx-6 md:mt-5 md:mb-4">
                {sortedOtherLines.map((line, i) => (
                  <div
                    key={line.label + line.value + i}
                    className={`flex items-center justify-between gap-3 px-3 py-2.5 text-sm md:px-4 md:py-3 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <span className="shrink-0 text-slate-500">{line.label}</span>
                    <span className="text-right font-semibold text-slate-800">
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA fijo abajo */}
          <div className="shrink-0 border-t border-slate-100 bg-white p-3 md:p-6 md:pt-5">
            <a
              href={`https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1ebe59] md:py-3.5"
            >
              <i className="fab fa-whatsapp text-lg" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
