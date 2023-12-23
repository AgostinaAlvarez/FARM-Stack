import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const AppRoutes = () => {
  const { login,setLogin } = useContext(AppContext)
  
  return (
    <>
      {
        login === true ?
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/login' element={<Navigate to='/'/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/' element={<Navigate to='/login'/>} />
        </Routes>
      }
    </>
  )
}

export default AppRoutes