import { useFetchSettings } from '~/features/settings/queries/useFetchSettings'

export const useSettings = () => {
  const { data, isLoading } = useFetchSettings()

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
          privacySets: '',
          privacyArticles: '',
          privacyProfile: ''
        }
  })

  return {
    settings,
    isLoading
  }
}
