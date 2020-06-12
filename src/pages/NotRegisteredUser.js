import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { useRegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  // const email = 'correo'
  const password = pas
  // const [register, loading, error] = useRegisterMutation(email, password)
  // const onSubmit = ({ email, password }) => {
  //   if (loading) return <h1>Cargando</h1>
  //   if (error) return <h1>Error</h1>
  //   // register()
  // }
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UseForm onSubmit={onSubmit} title='Registrarse' />
            <UseForm onSubmit={activateAuth} title='Iniciar Sesión' />
          </>
        )
      }}
    </Context.Consumer>
  )
}
