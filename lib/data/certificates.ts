export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: "uji-kom-bnsp",
    title: "Sertifikat Uji Kompetensi TJKT",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    image: "/assets/img/Sertifikat/SertifikatUJIKOMTJKTOlehBNSP.jpeg",
  },
  {
    id: "ketua-osis",
    title: "Sertifikat Ketua OSIS",
    issuer: "SMKN 1 Garut",
    image: "/assets/img/Sertifikat/SertifKetuaOsis.jpeg",
  },
  {
    id: "wakil-osis",
    title: "Sertifikat Wakil Ketua OSIS",
    issuer: "SMKN 1 Garut",
    image: "/assets/img/Sertifikat/SERTIF_WAKIL_KETUA_OSIS.jpg",
  },
  {
    id: "fojb-1",
    title: "Sertifikat FOJB Wilayah 11",
    issuer: "Forum OSIS Jawa Barat",
    image: "/assets/img/Sertifikat/SertifFOJB1.jpg",
  },
  {
    id: "odt",
    title: "Sertifikat One Day Training",
    issuer: "FOJB Wilayah 11",
    image: "/assets/img/Sertifikat/SERTIF_ODT.jpg",
  },
  {
    id: "smile-pr",
    title: "Kadiv PR & Sponsorship • SMILE",
    issuer: "Telkom University",
    image: "/assets/img/Sertifikat/SMILE_KADIV_PR_SPONSOR.jpeg",
  },
];
