// Importamos los hooks y el tah gql
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// Creamos nuestra Query
const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const useRegister = () => {
  const [mutation, { data, loading, error }] = useMutation(REGISTER)

  const registerUser = ({ email, password }) => {
    mutation({ variables: { input: { email, password } } })
  }

  return { registerUser, data, loading, error }
}
