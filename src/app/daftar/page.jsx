"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/common/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { registerUser, getCurrentUser } from "@/lib/auth";

const inputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";
const errorInputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-badge-error rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-badge-error focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";

const WA_NUMBER = "6281234567890";

export default function DaftarPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "MUA Pemula", password: "" });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setUser(getCurrentUser()));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Nama lengkap wajib diisi.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Format email tidak valid.";
    if (!/^08\d{8,12}$/.test(form.phone.replace(/[\s-]/g, "")))
      nextErrors.phone = "Nomor WhatsApp tidak valid (contoh: 081234567890).";
    if (form.password.length < 8) nextErrors.password = "Password minimal 8 karakter.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const res = registerUser(form);
    if (!res.ok) {
      setErrors({ email: res.error });
      return;
    }

    const message = encodeURIComponent(
      `Halo Rias Karsa, saya ingin mendaftar akun sebagai ${form.role}.\n\nNama: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.phone}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
    router.push("/");
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

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 md:py-16">
        {user ? (
          <>
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
                Anda Sudah Tergabung
              </h1>
              <p className="text-base text-text-on-dark/70">
                Akun kamu sudah terdaftar dalam komunitas Rias Karsa.
              </p>
            </div>
            <div className="bg-surface-dark border border-border rounded-[20px] p-6 md:p-8 shadow-soft">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center font-serif text-xl font-bold shrink-0">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-lg font-bold text-primary truncate">{user.name}</p>
                  <p className="text-xs text-text-on-dark/60 truncate">{user.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-on-dark">Member Komunitas</p>
                    <p className="text-xs text-text-on-dark/60">Terdaftar sebagai {user.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="primary" size="md" href="/penata-rias" className="w-full">
                  Jelajahi Direktori
                </Button>
                <Button variant="secondary" size="md" href="/" className="w-full">
                  Kembali ke Beranda
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
                Daftar Akun Rias Karsa
              </h1>
              <p className="text-base text-text-on-dark/70">
                Bergabunglah dengan komunitas penata rias profesional Semarang Raya.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="bg-surface-dark border border-border rounded-[20px] p-6 md:p-8 shadow-soft flex flex-col gap-5">
              <div>
                <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="name">Nama Lengkap</label>
                <input id="name" type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Masukkan nama lengkap" className={errors.name ? errorInputClass : inputClass} />
                {errors.name && <p className="text-xs text-badge-error mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="contoh@email.com" className={errors.email ? errorInputClass : inputClass} />
                {errors.email && <p className="text-xs text-badge-error mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="phone">No. WhatsApp</label>
                <input id="phone" type="tel" name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="08xxxxxxxxxx" className={errors.phone ? errorInputClass : inputClass} />
                {errors.phone && <p className="text-xs text-badge-error mt-1.5">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="role">Saya mendaftar sebagai</label>
                <select id="role" name="role" value={form.role} onChange={handleChange} className={inputClass}>
                  <option>MUA Pemula</option>
                  <option>Model Freelance</option>
                  <option>Calon Klien</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="password">Password</label>
                <input id="password" type="password" name="password" minLength={8} required value={form.password} onChange={handleChange}
                  placeholder="Minimal 8 karakter" className={errors.password ? errorInputClass : inputClass} />
                {errors.password && <p className="text-xs text-badge-error mt-1.5">{errors.password}</p>}
              </div>
              <Button type="submit" variant="primary" size="md" className="w-full mt-1">
                Daftar Sekarang
              </Button>
              <p className="text-xs text-text-on-dark/60 text-center">
                Sudah punya akun?{" "}
                <Link href="/masuk" className="text-primary font-medium hover:text-primary-hover transition-colors">Masuk</Link>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}