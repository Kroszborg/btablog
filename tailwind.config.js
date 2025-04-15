/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0f1729", // Dark navy blue
        light: "#fff",
        accent: "#e53e3e", // Basketball orange/red
        accentDark: "#c53030",
        gray: "#747474",
        nbaBlue: "#17408B", // NBA blue
        nbaRed: "#C9082A", // NBA red
        darkBlue: "#1a202c",
        teamRed: "#CE1141", // Team red
        teamBlue: "#006BB6", // Team blue
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
      },
      animation: {
        roll: "roll 24s linear infinite",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px",
        // @media (min-width: 480px){...}
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
