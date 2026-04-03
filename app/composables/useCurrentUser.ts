import type { User } from '~/types'

export const useCurrentUser = () => {
  const { data } = useAuth()

  const currentUser = computed(() => {
    return data.value ? (data.value as User) : null
  })

  return {
    currentUser
  }
}
