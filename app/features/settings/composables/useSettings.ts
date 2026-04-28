import { useFetchSettings } from '~/features/settings/queries/useFetchSettings'

export const useSettings = () => {
  const { data, refresh, isLoading } = useFetchSettings()

  const settings = computed(() => {
    return data.value
      ? data.value.data
      : {
          theme: 'light',
          timezone: '',
          location: '',
          notifyNewSets: false,
          notifyAuthorArticles: false,
          notifySubscriptions: false,
          notifySetChanges: false,
          notifyReminders: false,
          privacySets: 'all',
          privacyArticles: 'all',
          privacyProfile: 'all'
        }
  })

  return {
    settings,
    refresh,
    isLoading
  }
}
