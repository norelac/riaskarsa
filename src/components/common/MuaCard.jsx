"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, BadgeCheck, Star, ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import { formatRupiah } from "@/utils/formatters";

export default function MuaCard({ mua }) {
  return (
    <Link
      href={`/mua/${mua.id}`}
      className="group card-hover bg-background border border-border rounded-[20px] overflow-hidden flex flex-col"
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
          <span className="text-xs font-medium tracking-wide text-text-on-dark">
            TERVERIFIKASI
          </span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-supporting-dark/80 backdrop-blur-sm px-3 py-1.5">
          <MapPin size={13} className="text-primary" />
          <span className="text-xs font-medium text-text-on-dark">
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
            <span className="flex items-center gap-1 rounded-full bg-primary/10 border border-primary/30 px-2.5 py-1 text-xs font-medium text-primary">
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
              className="text-xs font-light px-2 py-0.5 bg-surface-dark rounded-full text-supporting-light border border-primary/30"
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
          <Button variant="secondary" size="sm" as="span" className="w-full group-hover:bg-primary/10">
            LIHAT SELENGKAPNYA <ArrowRight size={13} />
          </Button>
        </div>
      </div>
    </Link>
  );
}