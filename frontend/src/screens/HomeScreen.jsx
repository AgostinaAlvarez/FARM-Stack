
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';

const HomeScreen = () => {
  
  const [ error,setError ] = useState(false)
  const [ loading,setLoading ] = useState(true)

  useEffect(() => {
    console.log('hay que pedir los viniedos')
    getViniedos()
  }, [])
  

  async function getViniedos (){
    try{
      const response = await axios.get('http://localhost:8000/api/get-viniedos',{
        withCredentials: true // Habilitar el intercambio de cookies
      })
      console.log(response.data.viniedos)
      setError(false)
    }catch(err){
      console.log(err)
      setError(true)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
    {
      loading === true ?
      <LoadingScreen/>
      :
      <>
        {
          error === true ?
          <ErrorScreen/>
          :
          <>
            <h1>Home screen</h1>
            <h2>Lista de viniedos</h2>
          </>
        }
      </>
    }
   
    </>
  )
}

export default HomeScreen