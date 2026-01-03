
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'

function App() {
 
  return (
    <>
    <Login />
    <Outlet />
    </>
  )
}

export default App
