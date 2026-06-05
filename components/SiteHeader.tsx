"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { colleges } from "@/lib/site";

const navColleges = colleges.map((c) => ({
  label: c.name,
  href: `/colegios/${c.slug}`,
}));

const navCategories = [
  { label: "Colegios", href: "/colegios" },
  { label: "Polerones Generacionales", href: "/no-disponible" },
  { label: "Vestuario Deportivo", href: "/no-disponible" },
  { label: "Vestuario Corporativo", href: "/no-disponible" },
  { label: "Mercancía", href: "/no-disponible" },
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-brand"
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-slate-100 bg-white py-1.5 shadow-xl shadow-slate-200/60">
          {items.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-brand-light hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-slate-200/60" : "border-b border-slate-100"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="Inicio">
            <Image
              src="/img/logo.png"
              alt="Styloschool"
              width={150}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/#nosotros"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              Nosotros
            </Link>
            <Dropdown label="Colegios" items={navColleges} />
            <Dropdown label="Categorías" items={navCategories} />
            <Link
              href="/#contacto"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              Contacto
            </Link>
            <Link
              href="/#ubicacion"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              Ubicación
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://api.whatsapp.com/send?phone=56963593710`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-[#25d366] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe59]"
            >
              <i className="fab fa-whatsapp text-base" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute top-[72px] right-0 h-[calc(100vh-72px)] w-72 overflow-y-auto bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col divide-y divide-slate-100 px-4 py-2">
            {[
              { href: "/#nosotros", label: "Nosotros" },
              { href: "/colegios", label: "Colegios" },
              { href: "/no-disponible", label: "Ropa Deportiva" },
              { href: "/no-disponible", label: "Mercancía" },
              { href: "/no-disponible", label: "Uniformes Genéricos" },
              { href: "/#ubicacion", label: "Ubicación" },
              { href: "/#contacto", label: "Contacto" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-4">
              <a
                href="https://api.whatsapp.com/send?phone=56963593710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                <i className="fab fa-whatsapp text-base" />
                Consultar por WhatsApp
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
