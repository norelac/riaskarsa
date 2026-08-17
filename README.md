# Rias Karsa — Platform Komunitas, Sertifikasi & Direktori MUA

> Landing page komunitas penata rias profesional Semarang Raya untuk **IT FEST 2026**.

Rias Karsa adalah landing page yang menghubungkan klien dengan MUA tersertifikasi sekaligus membuka ruang tumbuh bagi talenta tata rias Nusantara. Melalui program sertifikasi, masterclass, open call model, dan direktori MUA terverifikasi, platform ini dirancang untuk membangun ekosistem tata rias yang profesional, transparan, dan berbudaya.

🔗 **Demo Live:** [https://riaskarsa.vercel.app](https://riaskarsa.vercel.app)

---

## Fitur Unggulan

- **Direktori MUA Terverifikasi** — cari MUA berdasarkan lokasi, gaya riasan, dan range harga dengan hasil yang langsung terfilter.
- **Detail Profil MUA** — bio, spesialisasi, rating & ulasan klien, portofolio karya dengan lightbox, dan tombol aksi langsung ke WhatsApp.
- **Jadwal Workshop & Open Call Model** — informasi tanggal, lokasi, kriteria model, benefit, dan kuota terisi per sesi.
- **Galeri Karya & Kegiatan** — hasil riasan para MUA tersertifikasi dengan filter kategori.
- **Testimoni Anggota & FAQ** — cerita nyata komunitas dan jawaban pertanyaan umum.
- **Registrasi Anggota & Login** — akun pribadi untuk anggota komunitas.
- **Form Pendaftaran** — sertifikasi MUA dan open call model dengan data yang otomatis terisi dari akun yang login.
- **Aksi Cepat WhatsApp** — calon klien dapat langsung menghubungi MUA yang diminati.

---

## Alur Pengguna

| Peran | Alur |
|-------|------|
| **MUA Pemula** | Daftar akun → gabung komunitas → ikuti sertifikasi & masterclass → tampil di direktori |
| **Model Freelance** | Daftar akun → cek jadwal open call → ajukan diri → ikuti sesi dan dapatkan bayaran |
| **Calon Klien** | Cari MUA (filter lokasi/gaya/harga) → cek portofolio & rating → hubungi via WhatsApp → booking |

---

## Desain

- **Palet elegan** — maroon gelap `#210504` berpadu aksen gold `#E2C289` (earth-tone, tanpa warna mencolok).
- **Tipografi ganda** — Playfair Display untuk headline serif, DM Sans untuk body sans.
- **Fully responsive** — mobile (1 kolom), tablet (2 kolom), desktop (3–4 kolom) dengan navigasi hamburger di layar kecil.
- **Aksesibilitas** — dukungan *prefers-reduced-motion*, focus ring, dan touch-friendly.
- **Micro-interaction** — reveal on scroll, animasi halus, hover states, dan back-to-top.

---

## Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| Next.js (App Router) | Framework & routing halaman |
| React | Komponen UI interaktif |
| Tailwind CSS | Styling & design system |
| lucide-react | Ikon konsisten |

---

## Cara Menjalankan

```bash
git clone https://github.com/norelac/riaskarsa.git
cd riaskarsa
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Akun Demo

Untuk mencoba fitur login dan form pendaftaran yang terisi otomatis:

```
Email:    demoriaskarsa@gmail.com
Password: 12345678
```

---

## Deployment

Dideploy di **Vercel** dengan integrasi GitHub — setiap push ke `main` otomatis memicu build dan rilis ke versi live.

🔗 **Live:** [https://riaskarsa.vercel.app](https://riaskarsa.vercel.app)
