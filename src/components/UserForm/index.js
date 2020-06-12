import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UseForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
    console.log('hola')
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' type='email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
