# Product Requirement Document (PRD)

**Nama Project:** Rias Karsa (Platform Komunitas, Sertifikasi, & Direktori MUA)  
**Tipe Project:** Web Landing Page (IT FEST 2026 - Kategori Organisasi / Produk Jasa)  
**Target Platform:** Web (Desktop, Tablet, Mobile Responsive)  
**Tech Stack:** Next.js (App Router), Tailwind CSS, JavaScript (ES6+), Lucide Icons  

---

## 1. Overview & Objective

### 1.1 Latar Belakang
MUA pemula sering kali kesulitan mendapatkan sertifikasi resmi, memperluas portofolio, dan bersaing dalam standar harga pasar. Di sisi lain, calon klien membutuhkan kepastian kualitas dan transparansi harga, sementara masterclass workshop membutuhkan model freelance untuk sesi praktik.

### 1.2 Tujuan Project
* Menyediakan media promosi dan informasi landing page yang profesional, informatif, dan responsif.
* Menghubungkan 3 ekosistem pengguna: MUA Pemula, Model Freelance, dan Calon Klien.
* Memfasilitasi pendaftaran masterclass, sertifikasi MUA, hingga pemasaran portofolio melalui katalog direktori.

---

## 2. Target User & User Personas

1. **MUA Pemula (Member):** Ingin berkembang, butuh sertifikasi masterclass, dan butuh akses pasar/klien.
2. **Model Freelance:** Mencari side job atau pengalaman panggung di workshop/masterclass MUA.
3. **Calon Klien / Guest:** Mencari jasa MUA tepercaya berdasarkan lokasi, gaya riasan, dan transparansi pricelist.

---

## 3. User Flow & Journey

* **Flow MUA:** Landing Page -> Registrasi Akun -> Join Komunitas -> Daftar Masterclass/Sertifikasi -> Lulus -> Masuk Katalog Direktori.
* **Flow Model:** Landing Page -> Registrasi Akun -> Cek Widget Open Call Model -> Apply Freelance Model.
* **Flow Klien:** Landing Page -> Filter Katalog MUA -> Cek Portofolio/Pricelist -> Buat Akun / Hubungi MUA.

---

## 4. Functional Requirements (Fitur Utama)

| Section / Fitur | Deskripsi Fungsi | Prioritas |
| :--- | :--- | :--- |
| **Header & Navigasi** | Navbar responsif (hamburger di mobile) dengan scroll-progress & tombol CTA. | High |
| **Hero Section** | Slider banner (carousel + Ken Burns), headline utama, CTA multi-user (*Cari MUA / Gabung Komunitas*), & statistik animasi (*MUA Terverifikasi, Masterclass, Klien*). | High |
| **Kegiatan Rias Karsa** | Kartu program unggulan (Masterclass & Sertifikasi, Direktori MUA, Open Model Call) dengan CTA. | High |
| **Jadwal Workshop & Open Call Model** | Tabel jadwal (desktop) / kartu (mobile) dengan kriteria, kuota terisi, & tombol *Daftar Model*. | High |
| **MUA Directory Preview** | Pencarian interaktif dengan filter (Kota, Gaya Riasan, Price Range) + kartu profil MUA tersertifikasi. | High |
| **Galeri Karya & Kegiatan** | Grid karya MUA dengan tab filter + halaman galeri penuh. | Medium |
| **Comparison Section** | Perbandingan keunggulan MUA Non-Komunitas vs MUA Tersertifikasi Rias Karsa. | Medium |
| **Detail Profil MUA** | Halaman detail: bio, spesialisasi, rating & ulasan, portofolio + lightbox, tombol kontak WhatsApp & bottom-bar mobile. | High |
| **Testimoni & Interactive FAQ** | Carousel ulasan pengguna & FAQ interaktif berbentuk *accordion* (*expand/collapse*). | High |
| **Autentikasi Anggota** | Registrasi & login akun (client-side), status login di navbar, prefill data pada form. | High |
| **Form Pendaftaran** | Form sertifikasi & apply model dengan validasi + prefill pesan WhatsApp. | High |
| **Footer & Contact** | Informasi kontak, lokasi, tautan medsos, dan hak cipta. | High |

---

## 5. Non-Functional Requirements (Ketentuan Teknis Lomba)

* **Teknologi Allowed:** HTML5, CSS3, JavaScript (ES6+), React.js / Next.js / Vue.js. *(Strictly NO Website Builder seperti Wix/Google Sites)*.
* **Responsivitas:** Mendukung tampilan optimal di Desktop, Laptop, Tablet, dan Smartphone.
* **Browser Compatibility:** Berjalan stabil di Google Chrome, Mozilla Firefox, dan Microsoft Edge.
* **Source Code & Deployment:** Code rapi bertingkat, mudah dipelihara, dan ter-deploy secara live via Vercel / Netlify / GitHub Pages.

---

## 6. Project Directory Structure

```text
rias-karsa/
├── public/
│   └── asset/                    # Gambar WebP (hero, MUA, galeri, workshop)
├── src/
│   ├── app/                      # App Router
│   │   ├── layout.jsx            # Root layout: font, metadata, viewport
│   │   ├── page.jsx              # Landing page utama
│   │   ├── globals.css           # Tailwind v4 + design tokens + utilities
│   │   ├── robots.js             # robots.txt
│   │   ├── sitemap.js            # sitemap.xml
│   │   ├── icon.svg              # Favicon
│   │   ├── galeri/               # Halaman galeri penuh
│   │   ├── penata-rias/          # Direktori MUA penuh + filter
│   │   ├── mua/[id]/             # Detail profil MUA + lightbox
│   │   ├── daftar/               # Registrasi anggota
│   │   ├── masuk/                # Login anggota
│   │   ├── sertifikasi/          # Form pendaftaran sertifikasi
│   │   ├── apply-model/          # Form open call model
│   │   └── terima-kasih/         # Halaman konfirmasi sukses
│   ├── components/
│   │   ├── common/               # UI reusable (Button, Badge, MuaCard, dll)
│   │   └── sections/             # Section landing (Navbar, Hero, Footer, dll)
│   ├── data/                     # Mock data (muas, workshopSchedule, galleryImages, faqData, testimonials, muaReviews)
│   ├── hooks/                    # Custom hooks (useFilter, useScrollReveal, useParallax)
│   ├── lib/
│   │   └── auth.js               # Autentikasi client-side (localStorage)
│   └── utils/
│       └── formatters.js         # Helper format (formatRupiah)
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
├── PRD.md
├── designfix.md                  # Design token & aturan desain
└── README.md                     # Dokumentasi proyek untuk penilaian juri
```

---

## 7. Development Milestones & Timeline

* **Milestone 1:** Setup Project, Tailwind Design System & Directory Structure
* **Milestone 2:** Penyiapan Mock Data (MUA, Workshop/Open Call, Galeri, FAQ, Testimoni)
* **Milestone 3:** Slicing Static UI Sections (Navbar, Hero, About, Kegiatan, Galeri, Footer)
* **Milestone 4:** Implementasi Logika Interaktif (Filter Direktori, Accordion FAQ, Carousel, Tabs, Autentikasi & Form)
* **Milestone 5:** Mobile Responsiveness, Cross-Browser Testing & UI Polish
* **Milestone 6:** Final Build, Vercel Deployment & Code Handover (.ZIP)
