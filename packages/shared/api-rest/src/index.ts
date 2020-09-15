import axios from 'axios'
import useSWR from 'swr'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}

export default api
