/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar'
import ViniedosScreen from '../screens/ViniedosScreen'
import ViniedoDetail from '../screens/vinedos/ViniedoDetail'
import ParcelaDetail from '../screens/vinedos/ParcelaDetail'
import CultivosScreen from '../screens/CultivosScreen'

const PrivateRoutes = () => {
  return (
    <>
      <div className='screen'>
        <Aside/>
        <div className='main'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            {/*Viñedos routes */}
            <Route path='/vinedos' element={<ViniedosScreen/>}/>
            <Route path='/viniedos/:id' element={<ViniedoDetail/>}/>
            <Route path='/parcela/:id' element={<ParcelaDetail/>}/>
            {/*Cultivos routes*/}
            <Route path='/cultivos' element={<CultivosScreen/>}/>

            {/*Redireccion del login*/}
            <Route path='/login' element={<Navigate to='/'/>}/>
          </Routes>
          
        </div>
      </div>
    </>
  )
}

export default PrivateRoutes