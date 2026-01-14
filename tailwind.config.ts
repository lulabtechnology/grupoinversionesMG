import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px",
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        cardForeground: "hsl(var(--card-foreground))",

        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",

        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",

        muted: "hsl(var(--muted))",
        mutedForeground: "hsl(var(--muted-foreground))",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
