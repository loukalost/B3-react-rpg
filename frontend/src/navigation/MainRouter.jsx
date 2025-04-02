import { Route, Routes } from 'react-router'
import Home from '../pages/HomePage'

function MainRouter () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default MainRouter
