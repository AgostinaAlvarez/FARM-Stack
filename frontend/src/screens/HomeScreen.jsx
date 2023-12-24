
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';
import NavBar from '../components/NavBar';
import Aside from '../components/Aside';

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

  const test = [1,2,3,4,5,6,7,4,5,6,7,6,6,6,6,2]

  return (
    <>
    <div className='main-grid'>
      <section className='main-content'>
        <div className='main-grid-header'>
          <div style={{backgroundColor:"red"}}>1</div>
          <div style={{backgroundColor:"red"}}>2</div>
          <div style={{backgroundColor:"red"}}>3</div>
        </div>
        <h3>Tareas programadas</h3>
        <div className='main-tasks-container'>
          {
            test.map((item)=>
              <div style={{backgroundColor:"red"}}>Tarea: {item}</div>
            )
          }
        </div>
      </section>
      <section className='main-aside'>
        <div>dia</div>
        <div>Pronostico</div>
        <div>Calendario</div>
        <div>Notas calendario</div>
      </section>
    </div>
    {
      /*
      loading === true ?
      <LoadingScreen/>
      :
      <>
        {
          error === true ?
          <ErrorScreen/>
          :
          <>
            <div className='screen'>
              <Aside/>
              <div className='main'>
                <NavBar/>
                
              </div>
            </div>
          </>
        }
      </>
    */
    }
   
    </>
  )
}

export default HomeScreen