/**
 * Professional Experience — Vertical Timeline data
 *
 * `gallery` paths are the mini image-grid revealed on hover, sourced
 * directly from the existing /assets tree (served from /public/assets).
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  /** Rendered in font-mono, e.g. "NOV 2025 — JAN 2026" */
  period: string;
  /** Optional institutional logo shown next to the entry */
  logo?: string;
  description: string;
  /** Bullet highlights specific to this role */
  highlights: string[];
  /** Grayscale thumbnails shown on hover/expand */
  gallery: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "freelance-consultant",
    role: "Freelance Business Consultant & Developer",
    organization: "Independent — Klien Individu & Bisnis Kecil-Menengah",
    period: "2024 — Sekarang",
    description:
      "Menyediakan layanan konsultasi dan eksekusi digital end-to-end bagi klien individu dan bisnis kecil-menengah, mencakup pengembangan website, penyusunan dokumen korporat, analisis data berbasis Excel, hingga produksi video branding. Fokus utama menerjemahkan kebutuhan klien menjadi solusi digital yang efisien, profesional, dan siap pakai.",
    highlights: [
      "Web Development for Clients — merancang dan membangun website fungsional (company profile, e-commerce, portofolio) sesuai kebutuhan brand klien",
      "Corporate Document & Report Production — menyusun dokumen bisnis profesional (laporan, proposal, company profile) dengan standar presentasi korporat",
      "Advanced Data Analysis (Excel) — mengolah dan menyajikan data klien menggunakan formula tingkat lanjut untuk mendukung pengambilan keputusan",
      "Branding Video Production — memproduksi konten video branding untuk memperkuat citra dan identitas visual institusi",
    ],
    gallery: [
      "/assets/img/Experience/Freelance/Excel/MasterPlanOrganisasi.png",
      "/assets/img/Experience/Freelance/Poster/Poster1.jpg",
      "/assets/img/Experience/Freelance/Poster/Poster2.jpg",
      "/assets/img/Experience/Freelance/Poster/Poster3.jpg",
      "/assets/img/Experience/Freelance/PPT/ppt1.jpg",
      "/assets/img/Experience/Freelance/PPT/ppt2.jpg",
      "/assets/img/Experience/Freelance/PPT/ppt3.jpg",
    ],
  },
  {
    id: "it-support-intern",
    role: "IT Support Intern",
    organization: "Universitas Garut — UPT FEKON UNIGA",
    period: "Nov 2025 — Jan 2026",
    logo: "/assets/icon/Logo/LogoUNIGAFEKONTempatPKL.png",
    description:
      "Selama masa intern di UPT FEKON Universitas Garut, bertanggung jawab penuh dalam menjaga stabilitas dan performa infrastruktur digital kampus. Peran ini menuntut ketelitian tinggi dalam pemeliharaan berkala jaringan komputer serta kecepatan dalam melakukan troubleshooting hardware maupun instalasi sistem operasi. Tidak hanya berfokus pada perangkat fisik, juga melakukan optimalisasi pada sistem administrasi data internal menggunakan teknik Microsoft Excel seperti implementasi VLOOKUP, pivot tables, dan advanced formulas guna meningkatkan efisiensi pengolahan informasi di lingkungan profesional.",
    highlights: [
      "Pemeliharaan berkala jaringan komputer serta troubleshooting hardware dan instalasi sistem operasi",
      "Optimalisasi sistem administrasi data internal menggunakan VLOOKUP, pivot tables, dan advanced formulas di Excel",
      "Highlight utama: memperkuat kapasitas dalam network administration dan IT support, sekaligus mengasah kemampuan adaptasi menghadapi tantangan teknis yang dinamis di dunia profesional",
    ],
    gallery: [
      "/assets/img/Experience/PKLUNIGA/BentukInstalasiKelistrikanFEKON.jpeg",
      "/assets/img/Experience/PKLUNIGA/InstallUlangWindows.jpeg",
      "/assets/img/Experience/PKLUNIGA/MonitoringJaringanDiMikrotik.jpeg",
      "/assets/img/Experience/PKLUNIGA/MonitoringKecepatanInternet.jpeg",
      "/assets/img/Experience/PKLUNIGA/PerakitanKomputer.jpeg",
      "/assets/img/Experience/PKLUNIGA/PerakitanKomputer2.jpeg",
      "/assets/img/Experience/PKLUNIGA/TampilanServerMikrotikFEKON.jpeg",
    ],
  },
];
