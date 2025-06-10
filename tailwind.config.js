// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // update this as per your project
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        nav: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1E88E5", // Modern deep blue
        primaryDark: "#1565C0", // Hover variant
        accent: "#FF6B35", // Burnt orange for highlights
        secondary: "#F5F5F5", // Light gray background
        darkGray: "#666666", // For text, muted tones
        black: "#000000", // Explicitly define black
        white: "#FFFFFF", // Explicitly define white
      },
        keyframes: {
        borderPulse: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 6px #7f5af0)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 12px #c084fc)',
          },
        },
      },
    },
  },
  plugins: [],
};
