import { useFetchCompanies } from '~/queries/useFetchCompanies'

export const useCompanies = (q: Ref<string>) => {
  const { data } = useFetchCompanies(q)

  const companies = computed(() => {
    return data.value ? data.value.data : []
  })

  return { companies }
}
