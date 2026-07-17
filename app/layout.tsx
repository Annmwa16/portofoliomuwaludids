import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Navbar from "@/components/ui/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananda Maulid — Front-End Developer & Digital Entrepreneur",
  description:
    "Portofolio digital Ananda Maulid: Front-End Developer, UI/UX Designer, dan pemimpin organisasi siswa berskala besar. Membangun sistem, antarmuka, dan organisasi yang scalable.",
  metadataBase: new URL("https://anandamaulid.vercel.app"),
  openGraph: {
    title: "Ananda Maulid — Front-End Developer & Digital Entrepreneur",
    description:
      "Dari memimpin organisasi 2.500+ siswa hingga membangun sistem web full-stack — dossier digital seorang profesional hybrid.",
    url: "https://anandamaulid.vercel.app",
    siteName: "Ananda Maulid Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="relative min-h-screen bg-background font-sans text-text-secondary antialiased">
        <LenisProvider>
          <GrainOverlay />
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}