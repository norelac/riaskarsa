"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import useFilter from "@/hooks/useFilter";
import { muas } from "@/data/muas";
import MuaCard from "@/components/common/MuaCard";
import useScrollReveal from "@/hooks/useScrollReveal";

const selectClass =
  "appearance-none w-full sm:w-auto h-11 pl-5 pr-10 text-sm font-sans font-medium text-text-on-dark bg-background border border-border rounded-full focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all cursor-pointer";

export default function DirectorySection() {
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

  const visibleList = filteredList.slice(0, 3);

  return (
    <section id="katalog" className="bg-surface-dark section-pad scroll-mt-24">
      <div className="container-rias">
        <div
          ref={headerRef}
          className="reveal text-center max-w-2xl mx-auto mb-6 md:mb-8"
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
              aria-label="Filter lokasi"
              value={filters.city}
              onChange={(e) => setCity(e.target.value)}
              className={selectClass}
            >
              <option value="all">Lokasi: Semua</option>
              <option value="Semarang">Semarang</option>
              <option value="Ungaran">Ungaran</option>
              <option value="Salatiga">Salatiga</option>
              <option value="Kendal">Kendal</option>
              <option value="Demak">Demak</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
              <ChevronDown size={12} />
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Filter gaya"
              value={filters.style}
              onChange={(e) => setStyle(e.target.value)}
              className={selectClass}
            >
              <option value="all">Gaya: Semua</option>
              <option value="Soft Glam">Soft Glam</option>
              <option value="Bold Dramatic">Bold Dramatic</option>
              <option value="Natural Minimalist">Natural Minimalist</option>
              <option value="Korean Look">Korean Look</option>
              <option value="Traditional Sunda/Jawa">Traditional Sunda/Jawa</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
              <ChevronDown size={12} />
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Filter harga"
              value={filters.priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className={selectClass}
            >
              <option value="all">Harga: Semua</option>
              <option value="low">Budget (&lt; Rp 500rb)</option>
              <option value="medium">Mid-range (Rp 500rb - 1.5jt)</option>
              <option value="high">Premium (&gt; Rp 1.5jt)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
              <ChevronDown size={12} />
            </div>
          </div>
        </div>

        {filteredList.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleList.map((mua) => (
              <MuaCard key={mua.id} mua={mua} />
            ))}
          </div>
        ) : (
          <div className="bg-background border border-border rounded-[20px] p-12 text-center">
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
        {filteredList.length > 3 && (
          <div className="mt-12 text-center">
            <Link
              href="/penata-rias"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
            >
              LIHAT SEMUA PENATA RIAS
              <ChevronRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}