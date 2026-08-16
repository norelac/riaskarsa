"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

const activities = [
  {
    tag: "Pengembangan Karir",
    title: "Masterclass & Sertifikasi MUA",
    description:
      "Tingkatkan kredibilitas dan teknik riasan dengan sertifikasi standar nasional industri kecantikan. Ikuti kelas bersama mentor senior dan buktikan keahlianmu.",
    image: "/asset/febrian-zakaria-Fv_gjHFqJ5c-unsplash 1.webp",
    ctaLabel: "LIHAT JADWAL",
    ctaHref: "#program",
  },
  {
    tag: "Pemasaran Digital",
    title: "Direktori MUA Terverifikasi",
    description:
      "Tampilkan portofoliomu pada katalog direktori agar mudah diakses calon klien potensial. Dapatkan badge kepercayaan dan prioritas di halaman pencarian.",
    image: "/asset/ike-ellyana--lu62pdSL2s-unsplash 1.webp",
    ctaLabel: "JELAJAHI KATALOG",
    ctaHref: "#katalog",
  },
  {
    tag: "Peluang Freelance",
    title: "Open Model Call",
    description:
      "Peluang kerja freelance sebagai model bagi talenta muda untuk sesi praktik dan workshop. Terhubung langsung dengan MUA profesional di Semarang Raya.",
    image: "/asset/febrian-zakaria-dVkKzzoUJfg-unsplash 1.webp",
    ctaLabel: "DAFTAR MODEL",
    ctaHref: "/apply-model",
  },
];

export default function KegiatanRiasKarsa() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-background section-pad">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Kegiatan Rias Karsa
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Berbagai program dan fasilitas unggulan yang kami rancang untuk
            mendukung karir dan perkembanganmu.
          </p>
        </div>

        {/* Activity Cards */}
        <div
          ref={cardsRef}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {activities.map((act, index) => (
            <div
              key={act.title}
              className={`reveal reveal-delay-${index + 1} group card-hover bg-surface-dark border border-border rounded-[20px] overflow-hidden flex flex-col`}
            >
              <div className="relative aspect-[341/288] overflow-hidden">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 rounded-full bg-supporting-dark/80 backdrop-blur-sm px-3 py-1.5 text-[10px] font-medium tracking-wider text-primary">
                  {act.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="heading-card leading-tight">
                  {act.title}
                </h3>
                <p className="text-sm md:text-xs font-light text-supporting-light leading-relaxed">
                  {act.description}
                </p>
                <Link href={act.ctaHref} className="mt-auto inline-flex">
                  <Button variant="secondary" size="sm" className="w-full">
                    {act.ctaLabel} <ArrowRight size={13} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
