// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'KotKit',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Nuxt3 TikTok Downloader' },
        { name: 'propeller', content: '71cf8ce19fcabe2618d829817bb5b22a' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  tailwindcss: {
    exposeConfig: true,
  },
  css: ['@/assets/css/main.css'],
  image: {
    domains: ['p16-sign.tiktokcdn-us.com', 'p19-sign.tiktokcdn-us.com'],
  },
  typescript: {
    shim: false,
  },
})
