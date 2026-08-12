import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

const stats = [
  { value: "150+", label: "MUA Terverifikasi" },
  { value: "40+", label: "Master Class" },
  { value: "1500+", label: "Klien" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[661px] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-supporting-dark">
        <Image
          src="/asset/krisna-putra-pratama-lKF-MdtuIss-unsplash 1.svg"
          alt="Background hero Rias Karsa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-supporting-dark via-supporting-dark/80 to-supporting-dark/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="hero-enter hero-enter-delay-1 inline-flex self-center lg:self-start items-center rounded-full bg-primary/15 px-4 py-1.5 text-xs font-medium text-primary font-sans">
              IT FEST 2026 — Komunitas Penata Rias
            </span>

            <h1 className="hero-enter hero-enter-delay-2 font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Menyulam Cipta, <br />
              <span className="text-primary">Memancarkan Anggunnya</span> <br />
              Paras Nusantara
            </h1>

            <p className="hero-enter hero-enter-delay-3 text-lg md:text-xl text-text-on-dark/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Bergabunglah dengan puluhan penata rias profesional Nusantara.
              Dapatkan akses ke sertifikasi resmi, masterclass eksklusif, jaringan
              klien yang lebih luas, dan dukungan penuh komunitas.
            </p>

            <div className="hero-enter hero-enter-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Link href="/#katalog">
                <Button variant="primary" size="lg">Cari MUA</Button>
              </Link>
              <Button variant="secondary" size="lg" href="/daftar">Gabung Komunitas</Button>
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-3 flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 gap-4 w-full max-w-md">
              {stats.map((s, index) => (
                <div
                  key={s.label}
                  className="text-center lg:text-right bg-white/5 backdrop-blur-sm rounded-[20px] border border-primary/10 py-5 px-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-serif text-4xl md:text-5xl font-bold text-primary">
                    {s.value}
                  </span>
                  <p className="font-sans text-sm text-text-on-dark/80 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
