# Rias Karsa — Komunitas, Sertifikasi & Direktori MUA

Landing page komunitas **Rias Karsa** (paguyuban penata rias profesional Semarang Raya) yang dibangun untuk lomba **IT FEST 2026**. Menampilkan direktori MUA tersertifikasi, jadwal workshop & open call model, galeri karya, testimoni, hingga sistem registrasi/login dan form pendaftaran — semuanya dalam satu aplikasi Next.js tanpa backend.

🔗 **Demo Live:** [https://riaskarsa.vercel.app](https://riaskarsa.vercel.app)

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Persyaratan](#persyaratan)
- [Cara Install & Menjalankan](#cara-install--menjalankan)
- [Scripts](#scripts)
- [Struktur Proyek](#struktur-proyek)
- [Halaman & Routes](#halaman--routes)
- [Sistem Autentikasi](#sistem-autentikasi)
- [Kustomisasi Data](#kustomisasi-data)
- [Deploy ke Vercel](#deploy-ke-vercel)
- [Design Tokens](#design-tokens)
- [Lisensi](#lisensi)

---

## Fitur Utama

- **Hero carousel** — slider foto fullscreen dengan efek Ken Burns, parallax, stats animasi (CountUp), dan navigasi dots.
- **Direktori MUA Terverifikasi** — filter berdasarkan lokasi, gaya riasan, dan range harga; kartu MUA menuju halaman detail.
- **Detail Profil MUA** (`/mua/[id]`) — bio, spesialisasi, rating & ulasan, portofolio dengan lightbox, tombol WhatsApp, dan bottom-bar CTA di mobile.
- **Jadwal Workshop & Open Call Model** — tabel di desktop, kartu + progress kuota di mobile.
- **Galeri Karya** — filter tab, grid responsif.
- **Testimoni & FAQ** — carousel testimoni dan accordion FAQ.
- **Autentikasi** — register, login, logout, dan navbar yang menyesuaikan status login (client-side).
- **Form Pendaftaran** — sertifikasi & apply model dengan validasi, prefill data akun, dan prefill pesan WhatsApp.
- **SEO** — metadata per-halaman, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, favicon SVG.
- **Aksesibilitas** — mendukung `prefers-reduced-motion`, focus ring, touch target, dan mencegah auto-zoom iOS.

---

## Tech Stack

| Teknologi | Versi | Catatan |
|-----------|-------|---------|
| [Next.js](https://nextjs.org) | 16.3.0 | App Router, Turbopack |
| [React](https://react.dev) | 19.2.8 | Hooks + Client Components |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Desain token kustom (earth-tone) |
| [lucide-react](https://lucide.dev) | ^1.29.0 | Satu-satunya library ikon |
| JavaScript | ES6+ | Tanpa TypeScript |
| [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | — | Playfair Display (serif) + DM Sans (sans) |

> **Catatan:** Tanpa backend. Semua data berasal dari file mock (`src/data/`) dan autentikasi memakai `localStorage`.

---

## Persyaratan

- **Node.js ≥ 20.9** (direkomendasikan versi LTS terbaru)
- npm (bundled bersama Node) atau pnpm/yarn
- Git

Cek versi Node kamu:

```bash
node -v
```

---

## Cara Install & Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/norelac/riaskarsa.git
cd riaskarsa
```

### 2. Install dependency

```bash
npm install
```

### 3. Jalankan server development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser (Chrome, Firefox, atau Edge).

### 4. Build produksi & lint (sebelum deploy)

```bash
npm run lint    # cek kode (ESLint)
npm run build   # production build
npm run start   # jalankan hasil build (default :3000)
```

---

## Scripts

| Script | Perintah | Fungsi |
|--------|----------|--------|
| `dev` | `npm run dev` | Menjalankan dev server (hot reload) |
| `build` | `npm run build` | Membuat production build |
| `start` | `npm run start` | Menjalankan production build |
| `lint` | `npm run lint` | Menjalankan ESLint |

---

## Struktur Proyek

```
rias-karsa/
├─ public/
│  └─ asset/              # Gambar WebP (hero, MUA, galeri, workshop)
├─ src/
│  ├─ app/                # App Router (halaman + layout)
│  │  ├─ page.jsx                     # Landing page utama
│  │  ├─ layout.jsx                   # Root layout (font, metadata, viewport)
│  │  ├─ globals.css                  # Tailwind + design tokens + utilities
│  │  ├─ robots.js                    # robots.txt
│  │  ├─ sitemap.js                   # sitemap.xml
│  │  ├─ icon.svg                     # Favicon
│  │  ├─ galeri/                      # Halaman galeri penuh
│  │  ├─ penata-rias/                 # Halaman direktori MUA penuh
│  │  ├─ mua/[id]/                    # Halaman detail MUA (+ lightbox)
│  │  ├─ daftar/                      # Halaman registrasi komunitas
│  │  ├─ masuk/                       # Halaman login
│  │  ├─ sertifikasi/                 # Form pendaftaran sertifikasi
│  │  ├─ apply-model/                 # Form open call model
│  │  └─ terima-kasih/                # Halaman sukses setelah submit
│  ├─ components/
│  │  ├─ common/          # UI reusable (Button, Badge, MuaCard, dll)
│  │  └─ sections/        # Section landing page (Navbar, Hero, Footer, dll)
│  ├─ data/               # Data mock (muas, gallery, jadwal, FAQ, testimoni)
│  ├─ hooks/              # Custom hooks (useFilter, useScrollReveal, useParallax)
│  ├─ lib/auth.js         # Logika autentikasi client-side
│  └─ utils/formatters.js # Helper format (mis. formatRupiah)
├─ asset/                 # File SVG sumber (salinan desain asli)
├─ designfix.md             # Dokumentasi design token
└─ PRD.md                   # Dokumentasi kebutuhan fungsional
```

---

## Halaman & Routes

| Route | Deskripsi |
|-------|-----------|
| `/` | Landing page (Hero, Tentang, Kegiatan, Workshop, Direktori, Galeri, Perbandingan, Testimoni, FAQ, CTA, Footer) |
| `/penata-rias` | Direktori semua MUA dengan filter |
| `/galeri` | Galeri karya lengkap dengan tab filter |
| `/mua/[id]` | Detail profil MUA + portofolio + lightbox |
| `/daftar` | Registrasi anggota komunitas |
| `/masuk` | Login anggota |
| `/sertifikasi` | Form pendaftaran program sertifikasi |
| `/apply-model?openCall=<id>` | Form open call model (bisa di-preselect dari jadwal) |
| `/terima-kasih` | Konfirmasi sukses (register / apply-model / certification) |

---

## Sistem Autentikasi

Autentikasi sepenuhnya **client-side** memakai `localStorage` (tanpa backend), diimplementasikan di `src/lib/auth.js`.

- **Storage keys:** `rias_users` (daftar user) & `rias_session` (email user yang login).
- **Password:** di-hash dengan FNV-1a 32-bit (hanya untuk demo — **bukan** pengganti hashing kriptografis produksi).
- **Alur:**
  1. `/daftar` → `registerUser()` → auto-login → redirect ke `/`.
  2. `/masuk` → `loginUser()` → redirect ke `/`.
  3. Navbar menampilkan avatar + nama + tombol "Keluar" saat login.
  4. Form `/sertifikasi` & `/apply-model` otomatis ter-prefill nama/email/telepon dari akun yang login.

**Akun demo:**

```
Email:    demoriaskarsa@gmail.com
Password: 12345678
```

> ⚠️ **Peringatan:** Sistem ini hanya untuk keperluan demo/kompetisi. Untuk produksi, gunakan autentikasi server-side yang aman (mis. NextAuth, Supabase, atau Auth.js + database).

---

## Kustomisasi Data

Semua konten bisa diubah tanpa menyentuh UI. Cukup edit file di `src/data/`:

| File | Isi |
|------|-----|
| `muas.js` | Data MUA (nama, kota, gaya, harga, rating, bio, portofolio) |
| `muaReviews.js` | Ulasan klien per MUA |
| `galleryImages.js` | Foto galeri + label tab |
| `workshopSchedule.js` | Jadwal workshop & open call (tanggal, lokasi, kuota, status) |
| `faqData.js` | Pertanyaan & jawaban FAQ |
| `testimonials.js` | Testimoni anggota |

**Nomor WhatsApp** yang perlu diganti sebelum produksi:

- Footer: `6281234567890` (`src/components/sections/Footer.jsx`)
- Tombol kontak detail MUA: `6285819997505` (`src/app/mua/[id]/page.jsx`)

---

## Deploy ke Vercel

Proyek sudah terintegrasi dengan Vercel (rekomendasi untuk Next.js).

1. **Push kode ke GitHub:**

   ```bash
   git add .
   git commit -m "pesan commit"
   git push origin main
   ```

2. **Import ke Vercel:**
   - Buka [vercel.com/new](https://vercel.com/new) → import repo GitHub kamu.
   - Framework preset otomatis terdeteksi sebagai **Next.js** (tidak perlu ubah apa pun).
   - Tidak ada **Environment Variables** yang wajib diisi.
   - Klik **Deploy**.

3. **Auto-deploy:** setiap push ke `main` akan otomatis memicu build (`npm run build`) dan rilis ke URL live. Status build bisa dilihat di dashboard Vercel.

4. **Verifikasi** setelah deploy:
   - Buka URL live dan cek semua route (termasuk `/masuk`, `/sitemap.xml`, `/robots.txt`).
   - Jalankan `npm run build` lokal sebelum push untuk memastikan tidak ada error build.

> Alternatif: bisa juga deploy manual via `npx vercel` dari CLI.

---

## Design Tokens

Palet dan gaya konsisten didefinisikan di `src/app/globals.css` (Tailwind v4 `@theme`). Beberapa token utama:

| Token | Value | Penggunaan |
|-------|-------|-----------|
| `primary` | `#E2C289` (gold) | CTA, active state, focus ring, ikon |
| `primary-ink` | `#280908` (dark brown) | Teks di atas gold |
| `background` | `#210504` (deep maroon) | Background halaman |
| `surface-dark` | `#32110F` | Kartu di atas background gelap |
| `border` | `#DCC0BD` (blush) | Border & divider |
| `text-on-dark` | `#F9F7F2` (cream) | Teks di atas gelap |

- **Font:** Playfair Display (headline serif) + DM Sans (body sans) — tidak dicampur.
- **Grid:** sistem 8px untuk semua spacing.
- **Radius:** kartu `20px`, tombol pill `9999px`.
- **Breakpoints:** Mobile `<640px` (1 kolom), Tablet `640–1023px` (2 kolom), Desktop `≥1024px` (3–4 kolom, `max-w-1440px`).
- **Shadow:** `soft`, `elevated`, `upward` — didefinisikan sebagai token.

Detail lengkap ada di [designfix.md](./designfix.md).

---

## Lisensi

Proyek dibangun untuk keperluan **lomba IT FEST 2026** — landing page komunitas MUA Rias Karsa, Semarang. Semua aset foto merupakan ilustrasi dari Unsplash (dikompresi ke WebP). Tidak ada klaim kepemilikan atas brand/komunitas asli di luar konteks lomba.
