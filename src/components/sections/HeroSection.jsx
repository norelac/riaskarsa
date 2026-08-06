import Link from "next/link";
import Button from "@/components/common/Button";

export default function HeroSection() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="hero-enter hero-enter-delay-1 inline-flex self-center lg:self-start items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary font-sans">
              IT FEST 2026 — Komunitas MUA
            </span>
            <h1 className="hero-enter hero-enter-delay-2 font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight">
              Rias Wajahmu, <br />
              <span className="text-primary">Tingkatkan</span> Potensimu
            </h1>
            <p className="hero-enter hero-enter-delay-3 text-base md:text-lg text-text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
              Platform komunitas, sertifikasi, dan direktori Makeup Artist
              Indonesia. Bergabunglah dengan ratusan MUA pemula yang siap
              berkembang bersama.
            </p>
            <div className="hero-enter hero-enter-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Link href="/daftar">
                <Button variant="primary" size="lg">Daftar MUA</Button>
              </Link>
              <Button variant="secondary" size="lg" href="#katalog">Cari MUA</Button>
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-3 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg animate-float">
              <div className="absolute inset-0 bg-surface rounded-2xl transform rotate-3 scale-105" />
              <div className="relative bg-surface rounded-2xl border border-border p-6 shadow-soft">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border border-border p-4 flex flex-col items-center gap-2 card-hover cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-lg font-bold text-primary">1</span>
                    </div>
                    <span className="text-xs font-medium text-text-muted text-center">Daftar Akun</span>
                  </div>
                  <div className="bg-white rounded-lg border border-border p-4 flex flex-col items-center gap-2 card-hover cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-lg font-bold text-primary">2</span>
                    </div>
                    <span className="text-xs font-medium text-text-muted text-center">Join Komunitas</span>
                  </div>
                  <div className="bg-white rounded-lg border border-border p-4 flex flex-col items-center gap-2 card-hover cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-lg font-bold text-primary">3</span>
                    </div>
                    <span className="text-xs font-medium text-text-muted text-center">Sertifikasi</span>
                  </div>
                  <div className="bg-white rounded-lg border border-border p-4 flex flex-col items-center gap-2 card-hover cursor-default">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center animate-pulse-glow">
                      <span className="font-serif text-lg font-bold">4</span>
                    </div>
                    <span className="text-xs font-medium text-primary text-center font-semibold">Terdaftar di Direktori</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-border card-hover cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                      <span className="font-serif text-sm font-bold text-primary">SA</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text-main">Sarah Ayu</p>
                      <p className="text-xs text-text-muted">Tersertifikasi · Jakarta</p>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">★ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
