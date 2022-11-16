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
        { name: 'propeller', content: '1e6f51485f194e44ddc28567e2a28e95' },
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
