import { NextResponse } from "next/server";

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get("name") ?? "");
  const number = String(data.get("number") ?? "");
  const email = String(data.get("email") ?? "");
  const asunto = String(data.get("asunto") ?? "");
  const message = String(data.get("message") ?? "");
  const establecimiento = String(data.get("establecimiento") ?? "");

  if (
    name.length < 2 ||
    name.length > 20 ||
    number.length < 8 ||
    number.length > 11 ||
    message.length < 10 ||
    asunto.length < 4 ||
    !emailRegex.test(email)
  ) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  // Sustituir por Resend, Nodemailer o el servicio que uses en producción.
  console.info("[contact]", {
    name,
    number,
    email,
    asunto,
    establecimiento,
    message,
  });

  return NextResponse.json({ ok: true });
}
