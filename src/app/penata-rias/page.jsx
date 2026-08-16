"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import useFilter from "@/hooks/useFilter";
import { muas } from "@/data/muas";
import MuaCard from "@/components/common/MuaCard";

const cities = [
  { value: "all", label: "Lokasi: Semua" },
  { value: "Semarang", label: "Semarang" },
  { value: "Ungaran", label: "Ungaran" },
  { value: "Salatiga", label: "Salatiga" },
  { value: "Kendal", label: "Kendal" },
  { value: "Demak", label: "Demak" },
];

const styles = [
  { value: "all", label: "Gaya: Semua" },
  { value: "Soft Glam", label: "Soft Glam" },
  { value: "Bold Dramatic", label: "Bold Dramatic" },
  { value: "Natural Minimalist", label: "Natural Minimalist" },
  { value: "Korean Look", label: "Korean Look" },
  { value: "Traditional Sunda/Jawa", label: "Traditional Sunda/Jawa" },
];

const priceRanges = [
  { value: "all", label: "Harga: Semua" },
  { value: "low", label: "Budget (< Rp 500rb)" },
  { value: "medium", label: "Mid-range (Rp 500rb - 1.5jt)" },
  { value: "high", label: "Premium (> Rp 1.5jt)" },
];

const selectClass =
  "appearance-none w-full sm:w-auto h-11 pl-5 pr-10 text-sm font-sans font-medium text-text-on-dark bg-background border border-border rounded-full focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all cursor-pointer";

function FilterSelect({ options, value, onChange, ariaLabel }) {
  return (
    <div className="relative w-full sm:w-auto">
      <select aria-label={ariaLabel} value={value} onChange={onChange} className={selectClass}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-on-dark/60">
        <ChevronDown size={12} />
      </div>
    </div>
  );
}

export default function PenataRiasPage() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  const {
    filters,
    setCity,
    setStyle,
    setPriceRange,
    filteredList,
    resetFilters,
  } = useFilter(muas);

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
            Direktori MUA Terverifikasi
          </h1>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Cari MUA terbaik berdasarkan lokasi, gaya riasan, dan anggaranmu.
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          <FilterSelect options={cities} value={filters.city} onChange={(e) => setCity(e.target.value)} ariaLabel="Filter lokasi" />
          <FilterSelect options={styles} value={filters.style} onChange={(e) => setStyle(e.target.value)} ariaLabel="Filter gaya" />
          <FilterSelect options={priceRanges} value={filters.priceRange} onChange={(e) => setPriceRange(e.target.value)} ariaLabel="Filter harga" />
        </div>

        {filteredList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((mua) => (
              <MuaCard key={mua.id} mua={mua} />
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
      </div>
    </div>
  );
}