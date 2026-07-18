import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05030A",
          900: "#0A0612",
          800: "#0F0A19",
          700: "#161028"
        },
        pulse: {
          50: "#F5EEFF",
          200: "#D6B8FF",
          400: "#A855F7",
          500: "#9333EA",
          600: "#7C22D6",
          700: "#5B18A6"
        }
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(147,51,234,0.55)",
        "glow-sm": "0 0 24px -4px rgba(147,51,234,0.55)",
        card: "0 8px 32px rgba(0,0,0,0.45)"
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
export default config;