import React, { useContext } from 'react'
import { Context } from '../Context'
import { UseForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'
import { Layout } from '../components/Layout'
export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <Layout title='Registro | Iniciar Sesión' subtitle='Aquí puedes registrarte o iniciar sesión'>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMessage =
            error && 'El usuario ya existe o hay algún problema'

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
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMessage =
            error && 'El usuario ya existe o hay algún problema'
          return (
            <UseForm
              disabled={loading}
              onSubmit={onSubmit}
              error={errorMessage}
              title='Iniciar Sesión'
            />
          )
        }}
      </LoginMutation>
    </Layout>
  )
}
