export interface Tool {
  name: string;
  icon: string;
}

/** Row 1 — Development stack (sinkron dengan next.js) */
export const webTools: Tool[] = [
  { name: "Next.js", icon: "/assets/icon/Tools/LogoNextJs.png" },
  { name: "React", icon: "/assets/icon/Tools/LogoReactJs.png" },
  { name: "HTML5", icon: "/assets/icon/Tools/LogoHTML5.png" },
  { name: "CSS3", icon: "/assets/icon/Tools/LogoCSS3.png" },
  { name: "JavaScript", icon: "/assets/icon/Tools/LogoJavaScript.png" },
  { name: "Tailwind CSS", icon: "/assets/icon/Tools/LogoTailwindCSS.png" },
  { name: "GitHub", icon: "/assets/icon/Tools/LogoGithub.png" },
  { name: "Vercel", icon: "/assets/icon/Tools/LogoVercel.png" },
  { name: "Supabase", icon: "/assets/icon/Tools/LogoSupabase.png" },
  { name: "VS Code", icon: "/assets/icon/Tools/LogoVSCode.png" },
];

/** Row 2 — Design & office tooling, arah berlawanan dengan row 1 */
export const creativeTools: Tool[] = [
  { name: "Figma", icon: "/assets/icon/Tools/LogoFigma.png" },
  { name: "Canva", icon: "/assets/icon/Tools/LogoCanva.png" },
  { name: "Adobe Express", icon: "/assets/icon/Tools/LogoAdobeExpress.png" },
  { name: "CapCut", icon: "/assets/icon/Tools/LogoCapcut.png" },
  { name: "Excel", icon: "/assets/icon/Tools/LogoExcel.png" },
  { name: "Word", icon: "/assets/icon/Tools/LogoWord.png" },
  { name: "PowerPoint", icon: "/assets/icon/Tools/LogoPPT.png" },
];
