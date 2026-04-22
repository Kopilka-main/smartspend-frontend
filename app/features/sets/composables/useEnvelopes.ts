import { useFetchEnvelopes } from '~/features/sets/queries/useFetchEnvelopes'

export const useEnvelopes = () => {
  const { data } = useFetchEnvelopes()

  const envelopes = computed(() => {
    return data.value ? data.value.data : []
  })

  return { envelopes }
}
