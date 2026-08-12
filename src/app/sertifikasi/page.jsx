"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";

export default function SertifikasiPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", experience: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/terima-kasih?act=certification");
  };

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

      <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-3">
            Daftar Sertifikasi
          </h1>
          <p className="text-base text-text-muted">
            Tingkatkan kredibilitas dan keahlianmu dengan program sertifikasi standar industri.
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
            <label className="block text-xs font-medium text-text-muted mb-1.5">Program Sertifikasi</label>
            <select name="program" value={form.program} onChange={handleChange} required
              className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all">
              <option value="" disabled>Pilih Program</option>
              <option value="basic">Basic Certification — Gratis</option>
              <option value="intermediate">Intermediate — Rp 250.000</option>
              <option value="masterclass">Masterclass Bridal Glam — Rp 500.000</option>
              <option value="editorial">Editorial &amp; Fashion — Rp 750.000</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Level Pengalaman</label>
            <select name="experience" value={form.experience} onChange={handleChange} required
              className="w-full px-3 py-2.5 text-sm font-sans bg-white border border-border rounded-[20px] text-text-main focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all">
              <option value="" disabled>Pilih Level</option>
              <option value="beginner">Pemula — Baru belajar</option>
              <option value="intermediate">Menengah — Sudah ada portofolio</option>
              <option value="advanced">Lanjutan — Mau tingkatkan skill</option>
            </select>
          </div>
          <Button type="submit" variant="primary" size="md" className="w-full mt-1">
            Daftar Sertifikasi
          </Button>
        </form>
      </div>
    </div>
  );
}
