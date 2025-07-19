// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Krisna Sedana', 
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: 'images/icon.png' },
      ]
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@prisma/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image'
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
  plugins:  [{ src: '~/plugins/gsap.client.ts', mode: 'client' }],
  image:{
    provider: 'ipx',
    domains: ['rfcfvfmaambenbhulpqd.supabase.co'],
  },
})