import { NextResponse } from "next/server";

/**
 * Stub local. El formulario posta a public/sendMail.php (Hostinger).
 * Con `output: 'export'` esta ruta no se despliega.
 */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Usá el endpoint PHP: public/sendMail.php o NEXT_PUBLIC_CONTACT_URL",
    },
    { status: 501 },
  );
}
