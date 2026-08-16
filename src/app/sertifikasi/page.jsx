"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

const inputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";
const errorInputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-badge-error rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-badge-error focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";

const WA_NUMBER = "6281234567890";

export default function SertifikasiPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", experience: "" });
  const [errors, setErrors] = useState({});
  const [accountUser, setAccountUser] = useState(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const user = getCurrentUser();
      if (user) {
        setAccountUser(user);
        setForm((prev) => ({
          ...prev,
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
        }));
      }
    });
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
    if (!form.program) nextErrors.program = "Pilih program sertifikasi.";
    if (!form.experience) nextErrors.experience = "Pilih level pengalaman.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const programLabel = {
      basic: "Basic Certification — Gratis",
      intermediate: "Intermediate — Rp 250.000",
      masterclass: "Masterclass Bridal Glam — Rp 500.000",
      editorial: "Editorial & Fashion — Rp 750.000",
    }[form.program];

    const experienceLabel = {
      beginner: "Pemula — Baru belajar",
      intermediate: "Menengah — Sudah ada portofolio",
      advanced: "Lanjutan — Mau tingkatkan skill",
    }[form.experience];

    const message = encodeURIComponent(
      `Halo Rias Karsa, saya ingin mendaftar sertifikasi.\n\nNama: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.phone}\nProgram: ${programLabel}\nLevel: ${experienceLabel}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
    router.push("/terima-kasih?act=certification");
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
            Daftar Sertifikasi
          </h1>
          <p className="text-base text-text-on-dark/70">
            Tingkatkan kredibilitas dan keahlianmu dengan program sertifikasi standar industri.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-surface-dark border border-border rounded-[20px] p-6 md:p-8 shadow-soft flex flex-col gap-5">
          {accountUser && (
            <p className="text-xs text-text-on-dark/70 bg-background border border-border rounded-[12px] px-4 py-3">
              Mengisi data dari akun:{" "}
              <span className="font-medium text-primary">{accountUser.name}</span>.
            </p>
          )}
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
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="program">Program Sertifikasi</label>
            <select id="program" name="program" value={form.program} onChange={handleChange} required className={errors.program ? errorInputClass : inputClass}>
              <option value="" disabled>Pilih Program</option>
              <option value="basic">Basic Certification — Gratis</option>
              <option value="intermediate">Intermediate — Rp 250.000</option>
              <option value="masterclass">Masterclass Bridal Glam — Rp 500.000</option>
              <option value="editorial">Editorial &amp; Fashion — Rp 750.000</option>
            </select>
            {errors.program && <p className="text-xs text-badge-error mt-1.5">{errors.program}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="experience">Level Pengalaman</label>
            <select id="experience" name="experience" value={form.experience} onChange={handleChange} required className={errors.experience ? errorInputClass : inputClass}>
              <option value="" disabled>Pilih Level</option>
              <option value="beginner">Pemula — Baru belajar</option>
              <option value="intermediate">Menengah — Sudah ada portofolio</option>
              <option value="advanced">Lanjutan — Mau tingkatkan skill</option>
            </select>
            {errors.experience && <p className="text-xs text-badge-error mt-1.5">{errors.experience}</p>}
          </div>
          <Button type="submit" variant="primary" size="md" className="w-full mt-1">
            Daftar Sertifikasi
          </Button>
        </form>
      </div>
    </div>
  );
}