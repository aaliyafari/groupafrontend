import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({
  
//   build: {
//     transpile:["vuetify"],
//     postcss: {
//       postcssOptions: {
//         plugins: {
//           tailwindcss: {},
//           autoprefixer: {},
//         },
//       },
//     },
//   },
//   vite:{
//   define:{
//   "process.env.DEBUG":false
//   }
//   },
//   css: 
//     [
//       "~/assets/css/tailwind.css",
//       "vuetify/lib/styles/main.sass"
//   ],
  
// });

export default defineNuxtConfig({
  css:[
    "vuetify/lib/styles/main.sass",
    "~/assets/css/tailwind.css",
  ],
  build:{
    transpile:["vuetify"],
    postcss: {
            postcssOptions: {
              plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
            },
          },
  },
  vite:{
    define:{
      "process.env.DEBUG":false
    }
  }
})
