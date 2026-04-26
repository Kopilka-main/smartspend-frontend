import { useFetchAuthorProfile } from '~/features/authors/queries/useFetchAuthorProfile'

export const useAuthorProfile = (id: string) => {
  const { data, isLoading } = useFetchAuthorProfile(id)

  const profile = computed(() => {
    return data.value ? data.value.data : null
  })

  const title = computed(() => {
    return profile.value ? profile.value.displayName : ''
  })

  return {
    profile,
    title,
    isLoading
  }
}
