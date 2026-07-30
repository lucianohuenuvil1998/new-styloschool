"use client";

import { colleges, SITE } from "@/lib/site";
import { FormEvent, useState } from "react";

/** Solo letras (incl. acentos/ñ) y espacios. */
const nameRegex =
  /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:\s+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/;

/** Correo estricto: sin /, ,, *, }, ], etc. */
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_URL ??
  "https://styloschool.cl/sendMail.php";

const LIMITS = {
  nameMin: 2,
  nameMax: 60,
  phoneDigits: 8,
  asuntoMin: 4,
  asuntoMax: 25,
  emailMax: 64,
  messageMin: 10,
  messageMax: 400,
} as const;

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/20";

function sanitizeName(value: string) {
  return value
    .replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]/g, "")
    .slice(0, LIMITS.nameMax);
}

function sanitizeEmail(value: string) {
  return value.replace(/[^a-zA-Z0-9._@-]/g, "").slice(0, LIMITS.emailMax);
}

function sanitizeAsunto(value: string) {
  return value
    .replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 \-¿?¡!.,]/g, "")
    .slice(0, LIMITS.asuntoMax);
}

export function ContactForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [asunto, setAsunto] = useState("");
  const [email, setEmail] = useState("");
  const [messageLen, setMessageLen] = useState(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") ?? "").trim();
    const number = `+569${phoneDigits}`;
    const nameTrim = name.trim();
    const emailTrim = email.trim();
    const asuntoTrim = asunto.trim();

    if (
      nameTrim.length < LIMITS.nameMin ||
      nameTrim.length > LIMITS.nameMax ||
      !nameRegex.test(nameTrim)
    ) {
      setStatus({
        type: "error",
        message: "El nombre solo puede contener letras (sin números ni símbolos).",
      });
      return;
    }
    if (!/^\d+$/.test(phoneDigits) || phoneDigits.length !== LIMITS.phoneDigits) {
      setStatus({
        type: "error",
        message: "Ingresa 8 dígitos de teléfono (solo números).",
      });
      return;
    }
    if (
      asuntoTrim.length < LIMITS.asuntoMin ||
      asuntoTrim.length > LIMITS.asuntoMax
    ) {
      setStatus({
        type: "error",
        message: `El asunto debe tener entre ${LIMITS.asuntoMin} y ${LIMITS.asuntoMax} caracteres.`,
      });
      return;
    }
    if (emailTrim.length > LIMITS.emailMax || !emailRegex.test(emailTrim)) {
      setStatus({
        type: "error",
        message:
          "El correo no es válido. Usa solo letras, números, punto, guion o guion bajo.",
      });
      return;
    }
    if (message.length < LIMITS.messageMin || message.length > LIMITS.messageMax) {
      setStatus({
        type: "error",
        message: `El mensaje debe tener entre ${LIMITS.messageMin} y ${LIMITS.messageMax} caracteres.`,
      });
      return;
    }

    data.set("number", number);
    data.set("name", nameTrim);
    data.set("email", emailTrim);
    data.set("asunto", asuntoTrim);
    data.set("message", message);

    setLoading(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus({
        type: "success",
        message: "¡Mensaje enviado correctamente! Te responderemos a la brevedad.",
      });
      form.reset();
      setName("");
      setPhoneDigits("");
      setAsunto("");
      setEmail("");
      setMessageLen(0);
    } catch {
      setStatus({
        type: "error",
        message: "No se pudo enviar el mensaje. Intenta contactarnos por WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
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
                    <p key={h} className="text-sm font-semibold text-slate-700">
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Nombre
                </span>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(sanitizeName(e.target.value))}
                  minLength={LIMITS.nameMin}
                  maxLength={LIMITS.nameMax}
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                  className={inputCls}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Teléfono
                </span>
                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
                  <span className="flex shrink-0 items-center border-r border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-600">
                    +569
                  </span>
                  <input
                    name="number"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    required
                    value={phoneDigits}
                    onChange={(e) => {
                      const digits = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, LIMITS.phoneDigits);
                      setPhoneDigits(digits);
                    }}
                    maxLength={LIMITS.phoneDigits}
                    placeholder="12345678"
                    className="w-full border-0 bg-transparent px-4 py-3 text-sm text-slate-800 outline-none placeholder-slate-400"
                  />
                </div>
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
                <span className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Asunto
                  <span className="font-normal normal-case text-slate-400">
                    {asunto.length}/{LIMITS.asuntoMax}
                  </span>
                </span>
                <input
                  name="asunto"
                  required
                  value={asunto}
                  onChange={(e) => setAsunto(sanitizeAsunto(e.target.value))}
                  minLength={LIMITS.asuntoMin}
                  maxLength={LIMITS.asuntoMax}
                  placeholder="Asunto"
                  className={inputCls}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Correo electrónico
                </span>
                <input
                  name="email"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(sanitizeEmail(e.target.value))}
                  maxLength={LIMITS.emailMax}
                  placeholder="nombre@gmail.com"
                  className={inputCls}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Mensaje
                  <span className="font-normal normal-case text-slate-400">
                    {messageLen}/{LIMITS.messageMax}
                  </span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  minLength={LIMITS.messageMin}
                  maxLength={LIMITS.messageMax}
                  placeholder="Escribe tu consulta aquí..."
                  onChange={(e) => setMessageLen(e.target.value.length)}
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
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
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
                  className={`mt-0.5 ${
                    status.type === "success"
                      ? "fas fa-check-circle"
                      : "fas fa-exclamation-circle"
                  }`}
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
