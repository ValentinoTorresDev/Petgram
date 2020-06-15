import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { useRegister } from '../hooks/useRegister'
import { useLogin } from '../hooks/useLogin'

export const NotRegisteredUser = () => {
  const { loginUser, data: dataLog, error: errorLog, loading: loadingLog } = useLogin()
  const { registerUser, data: dataReg, error: errorReg, loading: loadingReg } = useRegister()

  const errorMessageReg = errorReg && 'El usuario ya existe o hay algún problema'
  const errorMessageLog = errorLog && 'La contraseña es incorrecta o el usuario no existe'

  if (dataReg || dataLog) {
    console.log(dataReg)
    console.log(dataLog)
    return (
      <Context.Consumer>
        {({ activateAuth }) => activateAuth()}
      </Context.Consumer>
    )
  }
  return (
    <>
      <UseForm error={errorMessageReg} disabled={loadingReg} onSubmit={registerUser} title='Registrarse' />
      <UseForm error={errorMessageLog} disabled={loadingLog} onSubmit={loginUser} title='Iniciar Sesión' />
    </>
  )
}
