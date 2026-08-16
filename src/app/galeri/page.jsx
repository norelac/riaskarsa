"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { galleryTabs, galleryImages } from "@/data/galleryImages";

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  const filteredImages =
    activeTab === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.tab === activeTab);

  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: "auto" }}>
      {/* Header */}
      <div className="bg-supporting-dark border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={handleBack} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-text-on-dark transition-colors">
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
            Galeri Karya &amp; Kegiatan
          </h1>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Lihat hasil karya para MUA tersertifikasi Rias Karsa dari berbagai
            gaya riasan dan acara.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
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
      </div>
    </div>
  );
}