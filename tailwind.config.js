module.exports = {
  theme: {
    fontFamily: {
      main: ['"Roboto Mono"', "monospace"]
    },
    extend: {}
  },
  variants: {
    translate: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
