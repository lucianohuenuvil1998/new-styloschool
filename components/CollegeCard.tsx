import Image from "next/image";
import Link from "next/link";
import type { College } from "@/lib/types";

export function CollegeCard({
  college,
  variant = "home",
}: {
  college: College;
  variant?: "home" | "listing";
}) {
  const title = college.shortName ?? college.name;

  return (
    <Link
      href={`/colegios/${college.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg ${
        variant === "listing" ? "w-full max-w-sm" : "w-full max-w-[260px]"
      }`}
    >
      {/* Accent bar que aparece en hover */}
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />

      {/* Imagen limpia con fondo blanco */}
      <div className="relative aspect-[4/3] w-full bg-white p-4">
        <Image
          src={college.image}
          alt={college.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="300px"
        />
      </div>

      {/* Strip inferior — altura siempre igual gracias a line-clamp-1 */}
      <div className="flex h-12 items-center justify-between gap-3 border-t border-slate-100 px-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-700">
          {title}
        </h3>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <svg
            className="h-3 w-3"
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
