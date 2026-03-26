import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-dark": "var(--accent-dark)",
        cobalt: "var(--accent)",
        "cobalt-dark": "var(--accent-dark)",
        "cobalt-light": "var(--accent-hover)",
        silver: "var(--text-secondary)",
        "silver-light": "#E8ECF4",
        graphite: "var(--bg-primary)",
        "graphite-mid": "var(--bg-secondary)",
        "graphite-light": "var(--border-color)",
        "off-white": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        "bg-card": "var(--bg-card)",
        "bg-deeper": "var(--bg-deeper)",
        "border-accent": "var(--border-accent)",
        "border-accent-hover": "var(--border-accent-hover)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        button: "var(--shadow-button)",
        "button-hover": "var(--shadow-button-hover)",
        glow: "var(--shadow-glow)",
        image: "var(--shadow-image)",
      },
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        dmsans: ["var(--font-dmsans)", "sans-serif"],
        bebas: ["var(--font-bebas)", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
