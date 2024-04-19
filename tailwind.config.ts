import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'technology-desktop':
          "url('/technology/background-technology-desktop.jpg')",
        'technology-mobile':
          "url('/technology/background-technology-mobile.jpg')",
        'crew-desktop': "url('/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
        'destination-desktop':
          "url('/destination/background-destination-desktop.jpg')",
        'destination-mobile':
          "url('/destination/background-destination-mobile.jpg')",
        'home-desktop': "url('/home/background-home-desktop.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-mobile': "url('/home/background-home-mobile.jpg')",
      },
    },
    // screens: {
    //   md: '900px',
    // },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
