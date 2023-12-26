/* eslint-disable no-unused-vars */
import axios from 'axios'
import { differenceInYears, differenceInMonths, differenceInDays, parseISO, differenceInCalendarDays } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import SueloDetail from './SueloDetail'

const CultivoDetail = () => {
  const params = useParams()
  const { axiosConfig } = useContext(AppContext)
  const [ loading,setLoading ] = useState(true)
  const [ err,setErr ] = useState(false)
  const [ overlaySuelo,setOverlaySuelo ] = useState(false)
  const [ sueloObj,setSueloObj ] = useState(null)

  const [ cultivo,setCultivo ] = useState(null)

  useEffect(() => {
    getDatos()
  }, [])
  
  async function getDatos (){
    try{
      const response = await axios.get(`http://localhost:8000/api/plantacion/${params.id}`,axiosConfig)
      console.log(response.data)
      setCultivo(response.data)
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
        <div>Loading...</div>
        :
        <>
          {
            err === true ?
            <div>err</div>
            :
            <>
              <div className='scroll-container'>
                <h1>Cultivo {cultivo.detalle.nombre_viniedo} - {cultivo.detalle.nombre_parcela}</h1>
                <button className='btntest'>Editar</button>
                <span>Locacion: {cultivo.detalle.localidad} - {cultivo.detalle.provincia} - {cultivo.detalle.pais}</span>
                <span>Tipo de uva: {cultivo.detalle.nombre_uva}</span>
                <span>Densidad de plantacion : {cultivo.detalle.densidad_de_plantacion} u/He</span>
                <span>Mapa</span>

                <span>Fecha de plantacion: {cultivo.detalle.fecha}</span>
                <span>Edad: </span>
                <span>Tipo de suelo</span>
                {
                  cultivo.suelos.map((suelo,index)=>
                  <div key={index}>
                      <h3>{suelo.suelo_nombre}</h3>
                      <button onClick={()=>{
                        setSueloObj(suelo)
                        setOverlaySuelo(true)
                      }}>Ver detalles</button>
                  </div>
                  )
                }
                <span>Cosechas</span>
              </div>
              {
                overlaySuelo === true ?
                <SueloDetail 
                  obj={sueloObj}
                  setOverlay={setOverlaySuelo}
                />
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

export default CultivoDetail