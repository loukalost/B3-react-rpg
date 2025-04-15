import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import AuthRouter from './navigation/AuthRouter'
import GlobalLayout from './components/layouts/GlobalLayout'
import { ToastContainer } from 'react-toastify'
import { useAuth } from './contexts/AuthContext'

function App () {
  const { state } = useAuth()

  return (
    <BrowserRouter>
      <GlobalLayout>
        {state?.isLoggedIn
          ? <MainRouter />
          : <AuthRouter />}
        <ToastContainer />
      </GlobalLayout>
    </BrowserRouter>
  )
}

export default App
