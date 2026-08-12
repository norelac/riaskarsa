# Design System — Rias Karsa Merah

Dokumentasi lengkap design specification untuk website **Rias Karsa** — komunitas/paguyuban penata rias profesional Nusantara.

---

## 📐 Layout Utama

| Properti         | Nilai          |
| ---------------- | -------------- |
| Total Width      | 1440px         |
| Total Height     | 5940px         |
| Content Padding  | 100px (horizontal) |
| Section Gap      | 140px          |
| Corner Radius    | 20px (cards), 9999px (pill/buttons) |

---

## 🎨 Color Palette

### Primary Colors

| Nama              | Hex       | Opacity | Penggunaan                                   |
| ----------------- | --------- | ------- | -------------------------------------------- |
| Gold              | `#E2C289` | 100%    | Aksen utama, border, heading, link, ikon     |
| Cream / Off-White | `#F9F7F2` | 100%    | Teks terang di atas dark bg, ikon footer     |
| Blush Pink        | `#DCC0BD` | 100%    | Body text, border dekoratif, section divider |

### Dark / Background Colors

| Nama               | Hex       | Opacity | Penggunaan                          |
| ------------------ | --------- | ------- | ----------------------------------- |
| Deep Maroon        | `#210504` | 100%    | Background CTA section, footer     |
| Dark Maroon        | `#32110F` | 100%    | Background jadwal/workshop section  |
| Dark Brown (Text)  | `#280908` | 100%    | Teks tombol (di atas bg gold)       |
| Near Black         | `#1D1B1A` | 100%    | Teks tabel header                   |

### Accent / State Colors

| Nama     | Hex       | Penggunaan             |
| -------- | --------- | ---------------------- |
| Red      | `#FF383C` | Badge "Kuota Penuh"   |

---

## 🔤 Typography

### Font Families

| Font              | Sumber        | Penggunaan                          |
| ----------------- | ------------- | ----------------------------------- |
| **Playfair Display** | Google Fonts  | Heading, judul section, angka statistik |
| **DM Sans**          | Google Fonts  | Body text, navigasi, button, label, caption |

### Type Scale

| Elemen                   | Font             | Weight   | Size   | Penggunaan                                    |
| ------------------------ | ---------------- | -------- | ------ | ---------------------------------------------- |
| Hero Heading             | Playfair Display | Regular  | 48px   | Tagline utama hero                             |
| Statistik Number         | Playfair Display | Regular  | ~36px  | Angka statistik (150+, 40+, 1500+)            |
| Section Heading          | Playfair Display | Regular  | 32px   | Judul section (Mengenal, Kegiatan, Galeri)     |
| Card Title / Sub-heading | Playfair Display | Regular  | 24px   | Logo text, judul card                          |
| Hero Subtitle            | DM Sans          | Regular  | 18px   | Subtitle di hero section                       |
| Statistik Label          | DM Sans          | Regular  | ~18px  | Label statistik (MUA TERVERIFIKASI, dsb.)      |
| Body Text                | DM Sans          | Regular  | 16px   | Paragraf deskripsi, konten utama               |
| Body Bold                | DM Sans          | Bold     | 16px   | Label tabel header (Tanggal, Kriteria, dsb.)   |
| Footer Label             | DM Sans          | Medium   | 16px   | Label footer (NAVIGASI, LEGALITAS, KONTAK)     |
| Nav Item Active          | DM Sans          | Bold     | 14px   | Menu navigasi aktif (Beranda)                  |
| Nav Item                 | DM Sans          | Regular  | 14px   | Menu navigasi (Tentang, Program, Galeri, Kontak) |
| Button Text              | DM Sans          | Regular  | 12px   | Teks tombol CTA (CARI MUA, GABUNG KOMUNITAS)  |
| Caption / Small          | DM Sans          | Light    | 12px   | Deskripsi card kecil, sub-info                 |
| Link / Action Text       | DM Sans          | Medium   | 12px   | Link text (LIHAT SEMUA, LIHAT SELENGKAPNYA)    |

### Letter Spacing

| Konteks       | Nilai          |
| ------------- | -------------- |
| Navigation    | 0.32px         |
| Heading       | 0 (default)    |
| Body text     | 0 (default)    |

---

## 🖼️ Imagery

| Properti           | Nilai                             |
| ------------------ | --------------------------------- |
| Hero Image         | 1440 × 661px (full-width, overlay) |
| Activity Card      | 341 × 288px                       |
| MUA Profile Card   | 247 × 288px                       |
| Gallery Image      | 400 × 306px                       |
| Total Gambar       | 14 image nodes                    |
| Scale Mode         | FILL (crop to fit)                |

---

## 🔲 Komponen & Elemen UI

### Navbar

| Properti          | Nilai                                      |
| ----------------- | ------------------------------------------ |
| Layout            | Horizontal, space-between, center-aligned  |
| Logo              | "RIAS KARSA" — Playfair Display 24px, Gold |
| Menu Items        | Beranda, Tentang, Program & Event, Galeri, Kontak |
| Menu Font         | DM Sans Regular 14px, Gold (#E2C289)       |
| Active State      | DM Sans Bold 14px + gold bottom border     |
| CTA Button        | "Masuk" — pill shape (radius 9999), border gold, padding 12px 24px |
| Nav Gap           | 32px antar item menu                       |
| Nav Item Padding  | 8px all sides                              |

### Button — Primary (Filled)

| Properti     | Nilai                                     |
| ------------ | ----------------------------------------- |
| Background   | Gold `#E2C289`                            |
| Text Color   | Dark Brown `#280908`                      |
| Font         | DM Sans Regular 12px                      |
| Padding      | 12px vertical, 24px horizontal            |
| Border Radius| 9999px (pill)                             |
| Contoh       | "CARI MUA", "GABUNG KOMUNITAS"            |

### Button — Outline (Ghost)

| Properti     | Nilai                                     |
| ------------ | ----------------------------------------- |
| Background   | Transparent                               |
| Border       | 1px solid Gold `#E2C289`                  |
| Text Color   | Gold `#E2C289`                            |
| Font         | DM Sans Regular 12px                      |
| Padding      | 12px vertical, 24px horizontal            |
| Border Radius| 9999px (pill)                             |
| Contoh       | "Masuk", "LIHAT JADWAL"                   |

### Button — Text Link

| Properti     | Nilai                                     |
| ------------ | ----------------------------------------- |
| Text Color   | Gold `#E2C289`                            |
| Font         | DM Sans Medium 12px                       |
| Decoration   | Underline atau arrow icon                 |
| Contoh       | "LIHAT SEMUA", "LIHAT SELENGKAPNYA"       |

### Statistik Counter

| Properti      | Nilai                                       |
| ------------- | ------------------------------------------- |
| Number Font   | Playfair Display Regular ~36px, Gold        |
| Label Font    | DM Sans Regular ~18px, Gold                 |
| Layout        | Horizontal row, 3 item sejajar             |
| Items         | 150+ MUA Terverifikasi · 40+ Master Class · 1500+ Klien |

### Card — Kegiatan

| Properti         | Nilai                                   |
| ---------------- | --------------------------------------- |
| Image Size       | 341 × 288px                             |
| Title Font       | Playfair Display Regular 24px, Gold     |
| Description Font | DM Sans Light 12px, Blush Pink          |
| CTA              | Outline button, DM Sans Regular 12px    |
| Corner Radius    | 20px                                    |

### Card — MUA Profile

| Properti         | Nilai                                   |
| ---------------- | --------------------------------------- |
| Image Size       | 247 × 288px                             |
| Name Font        | Playfair Display Regular 24px, Gold     |
| Specialty Font   | DM Sans Light 12px, Blush Pink          |
| Price Font       | DM Sans Regular 16px, Blush Pink        |
| CTA              | Text link "LIHAT SELENGKAPNYA"          |
| Corner Radius    | 20px                                    |

### Tabel — Jadwal Workshop

| Properti           | Nilai                                    |
| ------------------ | ---------------------------------------- |
| Header Background  | Blush Pink `#DCC0BD`                     |
| Header Text        | DM Sans Bold 16px, Near Black `#1D1B1A` |
| Cell Text          | DM Sans Regular 16px, Gold `#E2C289`    |
| Kolom              | Tanggal & Lokasi, Kebutuhan/Tema, Kriteria, Benefit/Fee, Aksi |
| Row Divider        | Border Blush Pink `#DCC0BD`              |
| Badge Kuota Penuh  | Text Red `#FF383C`                       |

### Gallery Filter Tabs

| Properti     | Nilai                                        |
| ------------ | -------------------------------------------- |
| Items        | Semua, Workshop, Hasil Riasan, Catwalk, Pemotretan, Lain-Lain |
| Active Tab   | Gold background, dark text                   |
| Inactive Tab | Transparent, gold text/border                |
| Font         | DM Sans Regular 14px                         |

### Galeri Grid

| Properti          | Nilai               |
| ----------------- | -------------------- |
| Image Size        | 400 × 306px          |
| Grid              | Multi-column masonry  |
| Corner Radius     | 20px                 |

---

## 🏗️ Struktur Halaman (Top to Bottom)

### 1. Navbar (Y: 30px, H: 42px)
- Logo "RIAS KARSA" + Navigation + CTA "Masuk"

### 2. Hero Section (Y: 107px, H: 661px)
- Full-width background image (1440 × 661px) dengan dark overlay
- Heading: *"Menyulam Cipta, Memancarkan Anggunnya Paras Nusantara"*
- Subtitle: *"Bergabunglah dengan puluhan penata rias profesional Nusantara..."*
- 2 CTA Buttons: "CARI MUA" (filled) + "GABUNG KOMUNITAS" (outline)
- Statistik row: 150+ MUA Terverifikasi · 40+ Master Class · 1500+ Klien
- Padding: 100px all sides

### 3. Mengenal Rias Karsa (Y: ~908px, H: 422px)
- Section heading: *"Mengenal Rias Karsa"*
- Deskripsi paragraf tentang komunitas
- 4 pilar dalam card grid:
  1. Sertifikasi dan Standardisasi
  2. Transparansi Tarif
  3. Pelestarian Budaya
  4. Pemberdayaan Ekonomi

### 4. Kegiatan Rias Karsa (Y: ~1470px, H: 591px)
- Section heading: *"Kegiatan Rias Karsa"*
- 3 activity cards horizontal:
  1. Masterclass & Sertifikasi MUA → "LIHAT JADWAL"
  2. Direktori MUA Terverifikasi → "JELAJAHI KATALOG"
  3. Open Model Call → "DAFTAR MODEL"

### 5. Jadwal Workshop + Open Call Model (Y: ~2201px, H: 1579px)
- Sub-section: *"Jadwal Workshop dan Open Call Model"*
  - Tabel jadwal dengan 2 row data
  - Row 1: 15 Agustus 2026, Paes Ageng, Hotel Tentrem Semarang → "Daftar Model"
  - Row 2: 16 Agustus 2026, Modern Bride, Hotel Grand Saraswati → "Kuota Penuh"
- Sub-section: *"Direktori MUA Terverifikasi"*
  - Filter dropdowns: Style, Lokasi, Harga
  - 4 MUA profile cards: Ayu Agung Rias, Beauty of Nusa, Bina Beauty, Cantika MUA
  - CTA: "LIHAT SEMUA PENATA RIAS"

### 6. Galeri Karya & Kegiatan (Y: ~3920px, H: 870px)
- Section heading: *"Galeri Karya & Kegiatan"*
- Filter tabs: Semua, Workshop, Hasil Riasan, Catwalk, Pemotretan, Lain-Lain
- Image grid gallery
- CTA: "LIHAT SEMUA"

### 7. CTA Section + Footer (Y: ~4930px, H: 1010px)
- CTA Banner:
  - Heading: *"Mari Bertumbuh Bersama Rias Karsa"*
  - Body text tentang ajakan bergabung
  - Button: "GABUNG KOMUNITAS"
- Footer:
  - Logo "RIAS KARSA" + tagline
  - 3 kolom: NAVIGASI, LEGALITAS, KONTAK
  - Kontak: WhatsApp, Instagram, TikTok, Email, Alamat
  - Copyright: *"© 2026 Rias Karsa Semarang, All Rights Reserved"*
  - Drop shadow atas: 5 layer (rgba(50,31,31) dari 10% ke 0%)

---

## ✨ Effects & Shadows

### Footer Section Shadow (Upward)

| Layer | Offset X | Offset Y | Blur | Color                    |
| ----- | -------- | -------- | ---- | ------------------------ |
| 1     | 0        | -6px     | 14px | rgba(50, 31, 31, 0.10)   |
| 2     | 0        | -25px    | 25px | rgba(50, 31, 31, 0.09)   |
| 3     | 0        | -56px    | 34px | rgba(50, 31, 31, 0.05)   |
| 4     | 0        | -99px    | 40px | rgba(50, 31, 31, 0.01)   |
| 5     | 0        | -155px   | 43px | rgba(50, 31, 31, 0.00)   |

---

## 📏 Spacing System

| Konteks                    | Nilai     |
| -------------------------- | --------- |
| Section gap (vertical)     | 140px     |
| Section padding (horizontal)| 100px    |
| Nav item gap               | 32px      |
| Button padding             | 12px 24px |
| Nav item padding           | 8px       |
| Card internal gap          | 20px      |
| Content block gap          | 32px      |
| Hero content gap           | 62px      |

---

## 🎭 Design Characteristics

- **Tema**: Elegan, tradisional Jawa modern, warm & sophisticated
- **Mood**: Mewah namun hangat, profesional namun budaya
- **Palette**: Dark maroon base dengan gold accent — nuansa batik & kerajaan Jawa
- **Border Style**: Banyak menggunakan gold border `#E2C289` sebagai dekoratif separator
- **Button Style**: Konsisten pill-shaped (radius 9999px)
- **Image Treatment**: Rounded corners 20px, no borders
- **Typography Contrast**: Serif (Playfair Display) untuk heading memberikan kesan klasik, Sans-serif (DM Sans) untuk body memberikan kesan modern dan mudah dibaca

---

## 🔗 Font Resources

Google Fonts:

Playfair Display: https://fonts.google.com/specimen/Playfair+Display
DM Sans: https://fonts.google.com/specimen/DM+Sans
CSS Import: @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');