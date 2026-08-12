"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Star, Clock, MessageCircle } from "lucide-react";
import { muas } from "@/data/muas";
import { formatRupiah } from "@/utils/formatters";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

const WA_NUMBER = "6285819997505";

export default function MuaDetailPage({ params }) {
  const { id } = use(params);
  const mua = muas.find((m) => m.id === Number(id));

  if (!mua) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold text-text-main mb-2">
            MUA Tidak Ditemukan
          </h1>
          <p className="text-text-muted mb-4">
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#katalog"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Direktori
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white rounded-[20px] border border-border shadow-soft overflow-hidden">
          {/* Image */}
          <div className="aspect-[16/9] bg-surface flex items-center justify-center p-8 border-b border-border">
            <Image
              src={mua.image}
              alt={mua.name}
              width={500}
              height={280}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-text-main">
                  {mua.name}
                </h1>
                <p className="flex items-center gap-1.5 text-sm text-text-muted mt-1">
                  <MapPin size={14} /> {mua.city}
                </p>
              </div>
              {mua.isCertified && <Badge color="primary">Tersertifikasi</Badge>}
            </div>

            <div className="flex items-center gap-5 mb-6 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Star size={15} className="text-primary" /> {mua.rating} ({mua.reviews} ulasan)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> {mua.experience}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold text-text-main mb-2 uppercase tracking-wide">
                Gaya Riasan
              </h3>
              <p className="text-sm text-text-muted">{mua.style}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold text-text-main mb-2 uppercase tracking-wide">
                Spesialisasi
              </h3>
              <div className="flex flex-wrap gap-2">
                {mua.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs font-medium px-3 py-1 bg-surface rounded-full text-text-muted border border-border"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8 p-4 bg-surface rounded-[20px] border border-border">
              <p className="text-xs text-text-muted mb-1">Mulai dari</p>
              <p className="text-2xl font-bold text-primary">{formatRupiah(mua.price)}</p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-full text-sm font-semibold hover:bg-[#1da851] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]/30"
            >
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
