/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'inset 1px -5px 40px 20px rgb(220, 20, 0)',
      },
    },
  },
  plugins: [],
};
