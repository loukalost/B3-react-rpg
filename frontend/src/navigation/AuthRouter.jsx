import { Navigate, Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

function AuthRouter () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route index path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}

export default AuthRouter
