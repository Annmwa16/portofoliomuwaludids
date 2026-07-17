import { Code, PenTool, Network, Users, type LucideIcon } from "lucide-react";

export interface SkillCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  span: "feature" | "standard" | "wide";
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    tagline:
      "Membangun aplikasi web full-stack modern dengan arsitektur scalable, dari frontend interaktif hingga backend dan database.",
    span: "feature",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub",
    ],
  },
  {
    id: "uiux-design",
    icon: PenTool,
    title: "UI/UX Design",
    tagline:
      "Merancang antarmuka pengguna yang intuitif dan estetis dengan pendekatan user-centered design dan prototyping interaktif.",
    span: "standard",
    items: ["Figma", "Prototyping", "Wireframing", "Visual Design", "Canva", "Adobe Express"],
  },
  {
    id: "infra-network",
    icon: Network,
    title: "Infrastructure & Network",
    tagline:
      "Deployment jaringan FTTH, konfigurasi MikroTik RouterOS, monitoring server, dan IT support profesional.",
    span: "standard",
    items: [
      "FTTH",
      "MikroTik",
      "Server Monitoring",
      "PC Assembly",
      "Windows Server",
      "Bandwidth Optimization",
    ],
  },
  {
    id: "leadership",
    icon: Users,
    title: "Leadership & Soft Skills",
    tagline:
      "Memimpin organisasi berskala besar, public speaking, manajemen tim, dan koordinasi lintas fungsi.",
    span: "wide",
    items: [
      "Public Speaking",
      "Team Management",
      "Event Organizing",
      "Strategic Planning",
      "Cross-functional Coordination",
      "Project Management",
    ],
  },
];
