// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es', class: 'scroll-smooth' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Encuentro Departamental Juvenil 2026 | Oruro, Bolivia',
      meta: [
        { name: 'description', content: 'El mayor espacio de concertación juvenil de Oruro. 21 de Septiembre 2026, 14:00 PM. Convocado por la Brigada Parlamentaria de Oruro, Dip. Daniel Alcalá.' },
        { property: 'og:title', content: 'Encuentro Departamental Juvenil 2026 | Oruro' },
        { property: 'og:description', content: 'Liderazgo que transforma, juventud que construye. Evento presencial con Certificado Oficial de Participación.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#800020' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Logo2.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
