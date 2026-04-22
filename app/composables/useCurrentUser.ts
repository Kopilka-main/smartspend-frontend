import type { User } from '~/types'

export const useCurrentUser = () => {
  const { data } = useAuth()

  const currentUser = computed(() => {
    return data.value ? (data.value as User) : null
  })

  const displayName = computed(() => {
    return currentUser.value ? currentUser.value.displayName : ''
  })

  return {
    currentUser,
    displayName
  }
}
