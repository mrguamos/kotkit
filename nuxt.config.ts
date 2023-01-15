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
        { name: 'monetag', content: '89466f6646413995733150cff23b2795' },
      ],
      script: [
        {
          src: '/js/banner.js',
        },
        {
          'data-cfasync': false,
          'src': '/js/banner-adblock.js',
        },
        {
          src: '/js/banner-adblock-ext.js',
        },
      ],
    },
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
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
