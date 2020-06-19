import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Perfil de Usuario' subtitle='Aquí Puedes ver todos los detalles de tu perfil'>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </Layout>
  )
}
