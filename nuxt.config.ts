// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        }
        // You would need to add your Nyght font here or in your CSS
      ]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('Tres')
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
 tres: {
    devtools: true,
    glsl: true
  },
  modules: ['@nuxt/icon', 'nuxt-typedjs', '@tresjs/nuxt'],
})