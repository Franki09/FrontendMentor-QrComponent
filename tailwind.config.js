/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores del style-guide.md
        "slate-300": "hsl(212, 45%, 89%)",
        "slate-500": "hsl(216, 15%, 48%)",
        "slate-900": "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
