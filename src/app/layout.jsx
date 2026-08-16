import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://riaskarsa.vercel.app"),
  title: {
    default: "Rias Karsa — Komunitas, Sertifikasi & Direktori MUA",
    template: "%s | Rias Karsa",
  },
  description: "Platform komunitas, sertifikasi, dan direktori Makeup Artist (MUA) Semarang Raya. Temukan MUA terpercaya, daftar masterclass, dan jadi bagian dari komunitas.",
  openGraph: {
    title: "Rias Karsa — Komunitas MUA Semarang Raya",
    description: "Komunitas, sertifikasi, dan direktori Makeup Artist (MUA) Semarang Raya.",
    type: "website",
    siteName: "Rias Karsa",
    images: [
      {
        url: "/asset/krisna-putra-pratama-lKF-MdtuIss-unsplash 1.webp",
        width: 1920,
        height: 1080,
        alt: "Rias Karsa — Komunitas MUA Semarang Raya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rias Karsa — Komunitas MUA Semarang Raya",
    description: "Komunitas, sertifikasi, dan direktori Makeup Artist (MUA) Semarang Raya.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
