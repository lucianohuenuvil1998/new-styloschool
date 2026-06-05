"use client";

import { colleges, SITE } from "@/lib/site";
import { FormEvent, useState } from "react";

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const number = String(data.get("number") ?? "");
    const email = String(data.get("email") ?? "");
    const asunto = String(data.get("asunto") ?? "");
    const message = String(data.get("message") ?? "");

    if (name.length < 2 || name.length > 20) {
      setStatus({ type: "error", message: "El nombre ingresado no es válido." });
      return;
    }
    if (number.length < 8 || number.length > 11) {
      setStatus({ type: "error", message: "El número de teléfono no es válido." });
      return;
    }
    if (message.length < 10) {
      setStatus({ type: "error", message: "El mensaje debe tener al menos 10 caracteres." });
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "El correo electrónico no es válido." });
      return;
    }
    if (asunto.length < 4) {
      setStatus({ type: "error", message: "El asunto ingresado no es válido." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus({ type: "success", message: "¡Mensaje enviado correctamente! Te responderemos a la brevedad." });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "No se pudo enviar el mensaje. Intenta contactarnos por WhatsApp." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Left: info */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
              Escríbenos
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-800">Contacto</h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              ¿Tienes dudas sobre un uniforme, tallas o pedidos personalizados?
              Completa el formulario y te respondemos a la brevedad.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <i className="fab fa-whatsapp text-lg" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">WhatsApp</p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand hover:underline"
                  >
                    +{SITE.whatsapp}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Email</p>
                  <p className="text-sm font-semibold text-slate-700">{SITE.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <i className="fas fa-clock" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Horarios</p>
                  {SITE.hours.map((h) => (
                    <p key={h} className="text-sm font-semibold text-slate-700">{h}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Nombre
                </span>
                <input
                  name="name"
                  required
                  maxLength={20}
                  placeholder="Tu nombre"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Teléfono
                </span>
                <input
                  name="number"
                  type="tel"
                  required
                  minLength={8}
                  maxLength={11}
                  placeholder="+569 XXXX XXXX"
                  className={inputCls}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Establecimiento
                </span>
                <select name="establecimiento" className={inputCls}>
                  {colleges.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="Otro">Otro</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Asunto
                </span>
                <input
                  name="asunto"
                  required
                  maxLength={50}
                  placeholder="¿En qué podemos ayudarte?"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Correo electrónico
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={50}
                  placeholder="nombre@gmail.com"
                  className={inputCls}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Mensaje
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Escribe tu consulta aquí..."
                  className={inputCls}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Enviando…
                </>
              ) : (
                "Enviar mensaje"
              )}
            </button>

            {status.type !== "idle" && (
              <div
                className={`mt-4 flex items-start gap-2.5 rounded-xl p-3.5 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                <i
                  className={`mt-0.5 ${status.type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle"}`}
                />
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
