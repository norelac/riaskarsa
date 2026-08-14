"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function CtaSection() {
  const headerRef = useScrollReveal();

  return (
    <section
      ref={headerRef}
      id="kontak"
      className="reveal bg-supporting-dark text-text-on-dark pt-20 pb-16 md:pt-[100px] md:pb-[120px] scroll-mt-24 shadow-upward"
    >
      <div className="container-rias">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[32px] font-normal text-primary tracking-[0.32px] mb-4">
            Mari Bertumbuh Bersama Rias Karsa
          </h2>
          <p className="font-sans text-[18px] leading-[28.8px] tracking-[0.54px] text-text-on-dark mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan puluhan penata rias profesional Semarang Raya. Dapatkan
            akses ke sertifikasi resmi, masterclass eksklusif, jaringan klien yang
            lebih luas, dan dukungan penuh komunitas.
          </p>
          <Link href="/daftar">
            <Button variant="primary" size="md" className="!font-normal tracking-[0.32px]">
              GABUNG KOMUNITAS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
