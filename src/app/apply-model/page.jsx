"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import { workshopSchedule } from "@/data/workshopSchedule";
import { getCurrentUser } from "@/lib/auth";

const inputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-primary/30 rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-primary focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";
const errorInputClass =
  "w-full px-3 py-2.5 text-sm font-sans bg-background border border-badge-error rounded-[20px] text-text-on-dark placeholder:text-text-on-dark/40 focus:border-badge-error focus:ring-[3px] focus:ring-primary-ring outline-none transition-all";

const WA_NUMBER = "6281234567890";

function ApplyModelContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get("openCall") || "";
  const [form, setForm] = useState({
    name: "", email: "", phone: "", portfolio: "", openCallId: preselectedId,
  });
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

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Nama lengkap wajib diisi.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Format email tidak valid.";
    if (!/^08\d{8,12}$/.test(form.phone.replace(/[\s-]/g, "")))
      nextErrors.phone = "Nomor WhatsApp tidak valid (contoh: 081234567890).";
    if (!form.openCallId) nextErrors.openCallId = "Pilih open call yang diminati.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const selectedCall = workshopSchedule.find((c) => c.id === Number(form.openCallId));
    const message = encodeURIComponent(
      `Halo Rias Karsa, saya ingin apply sebagai model freelance.\n\nNama: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.phone}\nOpen Call: ${selectedCall ? selectedCall.title + " (" + selectedCall.date + ")" : ""}\nPortofolio: ${form.portfolio || "-"}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
    router.push("/terima-kasih?act=apply-model");
  };

  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
          Apply Model Freelance
        </h1>
        <p className="text-base text-text-on-dark/70">
          Daftarkan dirimu sebagai model di masterclass dan workshop Rias Karsa.
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
          <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="openCallId">Open Call yang Diminati</label>
          <select id="openCallId" name="openCallId" value={form.openCallId} onChange={handleChange} required className={errors.openCallId ? errorInputClass : inputClass}>
            <option value="" disabled>Pilih Open Call</option>
            {workshopSchedule.map((call) => (
              <option key={call.id} value={call.id}>{call.title} — {call.date}</option>
            ))}
          </select>
          {errors.openCallId && <p className="text-xs text-badge-error mt-1.5">{errors.openCallId}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-text-on-dark/80 mb-1.5" htmlFor="portfolio">Link Portfolio (Opsional)</label>
          <input id="portfolio" type="url" name="portfolio" value={form.portfolio} onChange={handleChange}
            placeholder="https://instagram.com/..." className={inputClass} />
        </div>
        <Button type="submit" variant="primary" size="md" className="w-full mt-1">
          Kirim Aplikasi
        </Button>
      </form>
    </div>
  );
}

export default function ApplyModelPage() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-supporting-dark border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={handleBack} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-text-on-dark transition-colors">
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>
      </div>
      <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><p className="text-text-on-dark/60">Memuat...</p></div>}>
        <ApplyModelContent />
      </Suspense>
    </div>
  );
}