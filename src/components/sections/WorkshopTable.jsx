"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, MapPin, CalendarDays } from "lucide-react";
import { workshopSchedule } from "@/data/workshopSchedule";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function WorkshopTable() {
  const [showAll, setShowAll] = useState(false);
  const headerRef = useScrollReveal();
  const tableRef = useScrollReveal({ threshold: 0.1 });
  const cardsRef = useScrollReveal({ threshold: 0.1 });
  const visibleSchedule = showAll ? workshopSchedule : workshopSchedule.slice(0, 2);

  return (
    <section id="program" className="bg-surface-dark section-pad scroll-mt-24">
      <div className="container-rias">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Jadwal Workshop &amp; Open Call Model
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Ikuti masterclass berstandar industri dan buka peluang menjadi model
            freelance di sesi praktik kami.
          </p>
        </div>

        {/* Workshop Table (desktop) */}
        <div ref={tableRef} className="reveal overflow-x-auto hidden md:block">
          <table className="w-full min-w-[820px] text-left border-collapse">
            <thead>
              <tr className="bg-supporting-light text-text-main">
                <th className="px-5 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                  Tanggal &amp; Lokasi
                </th>
                <th className="px-5 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                  Tema
                </th>
                <th className="px-5 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                  Kriteria
                </th>
                <th className="px-5 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                  Benefit / Fee
                </th>
                <th className="px-5 py-4 font-sans text-sm md:text-base font-bold uppercase tracking-wider text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visibleSchedule.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-surface-dark" : "bg-background"}
                >
                  <td className="px-5 py-5">
                    <span className="block font-medium text-primary text-base">
                      {item.date}
                    </span>
                    <span className="block text-xs text-text-on-dark/60 mt-1">
                      {item.location}
                    </span>
                  </td>
                  <td className="px-5 py-5 font-sans text-base text-primary">
                    {item.theme}
                  </td>
                  <td className="px-5 py-5 font-sans text-base text-primary">
                    {item.spots}
                  </td>
                  <td className="px-5 py-5 font-sans text-base text-primary">
                    {item.fee}
                  </td>
                  <td className="px-5 py-5 text-center">
                    {item.status === "open" ? (
                      <Button variant="primary" size="sm">
                        Daftar Model
                      </Button>
                    ) : (
                      <Badge color="warning">Kuota Penuh</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Workshop Cards (mobile) */}
        <div ref={cardsRef} className="reveal flex flex-col gap-5 md:hidden">
          {visibleSchedule.map((item) => {
            const [filled, total] = item.spots
              .replace(" terisi", "")
              .split("/")
              .map((n) => parseInt(n, 10));
            const fillPercent = total > 0 ? Math.round((filled / total) * 100) : 0;
            const isFull = item.status === "full";
            return (
              <div
                key={item.id}
                className="bg-background border border-border rounded-[20px] p-5 md:p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3 flex-wrap gap-y-2">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <CalendarDays size={16} />
                    <span>{item.date}</span>
                  </div>
                  {isFull ? (
                    <Badge color="warning">Kuota Penuh</Badge>
                  ) : (
                    <Badge color="primary">Tersedia</Badge>
                  )}
                </div>
                <div>
                  <h3 className="heading-card leading-tight">{item.title}</h3>
                  <p className="text-xs font-light text-supporting-light mt-1">
                    {item.theme}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-xs text-text-on-dark/60">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {item.location}
                  </span>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] text-text-on-dark/60">
                        Kuota terisi
                      </span>
                      <span className="text-[11px] font-medium text-primary">
                        {item.spots}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-surface-dark overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isFull ? "bg-badge-error" : "bg-primary"}`}
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-primary font-medium mt-1">Fee: {item.fee}</span>
                </div>
                {!isFull && (
                  <Link href="/apply-model">
                    <Button variant="primary" size="md" className="w-full">
                      Daftar Model
                    </Button>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary font-sans hover:text-primary-hover transition-colors"
          >
            {showAll ? "SEMBUNYIKAN JADWAL" : "LIHAT SEMUA JADWAL"}
            {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>
    </section>
  );
}
