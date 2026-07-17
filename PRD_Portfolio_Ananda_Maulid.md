# PRODUCT REQUIREMENTS DOCUMENT
## Ananda Maulid — Personal Portfolio (Next.js Edition)
**Version:** 1.0
**Prepared by:** Technical PM & Lead Next.js Architect
**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis

---

## 1. PRODUCT VISION & TARGET AUDIENCE

### 1.1 Vision Statement
Membangun portofolio digital yang terasa seperti sebuah **editorial studio brand**, bukan template developer generik. Target akhirnya: recruiter, klien freelance, dan mitra organisasi merasa mereka sedang membuka *dossier* seorang profesional hybrid (developer + designer + leader) — bukan sekadar "portfolio anak SMK".

Prinsip inti: **quiet confidence**. Tidak ada elemen yang berteriak (no heavy gradients, no bouncy emoji, no default shadcn look). Setiap detail — spacing, hairline border, transisi — dirancang untuk terasa *intentional* dan *human-crafted*.

### 1.2 Target Audience
| Segment | Kebutuhan dari Portofolio |
|---|---|
| **HR Recruiter (tech/creative)** | Scan cepat: tech stack, proyek nyata, bukti kerja profesional (bukan tugas sekolah) |
| **Klien Freelance (UMKM/individu)** | Bukti kredibilitas visual — desain rapi = sinyal kerja rapi |
| **Mitra Organisasi/Institusi** | Validasi rekam jejak kepemimpinan skala besar (OSIS, FOJB, Duta Masagi) |
| **Sesama Developer/Designer** | Kualitas eksekusi teknis (animasi halus, performa, code craftsmanship) |

### 1.3 Non-Goals
- Bukan portofolio "playful/colorful" — palet warna sengaja dibatasi ketat.
- Bukan single-page resume statis — harus terasa seperti produk digital interaktif.
- Tidak menggunakan komponen UI library default tanpa kustomisasi visual (anti "obviously shadcn/Bootstrap").

---

## 2. DESIGN SYSTEM GUIDELINES

### 2.1 Color Palette (Strict Monochrome)
```
--background:      #0A0A0A   (deep black, base canvas)
--surface:         #121214   (slightly elevated cards)
--text-primary:    #F4F4F5   (headings, high emphasis)
--text-secondary:  #D4D4D8   (body copy)
--text-muted:      #71717A   (captions, meta info)
--border-hairline: #27272A   (zinc-800 equivalent)
--border-subtle:   #18181B   (zinc-900 equivalent)
--accent-hover:    dynamic   (only appears on project image hover — pulled from image itself via CSS grayscale→color transition, NOT a fixed brand color)
```
**Aturan mutlak:** tidak ada warna solid brand (biru/merah/hijau) yang permanen di UI. Satu-satunya "warna" yang muncul adalah saat gambar proyek di-hover dari grayscale ke full-color — ini jadi *signature interaction* dari keseluruhan situs.

### 2.2 Typography
| Peran | Font | Contoh Pemakaian |
|---|---|---|
| Heading Display (H1, H2 section titles) | **Playfair Display** (serif, editorial) | "Front-End Developer & Digital Entrepreneur" |
| Sub-heading / Card Titles | Playfair Display (medium weight, smaller size) | Judul proyek, judul role leadership |
| Body & UI Text | **Inter** atau **Geist Sans** | Paragraf deskripsi, label bullet |
| Technical / Meta (tanggal, tag, kode) | **Geist Mono** atau `font-mono` | Timeline dates, tech tags |

**Skala tipografi (rekomendasi Tailwind scale):**
- H1 Hero: `text-6xl md:text-8xl` Playfair, `tracking-tight`, `leading-[0.95]`
- H2 Section: `text-4xl md:text-5xl` Playfair
- Body: `text-base md:text-lg` Inter, `text-[#D4D4D8]`
- Meta/Caption: `text-xs md:text-sm` Geist Mono, `text-[#71717A]`, `uppercase tracking-widest`

### 2.3 Iconography
- **Library:** Lucide React (stroke-width 1.5) — tanpa emoji apapun, tanpa pengecualian.
- Semua ikon di-render dalam warna `text-secondary`/`text-muted`, berubah `text-primary` saat hover/active.
- Ukuran konsisten: 18px (inline), 24px (button/nav), 32px (feature highlight).

### 2.4 Layout Principles
- **Bento Grid** dipakai untuk section Skills & Leadership — grid asimetris (`grid-cols-4 grid-rows-3` dengan beberapa card `col-span-2`/`row-span-2`).
- **Hairline borders** (`border border-zinc-800`) menggantikan drop-shadow di semua card.
- Container max-width `max-w-6xl mx-auto`, padding horizontal konsisten `px-6 md:px-12`.
- Whitespace vertikal antar section besar (`py-24 md:py-32`) — memberi kesan "editorial breathing room".

### 2.5 Texture & Motion
- **Grain overlay:** SVG noise `<feTurbulence>` fixed position, `opacity-[0.03]`, `mix-blend-overlay`, di atas seluruh background — dirender sekali di root layout.
- **Lenis smooth scroll:** diinisialisasi di root provider, `duration: 1.2`, `easing: exponential ease-out`.
- **Framer Motion patterns:**
  - Staggered fade-up untuk list/grid item (`initial: opacity 0, y: 24` → `animate: opacity 1, y: 0`, `staggerChildren: 0.08`)
  - Magnetic button untuk CTA utama (mouse-follow transform terbatas radius ±12px)
  - Scroll-linked reveal untuk section heading (`useInView` trigger once)
  - Grayscale→color transition pada project image (`filter: grayscale(100%)` → `grayscale(0%)`, `transition duration-500`)

---

## 3. FEATURE BREAKDOWN (SECTION BY SECTION)

### 3.1 Hero Section
- Layout 2 kolom (desktop): kiri teks headline + CTA, kanan foto formal dengan efek subtle parallax saat scroll.
- Headline: "Front-End Developer & Digital Entrepreneur" (Playfair, besar), sub-line Inter: "Building systems, interfaces, and organizations that scale."
- CTA ganda: "View Projects" (magnetic button, filled) + "Download CV" (outline hairline).
- Scroll indicator minimalis di bawah (garis vertikal tipis + label "Scroll" kecil, animasi fade loop).

### 3.2 Tech Stack Marquee
- Infinite horizontal marquee (dua baris, arah berlawanan untuk kesan dinamis) menampilkan logo tools dalam grayscale, full-color saat hover per-icon.
- Pause on hover (per item, bukan seluruh marquee) menggunakan CSS `animation-play-state`.
- Logo tools ditampilkan dalam ukuran seragam (48x48 container, object-contain).

### 3.3 Skills & Expertise (Bento Grid)
Empat kategori dalam grid asimetris:
- **Web Development** (card besar, `col-span-2 row-span-2`) — list tools + deskripsi singkat
- **UI/UX Design** (card sedang)
- **Infrastructure & Network** (card sedang)
- **Soft Skills / Leadership Traits** (card memanjang horizontal, bawah)

Setiap card: hairline border, icon kategori di pojok kiri atas, hover state menaikkan border jadi `border-zinc-700` + slight `translateY(-4px)`.

### 3.4 Professional Experience (Vertical Timeline)
- Timeline vertikal dengan garis tipis di kiri (`border-l border-zinc-800`), dot indicator di tiap entry.
- Dua entry utama: **Freelance Business Consultant & Developer** (2024–Sekarang) dan **IT Support Intern — UNIGA** (Nov 2025–Jan 2026).
- Tiap entry expandable/hover untuk menampilkan mini image-grid (grayscale thumbnails) dari foto operasional terkait.
- Tanggal ditampilkan dengan `font-mono text-xs text-muted`.

### 3.5 Projects Showcase (Tabs/Filter)
- Filter tab horizontal: **All / Web / UI-UX / Design**, menggunakan animated underline indicator (Framer Motion `layoutId`).
- Grid proyek 2-3 kolom, tiap card: gambar grayscale default, transisi ke full-color saat hover + slight scale (`scale-105`).
- Overlay saat hover: judul proyek (Playfair) + tag teknologi (Geist Mono) muncul dari bawah (`y: 20 → 0`, fade in).
- Klik card → modal/lightbox atau navigasi ke detail (khusus proyek Figma dengan multi-image, buka sebagai mini gallery carousel).

### 3.6 Leadership & Organizational Impact
- Layout carousel horizontal (drag-to-scroll, snap-per-card) ATAU grid 3 kolom dengan card besar per role — direkomendasikan **grid** untuk desktop, **carousel** untuk mobile (responsive switch).
- Tiga highlight utama: **Ketua OSIS** (2.500+ siswa), **FOJB Wilayah 11**, **Duta Bakti Masagi**.
- Tiap card: foto formal role tersebut sebagai background image dengan dark gradient overlay di bawah, angka statistik besar (Playfair, `text-5xl`) sebagai focal point, deskripsi singkat di bawahnya.
- Logo institusi terkait (OSIS, FOJB, Sekolah) ditampilkan kecil sebagai badge di pojok card.

### 3.7 Footer & Favicon
- Footer minimal: nama, tagline singkat, link kontak (email, nomor, sosial) ditata horizontal dengan separator hairline (`|`), tanpa background berbeda dari body.
- **Favicon concept (SVG, initials "AM"):**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#0A0A0A"/>
  <text x="16" y="21" text-anchor="middle"
        font-family="Playfair Display, serif"
        font-size="15" font-weight="600"
        fill="#D4D4D8" letter-spacing="0.5">AM</text>
</svg>
```
Simpan sebagai `app/icon.svg` — Next.js App Router otomatis mendeteksi file ini sebagai favicon tanpa konfigurasi tambahan di `<head>`.

---

## 4. CODEBASE ARCHITECTURE

```
app/
├── layout.tsx                     # Root layout: font loading, GrainOverlay, LenisProvider
├── page.tsx                       # Composes all sections in order
├── icon.svg                       # Favicon (AM initials)
├── globals.css                    # Tailwind base + CSS variables (color tokens)
│
components/
├── providers/
│   └── LenisProvider.tsx          # Wraps app, initializes smooth scroll
│
├── sections/
│   ├── Hero.tsx
│   ├── TechMarquee.tsx
│   ├── SkillsBento.tsx
│   ├── Experience.tsx
│   ├── ProjectsShowcase.tsx
│   ├── LeadershipGrid.tsx
│   └── Footer.tsx
│
├── ui/
│   ├── GrainOverlay.tsx           # Fixed SVG noise layer
│   ├── MagneticButton.tsx         # CTA button w/ mouse-follow physics
│   ├── Marquee.tsx                # Generic infinite scroll wrapper
│   ├── BentoCard.tsx              # Reusable bento grid card
│   ├── TimelineItem.tsx           # Single experience entry
│   ├── ProjectCard.tsx            # Grayscale→color hover card
│   ├── FilterTabs.tsx             # Animated underline tab switcher
│   ├── LeadershipCard.tsx         # Stat-focused leadership card
│   ├── Lightbox.tsx               # Multi-image modal (Figma projects)
│   └── SectionHeading.tsx         # Consistent H2 + eyebrow label
│
lib/
├── data/
│   ├── tools.ts                   # Tech stack marquee data (name, icon path)
│   ├── skills.ts                  # Bento grid content per category
│   ├── experience.ts              # Timeline entries + associated images
│   ├── projects.ts                # Web / UI-UX / Design project entries
│   └── leadership.ts              # OSIS / FOJB / Duta Masagi content
├── utils.ts                       # cn() helper, misc formatters
│
public/
└── assets/                        # (existing asset tree — unchanged, see §5)
```

**Catatan arsitektur:**
- Semua konten teks (deskripsi, bullet, angka statistik) disimpan sebagai typed data di `lib/data/*.ts`, bukan hardcoded di komponen — memudahkan update konten tanpa menyentuh JSX.
- `ProjectCard.tsx` dan `LeadershipCard.tsx` menerima props generik agar reusable lintas kategori (DRY).
- `Lightbox.tsx` khusus dipakai untuk project Figma (ProjectFigma1 & ProjectFigma2) yang punya multi-image per proyek.

---

## 5. ASSET MAPPING TABLE

### 5.1 Icons — Logo Institusi
| Asset Path | Consuming Component |
|---|---|
| `assets/icon/Logo/LogoOSISSMKN1GARUT.png` | `LeadershipCard.tsx` (OSIS card, badge pojok) |
| `assets/icon/Logo/LogoFOJB.png` | `LeadershipCard.tsx` (FOJB card, badge pojok) |
| `assets/icon/Logo/LogoSMKN1Garut.png` | `LeadershipCard.tsx`, `Experience.tsx` (institutional context) |
| `assets/icon/Logo/LogoJurusanTJKT.png` | `Experience.tsx` / footer credential strip |
| `assets/icon/Logo/LogoUNIGAFEKONTempatPKL.png` | `TimelineItem.tsx` (IT Support Intern entry) |

### 5.2 Icons — Tools (Tech Marquee & Skills Bento)
| Asset Path | Consuming Component |
|---|---|
| `LogoNextJs.png`, `LogoReactJs.png`, `LogoHTML5.png`, `LogoCSS3.png`, `LogoJavaScript.png`, `LogoTailwindCSS.png`, `LogoGithub.png`, `LogoVercel.png`, `LogoSupabase.png`, `LogoVSCode.png` | `TechMarquee.tsx` (row 1) + `SkillsBento.tsx` → Web Development card |
| `LogoFigma.png`, `LogoCanva.png`, `LogoAdobeExpress.png`, `LogoCapcut.png` | `TechMarquee.tsx` (row 2) + `SkillsBento.tsx` → UI/UX Design card |
| `LogoExcel.png`, `LogoWord.png`, `LogoPPT.png` | `SkillsBento.tsx` → Infrastructure/Office card |

### 5.3 Hero & Portrait
| Asset Path | Consuming Component |
|---|---|
| `assets/img/FOTOGW/FotoUtamaPakeJasFormalPoseTransparan.png` | `Hero.tsx` (primary hero image) |
| `assets/img/FOTOGW/FotoGwPakeJasTransparan.png` | `Footer.tsx` (closing portrait) atau About micro-section |
| `assets/img/FOTOGW/FotoGwNgadepKananTransparan.png` | Alternate hero (mobile crop / responsive variant) |
| `assets/img/FOTOGW/FotoUtamaPakeSeragamSekolahTransparan.png` | `Experience.tsx` (school-era context, optional) |

### 5.4 Professional Experience — Freelance
| Asset Path | Consuming Component |
|---|---|
| `assets/img/Experience/Freelance/Excel/MasterPlanOrganisasi.png` | `TimelineItem.tsx` (Freelance entry → Excel/data analysis proof) |
| `assets/img/Experience/Freelance/Poster/Poster1.jpg` `Poster2.jpg` `Poster3.jpg` | `ProjectsShowcase.tsx` → filter **Design**, atau mini-gallery di `TimelineItem.tsx` (Freelance) |
| `assets/img/Experience/Freelance/PPT/ppt1.jpg` `ppt2.jpg` `ppt3.jpg` | `ProjectsShowcase.tsx` → filter **Design** |

### 5.5 Professional Experience — IT Support Intern (UNIGA)
| Asset Path | Consuming Component |
|---|---|
| `BentukInstalasiKelistrikanFEKON.jpeg`, `InstallUlangWindows.jpeg`, `MonitoringJaringanDiMikrotik.jpeg`, `MonitoringKecepatanInternet.jpeg`, `PerakitanKomputer.jpeg`, `PerakitanKomputer2.jpeg`, `TampilanServerMikrotikFEKON.jpeg` | `TimelineItem.tsx` (IT Support Intern entry) — dirender sebagai mini image-grid (grayscale) yang expand saat hover/klik |

### 5.6 Leadership — OSIS
| Asset Path | Consuming Component |
|---|---|
| `assets/img/OSIS/FotoGwSempurnaTransparanPakeJasOSIS.png` | `LeadershipCard.tsx` (OSIS — primary image) |
| `assets/img/OSIS/FotoBersamaPembinaDanPengurusOSIS.jpeg` | `LeadershipCard.tsx` (OSIS — secondary/hover reveal image) |
| `assets/img/OSIS/FotoGwTransparanPakeJasOSISkepotongDitengah.png` | `Lightbox.tsx` (OSIS gallery, opsional) |

### 5.7 Leadership — FOJB Wilayah 11
| Asset Path | Consuming Component |
|---|---|
| `assets/img/FOJB/FotoGwSendiriPakePDHFOJBTransparan.png` | `LeadershipCard.tsx` (FOJB — primary image) |
| `assets/img/FOJB/FotoBersamaODTWithPeserta.jpeg` | `LeadershipCard.tsx` (FOJB — secondary/hover image) |
| `assets/img/FOJB/FotoPenyerahanPiagamKpdSMKN1GARUTEventODT.jpeg`, `Sambutan1ODT.jpeg` | `Lightbox.tsx` (FOJB gallery) |

### 5.8 Leadership — Duta Sekolah Bakti Masagi
| Asset Path | Consuming Component |
|---|---|
| `assets/img/DutaSekolahBaktiMasagi/FotoGwTransparanPakeSelendangDSBM.png` | `LeadershipCard.tsx` (Duta Masagi — primary image) |
| `assets/img/DutaSekolahBaktiMasagi/FotoBersamaPengukuhanDSBM.jpeg` | `LeadershipCard.tsx` (Duta Masagi — secondary/hover image) |

### 5.9 Projects — UI/UX (Figma)
| Asset Path | Consuming Component |
|---|---|
| `assets/img/Projects/Figma/ProjectFigma1/HeritageCrustHome.jpg` | `ProjectCard.tsx` (cover image, filter **UI/UX**) |
| `HeritageCrustAboutUs.jpg`, `HeritageCrustLocations.jpg`, `HeritageCrustLogin.jpg`, `HeritageCrustProducts.jpg` | `Lightbox.tsx` (Heritage Crust gallery, triggered on card click) |
| `assets/img/Projects/Figma/ProjectFigma2/TheOldenLoafHome.jpg` | `ProjectCard.tsx` (cover image, filter **UI/UX**) |
| `TheOldenLoafAboutUs.png`, `TheOldenLoafLogin.png`, `TheOldenLoafProduct.jpg` | `Lightbox.tsx` (The Olden Loaf gallery) |

### 5.10 Projects — Web Development
| Asset Path | Consuming Component |
|---|---|
| `assets/img/Projects/WEB/WebCrumbandCo.png` | `ProjectCard.tsx` (filter **Web** — Crumb & Co) |
| `assets/img/Projects/WEB/WebAetheris.png` | `ProjectCard.tsx` (filter **Web** — Aetheris 26) |
| `assets/img/Projects/WEB/WebPerpustakaanDigitalSDN.png` | `ProjectCard.tsx` (filter **Web** — Perpustakaan Digital) |
| `assets/img/Projects/WEB/WebPhotobothDigitalFrssiaStudio.png` | `ProjectCard.tsx` (filter **Web** — Frssia Studio Photobooth) |

### 5.11 Sertifikat (Supporting Proof)
| Asset Path | Consuming Component |
|---|---|
| `SertifKetuaOsis.jpeg`, `SERTIF_WAKIL_KETUA_OSIS.jpg` | `Lightbox.tsx` triggered from `LeadershipCard.tsx` (OSIS "View Certificate" link) |
| `SertifFOJB1.jpg`, `SertifFOJB2.jpg`, `SERTIF_ODT.jpg`, `SERTIF_PANITIA_WJSLS.jpg`, `SMILE_KADIV_PR_SPONSOR.jpeg` | `Lightbox.tsx` triggered from `LeadershipCard.tsx` (FOJB "View Certificate" link) |
| `SertifikatUJIKOMTJKTOlehBNSP.jpeg` | `TimelineItem.tsx` (credential badge di footer Experience section) |

---

## 6. TECH STACK REQUIREMENTS

| Layer | Choice | Alasan |
|---|---|---|
| Framework | Next.js 14+ (App Router, Server Components default) | SEO, performa image optimization native (`next/image`) |
| Styling | Tailwind CSS + CSS Variables untuk design tokens | Konsistensi skala, mudah maintain dark monochrome palette |
| Animation | Framer Motion | Physics-based transitions, `useInView`, `layoutId` untuk tab indicator |
| Smooth Scroll | Lenis (`@studio-freight/lenis`) | Momentum scroll premium tanpa jank |
| Icons | Lucide React | Thin-stroke, konsisten, tree-shakeable |
| Fonts | `next/font/google` — Playfair Display + Inter (atau Geist via `next/font/local`) | Zero layout shift, self-hosted |
| Image Handling | `next/image` dengan `placeholder="blur"` | Wajib untuk semua asset di atas — hindari CLS dan mempercepat LCP |
| Deployment | Vercel | Native integration dengan Next.js, edge caching untuk marquee assets |
| Type Safety | TypeScript strict mode | Data di `lib/data/*.ts` di-type dengan interface per section |

**Catatan performa penting:**
- Semua image di folder `Projects/`, `OSIS/`, `FOJB/`, `DutaSekolahBaktiMasagi/` harus di-compress (WebP/AVIF) sebelum masuk production build — banyak asset berformat `.jpeg`/`.png` besar yang perlu dioptimasi manual atau via `next/image` otomatis.
- Gunakan `sizes` attribute yang tepat pada `next/image` untuk grid proyek (`ProjectCard.tsx`) agar tidak over-fetch resolusi besar di mobile.
