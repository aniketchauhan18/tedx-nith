import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dianne": {
          "50": "#e9fffd",
          "100": "#c9fffa",
          "200": "#99fff9",
          "300": "#54fff8",
          "400": "#07fdff",
          "500": "#00deef",
          "600": "#00b1c9",
          "700": "#008ca1",
          "800": "#087082",
          "900": "#0c5c6d",
          "950": "#004a5c",
        },
        thunderbird: {
          "50": "#fff1f1",
          "100": "#ffe1e0",
          "200": "#ffc9c7",
          "300": "#ffa3a0",
          "400": "#ff6f6a",
          "500": "#f8413b",
          "600": "#d91e18",
          "700": "#c21813",
          "800": "#a01814",
          "900": "#841b18",
          "950": "#480907",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "menu-animation": {
          "0%": {
            translateY: "-100%",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
            translateX: "10%",
          },
        },
      },
      animation: {
        "menu-animation": "menu-animation 1s ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
