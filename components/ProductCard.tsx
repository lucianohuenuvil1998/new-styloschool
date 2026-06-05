import Image from "next/image";
import type { Product } from "@/lib/types";

interface Props {
  product: Product;
  onClick: () => void;
}

function getMainPrice(product: Product): string | null {
  const priceLine = product.lines.find((l) =>
    l.label.toLowerCase().includes("precio"),
  );
  return priceLine?.value ?? null;
}

export function ProductCard({ product, onClick }: Props) {
  const mainPrice = getMainPrice(product);

  return (
    <article className="card-lift group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80">
      {/* Image */}
      <button
        type="button"
        onClick={onClick}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-white"
        aria-label={`Ver detalles de ${product.title}`}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Referential badge */}
        <span className="absolute left-2.5 top-2.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-200">
          Imagen referencial
        </span>
        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors duration-200 group-hover:bg-slate-900/10">
          <span className="translate-y-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            Ver detalles
          </span>
        </div>
      </button>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h2 className="mb-1 text-sm font-semibold text-slate-700">
          {product.title}
        </h2>
        {mainPrice && (
          <p className="mb-3 text-lg font-bold text-brand">{mainPrice}</p>
        )}
        <div className="mt-auto">
          <button
            type="button"
            onClick={onClick}
            className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Ver detalles
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
