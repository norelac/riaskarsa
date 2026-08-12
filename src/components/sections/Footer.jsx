import { MapPin, Phone, Mail, Globe } from "lucide-react";

const footerLinks = {
  Navigasi: [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Program & Event", href: "#program" },
    { label: "Galeri", href: "#galeri" },
    { label: "Kontak", href: "#kontak" },
  ],
  Legalitas: [
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Kode Etik", href: "#" },
  ],
  Kontak: [
    { label: "WhatsApp: 0812-3456-7890", href: "https://wa.me/6281234567890", external: true },
    { label: "Instagram: @rias.karsa.community", href: "https://instagram.com/rias.karsa.community", external: true },
    { label: "TikTok: @rias.karsa.community", href: "https://tiktok.com/@rias.karsa.community", external: true },
    { label: "Email: riaskarsa@gmail.com", href: "mailto:riaskarsa@gmail.com" },
    { label: "Jl. Pemuda, Semarang, Jawa Tengah", href: "https://maps.google.com/?q=Jl.+Pemuda,+Semarang,+Jawa+Tengah", external: true },
  ],
};

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const socialLinks = [
  { icon: InstagramIcon, href: "https://instagram.com/rias.karsa.community", label: "Instagram" },
  { icon: TiktokIcon, href: "https://tiktok.com/@rias.karsa.community", label: "TikTok" },
  { icon: YoutubeIcon, href: "https://youtube.com/@rias.karsa.community", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-supporting-dark text-text-on-dark" style={{
      boxShadow: `
        0 -6px 14px rgba(50, 31, 31, 0.10),
        0 -25px 25px rgba(50, 31, 31, 0.09),
        0 -56px 34px rgba(50, 31, 31, 0.05),
        0 -99px 40px rgba(50, 31, 31, 0.01),
        0 -155px 43px rgba(50, 31, 31, 0.00)
      `
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white">Rias Karsa</h3>
            <p className="text-sm text-text-on-dark/80 leading-relaxed">
              Platform komunitas, sertifikasi, dan direktori Makeup Artist
              Indonesia. Menghubungkan MUA, model, dan klien dalam satu
              ekosistem.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-base font-semibold text-white mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-on-dark/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-on-dark/60">
            &copy; {new Date().getFullYear()} Rias Karsa Semarang, All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-text-on-dark transition-all"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}