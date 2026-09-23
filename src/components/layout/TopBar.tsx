import { MapPin, Phone } from "lucide-react";
import { contact, hero } from "@/content/site";
import { telLink } from "@/lib/links";
import { Container } from "@/components/ui/Container";
import { EyeMark } from "@/components/brand/EyeMark";

export function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-[0.8125rem] text-white/75 md:block">
      <Container className="flex h-9 items-center justify-between gap-6">
        <p className="flex items-center gap-2">
          <EyeMark className="w-4 text-teal-300" strokeWidth={2.4} />
          {hero.eyebrow}
        </p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-teal-300" aria-hidden />
            Home visits across Delhi &amp; Gurgaon
          </span>
          <a href={telLink} className="flex items-center gap-1.5 font-medium text-white hover:text-teal-200">
            <Phone className="size-3.5 text-teal-300" aria-hidden />
            {contact.phoneDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}
