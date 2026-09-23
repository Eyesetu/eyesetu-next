import { contact } from "@/content/site";

const DEFAULT_MESSAGE = "Hi EyeSetu, I'd like to book an eye test at home.";

/** WhatsApp click-to-chat link with a pre-filled message. */
export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${contact.phoneE164}`;
export const mailLink = `mailto:${contact.email}`;

/** Section anchors (#services) resolve from any page, not just home. */
export const resolveHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);
