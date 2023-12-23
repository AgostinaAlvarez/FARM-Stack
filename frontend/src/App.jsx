import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import LoginScreen from './screens/LoginScreen'
import AppRoutes from './routes/AppRoutes'

function App() {
  useEffect(() => {
    //getDatos()
  }, [])
  
  //Primero tengo que obtener lo que hay en la cookie para determinar si estoy logeado o no, si no estoy logeado entonces no hago nada
  


  async function getDatos (){
    const response = await axios.get('http://localhost:8000/api/viniedos')
    console.log(response.data.items)
  }



  async function getDataLogin (){
    try{
      const response = await axios.get()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
     <AppRoutes/>
    </>
  )
}

export default App
