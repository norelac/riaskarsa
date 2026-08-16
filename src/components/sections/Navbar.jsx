"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";
import { getCurrentUser, logoutUser } from "@/lib/auth";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program & Event", href: "#program" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const sectionIds = ["hero", "tentang", "program", "galeri", "kontak"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setUser(getCurrentUser()));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
    const progressEl = document.getElementById("scroll-progress");
    if (progressEl) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      progressEl.style.width = `${percent}%`;
    }
  };

  const handleAnchorClick = (e, href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const frame = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-supporting-dark/95 backdrop-blur-sm pt-[30px] border-b border-border/10 transition-all duration-300 ${
        scrolled ? "pb-2 shadow-elevated" : "pb-3"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent overflow-hidden">
        <div id="scroll-progress" className="h-full bg-primary w-0 transition-[width] duration-150 ease-out" />
      </div>

      <nav className="container-rias max-w-[1240px]">
        <div className="flex items-center justify-between h-[42px]">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-normal text-primary tracking-wide">RIAS KARSA</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`p-2 text-sm tracking-[0.32px] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:origin-left after:scale-x-0 hover:after:scale-x-100 ${
                      isActive
                        ? "text-primary after:scale-x-100"
                        : "text-primary/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center font-serif text-sm font-bold">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span className="text-sm font-medium text-primary/90 max-w-[120px] truncate">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-text-on-dark/70 hover:text-badge-error transition-colors"
              >
                Keluar
              </button>
            </div>
          ) : (
            <div className="hidden md:block">
              <Link href="/masuk">
                <Button variant="secondary" size="sm" as="span">Masuk</Button>
              </Link>
            </div>
          )}

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 text-primary hover:text-text-on-dark transition-colors" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-primary/20 py-4 menu-slide-down">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={link.href} className="menu-slide-down" style={{ animationDelay: `${index * 0.05}s` }}>
                  <a href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="block text-sm font-medium text-primary/80 hover:text-primary transition-colors px-2 py-2.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-2 menu-slide-down" style={{ animationDelay: "0.2s" }}>
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center font-serif text-base font-bold shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-primary/90 truncate">{user.name}</p>
                    <button onClick={handleLogout} className="text-xs font-medium text-text-on-dark/70 hover:text-badge-error transition-colors mt-0.5 py-2 -my-1">
                      Keluar
                    </button>
                  </div>
                </div>
              ) : (
                <Link href="/masuk">
                  <Button variant="secondary" size="md" as="span" className="w-full">Masuk</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
