import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Top strip */}
      <div className="border-b border-slate-800 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:px-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/img/Stylos icon.png"
                alt=""
                width={28}
                height={28}
                className="opacity-90"
              />
              <span className="text-lg font-bold text-white">Styloschool</span>
            </div>
            <p className="mb-1 text-sm">{SITE.tagline}</p>
            <p className="text-sm">{SITE.subtitle}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-[#1877f2] hover:text-white"
              >
                <i className="fab fa-facebook-f text-sm" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:text-white"
              >
                <i className="fab fa-instagram text-sm" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-[#25d366] hover:text-white"
              >
                <i className="fab fa-whatsapp text-sm" />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              Categorías
            </h6>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Uniformes de colegio", href: "/colegios" },
                { label: "Vestuario corporativo", href: "/no-disponible" },
                { label: "Vestuario deportivo", href: "/no-disponible" },
                { label: "Uniformes genéricos", href: "/no-disponible" },
                { label: "Merchandising", href: "/no-disponible" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              Información
            </h6>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Contacto", href: "/#contacto" },
                { label: "Ubicación", href: "/#ubicacion" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h6 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              Contacto
            </h6>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <i className="fas fa-map-marker-alt mt-0.5 text-brand" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-phone text-brand" />
                <span>{SITE.phones.join(" / ")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-clock text-brand" />
                <span>{SITE.hours[0]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-envelope text-brand" />
                <span>{SITE.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 text-center text-xs text-slate-500">
        © {year} Todos los derechos reservados —{" "}
        <Link href="/" className="font-semibold text-slate-400 hover:text-brand">
          Styloschool
        </Link>
      </div>
    </footer>
  );
}
