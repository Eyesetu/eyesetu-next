import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyesetu.in"),
  title: {
    default: "EyeSetu | Advanced Eye Tests at Home in Delhi & Gurgaon",
    template: "%s | EyeSetu",
  },
  description:
    "Hospital-grade eye tests at your doorstep, reviewed live by AIIMS-trained eye specialists. Glaucoma, retina, kids and senior eye care at home in Delhi & Gurgaon.",
  keywords: ["eye test at home", "home eye checkup Delhi", "eye test at home Gurgaon", "glaucoma test at home", "AIIMS eye doctor"],
  openGraph: {
    type: "website",
    siteName: "EyeSetu",
    title: "EyeSetu | Advanced Eye Care, At Your Doorstep",
    description: "Hospital-grade eye tests at home, reviewed live by AIIMS-trained specialists.",
    images: [{ url: "/images/hero-home-fundus.jpg", width: 2000, height: 1125 }],
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable}`}>
      <body className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
