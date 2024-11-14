import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'soil': {
          light: '#8B7355',
          DEFAULT: '#654321',
          dark: '#3B2F2F',
        },
        'crop': {
          light: '#90EE90',
          DEFAULT: '#228B22',
          dark: '#006400',
        }
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
    },
  },
  plugins: [
    // Consider adding useful plugins like:
    // require('@tailwindcss/forms'), // For better form styling
    // require('@tailwindcss/typography'), // For rich text content
  ],
} satisfies Config;
