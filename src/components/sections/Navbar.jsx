"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";

const navLinks = [
  { label: "Program", href: "#program" },
  { label: "Katalog", href: "#katalog" },
  { label: "Model", href: "#model" },
  { label: "Tentang", href: "#tentang" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-bold text-primary">Rias Karsa</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href="/daftar">
              <Button variant="primary" size="sm">Daftar MUA</Button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-text-muted hover:text-text-main transition-colors" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border py-4 menu-slide-down">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={link.href} className="menu-slide-down" style={{ animationDelay: `${index * 0.05}s` }}>
                  <a href={link.href} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-text-muted hover:text-text-main transition-colors px-2 py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-2 menu-slide-down" style={{ animationDelay: "0.2s" }}>
              <Link href="/daftar" onClick={() => setIsOpen(false)}>
                <Button variant="primary" size="md" className="w-full">Daftar MUA</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
