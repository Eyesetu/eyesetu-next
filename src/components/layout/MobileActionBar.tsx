import { Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/links";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

/** Thumb-reach booking bar on phones. The layout adds matching bottom padding. */
export function MobileActionBar() {
  return (
    <div className="pb-safe fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2.5 px-4 py-2.5">
        <a
          href={telLink}
          className="flex h-12 items-center justify-center gap-2 rounded-full px-5 font-semibold text-navy-800 ring-1 ring-line active:bg-navy-50"
        >
          <Phone className="size-[1.1rem]" aria-hidden />
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-teal-600 font-semibold text-white active:bg-teal-700"
        >
          <WhatsAppIcon className="size-5" />
          Book eye test at home
        </a>
      </div>
    </div>
  );
}
