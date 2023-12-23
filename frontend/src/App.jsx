import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import LoginScreen from './screens/LoginScreen'
import AppRoutes from './routes/AppRoutes'
import { AppContext } from './context/AppContext'

function App() {

  const { login,setLogin } = useContext(AppContext);

  useEffect(() => {
    getDatos()
  }, [])
  
  //Primero tengo que obtener lo que hay en la cookie para determinar si estoy logeado o no, si no estoy logeado entonces no hago nada
  
  async function getDatos (){
    try{
      const response = await axios.get('http://localhost:8000/api/check-auth',{
        withCredentials: true // Habilitar el intercambio de cookies
      })
      response.data.ok === true ? setLogin(true) : setLogin(false)
    }catch(err){
      setLogin(false)
    }
  }


  return (
    <>
     <AppRoutes/>
    </>
  )
}

export default App
