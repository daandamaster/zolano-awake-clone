import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Zolano Installaties | Zonnepanelen, Warmtepompen, Airco & Laadpalen",
  description: "Erkend installatiebedrijf uit Arnhem. VCA**, STEK, F-gassen, ISSO. Landelijk actief. Eén partner van advies tot oplevering. Vrijblijvende offerte.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
