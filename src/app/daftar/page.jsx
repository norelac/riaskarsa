"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";

export default function DaftarPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "MUA Pemula", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/terima-kasih?act=register");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main transition-colors">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-main mb-3">
            Daftar Akun Rias Karsa
          </h1>
          <p className="text-base text-text-muted">
            Bergabung dengan komunitas MUA terbesar di Indonesia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-md border border-border p-6 md:p-8 shadow-soft flex flex-col gap-5">
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Nama Lengkap</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className="w-full px-3 py-2.5 text-sm font-sans bg-surface border border-border rounded-md text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange}
              placeholder="contoh@email.com"
              className="w-full px-3 py-2.5 text-sm font-sans bg-surface border border-border rounded-md text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">No. WhatsApp</label>
            <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="w-full px-3 py-2.5 text-sm font-sans bg-surface border border-border rounded-md text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Saya mendaftar sebagai</label>
            <select name="role" value={form.role} onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm font-sans bg-surface border border-border rounded-md text-text-main focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all">
              <option>MUA Pemula</option>
              <option>Model Freelance</option>
              <option>Calon Klien</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">Password</label>
            <input type="password" name="password" required value={form.password} onChange={handleChange}
              placeholder="Minimal 8 karakter"
              className="w-full px-3 py-2.5 text-sm font-sans bg-surface border border-border rounded-md text-text-main placeholder:text-text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all" />
          </div>
          <Button type="submit" variant="primary" size="md" className="w-full mt-1">
            Daftar Sekarang
          </Button>
          <p className="text-xs text-text-muted text-center">
            Sudah punya akun? <span className="text-primary font-medium cursor-pointer hover:text-primary-hover">Masuk</span>
          </p>
        </form>
      </div>
    </div>
  );
}
