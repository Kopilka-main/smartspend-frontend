import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  },

  compatibilityDate: '2025-07-15',

  app: {
    head: {
      titleTemplate: 'SmartSpend - %s'
    }
  },

  devtools: {
    enabled: true
  },

  modules: [
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@sidebase/nuxt-auth'
  ],

  auth: {
    isEnabled: true,
    globalAppMiddleware: true,
    disableServerSideAuth: false,
    originEnvKey: 'NUXT_AUTH_ORIGIN',
    baseURL: 'https://smartspend.i20h.ru/api/v1',
    sessionRefresh: {
      enablePeriodically: 5 * 60 * 1000
    },
    provider: {
      type: 'local',
      token: {
        signInResponseTokenPointer: '/data/tokens/accessToken',
        maxAgeInSeconds: 60 * 60 * 1000
      },
      session: {
        dataResponsePointer: '/data'
      },
      endpoints: {
        signIn: {
          path: '/auth/login',
          method: 'post'
        },
        signUp: {
          path: '/auth/register',
          method: 'post'
        },
        signOut: {
          path: '/auth/logout',
          method: 'post'
        },
        getSession: {
          path: '/auth/me',
          method: 'get'
        }
      },
      pages: {
        login: '/'
      }
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons'
      }
    ]
  },

  fonts: {
    families: [
      {
        name: 'Geist',
        provider: 'google',
        weights: ['300', '400', '500', '600', '700'],
        display: 'swap'
      },
      {
        name: 'Geist Mono',
        provider: 'google',
        weights: ['400', '500'],
        display: 'swap'
      }
    ]
  },

  css: [
    'vue-final-modal/style.css',

    './app/assets/css/main.css',
    './app/assets/css/custom.css'
  ],

  vite: {
    plugins: [tailwindcss()]
  }
})
