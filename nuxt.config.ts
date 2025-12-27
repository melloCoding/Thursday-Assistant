// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    disableTransition: true,
    classSuffix: ''
  },

   app: {
    head: {
      htmlAttrs: {
        class: 'dark'
      }
    }
  },

  devtools: {
    enabled: true
  },

  
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
