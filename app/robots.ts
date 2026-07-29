import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sendMail.php", "/api/", "/no-disponible"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
