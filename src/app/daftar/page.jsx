"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";

const inputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";

export default function DaftarPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "MUA Pemula", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/terima-kasih?act=register");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-supporting-dark border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={handleBack} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-text-on-dark transition-colors">
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
            Daftar Akun Rias Karsa
          </h1>
          <p className="text-base text-text-on-dark/70">
            Bergabunglah dengan komunitas penata rias profesional Semarang Raya.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface-dark border border-border rounded-[20px] p-6 md:p-8 shadow-soft flex flex-col gap-5">
          <div>
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5">Nama Lengkap</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange}
              placeholder="Masukkan nama lengkap" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5">Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange}
              placeholder="contoh@email.com" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5">No. WhatsApp</label>
            <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
              placeholder="08xxxxxxxxxx" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5">Saya mendaftar sebagai</label>
            <select name="role" value={form.role} onChange={handleChange} className={inputClass}>
              <option>MUA Pemula</option>
              <option>Model Freelance</option>
              <option>Calon Klien</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5">Password</label>
            <input type="password" name="password" required value={form.password} onChange={handleChange}
              placeholder="Minimal 8 karakter" className={inputClass} />
          </div>
          <Button type="submit" variant="primary" size="md" className="w-full mt-1">
            Daftar Sekarang
          </Button>
          <p className="text-xs text-text-on-dark/60 text-center">
            Sudah punya akun? <span className="text-primary font-medium cursor-pointer hover:text-primary-hover">Masuk</span>
          </p>
        </form>
      </div>
    </div>
  );
}
