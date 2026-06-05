import Image from "next/image";

export function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
            Cómo llegar
          </p>
          <h2 className="text-3xl font-bold text-slate-800">
            ¿Dónde estamos ubicados?
          </h2>
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Ubicación Styloschool"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5668970826378!2d-70.56677258424588!3d-33.40846180274575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedd0fa0de87%3A0x8fddeef43d721a48!2sAv.%20Apoquindo%206415%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1655149171940!5m2!1ses!2scl"
            className="aspect-video w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* How to get here */}
          <div className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-slate-50 px-8 py-8">
            <h3 className="mb-6 text-xl font-bold text-slate-800">
              Instrucciones de llegada
            </h3>
            <ul className="space-y-5">
              {[
                {
                  icon: "fas fa-subway",
                  text: "En transporte público, estamos cerca de Metro Manquehue.",
                },
                {
                  icon: "fas fa-car",
                  text: "En vehículo, puedes estacionar directamente en Av. Apoquindo 6415 (sujeto a disponibilidad).",
                },
                {
                  icon: "fas fa-parking",
                  text: 'También puedes estacionar al lado del Estadio Italiano, en "Esteban Dell\'orto 6579".',
                },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-base text-brand">
                    <i className={item.icon} />
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Parking photos */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Estacionamiento Av. Apoquindo 6415",
                src: "/img/estacionamiento1.webp",
              },
              {
                label: "Estacionamiento Estadio Italiano",
                src: "/img/estacionamiento2.webp",
              },
            ].map((p) => (
              <div key={p.src} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative min-h-0 flex-1">
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-brand px-3 py-2.5">
                  <p className="text-center text-[11px] font-semibold leading-tight text-white">
                    {p.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
