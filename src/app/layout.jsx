import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Rias Karsa — Komunitas, Sertifikasi & Direktori MUA",
  description: "Platform komunitas, sertifikasi, dan direktori Makeup Artist (MUA) Indonesia. Temukan MUA terpercaya, daftar masterclass, dan jadi bagian dari komunitas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-text-main">
        {children}
      </body>
    </html>
  );
}
