"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import { openCalls } from "@/data/openCalls";
import { Suspense } from "react";

function ApplyModelContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get("openCall") || "";
  const [form, setForm] = useState({
    name: "", email: "", phone: "", portfolio: "", openCallId: preselectedId,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/terima-kasih?act=apply-model");
  };

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-3">
          Apply Model Freelance
        </h1>
        <p className="text-base text-text-muted">
          Daftarkan dirimu sebagai model di masterclass dan workshop Rias Karsa.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-[20px] p-6 md:p-8 shadow-soft flex flex-col gap-5">
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1.5">Nama Lengkap</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1.5">Email</label>
          <input type="email" name="email" required value={form.email} onChange={handleChange}
            placeholder="contoh@email.com"
            className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1.5">No. WhatsApp</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
            placeholder="08xxxxxxxxxx"
            className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1.5">Open Call yang Diminati</label>
          <select name="openCallId" value={form.openCallId} onChange={handleChange} required
            className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all">
            <option value="" disabled>Pilih Open Call</option>
            {openCalls.map((call) => (
              <option key={call.id} value={call.id}>{call.title} — {call.date}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-text-muted mb-1.5">Link Portfolio (Opsional)</label>
          <input type="url" name="portfolio" value={form.portfolio} onChange={handleChange}
            placeholder="https://instagram.com/..."
            className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
        </div>
        <Button type="submit" variant="primary" size="md" className="w-full mt-1">
          Kirim Aplikasi
        </Button>
      </form>
    </div>
  );
}

export default function ApplyModelPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main transition-colors">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
      <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><p className="text-text-muted">Memuat...</p></div>}>
        <ApplyModelContent />
      </Suspense>
    </div>
  );
}
