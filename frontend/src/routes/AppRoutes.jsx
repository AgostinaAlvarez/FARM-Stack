import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
  const { login,setLogin } = useContext(AppContext)
  
  return (
    <>
      {
        login === true ?
        <PrivateRoutes/>
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