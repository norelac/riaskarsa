"use client";

import { useEffect, useMemo, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Clock,
  MapPin,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { muas } from "@/data/muas";
import { muaReviews } from "@/data/muaReviews";
import { formatRupiah } from "@/utils/formatters";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import RatingStars from "@/components/common/RatingStars";

const WA_NUMBER = "6285819997505";

const priceRangeLabel = {
  low: "Ekonomis",
  medium: "Menengah",
  high: "Premium",
};

export default function MuaDetailPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const mua = muas.find((m) => m.id === Number(id));
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/#katalog");
  };

  const related = useMemo(
    () => muas.filter((m) => m.id !== Number(id)).slice(0, 3),
    [id]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i - 1 + mua.portfolio.length) % mua.portfolio.length);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % mua.portfolio.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, mua]);

  if (!mua) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-serif text-2xl font-bold text-primary mb-2">
            MUA Tidak Ditemukan
          </h1>
          <p className="text-text-on-dark/70 mb-4">
            Profil MUA yang Anda cari tidak tersedia.
          </p>
          <Link href="/#katalog">
            <Button variant="primary" size="md">
              Kembali ke Direktori
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo ${mua.name}, saya tertarik dengan jasa riasan Anda dari Rias Karsa. Bisa info lebih lanjut?`
  )}`;

  const reviews = muaReviews.filter((r) => r.muaId === mua.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-supporting-dark border-b border-primary/20">
        <div className="container-rias py-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-text-on-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container-rias py-8 md:py-12 pb-20 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-7 lg:gap-9">
          {/* ── Profile Card ── */}
            <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-5 md:gap-7 bg-surface-dark border border-border rounded-[20px] p-6 md:p-8 lg:col-start-1 lg:row-start-1">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-background border border-border">
                <Image
                  src={mua.image}
                  alt={mua.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-supporting-dark/80 backdrop-blur-sm px-3 py-1.5">
                  <BadgeCheck size={14} className="text-primary" />
                  <span className="text-xs font-medium tracking-wide text-text-on-dark">
                    TERVERIFIKASI
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <Badge color="primary" className="self-start mb-3">
                  Rias {mua.style}
                </Badge>
                <h1 className="heading-section !text-[32px] md:!text-[40px] leading-tight">
                  {mua.name}
                </h1>
                <p className="flex items-center gap-1.5 text-sm text-text-on-dark/70 mt-2">
                  <MapPin size={14} className="text-primary" /> {mua.city}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-text-on-dark/70">
                  <span className="flex items-center gap-2">
                    <RatingStars rating={mua.rating} size={15} />
                    <span className="font-medium text-text-on-dark">
                      {mua.rating}
                    </span>
                    <span className="text-text-on-dark/50">({mua.reviews} ulasan)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-primary" /> Pengalaman{" "}
                    {mua.experience}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-text-on-dark/80">
                  {mua.bio}
                </p>

                <div className="mt-auto pt-5">
                  <h3 className="text-xs font-semibold text-text-on-dark/80 mb-2 uppercase tracking-wide">
                    Spesialisasi
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mua.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-light px-3 py-1 bg-background rounded-full text-supporting-light border border-primary/30"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div id="portofolio" className="scroll-mt-24 lg:col-span-2 lg:row-start-2">
              <h2 className="heading-section mb-1">Portofolio Karya</h2>
              <p className="text-sm text-text-on-dark/60 mb-6">
                Beberapa hasil riasan terbaru dari {mua.name}.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {mua.portfolio.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[4/5] rounded-[20px] overflow-hidden bg-surface-dark border border-border card-hover cursor-pointer focus:outline-none focus:ring-[3px] focus:ring-primary-ring"
                    aria-label={`Lihat ${item.alt}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-supporting-dark/70 via-transparent to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-medium text-text-on-dark opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0">
                      {item.alt}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="lg:col-span-2 lg:row-start-3">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <h2 className="heading-section mb-0">Ulasan Klien</h2>
                <div className="flex items-center gap-2 text-sm">
                  <RatingStars rating={mua.rating} size={15} />
                  <span className="font-medium text-text-on-dark">
                    {mua.rating}/5
                  </span>
                  <span className="text-text-on-dark/50">
                    dari {mua.reviews} ulasan
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.map((r) => (
                  <div
                    key={`${r.muaId}-${r.name}`}
                    className="bg-surface-dark border border-border rounded-[20px] p-4 md:p-5 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-text-on-dark">
                        {r.name}
                      </p>
                      <span className="text-xs text-text-on-dark/50">
                        {r.date}
                      </span>
                    </div>
                    <RatingStars rating={r.rating} size={13} />
                    <p className="text-sm leading-relaxed text-text-on-dark/75">
                      {r.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related MUA */}
            <div className="lg:col-span-2 lg:row-start-4">
              <h2 className="heading-section mb-6">MUA Lainnya</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/mua/${rel.id}`}
                    className="group card-hover bg-surface-dark border border-border rounded-[20px] overflow-hidden flex flex-col"
                  >
                    <div className="relative aspect-[4/3] bg-background border-b border-border overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-1.5 flex-1">
                      <h4 className="heading-card group-hover:text-primary-hover transition-colors">
                        {rel.name}
                      </h4>
                      <span className="text-xs font-light text-supporting-light">
                        {rel.style} · {rel.city}
                      </span>
                      <div className="mt-auto pt-2 flex items-center justify-between">
                        <span className="text-sm text-primary">
                          {formatRupiah(rel.price)}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-text-on-dark/70">
                          <RatingStars rating={rel.rating} size={11} />
                          {rel.rating}
                        </span>
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:text-primary-hover transition-colors">
                        Lihat Profil <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          {/* ── Booking Aside ── */}
          <aside className="lg:col-start-2 lg:row-start-1 lg:self-stretch">
            <div className="h-full bg-surface-dark border border-border rounded-[20px] p-5 md:p-7 shadow-elevated flex flex-col">
              <p className="text-xs text-text-on-dark/70 mb-1">Mulai dari</p>
              <div className="flex items-end justify-between gap-3 mb-5">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                  {formatRupiah(mua.price)}
                </p>
                <Badge color="primary">{priceRangeLabel[mua.priceRange]}</Badge>
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-on-dark">
                      MUA Tersertifikasi
                    </p>
                    <p className="text-xs text-text-on-dark/60">
                      Terverifikasi Rias Karsa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-on-dark">
                      Melayani Area Semarang Raya
                    </p>
                    <p className="text-xs text-text-on-dark/60">
                      Semarang, Ungaran, Salatiga, Kendal, Demak
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full bg-primary text-primary-ink py-3.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-[3px] focus:ring-primary-ring"
              >
                <MessageCircle size={18} />
                Hubungi lewat WhatsApp
              </a>
              <a
                href="#portofolio"
                className="mt-3 flex items-center justify-center gap-2 w-full border border-primary text-primary py-3 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                Lihat Portofolio
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-supporting-dark/95 backdrop-blur-sm border-t border-primary/20 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
          <div className="min-w-0">
            <p className="text-xs text-text-on-dark/60">Mulai dari</p>
            <p className="font-serif text-lg font-bold text-primary leading-tight truncate">
              {formatRupiah(mua.price)}
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 shrink-0 bg-primary text-primary-ink px-5 py-3 rounded-full text-xs font-semibold hover:bg-primary-hover transition-colors"
          >
            <MessageCircle size={16} />
            Hubungi
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Tutup"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-surface-dark border border-border text-text-on-dark flex items-center justify-center hover:bg-primary hover:text-primary-ink transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + mua.portfolio.length) % mua.portfolio.length
              );
            }}
            aria-label="Sebelumnya"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-dark border border-border text-text-on-dark flex items-center justify-center hover:bg-primary hover:text-primary-ink transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] md:aspect-[4/5] rounded-[20px] overflow-hidden border border-border">
              <Image
                src={mua.portfolio[lightboxIndex].src}
                alt={mua.portfolio[lightboxIndex].alt}
                fill
                sizes="(max-width: 640px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-text-on-dark/80">
              {mua.portfolio[lightboxIndex].alt}
            </p>
            <p className="mt-1 text-center text-xs text-text-on-dark/50">
              {lightboxIndex + 1} / {mua.portfolio.length}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % mua.portfolio.length);
            }}
            aria-label="Berikutnya"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-dark border border-border text-text-on-dark flex items-center justify-center hover:bg-primary hover:text-primary-ink transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
