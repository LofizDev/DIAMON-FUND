/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f0f0f0",
        },
        "surface-on-surface": "#f7f7f7",
        "text-sub-heading": "#4b4d52",
        "text-heading": "#21242c",
        "text-body-1": "#787878",
        steelblue: "#798ecc",
        "surface-action-1": "#d7a277",
        "text-action-1": "#fff",
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(253, 253, 253, 0.25)",
        },
        "text-body-2": "#a0a0a0",
        "brand-primary": "#172243",
        dimgray: "#626262",
        "surface-secondary": "#fff7f1",
      },
      spacing: {},
      fontFamily: {
        "caption-regular": "Merriweather",
        "h4-regular": "Lora",
        inherit: "inherit",
      },
      borderRadius: {
        "17xl": "36px",
        "21xl": "40px",
        "55xl-4": "74.4px",
        "29xl": "48px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      "13xl": "32px",
      "21xl": "40px",
      xl: "20px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
