"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/common/Button";
import CountUp from "@/components/common/CountUp";
import useParallax from "@/hooks/useParallax";

const slides = [
  {
    src: "/asset/krisna-putra-pratama-lKF-MdtuIss-unsplash 1.webp",
    alt: "Bridal makeup session Rias Karsa",
  },
  {
    src: "/asset/ike-ellyana--lu62pdSL2s-unsplash 1.webp",
    alt: "Elegant evening makeup look",
  },
  {
    src: "/asset/febrian-zakaria-Fv_gjHFqJ5c-unsplash 1.webp",
    alt: "Masterclass practice session",
  },
  {
    src: "/asset/rendy-novantino-EUydTGTCrHo-unsplash 1.webp",
    alt: "Traditional bridal styling",
  },
  {
    src: "/asset/europeana-tO5tbSmdP4Q-unsplash 1.webp",
    alt: "Fashion show makeup backstage",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "MUA Terverifikasi" },
  { value: 40, suffix: "+", label: "Master Class" },
  { value: 1500, suffix: "+", label: "Klien" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const timerRef = useRef(null);
  const bgRef = useParallax(0.12);

  const goTo = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  return (
    <section
      id="hero"
      className="relative min-h-[600px] md:min-h-[661px] flex items-center text-text-on-dark overflow-hidden scroll-mt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Carousel */}
      <div ref={bgRef} className="absolute inset-y-[-120px] inset-x-[-40px] bg-supporting-dark will-change-transform">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover hero-kenburns ${index === current ? "hero-kenburns-active" : ""}`}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Fixed Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-supporting-dark via-supporting-dark/60 to-supporting-dark/40" />

      {/* Carousel Arrows */}
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 lg:w-10 lg:h-10 items-center justify-center rounded-full border border-primary/30 bg-supporting-dark/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-ink hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-primary-ring"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 lg:w-10 lg:h-10 items-center justify-center rounded-full border border-primary/30 bg-supporting-dark/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-ink hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-primary-ring"
        aria-label="Foto berikutnya"
      >
        <ChevronRight size={18} />
      </button>

      <div className="relative z-10 container-rias pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="flex flex-col items-center text-center gap-8 md:gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="font-serif text-[26px] sm:text-[28px] md:text-[40px] lg:text-[48px] font-normal text-primary leading-tight">
              Menyulam Cipta,{" "}
              <br className="hidden md:block" />
              Memancarkan Anggunnya{" "}
              <br className="hidden md:block" />
              Paras Nusantara
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#katalog">
                <Button variant="primary" size="lg" as="span" className="w-full sm:w-auto">
                  Cari MUA
                </Button>
              </Link>
              <Button variant="secondary" size="lg" href="/daftar" className="w-full sm:w-auto">
                Gabung Komunitas
              </Button>
            </div>
          </div>

          <div className="w-full max-w-2xl border-t border-primary/30" />

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-2xl rounded-[20px] border border-primary/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-1.5">
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  className="font-serif text-xl sm:text-2xl md:text-[36px] font-normal text-primary"
                />
                <p className="font-sans text-xs sm:text-sm md:text-base font-normal text-text-on-dark/90">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Ke foto ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-primary/40 hover:bg-primary/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
