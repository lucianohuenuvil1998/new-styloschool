import { Breadcrumb } from "@/components/Breadcrumb";
import { CollegeCard } from "@/components/CollegeCard";
import { LocationSection } from "@/components/LocationSection";
import { StoreInfo } from "@/components/StoreInfo";
import { colleges } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colegios — Uniformes Escolares",
  description:
    "Uniformes para Colegio Las Condes, Coyancura, Nuestra Señora del Rosario, Leonardo Da Vinci, San Francisco y más.",
};

export default function ColegiosPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[{ label: "Inicio", href: "/" }, { label: "Colegios" }]}
          />
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
            Uniformes escolares
          </p>
          <h1 className="text-3xl font-bold text-slate-800">Nuestros Colegios</h1>
          <p className="mt-2 text-slate-500">
            Selecciona tu colegio para ver el catálogo completo de uniformes.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {colleges.map((college) => (
              <CollegeCard key={college.slug} college={college} variant="home" />
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
      <StoreInfo />
    </>
  );
}
