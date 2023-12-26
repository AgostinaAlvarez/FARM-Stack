/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import NuevoCultivos from './cultivos/NuevoCultivos'

const CultivosScreen = () => {
  
  const [ overlayCultivo,setOverlayCultivo ] = useState(false)

  
  return (
    <>
    <div className='scroll-container'>
      <h1>Cultivos</h1>
      <span>Tipos de uva cultivadas representadas en porcentajes</span>
      <div>

      </div>
      <button className='btntest'>Registrar nueva uva</button>
      <button className='btntest' >Nuevo tipo de uva</button>
      <button className='btntest' onClick={()=>{setOverlayCultivo(true)}}>Nuevo cultivo</button>
    </div>
    {
      overlayCultivo === true ?
      <NuevoCultivos setOverlay={setOverlayCultivo}/>
      :
      <></>
    }
    </>
  )
}

export default CultivosScreen