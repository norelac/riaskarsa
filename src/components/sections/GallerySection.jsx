"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const galleryImages = [
  { src: "/asset/ike-ellyana--lu62pdSL2s-unsplash 1.svg", alt: "MUA bridal makeup session" },
  { src: "/asset/rizky-motion-J7PfUVrNJos-unsplash 1.svg", alt: "Editorial makeup look" },
  { src: "/asset/febrian-zakaria-Fv_gjHFqJ5c-unsplash 1.svg", alt: "Masterclass practice session" },
  { src: "/asset/raden-prasetya-se5YNJCokUo-unsplash 1.svg", alt: "Traditional Sunda makeup" },
  { src: "/asset/ike-ellyana-i2K0iC1jzDw-unsplash 1.svg", alt: "Natural daily look" },
  { src: "/asset/wherda-arsianto-6tfLsrwxbKQ-unsplash 1.svg", alt: "Korean dewy makeup look" },
];

export default function GallerySection() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Galeri Karya MUA
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Lihat hasil karya para MUA tersertifikasi Rias Karsa dari berbagai
            gaya riasan dan acara.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${(index % 3) + 1} group relative rounded-md border border-border overflow-hidden bg-white card-hover cursor-default`}
            >
              <div className="aspect-[4/5] bg-surface flex items-center justify-center p-4 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
