// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@prisma/nuxt',
    '@nuxtjs/supabase'
  ],
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
  supabase: {
    redirect: false
  },
  css: ['~/assets/css/main.css'],
  plugins:  [{ src: '~/plugins/gsap.client.ts', mode: 'client' }]
})