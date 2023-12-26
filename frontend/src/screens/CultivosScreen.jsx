/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import NuevoCultivos from './cultivos/NuevoCultivos'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const CultivosScreen = () => {
  const { axiosConfig,cultivos,setCultivos } = useContext(AppContext)
  const navigate = useNavigate()
  
  const [ loading,setLoading ] = useState(true)
  const [ err,setErr ] = useState(false)
  const [ overlayCultivo,setOverlayCultivo ] = useState(false)

  useEffect(() => {
    getCultivos()
  }, [])
  
  async function getCultivos (){
    try{
      const response = await axios.get("http://localhost:8000/api/plantaciones",axiosConfig)
      setCultivos(response.data.plantaciones)
      console.log(response.data.plantaciones)
      setErr(false)
    }catch(err){
      setErr(true)
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <>
    {
      loading === true ?
      <div>Loading</div>
      :
      <>
        {
          err === true ?
          <div>Error</div>
          :
          <>
            <div className='scroll-container'>
              <h1>Cultivos</h1>
              <span>Tipos de uva cultivadas representadas en porcentajes</span>
              <span>Proximas cosechas</span>
              <button className='btntest' >Nuevo tipo de uva</button>
              <button className='btntest' onClick={()=>{setOverlayCultivo(true)}}>Nuevo cultivo</button>
              {
                cultivos.map((cultivo,index)=>
                  <div style={{display:"flex",flexDirection:"column"}} key={index}>
                    <h3>Cultivo {cultivo.nombre_parcela} - {cultivo.nombre_uva}</h3>
                    <span>{cultivo.nombre_viniedo}</span> 
                    <span>{cultivo.localidad} {cultivo.provincia} {cultivo.pais}</span>
                    <span>Densidad de plantacion: </span>
                    <button className='btntest' onClick={()=>{navigate(`/cultivos/${cultivo.id}`)}}>Ver cultivo</button>
                  </div>
                )
              }
            </div>
            {
              overlayCultivo === true ?
              <NuevoCultivos setOverlay={setOverlayCultivo}/>
              :
              <></>
            }
          </>
        }
      </>
    }
    </>
  )
}

export default CultivosScreen