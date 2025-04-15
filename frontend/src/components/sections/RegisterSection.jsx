import { strapiRegisterLocal } from '../../api/strapi'
import RegisterForm from '../forms/RegisterForm'

function RegisterSection () {
  const handleSubmit = async (credentials) => {
    if (credentials?.username && credentials?.email && credentials?.password) {
      await strapiRegisterLocal(credentials)
    }
  }

  return (
    <section className='flex flex-col items-center justify-center h-screen gap-10'>
      <h1 className='text-7xl text-center animate-bounce'>Register Section</h1>
      <RegisterForm onSubmit={handleSubmit} />
    </section>
  )
}

export default RegisterSection
