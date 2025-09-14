/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary_FFFFFF: "var(--Primary_FFFFFF)",
        Primary1_363738: "var(--Primary1_363738)",
        Secondary_F5F5F5: "var(--Secondary_F5F5F5)",
        Secondary1_FEFAF1: "var(--Secondary1_FEFAF1)",
        BG_FFFFFF: "var(--BG_FFFFFF)",
        text_FAFAFA: "var(--text_FAFAFA)",
        Text1_7D8184: "var(--Text1_7D8184)",
        Text2_000000: "var(--Text2_000000)",
        button_000000: "var(--button_000000)",
        Secondary2_DB4444: "var(--Secondary2_DB4444)",
        Button1_00FF66: "var(--Button1_00FF66)",
        Button2_DB4444: "var(--Button2_DB4444)",
        HoverButton_E07575: "var(--HoverButton_E07575)",
        HoverButton2_A0BCE0: "var(--HoverButton2_A0BCE0)",
      },
    },
    fontFamily: {
      poppins: "var(--Poppins)",
      inter: "var(--Inter)",
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
