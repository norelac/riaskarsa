"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import useFilter from "@/hooks/useFilter";
import { muas } from "@/data/muas";
import { formatRupiah } from "@/utils/formatters";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function DirectorySection() {
  const headerRef = useScrollReveal();
  const filterRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const {
    filters,
    setSearch,
    setCity,
    setStyle,
    setPriceRange,
    filteredList,
    resetFilters,
  } = useFilter(muas);

  return (
    <section id="katalog" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Direktori MUA Terverifikasi
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Cari MUA terbaik berdasarkan lokasi, gaya riasan, dan anggaranmu.
          </p>
        </div>

        <div
          ref={filterRef}
          className="reveal bg-surface-dark border border-border rounded-[20px] p-4 md:p-6 mb-8 shadow-soft"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative lg:col-span-2">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
              />
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama atau spesialisasi..."
                className="w-full pl-9 pr-4 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all"
              />
            </div>
            <select
              value={filters.city}
              onChange={(e) => setCity(e.target.value)}
              className="px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all"
            >
              <option value="all">Semua Kota</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Yogyakarta">Yogyakarta</option>
            </select>
            <select
              value={filters.style}
              onChange={(e) => setStyle(e.target.value)}
              className="px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all"
            >
              <option value="all">Semua Gaya</option>
              <option value="Soft Glam">Soft Glam</option>
              <option value="Bold Dramatic">Bold Dramatic</option>
              <option value="Natural Minimalist">Natural Minimalist</option>
              <option value="Korean Look">Korean Look</option>
              <option value="Traditional Sunda/Jawa">Traditional Sunda/Jawa</option>
            </select>
            <select
              value={filters.priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all"
            >
              <option value="all">Semua Harga</option>
              <option value="low">Budget ({'<'} Rp 500rb)</option>
              <option value="medium">Mid-range (Rp 500rb - 1.5jt)</option>
              <option value="high">Premium ({'>'} Rp 1.5jt)</option>
            </select>
          </div>

          {(filters.search ||
            filters.city !== "all" ||
            filters.style !== "all" ||
            filters.priceRange !== "all") && (
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <p className="text-xs text-text-on-dark/60">
                Menampilkan {filteredList.length} dari {muas.length} MUA
              </p>
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-hover transition-colors"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>

        {filteredList.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((mua) => (
              <Link
                key={mua.id}
                href={`/mua/${mua.id}`}
                className="group card-hover bg-surface-dark border border-border rounded-[20px] overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-background flex items-center justify-center p-6 border-b border-border relative">
                  <Image
                    src={mua.image}
                    alt={mua.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="heading-card group-hover:text-primary-hover transition-colors">
                        {mua.name}
                      </h4>
                      <p className="text-xs text-text-on-dark/60 mt-0.5">
                        {mua.city} · {mua.experience}
                      </p>
                    </div>
                    {mua.isCertified && (
                      <Badge color="primary">Tersertifikasi</Badge>
                    )}
                  </div>
                  <span className="text-xs font-light text-supporting-light">{mua.style}</span>
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
                    <span className="text-base text-supporting-light font-normal">
                      {formatRupiah(mua.price)}
                    </span>
                    <span className="text-xs text-text-on-dark/60">
                      ★ {mua.rating} ({mua.reviews})
                    </span>
                  </div>
                  {/* CTA text (not a link - parent card is the link) */}
                  <div className="mt-3 text-center">
                    <span className="inline-flex items-center justify-center gap-1 text-xs font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
                      LIHAT SELENGKAPNYA
                    </span>
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
          <Link href="/#katalog">
            <Button variant="secondary" size="md">
              LIHAT SEMUA PENATA RIAS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
