/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const ViniedoDetail = () => {
  const { axiosConfig } = useContext(AppContext);
  const [ loading,setLoading ] = useState(true);
  const [ err,setErr ] = useState(false);

  const [ datos,setDatos ] = useState(null)

  const params = useParams();

  useEffect(() => {
    console.log(params)
    getDatos()
  }, [])

  async function getDatos (){
    try{
      const response = await axios.get(`http://localhost:8000/api/viniedo/${params.id}`,axiosConfig)
      console.log(response.data)
      setDatos({
        ...response.data.datos[0],
        parcelas: response.data.parcelas
      })
      console.log({
        ...response.data.datos[0],
        parcelas: response.data.parcelas
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
              <h1 style={{zIndex:100,marginLeft:20}}>Viniedo detail: {datos.nombre}</h1>

              {/*Header grid*/}
              <div className='viniedos-screen-header'>
                <div className='viniedos-screen-header-item'>
                  <div>Rendimiento</div>
                  <span style={{fontSize:25,fontWeight:600}}>23400</span>
                </div>
                <div className='viniedos-screen-header-item'>
                  <div>Rendimiento</div>
                  <span style={{fontSize:25,fontWeight:600}}>23400</span>
                </div>
                <div className='viniedos-screen-header-item'>
                  <div>Rendimiento</div>
                  <span style={{fontSize:25,fontWeight:600}}>23400</span>
                </div>
                <div className='viniedos-screen-header-item'>
                  <div>Rendimiento</div>
                  <span style={{fontSize:25,fontWeight:600}}>23400</span>
                </div>
              </div>
              {/*Map section*/}
              <div className='viniedo-detail-maps'>

              </div>

              
              <span>{datos.localidad} {datos.provincia} {datos.pais}</span>
              {
                datos.coordenadas_polygon === null ?
                <span>No hay cordenadas</span>
                :
                <div>Mapa (configurar coordenadas)</div>
              }
              <span>Lista de parcelas</span>
              <div>
                {
                  datos.parcelas.length == 0 ?
                  <span>No hay parcelas registradas</span>
                  :
                  <>
                    {
                      datos.parcelas.map((item,index)=>
                        <div style={{display:"flex",flexDirection:"column"}} key={index}>
                          <h3>{item.nombre}</h3>
                          <span>Superficie: {item.superficie} He.</span>
                          <span>Ubicacion: {item.longitud} {item.latitud}</span>
                          <NavLink to={`/parcela/${item.id}`}>Ver Parcela</NavLink>
                        </div>
                      )
                    }
                  </>
                }
              </div>

              <span>Lista de tareas programadas:</span>
              <span>Ultima Actividad</span>
              <span>Rendimiento por hectarea</span>
            </div>
          }
        </>
      }
    </>
  )
}

export default ViniedoDetail