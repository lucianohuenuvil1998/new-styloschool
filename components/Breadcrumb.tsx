import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/types";

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                href={item.href}
                className="text-slate-400 transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700">{item.label}</span>
            )}
            {i < items.length - 1 && (
              <svg
                className="h-3.5 w-3.5 text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
