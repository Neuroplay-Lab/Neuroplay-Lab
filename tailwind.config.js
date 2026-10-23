/** Brand tokens. Hex values are read from the supplied artwork; replace with the
 *  official values if the designer has them. */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EEDF", // page background (from the business-card cream)
        paper: "#FBF8F0", // raised surfaces
        sand: "#EDE4D0", // bands and dividers
        ink: "#1A1613", // text, outlines, hard shadows
        "ink-soft": "#4A423B", // secondary text
        green: { DEFAULT: "#00FFA5", soft: "#66FFB3", deep: "#006B45" }, // deep = green for text on cream
        pink: "#FF92E3",
        purple: { DEFAULT: "#9B5CF6", deep: "#5B2BC4" },
        blue: "#0AAEFF",
        sky: "#62DDFF",
        lavender: "#D6A8FF",
        red: "#FF2D3A",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        // Hard, blur-free offsets echo the wordmark's drop shadow
        "hard-sm": "2px 2px 0 0 #1A1613",
        hard: "4px 4px 0 0 #1A1613",
        "hard-lg": "7px 7px 0 0 #1A1613",
      },
    },
  },
  plugins: [],
};
