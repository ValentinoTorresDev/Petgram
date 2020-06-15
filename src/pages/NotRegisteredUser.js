import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(activateAuth)
              }
              const errorMessage = error && 'El usuario ya existe o hay algún problema'

              return (
                <UseForm
                  disabled={loading}
                  error={errorMessage}
                  onSubmit={onSubmit}
                  title='Registrarse'
                />
              )
            }}
          </RegisterMutation>
          <LoginMutation>
            {(login, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                login({ variables }).then(activateAuth)
              }
              const errorMessage = error && 'El usuario ya existe o hay algún problema'
              return (
                <UseForm disabled={loading} onSubmit={onSubmit} error={errorMessage} title='Iniciar Sesión' />
              )
            }}
          </LoginMutation>
        </>
      )
    }}
  </Context.Consumer>
)
