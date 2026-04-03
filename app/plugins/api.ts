export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiUrl,

    onRequest({ options }) {
      const { token } = useAuth()

      if (token) {
        options.headers.set('Authorization', token.value as string)
      }
    }
  })

  return {
    provide: {
      api
    }
  }
})
