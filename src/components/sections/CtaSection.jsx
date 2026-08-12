"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function CtaSection() {
  const headerRef = useScrollReveal();

  return (
    <section ref={headerRef} className="reveal bg-supporting-dark text-text-on-dark py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Mari Bertumbuh Bersama Rias Karsa
        </h2>
        <p className="font-sans text-base md:text-lg text-text-on-dark/85 leading-relaxed mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan puluhan penata rias profesional Nusantara. Dapatkan
          akses ke sertifikasi resmi, masterclass eksklusif, jaringan klien yang
          lebih luas, dan dukungan penuh komunitas.
        </p>
        <Link href="/daftar">
          <Button variant="primary" size="lg">Gabung Komunitas</Button>
        </Link>
      </div>
    </section>
  );
}
