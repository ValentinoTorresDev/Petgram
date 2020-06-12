import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
// import { RegisterMutation } from '../containers/RegisterMutation'
import { useRegister } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  const onSubmitTest = ({ email, password }) => {
    console.log(email, password)
  }
  const { register, loading, error } = useRegister('correo@gmail.com', '123')
  if (loading) console.log('Cargando')
  if (error) console.log('error')
  const input = { email: 'correo@gmail.com', password: '123' }
  const variables = { input }
  register({ variables })

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              {/* <RegisterMutation>
              {
                (register) => {
                  const onSubmitTest = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  return ( */}
              <UseForm onSubmit={onSubmitTest} title='Registrarse' />
              {/* )
                }
              }
            </RegisterMutation> */}
              <UseForm onSubmit={activateAuth} title='Iniciar Sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
