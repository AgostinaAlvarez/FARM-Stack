import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar'
import ViniedosScreen from '../screens/ViniedosScreen'

const PrivateRoutes = () => {
  return (
    <>
      <div className='screen'>
        <Aside/>
        <div className='main'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/vinedos' element={<ViniedosScreen/>}/>
            <Route path='/login' element={<Navigate to='/'/>}/>
          </Routes>
          {
            /*
            
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
            */
          }
          
        </div>
      </div>
    </>
  )
}

export default PrivateRoutes