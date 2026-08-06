"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";
import { openCalls } from "@/data/openCalls";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function OpenCallSection() {
  const [expandedId, setExpandedId] = useState(null);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="model" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
            Open Call Model Freelance
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Cari pengalaman dan penghasilan tambahan sebagai model di
            masterclass dan workshop Rias Karsa.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openCalls.map((call, index) => (
            <div key={call.id} className={`reveal reveal-delay-${(index % 2) + 1} bg-white rounded-md border border-border overflow-hidden card-hover`}>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-40 aspect-[4/3] sm:aspect-auto bg-surface flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-border relative">
                  <Image src={call.image} alt={call.title} width={160} height={120} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-sans text-base font-semibold text-text-main leading-tight pr-2">{call.title}</h4>
                    <Badge color={call.spotsLeft <= 2 ? "warning" : "primary"}>{call.spotsLeft} slot</Badge>
                  </div>
                  <div className="flex flex-col gap-1.5 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-text-muted"><Calendar size={13} />{call.date}</span>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted"><MapPin size={13} />{call.location}</span>
                  </div>
                  <p className="text-xs text-text-muted bg-surface rounded p-2.5 mb-4">
                    Kompensasi: <span className="font-medium text-text-main">{call.compensation}</span>
                  </p>
                  <button onClick={() => setExpandedId(expandedId === call.id ? null : call.id)} className="text-xs font-medium text-primary hover:text-primary-hover transition-colors mb-3">
                    {expandedId === call.id ? "Tutup Kriteria ▲" : "Lihat Kriteria ▼"}
                  </button>
                  {expandedId === call.id && (
                    <div className="mb-4 pt-3 border-t border-border tab-fade-enter">
                      <p className="text-xs font-semibold text-text-main mb-2 flex items-center gap-1.5"><Users size={13} />Kriteria Model:</p>
                      <ul className="flex flex-col gap-1.5">
                        {call.requirements.map((req, idx) => (
                          <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>{req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link href={`/apply-model?openCall=${call.id}`}>
                    <Button variant="primary" size="sm" className="w-full sm:w-auto">Apply Model</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
