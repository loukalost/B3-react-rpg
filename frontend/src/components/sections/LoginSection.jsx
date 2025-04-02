import { strapiLoginLocal } from '../../api/strapi'
import LoginForm from '../forms/LoginForm'

function LoginSection () {
  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      const loginData = await strapiLoginLocal(credentials)
      console.log(loginData)
    }
  }

  return (
    <section className='flex flex-col items-center justify-center h-screen gap-10'>
      <h1 className='text-7xl text-center animate-bounce'>Login Section</h1>
      <LoginForm onSubmit={handleSubmit} />
    </section>
  )
}

export default LoginSection
