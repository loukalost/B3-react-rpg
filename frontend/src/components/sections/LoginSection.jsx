import { useAuth } from '../../contexts/AuthContext'
import LoginForm from '../forms/LoginForm'

function LoginSection () {
  const { login, state } = useAuth()

  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      await login(credentials)
    }
  }

  return (
    <section className='flex flex-col items-center justify-center h-screen gap-10'>
      <h1 className='text-7xl text-center'>Login Section</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <LoginForm onSubmit={handleSubmit} />
    </section>
  )
}

export default LoginSection
