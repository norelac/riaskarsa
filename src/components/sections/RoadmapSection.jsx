"use client";

import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const roadmapData = {
  MUA: {
    label: "MUA Pemula",
    steps: [
      { title: "Buat Akun", desc: "Daftar dan lengkapi profil dasarmu." },
      { title: "Gabung Komunitas", desc: "Akses forum, mentor, dan konten belajar." },
      { title: "Sertifikasi", desc: "Ikuti Masterclass & uji keahlianmu." },
      { title: "Masuk Direktori", desc: "Profil & portofoliamu tampil ke ribuan klien." },
    ],
  },
  Model: {
    label: "Model Freelance",
    steps: [
      { title: "Buat Akun", desc: "Daftar dan lengkapi data diri." },
      { title: "Cek Open Call", desc: "Lihat jadwal workshop & kriteria model." },
      { title: "Apply & Diterima", desc: "Ajukan diri dan tunggu konfirmasi." },
      { title: "Mulai Bekerja", desc: "Ikuti sesi shoot dan dapatkan bayaran." },
    ],
  },
  Klien: {
    label: "Calon Klien",
    steps: [
      { title: "Cari MUA", desc: "Filter berdasarkan lokasi, gaya, harga." },
      { title: "Cek Portofolio", desc: "Lihat hasil karya & rating MUA." },
      { title: "Hubungi Langsung", desc: "Chat atau telepon via tombol kontak." },
      { title: "Booking & Selesai", desc: "Atur jadwalmu dan nikmati hasilnya." },
    ],
  },
};

const tabs = Object.keys(roadmapData);

export default function RoadmapSection() {
  const [activeTab, setActiveTab] = useState("MUA");
  const current = roadmapData[activeTab];
  const headerRef = useScrollReveal();
  const stepsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="alur" className="bg-background section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Alur Bergabung
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Pilih peranmu dan lihat langkah-langkah mudah untuk memulai
            perjalananmu bersama Rias Karsa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface-dark border border-border rounded-full p-1 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 text-sm font-normal font-sans rounded-full transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-ink shadow-soft"
                    : "text-primary hover:text-text-on-dark hover:bg-background"
                }`}
              >
                {roadmapData[tab].label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="reveal relative">
          <div className="absolute left-7 top-7 bottom-7 w-[2px] bg-border lg:hidden" />
          <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {current.steps.map((step, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="tab-fade-enter flex items-start gap-4 sm:flex-col sm:items-center sm:text-center sm:gap-4"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-ink flex items-center justify-center shadow-soft relative z-10">
                    <span className="font-serif text-xl font-normal">
                      {index + 1}
                    </span>
                  </div>
                  {index < current.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-full w-[calc(100%+2rem)] h-[2px] bg-border -translate-x-8" />
                  )}
                </div>
                <div className="sm:text-center flex-1">
                  <h4 className="font-sans text-base font-normal text-text-on-dark mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-on-dark/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
