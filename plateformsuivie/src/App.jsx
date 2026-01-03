
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Login from './pagesLogin/Login'
import React from 'react'

function App() {
 
  return (
    <>
    <Login />
    <Outlet />
    </>
  )
}

export default App
