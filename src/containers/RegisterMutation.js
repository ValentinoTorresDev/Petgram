import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

const REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`
export const useRegisterMutation = (email, password) => {
  const [register] = useMutation(REGISTER, {
    variables: { input: { email, password } }
  })
  return register
}
