"use client";

import Link from "next/link";
import { ChevronRight, MapPin, CalendarDays } from "lucide-react";
import { workshopSchedule } from "@/data/workshopSchedule";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function WorkshopTable() {
  const headerRef = useScrollReveal();
  const tableRef = useScrollReveal({ threshold: 0.1 });
  const cardsRef = useScrollReveal({ threshold: 0.1 });

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
              {workshopSchedule.map((item, index) => (
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
          {workshopSchedule.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-border rounded-[20px] p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <CalendarDays size={16} />
                  <span>{item.date}</span>
                </div>
                {item.status === "open" ? (
                  <Badge color="primary">Tersedia</Badge>
                ) : (
                  <Badge color="warning">Kuota Penuh</Badge>
                )}
              </div>
              <h3 className="heading-card leading-tight">{item.theme}</h3>
              <div className="flex flex-col gap-1.5 text-xs text-text-on-dark/60">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  {item.location}
                </span>
                <span>Kriteria: {item.spots}</span>
                <span className="text-primary font-medium">Fee: {item.fee}</span>
              </div>
              {item.status === "open" && (
                <Link href="/apply-model">
                  <Button variant="primary" size="md" className="w-full">
                    Daftar Model
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/apply-model" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary font-sans hover:text-primary-hover transition-colors">
            LIHAT SEMUA JADWAL <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
