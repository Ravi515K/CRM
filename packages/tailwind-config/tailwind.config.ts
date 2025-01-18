import type { Config } from "tailwindcss";
const config: Omit<Config, "content"> = {
  theme: {
    fontSize: {
      xs: ["0.75rem", { letterSpacing: "0.01rem" }],
      sm: ["0.83rem", { letterSpacing: "0.025rem" }],
      base: ["1rem", { letterSpacing: "0.02rem" }],
      md: "1.25rem",
      lg: "1.44rem",
      xl: "1.72rem",
      "2xl": "2.07rem",
      "3xl": "2.48rem",
    },
    extend: {
      colors: {
        offWhite: "#eff3f6",
        extraLightGray: "#dee2e6",
        lightGray: "#ced4da",
        gray: "#adb5bd",
        darkGray: "#6c757d",
        body: "#495057",
        subHeading: "#343a40",
        heading: "#212529",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        darkBg: "#343a40",
        darkBgShade: "#495057",
      },
      padding: {
        sm: "8px",
        base: "16px",
        md: "24px",
        lg: "28px",
        xl: "32px",
        container: "calc(8px + 1.5625vw)",
      },
    },
  },
  plugins: [],
};
export default config;
