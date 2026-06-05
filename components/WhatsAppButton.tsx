import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://api.whatsapp.com/send?phone=${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-2xl text-white shadow-lg transition-transform hover:scale-110"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
        <i className="fab fa-whatsapp relative" />
      </a>
    </div>
  );
}
