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
| **Header & Navigasi** | Logo, Link Navigasi (Program, Katalog, Model, Tentang), & Tombol CTA Utama. | High |
| **Hero Section** | Headline utama, deskripsi singkat, visual banner, & CTA multi-user (*Daftar MUA / Cari MUA*). | High |
| **Interactive Roadmap Tab** | *Toggle tab* 3 langkah alur pendaftaran untuk MUA, Model, dan Klien. | High |
| **MUA Directory Preview** | Widget pencarian interaktif dengan filter (Kota, Style Riasan, Price Range) + 3-4 Card Profil MUA tersertifikasi. | High |
| **Open Call Model Widget** | List/Card jadwal masterclass terdekat yang membuka lowongan model + detail kriteria & tombol *[Apply Model]*. | High |
| **Comparison Section** | Tabel perbandingan keunggulan MUA Non-Komunitas vs MUA Tersertifikasi Rias Karsa. | Medium |
| **Impact Stats Counter** | Statistik animasi angka (*Total MUA, Masterclass, Model Terlibat*). | Medium |
| **Testimoni & Interactive FAQ** | Carousel ulasan pengguna & FAQ interaktif berbentuk *accordion* (*expand/collapse*). | High |
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
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── muas/
│   │   │   ├── mua-1.jpg
│   │   │   └── mua-2.jpg
│   │   ├── gallery/
│   │   └── badges/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Root layout, meta data, & provider font
│   │   ├── page.jsx          # Main Landing Page
│   │   └── globals.css       # Tailwind CSS / global styles
│   ├── components/
│   │   ├── common/           # Komponen UI umum (Re-usable)
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Badge.jsx
│   │   └── sections/         # Modul section landing page
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── RoadmapSection.jsx      # Step-by-Step Join (Interactive Toggle)
│   │       ├── DirectorySection.jsx    # MUA Directory Preview & Filter
│   │       ├── OpenCallSection.jsx     # Open Call Model Widget
│   │       ├── ComparisonSection.jsx   # Benefit & Comparison Tableq
│   │       ├── GallerySection.jsx
│   │       ├── StatsSection.jsx        # Impact Stats Counter
│   │       ├── TestimonialSection.jsx
│   │       └── FaqSection.jsx          # Accordion FAQ
│   ├── data/                 # Mock Data JSON/JS (Pengganti Backend)
│   │   ├── muas.js           # Data list MUA, harga, rating, & lokasi
│   │   ├── openCalls.js      # Data jadwal workshop & kriteria model
│   │   ├── faqData.js        # Pertanyaan & jawaban FAQ
│   │   └── testimonials.js   # Ulasan pengguna
│   ├── hooks/                # Custom React Hooks
│   │   └── useFilter.js      # Logic untuk filter direktori MUA
│   └── utils/                # Helper functions (format currency, dll)
│       └── formatters.js
├── .eslintrc.json
├── jsconfig.json
├── next.config.js
├── package.json
├── tailwind.config.js        # Konfigurasi warna nude/cream Rias Karsa
└── README.md                 # Dokumentasi project untuk penilaian juri
```

---

## 7. Development Milestones & Timeline

* **Milestone 1:** Setup Project, Tailwind Design System & Directory Structure
* **Milestone 2:** Penyiapan Mock Data (MUA, Open Call, FAQ, Testimoni)
* **Milestone 3:** Slicing Static UI Sections (Navbar, Hero, About, Gallery, Footer)
* **Milestone 4:** Implementation of Interactive Logic (Filter Directory, Toggle Roadmap, Accordion FAQ, Modal Form)
* **Milestone 5:** Mobile Responsiveness, Cross-Browser Testing & UI Polish
* **Milestone 6:** Final Build, Vercel/Netlify Deployment & Code Handover (.ZIP)
