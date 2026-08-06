import { MapPin, Phone, Mail, Globe } from "lucide-react";

const footerLinks = {
  Program: [
    { label: "Sertifikasi MUA", href: "#program" },
    { label: "Masterclass", href: "#program" },
    { label: "Komunitas", href: "#tentang" },
    { label: "Open Call Model", href: "#model" },
  ],
  Katalog: [
    { label: "Cari MUA", href: "#katalog" },
    { label: "Filter Lokasi", href: "#katalog" },
    { label: "Gaya Riasan", href: "#katalog" },
    { label: "Pricelist", href: "#katalog" },
  ],
  Tentang: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Visi & Misi", href: "#tentang" },
    { label: "Tim Kami", href: "#tentang" },
    { label: "FAQ", href: "#faq" },
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
  { icon: InstagramIcon, href: "https://instagram.com/riaskarsa", label: "Instagram" },
  { icon: TiktokIcon, href: "https://tiktok.com/@riaskarsa", label: "TikTok" },
  { icon: YoutubeIcon, href: "https://youtube.com/@riaskarsa", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-supporting-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-bold">Rias Karsa</h3>
            <p className="text-sm text-supporting-light leading-relaxed">
              Platform komunitas, sertifikasi, dan direktori Makeup Artist
              Indonesia. Menghubungkan MUA, model, dan klien dalam satu
              ekosistem.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="https://maps.google.com/?q=Jakarta,Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-supporting-light hover:text-white transition-colors"
              >
                <MapPin size={16} />
                Jakarta, Indonesia
              </a>
              <a
                href="https://wa.me/6285819997505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-supporting-light hover:text-white transition-colors"
              >
                <Phone size={16} />
                +62 858-1999-7505
              </a>
              <a
                href="mailto:info@riaskarsa.id"
                className="flex items-center gap-2 text-sm text-supporting-light hover:text-white transition-colors"
              >
                <Mail size={16} />
                info@riaskarsa.id
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-supporting-light hover:text-white transition-colors"
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
        <div className="mt-12 pt-8 border-t border-supporting-medium/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-supporting-light">
            &copy; {new Date().getFullYear()} Rias Karsa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-supporting-medium/30 flex items-center justify-center text-supporting-light hover:bg-primary hover:text-white transition-all"
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
