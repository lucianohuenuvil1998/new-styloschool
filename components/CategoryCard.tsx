import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group relative block h-72 w-full max-w-[320px] overflow-hidden rounded-2xl shadow-md"
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="320px"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h2 className="mb-3 text-xl font-bold leading-tight text-white drop-shadow">
          {category.title}
        </h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white shadow transition-colors group-hover:bg-brand-dark">
          Ver productos
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
