import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sección no disponible" };

export default function NotAvailablePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mx-auto max-w-md">
        <Breadcrumb
          items={[{ label: "Inicio", href: "/" }, { label: "No disponible" }]}
        />
        <div className="mb-6 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-light">
            <i className="fas fa-tools text-3xl text-brand-dark" />
          </div>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-slate-800">
          Sección en construcción
        </h1>
        <p className="mb-8 leading-relaxed text-slate-500">
          Esta categoría aún no está disponible en la nueva tienda. Mientras
          tanto, puedes ver nuestros uniformes escolares por colegio o
          contactarnos directamente.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/colegios"
            className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Ver colegios
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=56963593710"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe59]"
          >
            <i className="fab fa-whatsapp" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
