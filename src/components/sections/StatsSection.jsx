"use client";

import { Users, Award, Camera } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import CountUp from "@/components/common/CountUp";

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "MUA Terverifikasi" },
  { icon: Award, value: 40, suffix: "+", label: "Master Class" },
  { icon: Camera, value: 1500, suffix: "+", label: "Klien" },
];

export default function StatsSection() {
  const headerRef = useScrollReveal();
  const statsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-background section-pad">
      <div className="container-rias">
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Dampak Rias Karsa
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/80 leading-relaxed">
            Angka yang terus bertumbuh bersama komunitas kami.
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${index + 1} flex flex-col items-center text-center gap-3`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <stat.icon size={24} className="text-primary" />
              </div>
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                className="font-serif text-3xl sm:text-4xl md:text-[36px] font-normal text-primary leading-none"
              />
              <span className="text-sm md:text-lg font-normal text-primary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
