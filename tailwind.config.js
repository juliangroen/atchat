module.exports = {
  theme: {
    fontFamily: {
      main: ['"Roboto Mono"', "monospace"]
    },
    extend: {
      transitionProperty: {
        'width': 'width'
      }
    }
  },
  variants: {
    translate: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
