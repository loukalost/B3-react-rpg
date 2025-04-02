import { BrowserRouter } from 'react-router'
import MainRouter from './navigation/MainRouter'
import { useState } from 'react'
import AuthRouter from './navigation/AuthRouter'
import GlobalLayout from './components/layouts/GlobalLayout'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <GlobalLayout>
      <BrowserRouter>
        {isAuthenticated
          ? <MainRouter />
          : <AuthRouter />}
      </BrowserRouter>
    </GlobalLayout>
  )
}

export default App
