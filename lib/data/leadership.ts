export interface LeadershipStat {
  value: string;
  label: string;
}

export interface LeadershipRole {
  id: string;
  slug: string;
  org: string;
  role: string;
  period: string;
  logo: string;
  backgroundImage: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  stats: LeadershipStat[];
}

export const leadershipRoles: LeadershipRole[] = [
  {
    id: "osis",
    slug: "ketua-osis",
    org: "OSIS SMK Negeri 1 Garut",
    role: "Ketua OSIS",
    period: "2025 — 2026",
    logo: "/assets/icon/Logo/LogoOSISSMKN1GARUT.png",
    backgroundImage: "/assets/img/OSIS/FotoGwSempurnaTransparanPakeJasOSIS.png",
    gallery: [
      "/assets/img/OSIS/FotoBersamaPembinaDanPengurusOSIS.jpeg",
      "/assets/img/OSIS/FotoGwTransparanPakeJasOSISkepotongDitengah.png",
    ],
    summary:
      "Memimpin organisasi siswa terbesar di sekolah, bertanggung jawab penuh atas manajemen kegiatan dan aspirasi lebih dari 2.500 siswa. Menginisiasi transformasi OSIS dari sistem manual menjadi ekosistem digital.",
    highlights: [
      "Memimpin & mengoordinasikan 38 organisasi dan ekstrakurikuler tingkat sekolah",
      "Menginisiasi PERPOSSAGAR, Podcast Pelajar Inspiratif, sistem web aspirasi siswa, dan absensi digital",
      "Mengubah proses birokrasi manual sekolah menjadi sistem digital yang lebih cepat dan transparan",
    ],
    stats: [
      { value: "38", label: "Organisasi & Ekskul" },
      { value: "2.500+", label: "Siswa Terdampak" },
    ],
  },
  {
    id: "fojb",
    slug: "kepala-learning-center-fojb",
    org: "Forum OSIS Jawa Barat — Wilayah 11",
    role: "Kepala Manajemen Learning Center",
    period: "2024 — 2025",
    logo: "/assets/icon/Logo/LogoFOJB.png",
    backgroundImage: "/assets/img/FOJB/FotoGwSendiriPakePDHFOJBTransparan.png",
    gallery: [
      "/assets/img/FOJB/FotoBersamaODTWithPeserta.jpeg",
      "/assets/img/FOJB/Sambutan1ODT.jpeg",
      "/assets/img/FOJB/FotoPenyerahanPiagamKpdSMKN1GARUTEventODT.jpeg",
    ],
    summary:
      "Memimpin pengembangan kapasitas pemimpin muda di tingkat regional, mengelola dan membina pengurus OSIS dari berbagai sekolah se-Wilayah 11 Jawa Barat melalui kaderisasi lintas institusi.",
    highlights: [
      "Ketua Pelaksana One Day Training (ODT) Wilayah 11 untuk 450–500 peserta",
      "Ketua Divisi Public Relations WJSLS 3.0 — 3.500+ pelajar se-Jawa Barat, bermitra dengan TVRI",
      "Head of Public Relations & Sponsorship SMILE 9.0, Telkom University",
    ],
    stats: [
      { value: "500+", label: "Peserta ODT" },
      { value: "3.500+", label: "Pelajar WJSLS 3.0" },
    ],
  },
  {
    id: "duta-masagi",
    slug: "duta-sekolah-bakti-masagi",
    org: "Duta Sekolah Bakti Masagi",
    role: "Duta Sekolah",
    period: "2024 — 2025",
    logo: "/assets/icon/Logo/LogoSMKN1Garut.png",
    backgroundImage: "/assets/img/DutaSekolahBaktiMasagi/FotoGwTransparanPakeSelendangDSBM.png",
    gallery: ["/assets/img/DutaSekolahBaktiMasagi/FotoBersamaPengukuhanDSBM.jpeg"],
    summary:
      "Representasi resmi sekolah dalam program penguatan karakter berbasis budaya lokal Jawa Barat, membawa nilai gotong royong, integritas, dan kepedulian lingkungan ke berbagai forum pelajar.",
    highlights: [
      "Narasumber dan knowledge sharer di berbagai forum sekolah",
      "Mempromosikan nilai gotong royong, integritas, dan keberlanjutan kepada pelajar lain",
      "Berkontribusi pada penguatan kesadaran hak asasi manusia melalui keterlibatan aktif",
    ],
    stats: [
      { value: "01", label: "Duta Terpilih" },
      { value: "2024", label: "Angkatan Masagi" },
    ],
  },
];
