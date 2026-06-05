import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductGrid } from "@/components/ProductGrid";
import { StoreInfo } from "@/components/StoreInfo";
import { getProductsBySlug } from "@/lib/products";
import { colleges, getCollegeBySlug } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return colleges.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);
  if (!college) return { title: "Colegio no encontrado" };
  return {
    title: `Uniformes ${college.name}`,
    description: `Encuentra el uniforme que necesitas para ${college.name}. Ver precios y disponibilidad.`,
  };
}

export default async function CollegePage({ params }: Props) {
  const { slug } = await params;
  const college = getCollegeBySlug(slug);
  if (!college) notFound();

  const products = getProductsBySlug(slug);

  return (
    <>
      {/* ── College hero banner ── */}
      <div className="w-full border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Breadcrumb en la parte superior */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Colegios", href: "/colegios" },
                { label: college.name },
              ]}
            />
          </div>
          {/* Logo + texto */}
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:h-32 md:w-32">
              <Image
                src={college.image}
                alt={college.name}
                fill
                className="object-contain p-3"
                sizes="128px"
                priority
              />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">
                Uniformes escolares
              </p>
              <h1 className="text-2xl font-bold text-slate-800 md:text-4xl">
                {college.name}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                {products.length} producto{products.length !== 1 ? "s" : ""} disponible
                {products.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Products ── */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">
              Catálogo de uniformes
            </h2>
            <p className="text-sm text-slate-400">
              Haz clic en un producto para ver sus detalles
            </p>
          </div>

          <ProductGrid products={products} collegeName={college.name} />
        </div>
      </section>

      <StoreInfo />
    </>
  );
}
