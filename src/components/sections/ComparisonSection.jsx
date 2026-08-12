"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, Sparkles } from "lucide-react";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

const features = [
  { label: "Sertifikasi Resmi", without: false, with: true },
  { label: "Portofolio Terkurasi", without: false, with: true },
  { label: "Akses Klien Langsung", without: false, with: true },
  { label: "Mentoring Senior MUA", without: false, with: true },
  { label: "Template Harga Standar", without: false, with: true },
  { label: "Badge Kepercayaan Klien", without: false, with: true },
  { label: "Jaringan Komunitas MUA", without: false, with: true },
  { label: "Prioritas di Direktori", without: false, with: true },
];

function CheckIcon({ yes }) {
  return yes ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10">
      <Check size={15} strokeWidth={3} className="text-primary" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5">
      <X size={15} strokeWidth={2.5} className="text-text-muted/50" />
    </span>
  );
}

export default function ComparisonSection() {
  const headerRef = useScrollReveal();
  const tableRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary font-sans mb-4">
            <Sparkles size={14} />
            Keunggulan Komunitas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Kenapa Harus Tersertifikasi?
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Perbedaan nyata antara MUA biasa dan MUA yang telah tergabung dalam
            komunitas Rias Karsa.
          </p>
        </div>

        <div ref={tableRef} className="reveal max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            {/* Tanpa Komunitas */}
            <div className="bg-surface border border-border rounded-[20px] rounded-b-none md:rounded-l-[20px] md:rounded-tr-none p-6 md:p-8 flex flex-col">
              <div className="text-center pb-5 mb-5 border-b border-border">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/5 mb-3">
                  <X size={18} className="text-text-muted" />
                </span>
                <h3 className="font-sans text-base font-semibold text-text-main">
                  Tanpa Komunitas
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  MUA mandiri tanpa bimbingan
                </p>
              </div>
              <ul className="flex flex-col gap-0 flex-1">
                {features.map((feature, idx) => (
                  <li
                    key={feature.label}
                    className={`flex items-center gap-3 py-3 ${
                      idx < features.length - 1 ? "border-b border-border/60" : ""
                    }`}
                  >
                    <CheckIcon yes={feature.without} />
                    <span
                      className={`text-sm ${
                        feature.without ? "text-text-main" : "text-text-muted/60 line-through"
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rias Karsa */}
            <div className="relative bg-primary border-2 border-primary rounded-[20px] rounded-t-none md:rounded-r-[20px] md:rounded-tl-none p-6 md:p-8 flex flex-col shadow-elevated">
              <div className="absolute -inset-1 bg-primary/20 rounded-[20px] rounded-t-none md:rounded-r-[20px] md:rounded-tl-none blur-xl opacity-40 -z-10" />
              <div className="text-center pb-5 mb-5 border-b border-white/20">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 mb-3">
                  <Check size={18} className="text-white" strokeWidth={3} />
                </span>
                <h3 className="font-sans text-base font-semibold text-white">
                  Rias Karsa
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  MUA tersertifikasi &amp; terhubung
                </p>
              </div>
              <ul className="flex flex-col gap-0 flex-1">
                {features.map((feature, idx) => (
                  <li
                    key={feature.label}
                    className={`flex items-center gap-3 py-3 ${
                      idx < features.length - 1 ? "border-b border-white/15" : ""
                    }`}
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                      <Check size={15} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="text-sm text-white font-medium">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/sertifikasi">
              <Button variant="primary" size="lg">
                Mulai Sertifikasi Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
