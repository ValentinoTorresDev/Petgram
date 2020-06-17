import { GET_FAVS } from '../containers/GetFavorities'
import { useQuery } from '@apollo/react-hooks'

export const useGetFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })
  return { data, loading, error }
}
