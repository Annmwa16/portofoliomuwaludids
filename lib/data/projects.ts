export type ProjectCategory = "web" | "uiux" | "design";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  cover: string;
  images: string[];
  link?: string;
}

export const projects: Project[] = [
  // ---------------------------------------------------------------------
  // WEB DEVELOPMENT
  // ---------------------------------------------------------------------
  {
    id: "crumb-and-co",
    title: "Crumb & Co",
    category: "web",
    tags: ["JavaScript", "Full-Stack", "Excel Logic"],
    description:
      "A full-stack bakery storefront built around one idea: a business runs on organized data. An interactive JavaScript product catalog sits on top of a back-office system where cash flow and orders are managed through advanced Excel logic, so brand-facing polish and operational discipline share the same foundation.",
    cover: "/assets/img/Projects/WEB/WebCrumbandCo.png",
    images: ["/assets/img/Projects/WEB/WebCrumbandCo.png"],
    link: "https://crumbco.vercel.app/",
  },
  {
    id: "aetheris-26",
    title: "Aetheris 26",
    category: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "Digital Branding"],
    description:
      "The official digital home for SMKN 1 Garut's 26th graduating class of 900+ students. As class president and lead front-end developer, this project turned an organizational vision into working code — a responsive archive and identity platform built on HTML5 and CSS3, layered with JavaScript interaction.",
    cover: "/assets/img/Projects/WEB/WebAetheris.png",
    images: ["/assets/img/Projects/WEB/WebAetheris.png"],
    link: "https://aetheris.smknegeri1garut.sch.id",
  },
  {
    id: "perpustakaan-digital-sdn",
    title: "Perpustakaan Online SDN Sumber Kedawung 3",
    category: "web",
    tags: ["Web System", "Student Services"],
    description:
      "Sebuah platform perpustakaan online (digital library) yang dirancang khusus untuk SDN Sumber Kedawung 3 untuk memudahkan siswa dalam mengakses katalog buku, membaca buku digital, serta mencatat peminjaman secara mandiri dan terkomputerisasi.",
    cover: "/assets/img/Projects/WEB/WebPerpustakaanDigitalSDN.png",
    images: ["/assets/img/Projects/WEB/WebPerpustakaanDigitalSDN.png"],
  },
  {
    id: "frssia-studio-photobooth",
    title: "Frssia Studio — Digital Photobooth",
    category: "web",
    tags: ["Web App", "Booking System"],
    description:
      "A digital photobooth booking and delivery site built for a small creative studio client, translating an offline service into a simple, professional web presence.",
    cover: "/assets/img/Projects/WEB/WebPhotobothDigitalFrssiaStudio.png",
    images: ["/assets/img/Projects/WEB/WebPhotobothDigitalFrssiaStudio.png"],
  },

  // ---------------------------------------------------------------------
  // UI / UX — FIGMA
  // ---------------------------------------------------------------------
  {
    id: "heritage-crust",
    title: "Heritage Crust",
    category: "uiux",
    tags: ["Figma", "UI/UX", "Bakery Brand"],
    description:
      "A full brand experience for an artisanal bakery, designed end-to-end in Figma — home, product catalog, store locations, and a customer login flow, unified under a warm, heritage-driven visual language.",
    cover: "/assets/img/Projects/Figma/ProjectFigma1/HeritageCrustHome.jpg",
    images: [
      "/assets/img/Projects/Figma/ProjectFigma1/HeritageCrustHome.jpg",
      "/assets/img/Projects/Figma/ProjectFigma1/HeritageCrustAboutUs.jpg",
      "/assets/img/Projects/Figma/ProjectFigma1/HeritageCrustLocations.jpg",
      "/assets/img/Projects/Figma/ProjectFigma1/HeritageCrustProducts.jpg",
      "/assets/img/Projects/Figma/ProjectFigma1/HeritageCrustLogin.jpg",
    ],
  },
  {
    id: "the-olden-loaf",
    title: "The Olden Loaf",
    category: "uiux",
    tags: ["Figma", "UI/UX", "Bakery Brand"],
    description:
      "A sibling concept to Heritage Crust exploring a different bakery brand voice — cleaner, more editorial — spanning a daily-provisions homepage, product menu, and account access screens.",
    cover: "/assets/img/Projects/Figma/ProjectFigma2/TheOldenLoafHome.jpg",
    images: [
      "/assets/img/Projects/Figma/ProjectFigma2/TheOldenLoafHome.jpg",
      "/assets/img/Projects/Figma/ProjectFigma2/TheOldenLoafAboutUs.png",
      "/assets/img/Projects/Figma/ProjectFigma2/TheOldenLoafProduct.jpg",
      "/assets/img/Projects/Figma/ProjectFigma2/TheOldenLoafLogin.png",
    ],
  },

  // ---------------------------------------------------------------------
  // DESIGN — FREELANCE CREATIVE WORK
  // ---------------------------------------------------------------------
  {
    id: "poster-publication-design",
    title: "Poster & Publication Design",
    category: "design",
    tags: ["Canva", "Adobe Express", "Branding"],
    description:
      "A set of freelance poster and publication designs produced for individual and small-business clients — service offers, digital branding packages, and promotional layouts built for fast, clear visual communication.",
    cover: "/assets/img/Experience/Freelance/Poster/Poster1.jpg",
    images: [
      "/assets/img/Experience/Freelance/Poster/Poster1.jpg",
      "/assets/img/Experience/Freelance/Poster/Poster2.jpg",
      "/assets/img/Experience/Freelance/Poster/Poster3.jpg",
    ],
  },
  {
    id: "presentation-design",
    title: "Presentation Design",
    category: "design",
    tags: ["PowerPoint", "Academic & Corporate Design"],
    description:
      "Presentation decks designed for academic research defenses and organizational events, applying corporate-standard slide structure and typography to make dense material easy to follow.",
    cover: "/assets/img/Experience/Freelance/PPT/ppt1.jpg",
    images: [
      "/assets/img/Experience/Freelance/PPT/ppt1.jpg",
      "/assets/img/Experience/Freelance/PPT/ppt2.jpg",
      "/assets/img/Experience/Freelance/PPT/ppt3.jpg",
    ],
  },
];
