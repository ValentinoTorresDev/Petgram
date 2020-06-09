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
                (register) => {
                  const onSubmitTest = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  return (
                    <UseForm onSubmit={onSubmitTest} title='Registrarse' />
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
