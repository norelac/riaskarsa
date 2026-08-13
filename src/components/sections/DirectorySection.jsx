"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, BadgeCheck, Star, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import useFilter from "@/hooks/useFilter";
import { muas } from "@/data/muas";
import { formatRupiah } from "@/utils/formatters";
import Button from "@/components/common/Button";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function DirectorySection() {
  const [showAll, setShowAll] = useState(false);
  const headerRef = useScrollReveal();
  const filterRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const {
    filters,
    setCity,
    setStyle,
    setPriceRange,
    filteredList,
    resetFilters,
  } = useFilter(muas);

  const visibleList = showAll ? filteredList : filteredList.slice(0, 3);

  return (
    <section id="katalog" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        <div
          ref={headerRef}
          className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="heading-section mb-4">
            Direktori MUA Terverifikasi
          </h2>
          <p className="font-sans text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Cari MUA terbaik berdasarkan lokasi, gaya riasan, dan anggaranmu.
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div
          ref={filterRef}
          className="reveal flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
        >
          <div className="relative w-full sm:w-auto">
            <select
              value={filters.city}
              onChange={(e) => setCity(e.target.value)}
              className="appearance-none w-full sm:w-auto h-11 pl-5 pr-10 text-sm font-sans font-medium text-text-on-dark bg-surface-dark border border-border rounded-full focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all cursor-pointer"
            >
              <option value="all">Lokasi: Semua</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Yogyakarta">Yogyakarta</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          
          <div className="relative w-full sm:w-auto">
            <select
              value={filters.style}
              onChange={(e) => setStyle(e.target.value)}
              className="appearance-none w-full sm:w-auto h-11 pl-5 pr-10 text-sm font-sans font-medium text-text-on-dark bg-surface-dark border border-border rounded-full focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all cursor-pointer"
            >
              <option value="all">Gaya: Semua</option>
              <option value="Soft Glam">Soft Glam</option>
              <option value="Bold Dramatic">Bold Dramatic</option>
              <option value="Natural Minimalist">Natural Minimalist</option>
              <option value="Korean Look">Korean Look</option>
              <option value="Traditional Sunda/Jawa">Traditional Sunda/Jawa</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={filters.priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="appearance-none w-full sm:w-auto h-11 pl-5 pr-10 text-sm font-sans font-medium text-text-on-dark bg-surface-dark border border-border rounded-full focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all cursor-pointer"
            >
              <option value="all">Harga: Semua</option>
              <option value="low">Budget (&lt; Rp 500rb)</option>
              <option value="medium">Mid-range (Rp 500rb - 1.5jt)</option>
              <option value="high">Premium (&gt; Rp 1.5jt)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {filteredList.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleList.map((mua) => (
              <Link
                key={mua.id}
                href={`/mua/${mua.id}`}
                className="group card-hover bg-surface-dark border border-border rounded-[20px] overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-background border-b border-border overflow-hidden">
                  <Image
                    src={mua.image}
                    alt={mua.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-supporting-dark/80 backdrop-blur-sm px-3 py-1.5">
                    <BadgeCheck size={14} className="text-primary" />
                    <span className="text-[10px] font-medium tracking-wide text-text-on-dark">
                      TERVERIFIKASI
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-supporting-dark/80 backdrop-blur-sm px-3 py-1.5">
                    <MapPin size={13} className="text-primary" />
                    <span className="text-[11px] font-medium text-text-on-dark">
                      {mua.city}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="heading-card group-hover:text-primary-hover transition-colors">
                      {mua.name}
                    </h4>
                    {mua.isCertified && (
                      <span className="flex items-center gap-1 rounded-full bg-primary/10 border border-primary/30 px-2.5 py-1 text-[10px] font-medium text-primary">
                        <BadgeCheck size={11} />
                        Sertifikat
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-light text-supporting-light">
                    {mua.style} · Pengalaman {mua.experience}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {mua.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-light px-2 py-0.5 bg-background rounded-full text-supporting-light border border-primary/30"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 border-t border-primary/20 flex items-center justify-between">
                    <span className="text-base text-primary font-normal">
                      {formatRupiah(mua.price)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-text-on-dark/60">
                      <Star size={13} className="text-primary fill-primary" />
                      <span className="font-medium text-text-on-dark">{mua.rating}</span>
                      <span className="text-text-on-dark/50">({mua.reviews})</span>
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary/10">
                      LIHAT SELENGKAPNYA <ArrowRight size={13} />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-surface-dark border border-border rounded-[20px] p-12 text-center">
            <p className="font-sans text-base text-text-on-dark/60">
              Tidak ditemukan MUA yang sesuai filter.
            </p>
            <button
              onClick={resetFilters}
              className="mt-3 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          {filteredList.length > 3 && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
            >
              {showAll ? "SEMBUNYIKAN" : "LIHAT SEMUA PENATA RIAS"}
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
