import { useFetchMyCompanies } from '~/features/companies/queries/useFetchMyCompanies'

export const useMyCompanies = () => {
  const { data } = useFetchMyCompanies()

  const myCompanies = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    myCompanies
  }
}
