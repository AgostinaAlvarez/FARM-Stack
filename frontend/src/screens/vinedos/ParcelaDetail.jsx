/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import NuevaTarea from './NuevaTarea';

const ParcelaDetail = () => {
  const { axiosConfig } = useContext(AppContext);
  const params = useParams()
  
  const [ loading,setLoading ] = useState(true);
  const [ err,setErr ] = useState(false);
  
  const [ openModal,setOpenModal ] = useState(false)

  const [datos,setDatos] = useState(null)

  useEffect(() => {
    getDatos()
  }, [])
  

  async function getDatos (){
    try{
      const response = await axios.get(`http://localhost:8000/api/parcela/${params.id}`,axiosConfig)
      //console.log(response.data)
      setDatos({
        ...response.data.datos[0]
      })
      console.log('datos')
      console.log({
        ...response.data.datos[0]
      })
      setErr(false)
    }catch(err){
      setErr(true)
      setLoading(false)
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
            <div style={{display:"flex",flexDirection:"column"}} className='scroll-container'>
              <h1>Detalle parcela: {datos.nombre}</h1>
              <h2>Vinedo: {datos.nombre_viniedo}</h2>
              <span>{datos.localidad} {datos.provincia} {datos.pais}</span>
              <span>Ubicacion {datos.longitud} {datos.latitud}</span>
              {
                datos.coordenadas_polygon === null ?
                <span>No hay mapa</span>
                :
                <span>Mapa</span>
              }
              <span>Ultimas actividades</span>
              <button onClick={()=>{setOpenModal(true)}} style={{width:"fit-content"}}>Agregar tarea</button>
            </div>
          }
          {
            openModal === true ?
            <NuevaTarea 
              setOpenModal={setOpenModal}
              obj={{parcela:datos.nombre,id:params.id}}
            />
            :
            <></>
          }
        </>
      }    
    </>
  )
}

export default ParcelaDetail