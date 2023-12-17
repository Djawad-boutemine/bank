/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "dark-blue": "#2d314d",
      "green": "#31d35c",
      "light-blue": "#2bb7da",
      "dark-grey": "#9698a6",
      "light-grey": "#f3f4f6",
      "semi-white": "#fafafa",
      "white": "#ffffff",
    },
    fontSize: {
      "fs-300": "clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem)",
      "fs-400": "clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem)",
      "fs-500": "clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem)",
      "fs-600": "clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem)",
      "fs-700": "clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem)",
      "fs-800": " clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem)",
      "fs-900": "clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem)",
    },
    extend: {},
  },
  plugins: [],
}
