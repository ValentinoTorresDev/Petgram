import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const query = gql`
    query getSinglePhoto($id:ID!){
        photo(id : $id){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`
export const usePhotoCard = ({ id }) => {
  const { loading, error, data } = useQuery(query, { variables: { id } })
  return { loading, error, data }
}
