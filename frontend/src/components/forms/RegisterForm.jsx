import { useState } from 'react'
import Input from './inputs/Input'

function RegisterForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    email: '',
    username: '',
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
      <button type='submit' className='bg-white rounded-xl px-10 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer'>
        Sign in
      </button>
    </form>
  )
}

export default RegisterForm
