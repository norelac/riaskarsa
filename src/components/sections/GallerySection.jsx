"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";
import { galleryTabs, galleryImages } from "@/data/galleryImages";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const filteredImages =
    activeTab === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.tab === activeTab);

  const visibleImages = filteredImages.slice(0, 6);

  return (
    <section id="galeri" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-4 md:mb-6">
          <h2 className="heading-section mb-4">
            Galeri Karya &amp; Kegiatan
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Lihat hasil karya para MUA tersertifikasi Rias Karsa dari berbagai
            gaya riasan dan acara.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-3">
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
              className="group relative rounded-[20px] overflow-hidden bg-surface-dark cursor-default"
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 pt-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium text-text-on-dark translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {filteredImages.length > 6 && (
          <div className="mt-10 text-center">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
            >
              LIHAT SEMUA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}