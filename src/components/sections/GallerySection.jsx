"use client";

import { useState } from "react";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const galleryTabs = [
  "Semua",
  "Workshop",
  "Hasil Riasan",
  "Catwalk",
  "Pemotretan",
  "Lain-Lain",
];

const galleryImages = [
  { src: "/asset/ike-ellyana--lu62pdSL2s-unsplash 1.svg", alt: "MUA bridal makeup session", tab: "Hasil Riasan" },
  { src: "/asset/rizky-motion-J7PfUVrNJos-unsplash 1.svg", alt: "Editorial makeup look", tab: "Catwalk" },
  { src: "/asset/febrian-zakaria-Fv_gjHFqJ5c-unsplash 1.svg", alt: "Masterclass practice session", tab: "Workshop" },
  { src: "/asset/raden-prasetya-se5YNJCokUo-unsplash 1.svg", alt: "Traditional Sunda makeup", tab: "Hasil Riasan" },
  { src: "/asset/ike-ellyana-i2K0iC1jzDw-unsplash 1.svg", alt: "Natural daily look", tab: "Pemotretan" },
  { src: "/asset/wherda-arsianto-6tfLsrwxbKQ-unsplash 1.svg", alt: "Korean dewy makeup look", tab: "Hasil Riasan" },
  { src: "/asset/febrian-zakaria-dVkKzzoUJfg-unsplash 1.svg", alt: "Model practice session", tab: "Workshop" },
  { src: "/asset/europeana-tO5tbSmdP4Q-unsplash 1.svg", alt: "Fashion show prep", tab: "Catwalk" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const filteredImages =
    activeTab === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.tab === activeTab);

  return (
    <section id="galeri" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Galeri Karya &amp; Kegiatan
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Lihat hasil karya para MUA tersertifikasi Rias Karsa dari berbagai
            gaya riasan dan acara.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {galleryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-normal font-sans rounded-full transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-ink shadow-soft"
                  : "bg-transparent border border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid (masonry) */}
        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${(index % 3) + 1} break-inside-avoid mb-6 group relative rounded-[20px] border border-border overflow-hidden bg-surface-dark card-hover cursor-default`}
            >
              <div className={`relative ${["aspect-[4/5]", "aspect-square", "aspect-[3/4]"][index % 3]}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-text-on-dark translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors">
            LIHAT SEMUA
          </button>
        </div>
      </div>
    </section>
  );
}
