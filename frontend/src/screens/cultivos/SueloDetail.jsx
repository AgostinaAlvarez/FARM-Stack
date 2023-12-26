/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const SueloDetail = ({obj,setOverlay}) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <button onClick={()=>{setOverlay(false)}}>Cerrar</button>
        <h1>Suelo {obj.suelo_nombre}</h1>
        <span>Composicion: {obj.suelo_composicion}</span>
        <span>Descripcion: {obj.suelo_descripcion}</span>
        <span>Drenaje: {obj.suelo_drenaje}</span>
        <span>Capacidad de aireacion: {obj.suelo_capacidadAireacion}</span>
        <span>pH: {obj.suelo_pH}</span>
        <span>Retencion de agua: {obj.suelo_retencionAgua}</span>
        <span>Retencion de nutrientes: {obj.suelo_retencionNutrientes}</span>
      
      </div>
    </div>
  )
}

export default SueloDetail