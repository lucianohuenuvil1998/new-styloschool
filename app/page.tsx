import { CategoryCard } from "@/components/CategoryCard";
import { CollegeCard } from "@/components/CollegeCard";
import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { StoreInfo } from "@/components/StoreInfo";
import { categories, colleges } from "@/lib/site";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Categories ── */}
      <section id="categorias" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Explora" title="Nuestras Categorías" />
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="nosotros" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
                Desde 2013
              </p>
              <h2 className="mb-6 text-3xl font-bold text-slate-800">
                Sobre Styloschool
              </h2>
              <p className="mb-4 leading-relaxed text-slate-500">
                ¡Bienvenidos a nuestra tienda de uniformes escolares! Ofrecemos
                la mejor calidad y variedad en ropa escolar para estudiantes de
                todas las edades. Contamos con una amplia selección de uniformes
                a precios asequibles para que puedas hacer tu compra de manera
                fácil y cómoda.
              </p>
              <p className="leading-relaxed text-slate-500">
                Estamos comprometidos a brindar atención personalizada con
                productos de buena calidad, stock permanente según temporada y a
                los precios más convenientes. Teniendo presente que la imagen de
                nuestros hijos es lo primero.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "fas fa-award", label: "Calidad", desc: "Materiales de primera" },
                { icon: "fas fa-boxes", label: "Stock", desc: "Disponibilidad permanente" },
                { icon: "fas fa-tag", label: "Precios", desc: "Los más convenientes" },
                { icon: "fas fa-user-friends", label: "Atención", desc: "Personalizada" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-2xl bg-brand-light p-5 text-center"
                >
                  <i
                    className={`${item.icon} mb-3 text-2xl text-brand-dark`}
                  />
                  <p className="text-sm font-bold text-slate-800">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Colleges ── */}
      <section id="colegios" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Uniformes escolares" title="Nuestros Colegios" />
          <div className="flex flex-wrap justify-center gap-6">
            {colleges.map((college) => (
              <CollegeCard key={college.slug} college={college} variant="home" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <div className="bg-slate-50">
        <ContactForm />
      </div>

      {/* ── Location ── */}
      <LocationSection />

      {/* ── Store info ── */}
      <StoreInfo />
    </>
  );
}
