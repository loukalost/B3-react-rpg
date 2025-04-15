import { useState } from 'react'
import Input from './inputs/Input'
import { Link } from 'react-router'
import Button from '../Button'

function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(credentials)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 w-[50vw]'>
      <Input
        label='Email'
        type='email'
        value={credentials.identifier}
        onChangeText={(text) => setCredentials({ ...credentials, identifier: text })}
      />
      <Input
        label='Password'
        type='password'
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
      />
      <Button type='submit'>
        Connexion
      </Button>
      <Link to='/register'>Inscription</Link>
    </form>
  )
}

export default LoginForm
