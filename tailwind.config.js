/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1D20', // deep gray/black for sidebar
        metallicBlue: '#2563EB', // keeping existing
        bento: {
          bg: '#F3F4F6', // light gray background for main app
          accent: '#ccff00', // vibrant neon yellow/green like the image
          card: '#ffffff', // white panels
          dark: '#111827', // dark panels
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
