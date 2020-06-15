import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLogin = () => {
  const [mutation, { data, loading, error }] = useMutation(LOGIN)

  const loginUser = ({ email, password }) => {
    mutation({ variables: { input: { email, password } } })
  }

  return ({ loginUser, data, loading, error })
}
