"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

const activities = [
  {
    title: "Masterclass & Sertifikasi MUA",
    description: "Tingkatkan kredibilitas dan teknik riasan dengan sertifikasi standar nasional industri kecantikan.",
    image: "/asset/febrian-zakaria-Fv_gjHFqJ5c-unsplash 1.svg",
    ctaLabel: "LIHAT JADWAL",
    ctaHref: "#program",
  },
  {
    title: "Direktori MUA Terverifikasi",
    description: "Tampilkan portofoliomu pada katalog direktori agar mudah diakses oleh calon klien potensial.",
    image: "/asset/ike-ellyana--lu62pdSL2s-unsplash 1.svg",
    ctaLabel: "JELAJAHI KATALOG",
    ctaHref: "#katalog",
  },
  {
    title: "Open Model Call",
    description: "Peluang kerja freelance sebagai model bagi talenta muda untuk sesi praktik serta workshop.",
    image: "/asset/febrian-zakaria-dVkKzzoUJfg-unsplash 1.svg",
    ctaLabel: "DAFTAR MODEL",
    ctaHref: "#model",
  },
];

export default function KegiatanRiasKarsa() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Kegiatan Rias Karsa
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Berbagai program dan fasilitas unggulan yang kami rancang untuk mendukung karir dan perkembanganmu.
          </p>
        </div>

        {/* Activity Cards */}
        <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {activities.map((act, index) => (
            <div
              key={act.title}
              className={`reveal reveal-delay-${index + 1} flex flex-col bg-surface border border-border rounded-[20px] overflow-hidden card-hover`}
            >
              <div className="relative aspect-[341/288] bg-surface-dark flex items-center justify-center overflow-hidden">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-text-main mb-2 leading-tight">
                    {act.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {act.description}
                  </p>
                </div>
                <Link href={act.ctaHref} className="mt-auto">
                  <Button variant="secondary" size="md" className="w-full">
                    {act.ctaLabel}
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
