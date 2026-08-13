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
  { src: "/asset/aritra-roy-xwaQ6FFqmLQ-unsplash 1.svg", alt: "Behind the scenes photoshoot", tab: "Lain-Lain" },
  { src: "/asset/krisna-putra-pratama-lKF-MdtuIss-unsplash 1.svg", alt: "Creative studio portrait", tab: "Lain-Lain" },
  { src: "/asset/rendy-novantino-EUydTGTCrHo-unsplash 1.svg", alt: "Bridal trial session", tab: "Workshop" },
  { src: "/asset/rizky-motion-D_5Kf6Du6JY-unsplash 1.svg", alt: "Photoshoot session", tab: "Pemotretan" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [showAll, setShowAll] = useState(false);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const filteredImages =
    activeTab === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.tab === activeTab);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  return (
    <section id="galeri" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="heading-section mb-4">
            Galeri Karya &amp; Kegiatan
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Lihat hasil karya para MUA tersertifikasi Rias Karsa dari berbagai
            gaya riasan dan acara.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-4">
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

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-[20px] border border-border overflow-hidden bg-surface-dark card-hover cursor-default`}
            >
              <div className="relative aspect-[4/5]">
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
        {filteredImages.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
            >
              {showAll ? "SEMBUNYIKAN" : "LIHAT SEMUA"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showAll ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
