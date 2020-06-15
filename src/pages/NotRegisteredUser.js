import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmitTest = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  const errorMessage = error && 'El usuario ya existe o hay algún problema'

                  return (
                    <UseForm disabled={loading} error={errorMessage} onSubmit={onSubmitTest} title='Registrarse' />
                  )
                }
              }
            </RegisterMutation>
            <UseForm onSubmit={activateAuth} title='Iniciar Sesión' />
          </>
        )
      }
    }
  </Context.Consumer>
)
