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
    <section id="hero" className="relative min-h-[661px] flex items-center text-white overflow-hidden scroll-mt-24">
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

      <div className="relative z-10 container-rias py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="hero-enter hero-enter-delay-1 inline-flex self-center lg:self-start items-center rounded-full bg-primary/15 px-4 py-1.5 text-xs font-medium text-primary font-sans">
              Komunitas · Sertifikasi · Direktori MUA
            </span>

            <h1 className="hero-enter hero-enter-delay-2 font-serif text-[40px] md:text-[48px] font-normal text-primary leading-tight">
              Menyulam Cipta, <br />
              Memancarkan Anggunnya <br />
              Paras Nusantara
            </h1>

            <p className="hero-enter hero-enter-delay-3 text-lg text-text-on-dark/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Bergabunglah dengan puluhan penata rias profesional Nusantara.
              Dapatkan akses ke sertifikasi resmi, masterclass eksklusif, jaringan
              klien yang lebih luas, dan dukungan penuh komunitas.
            </p>

            <div className="hero-enter hero-enter-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Link href="/#katalog">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Cari MUA</Button>
              </Link>
              <Button variant="secondary" size="lg" href="/daftar" className="w-full sm:w-auto">Gabung Komunitas</Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="hero-enter hero-enter-delay-3">
            <div className="grid grid-cols-3 gap-4 md:gap-6 rounded-[20px] border border-primary/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl md:text-[36px] font-normal text-primary">
                    {s.value}
                  </span>
                  <p className="font-sans text-xs md:text-base font-normal text-primary">
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
