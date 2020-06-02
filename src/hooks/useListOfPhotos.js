import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const query = gql`
  query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useListOfPhotos = ({ categoryId }) => {
  const { loading, error, data } = useQuery(query, { variables: { categoryId } })
  return { loading, error, data }
}
