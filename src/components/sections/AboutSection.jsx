"use client";

import { Award, Gem, TrendingUp, Tag } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Award,
    title: "Sertifikasi dan Standardisasi",
    description:
      "Meningkatkan kualitas dan profesionalisme penata rias melalui program sertifikasi berstandar nasional.",
  },
  {
    icon: Tag,
    title: "Transparansi Tarif",
    description:
      "Membangun ekosistem yang sehat dengan pedoman standar harga yang jelas dan adil bagi MUA dan klien.",
  },
  {
    icon: Gem,
    title: "Pelestarian Budaya",
    description:
      "Menjaga marwah dan pakem tata rias pengantin Nusantara, khususnya untuk riasan tradisional.",
  },
  {
    icon: TrendingUp,
    title: "Pemberdayaan Ekonomi",
    description:
      "Membuka peluang karir dan potensi bisnis bagi para anggota komunitas Rias Karsa.",
  },
];

export default function AboutSection() {
  const headerRef = useScrollReveal();
  const itemsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="tentang" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="heading-section mb-4">Mengenal Rias Karsa</h2>
          <p className="font-sans text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Rias Karsa adalah komunitas atau paguyuban penata rias profesional.
            Menghubungkan klien dengan MUA bersertifikat, sekaligus membuka ruang
            tumbuh bagi talenta tata rias Indonesia.
          </p>
        </div>

        {/* Highlight Items — 2x2 Horizontal Grid */}
        <div
          ref={itemsRef}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
        >
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${index + 1} flex items-start gap-5 md:gap-6`}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <item.icon size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="heading-card mb-2">{item.title}</h3>
                <p className="font-sans text-sm md:text-base text-text-on-dark/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
