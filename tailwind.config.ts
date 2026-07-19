import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-hairline": "var(--border-hairline)",
        "border-subtle": "var(--border-subtle)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      maxWidth: {
        container: "72rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -2%)" },
          "20%": { transform: "translate(-3%, 1%)" },
          "30%": { transform: "translate(2%, -3%)" },
          "40%": { transform: "translate(-2%, 4%)" },
          "50%": { transform: "translate(-4%, 1%)" },
          "60%": { transform: "translate(3%, 0%)" },
          "70%": { transform: "translate(0%, 2%)" },
          "80%": { transform: "translate(1%, -1%)" },
          "90%": { transform: "translate(-1%, 3%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        /* PERBAIKAN: Dicepetin dari 42s jadi 15s */
        marquee: "marquee 15s linear infinite",
        /* PERBAIKAN: Dicepetin dari 48s jadi 18s */
        "marquee-reverse": "marquee-reverse 18s linear infinite",
        grain: "grain-shift 8s steps(10) infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      transitionTimingFunction: {
        "editorial-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
