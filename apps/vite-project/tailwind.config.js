/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config/sharedConfig";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
  plugins: [],
};
