/** @type {import('tailwindcss').Config} */
import { theme } from "./src/theme";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.main,
        error: theme.palette.error.main,
        info: theme.palette.info.main,
        success: theme.palette.success.main,
        warning: theme.palette.warning.main,
      },
      fontFamily: {
        "noto-sans": ["Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
