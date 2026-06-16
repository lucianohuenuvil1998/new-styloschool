import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const MOSAIC = [
  { src: "/img/productos/Colegio_san-francisco-del-alba/CSDA_10.webp",  alt: "Uniforme femenino San Francisco del Alba" },
  { src: "/img/productos/Colegio_Leonardo_da_vinci/CLD_11.webp",  alt: "Uniforme masculino Leonardo da Vinci" },
  { src: "/img/productos/Colegio_lascondes/CLC_1.webp",                alt: "Uniforme Las Condes" },
  { src: "/img/productos/Colegio_lascondes/CLC_2.webp",                alt: "Blazer Las Condes" },
  { src: "/img/productos/Colegio_Simon_bolivar/CSB_2.webp",           alt: "Uniforme Simón Bolívar" },
  { src: "/img/productos/Colegio_Simon_bolivar/CSB_1.webp",           alt: "Conjunto Simón Bolívar" },
  { src: "/img/productos/Colegio_Coyancura/CC_3.webp",                 alt: "Uniforme Coyancura" },
  { src: "/img/productos/Colegio_san_francisco/CSFTP_3.webp",          alt: "Uniforme San Francisco" },
];

const HORARIOS = [
  { dia: "Lunes a viernes", horario: "11:00 – 19:00" },
  { dia: "Sábado",          horario: "11:00 – 14:00" },
];

export function HeroSection() {
  return (
    <section className="lg:h-[85vh] flex flex-col lg:grid lg:grid-cols-[5fr_6fr] lg:grid-rows-1 overflow-hidden">
      {/* ── Left panel ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center gap-5 bg-gradient-to-br from-[#0b2e3d] via-[#0f3d52] to-[#166f70] px-8 py-8 sm:px-12 lg:px-14 xl:px-20">
        {/* Decorative circle */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-brand/8"
        />

        {/* Logo */}
        <div className="relative w-36 sm:w-44">
          <Image
            src="/img/logo.webp"
            alt="Styloschool"
            width={176}
            height={72}
            className="object-contain drop-shadow-lg bg-none"
            priority
          />
        </div>

        {/* Eyebrow + Headline */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Uniformes escolares · Desde 2013
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Tu imagen en{" "}
            <span className="text-brand">nuestras manos</span>
          </h1>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark hover:shadow-brand/50 active:scale-95"
          >
            <i className="fab fa-whatsapp text-base" />
            Cotizar por WhatsApp
          </a>
          <Link
            href="#colegios"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10 active:scale-95"
          >
            Ver colegios
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px w-16 bg-white/20" />

        {/* Horarios */}
        <div className="rounded-2xl bg-white/8 px-5 py-4 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2">
            <i className="fas fa-clock text-brand" />
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              Horarios de atención
            </p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="pb-2 font-semibold">Día</th>
                <th className="pb-2 font-semibold">Horario</th>
              </tr>
            </thead>
            <tbody>
              {HORARIOS.map((h) => (
                <tr key={h.dia} className="border-b border-white/5 last:border-0">
                  <td className="py-1.5 text-slate-300">{h.dia}</td>
                  <td className="py-1.5 font-semibold text-white">{h.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Address strip */}
        <div className="flex items-start gap-2 text-xs text-slate-400">
          <i className="fas fa-map-marker-alt mt-0.5 shrink-0 text-brand" />
          <span>{SITE.address}</span>
        </div>
      </div>

      {/* ── Right panel — image mosaic ──────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-2 lg:bg-slate-50 lg:p-3 lg:h-full lg:overflow-hidden">
        {MOSAIC.map((img) => (
          <div
            key={img.src}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain p-3 transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 14vw"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
