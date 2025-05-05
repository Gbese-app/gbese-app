import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Make sure this includes your component files
  ],
  plugins: [],
}

export default config
