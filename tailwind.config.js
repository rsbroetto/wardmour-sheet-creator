// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "brand-main": {
                // "50": "#edf8ef",
                // "100": "#dbf0df",
                // "200": "#b6e2be",
                // "300": "#92d39e",
                // "400": "#6dc57d",
                // "500": "#49b65d",
                // "600": "#3a924a",
                // "700": "#2c6d38",
                // "800": "#1d4925",
                // "900": "#0f2413"
                // "50": "#fffbe6",
                // "100": "#fff7cc",
                // "200": "#ffef99",
                // "300": "#ffe766",
                // "400": "#ffdf33",
                // "500": "#ffd700",
                // "600": "#ccac00",
                // "700": "#998100",
                // "800": "#665600",
                // "900": "#332b00"
                "50": "#eef7f4",
                "100": "#ddf0e8",
                "200": "#bae1d1",
                "300": "#98d1bb",
                "400": "#75c2a4",
                "500": "#53b38d",
                "600": "#428f71",
                "700": "#326b55",
                "800": "#214838",
                "900": "#11241c"
            }
        }
    },
  },
  plugins: [],
});

