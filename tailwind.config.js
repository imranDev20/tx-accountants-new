let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(6,21,81)",
        },
        secondary: {
          DEFAULT: "rgb(133, 77, 255)",
          light: "rgba(133, 77, 255, 0.1)",
          dark: "#5933AA",
        },
        fontColor: {
          heading: "#374151",
          DEFAULT: "#6B7280",
        },
        background: {
          DEFAULT: "#F3F4F6",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("third", "&:nth-child(3)");
      addVariant("first", "&:nth-child(1)");
      addVariant("second", "&:nth-child(2)");
    }),
  ],
};
