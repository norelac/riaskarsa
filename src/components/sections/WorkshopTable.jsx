"use client";

import { workshopSchedule } from "@/data/workshopSchedule";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function WorkshopTable() {
  const headerRef = useScrollReveal();
  const tableRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="program" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Jadwal Workshop &amp; Open Call Model
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Ikuti masterclass berstandar industri dan buka peluang menjadi model
            freelance di sesi praktik kami.
          </p>
        </div>

        {/* Workshop Table */}
        <div ref={tableRef} className="reveal overflow-x-auto">
          <table className="w-full min-w-[760px] text-left border-collapse">
            <thead>
              <tr className="bg-supporting-light text-text-main">
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider">Tanggal &amp; Lokasi</th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider">Tema</th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider">Benefit / Fee</th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {workshopSchedule.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-surface" : "bg-background"}>
                  <td className="px-4 py-4 font-sans text-sm">
                    <span className="block font-medium text-primary">{item.date}</span>
                    <span className="block text-xs text-text-muted/80">{item.location}</span>
                  </td>
                  <td className="px-4 py-4 font-sans text-sm text-primary">{item.theme}</td>
                  <td className="px-4 py-4 font-sans text-sm text-primary">{item.fee}</td>
                  <td className="px-4 py-4 text-center">
                    {item.status === "open" ? (
                      <Button variant="primary" size="sm">Daftar Model</Button>
                    ) : (
                      <Badge color="warning">Kuota Penuh</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
