import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Program & Event", href: "#program" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const legalLinks = [
  { label: "Syarat & Ketentuan", href: "#" },
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Kode Etik", href: "#" },
];

const contactLinks = [
  { label: "0812-3456-7890", href: "https://wa.me/6281234567890", external: true, Icon: Phone },
  { label: "@rias.karsa.community", href: "https://instagram.com/rias.karsa.community", external: true, Icon: InstagramContactIcon },
  { label: "@rias.karsa.community", href: "https://tiktok.com/@rias.karsa.community", external: true, Icon: TiktokIcon },
  { label: "riaskarsa@gmail.com", href: "mailto:riaskarsa@gmail.com", Icon: Mail },
  { label: "Jl. Pemuda, Semarang, Jawa Tengah", href: "https://maps.google.com/?q=Jl.+Pemuda,+Semarang,+Jawa+Tengah", external: true, Icon: MapPin },
];

function TiktokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function InstagramContactIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokSocialIcon() {
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
  { icon: TiktokSocialIcon, href: "https://tiktok.com/@rias.karsa.community", label: "TikTok" },
  { icon: YoutubeIcon, href: "https://youtube.com/@rias.karsa.community", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-supporting-dark text-text-on-dark pt-16 md:pt-[120px] pb-[100px]">
      <div className="container-rias">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[235px]">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:max-w-[265px]">
            <h3 className="font-serif text-[32px] font-normal text-primary tracking-[-0.8px]">
              RIAS KARSA
            </h3>
            <p className="font-sans text-base leading-[25.6px] tracking-[0.32px] text-text-on-dark">
              Menyulam cipta, memancarkan anggunnya paras Nusantara.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[80px]">
            {/* Navigasi */}
            <div className="flex flex-col gap-5">
              <h4 className="font-sans text-base font-medium text-primary">NAVIGASI</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-base text-text-on-dark hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legalitas */}
            <div className="flex flex-col gap-5">
              <h4 className="font-sans text-base font-medium text-primary">LEGALITAS</h4>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-base text-text-on-dark hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div className="flex flex-col gap-5">
              <h4 className="font-sans text-base font-medium text-primary">KONTAK</h4>
              <ul className="flex flex-col gap-3">
                {contactLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 font-sans text-base text-text-on-dark hover:text-primary transition-colors"
                    >
                      <item.Icon size={24} className="text-text-on-dark shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[120px] md:mt-[140px] pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-sans text-base leading-[25.6px] text-primary">
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
                  className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-text-main transition-all"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
