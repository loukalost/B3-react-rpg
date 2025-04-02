import { useState } from 'react'
import Input from './inputs/Input'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted', credentials)
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
      <button type='submit' className='bg-white rounded-xl px-10 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer'>
        Sign in
      </button>
    </form>
  )
}

export default LoginForm
