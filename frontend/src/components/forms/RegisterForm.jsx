import { useState } from 'react'
import Input from './inputs/Input'
import { Link } from 'react-router'
import Button from '../Button'

function RegisterForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(credentials)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 w-[50vw]'>
      <Input
        label='Username'
        type='text'
        value={credentials.username}
        onChangeText={(text) => setCredentials({ ...credentials, username: text })}
      />
      <Input
        label='Email'
        type='email'
        value={credentials.email}
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
      />
      <Input
        label='Password'
        type='password'
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
      />
      <Button type='submit'>
        Inscription
      </Button>
      <Link to='/login'>J'ai déjà un compte</Link>
    </form>
  )
}

export default RegisterForm
