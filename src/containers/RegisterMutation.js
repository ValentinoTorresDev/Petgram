import React from 'react'
// import { Mutation } from 'react-apollo'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`
export const useRegister = (email, password) => {
  const [register] = useMutation(REGISTER, { variables: { input: { email, password } } })

  return register
}

// export const RegisterMutation = ({ children }) => {
//   return (
//     <Mutation mutation={Register}>
//       {children}
//     </Mutation>
//   )
// }
