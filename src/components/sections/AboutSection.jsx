"use client";

import { Users, Award, LayoutGrid } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Users,
    title: "Komunitas",
    description:
      "Bergabung dengan ratusan MUA pemula dan senior. Dapatkan mentoring, berbagi pengalaman, dan bangun jaringan profesional bersama.",
  },
  {
    icon: Award,
    title: "Sertifikasi",
    description:
      "Ikuti program sertifikasi berjenjang dari Basic hingga Masterclass. Tingkatkan kredibilitas dan keahlianmu dengan standar industri.",
  },
  {
    icon: LayoutGrid,
    title: "Direktori",
    description:
      "Masuk ke katalog direktori MUA tersertifikasi. Terhubung langsung dengan klien yang mencari jasa riasan berkualitas.",
  },
];

export default function AboutSection() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="tentang" className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Tentang Rias Karsa
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Rias Karsa hadir untuk menghubungkan tiga ekosistem: MUA pemula
            yang ingin berkembang, model freelance yang mencari pengalaman, dan
            klien yang mencari jasa riasan terpercaya.
          </p>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${index + 1} card-hover bg-white rounded-md border border-border p-6 md:p-8 flex flex-col items-center text-center gap-4 cursor-default`}
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
