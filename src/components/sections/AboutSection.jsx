"use client";

import { Award, Tag, Gem, TrendingUp } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Award,
    title: "Sertifikasi dan Standardisasi",
    description: "Meningkatkan kualitas dan profesionalisme penata rias melalui program sertifikasi berstandar nasional.",
  },
  {
    icon: Tag,
    title: "Transparansi Tarif",
    description: "Membangun ekosistem yang sehat dengan pedoman standar harga yang jelas dan adil bagi MUA dan klien.",
  },
  {
    icon: Gem,
    title: "Pelestarian Budaya",
    description: "Menjaga marwah dan pakem tata rias pengantin Nusantara, khususnya untuk riasan tradisional.",
  },
  {
    icon: TrendingUp,
    title: "Pemberdayaan Ekonomi",
    description: "Membuka peluang karir dan potensi bisnis bagi para anggota komunitas Rias Karsa.",
  },
];

export default function AboutSection() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="tentang" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Mengenal Rias Karsa
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Rias Karsa adalah komunitas atau paguyuban penata rias profesional.
            Menghubungkan klien dengan MUA bersertifikat, sekaligus membuka ruang
            tumbuh bagi talenta tata rias Indonesia.
          </p>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${index + 1} card-hover bg-surface border border-border rounded-[20px] p-6 md:p-8 flex flex-col items-center text-center gap-4`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-main">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
