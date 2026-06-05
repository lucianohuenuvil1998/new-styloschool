import { SITE } from "@/lib/site";

const boxes = [
  {
    icon: "fas fa-phone-alt",
    title: "Teléfonos",
    lines: SITE.phones,
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Dirección",
    lines: [SITE.address],
    color: "bg-sky-50 text-sky-700",
  },
  {
    icon: "fas fa-clock",
    title: "Horarios",
    lines: SITE.hours,
    color: "bg-violet-50 text-violet-700",
  },
  {
    icon: "fas fa-envelope",
    title: "Correo",
    lines: [SITE.email],
    color: "bg-rose-50 text-rose-700",
  },
];

export function StoreInfo() {
  return (
    <section className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {boxes.map((box) => (
            <div
              key={box.title}
              className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${box.color}`}
              >
                <i className={box.icon} />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-slate-800">
                  {box.title}
                </h3>
                {box.lines.map((line) => (
                  <p key={line} className="text-xs leading-relaxed text-slate-500">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
