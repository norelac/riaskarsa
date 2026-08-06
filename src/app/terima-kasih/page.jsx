"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/common/Button";
import { CheckCircle } from "lucide-react";
import { Suspense } from "react";

const messages = {
  register: {
    title: "Selamat Datang di Rias Karsa!",
    desc: "Akunmu berhasil dibuat. Tim kami akan menghubungi Anda dalam 1×24 jam untuk verifikasi dan panduan bergabung komunitas.",
  },
  "apply-model": {
    title: "Aplikasi Model Terkirim!",
    desc: "Terima kasih telah melamar sebagai model freelance. MUA terkait akan menghubungi Anda via WhatsApp jika terpilih.",
  },
  certification: {
    title: "Pendaftaran Sertifikasi Diterima!",
    desc: "Anda telah terdaftar dalam program sertifikasi. Silakan cek email untuk detail pembayaran dan jadwal.",
  },
};

function ThankYouContent() {
  const searchParams = useSearchParams();
  const act = searchParams.get("act") || "register";
  const msg = messages[act] || messages.register;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Check */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-float">
            <CheckCircle size={40} className="text-primary" />
          </div>
        </div>

        {/* Content */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-4">
          {msg.title}
        </h1>
        <p className="text-base text-text-muted leading-relaxed mb-8">
          {msg.desc}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              Kembali ke Beranda
            </Button>
          </Link>
          <a href="https://instagram.com/riaskarsa" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              Follow Instagram
            </Button>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-text-muted mt-10">
          © {new Date().getFullYear()} Rias Karsa — IT FEST 2026
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-text-muted">Memuat...</p>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
