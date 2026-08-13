"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program & Event", href: "#program" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-supporting-dark/95 backdrop-blur-sm border-b border-primary/20">
      <nav className="container-rias">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-normal text-primary tracking-wide">Rias Karsa</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`p-2 text-sm tracking-[0.32px] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:origin-left after:scale-x-0 hover:after:scale-x-100 ${
                    link.href === "#hero"
                      ? "text-primary font-bold after:scale-x-100"
                      : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button variant="secondary" size="sm">Masuk</Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-primary hover:text-text-on-dark transition-colors" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-primary/20 py-4 menu-slide-down">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={link.href} className="menu-slide-down" style={{ animationDelay: `${index * 0.05}s` }}>
                  <a href={link.href} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-primary/80 hover:text-primary transition-colors px-2 py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-2 menu-slide-down" style={{ animationDelay: "0.2s" }}>
              <Button variant="secondary" size="md" className="w-full">Masuk</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
