/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom'
import MapaColores from '../tester/MapaColores'
import { FaLocationDot } from "react-icons/fa6";
import ParcelaScreen from './vinedos/ParcelaScreen'
import './vinedos/stylesViniedos.css'
import ViniedosMap from './vinedos/ViniedosMap'

const ViniedosScreen = () => {
  const items = [1,1,1,1]
  
  const { axiosConfig,viniedos,setViniedos } = useContext(AppContext);
  
  const [ loading,setLoading ] = useState(true)
  const [ err,setErr ] = useState(false)

  useEffect(() => {
    getViniedos()
  }, [])
  
  
  async function getViniedos (){
    if(viniedos.length === 0 ){
      try{
        const response = await axios.get('http://localhost:8000/api/get-viniedos',axiosConfig)
        console.log(response.data.viniedos)
        setViniedos(response.data.viniedos)
        setErr(false)
      }catch(err){
        console.log(err)
        setErr(true)
        setLoading(false)
      }finally{
        setLoading(false)
      }
    }else{
      console.log('ya estan seteados')
      setErr(false)
      setLoading(false)
    }
  }

  return (
    <>
      {
        loading === true ?
        <div>Loaging</div>
        :
        <>
        {
          
          err === true ?
          <div>Error del servidor</div>
          :

          <>
            <div className='viniedos-home-grid'>
              <div className='viniedos-home-grid-col viniedos-home-grid-col-left'>
                <h1 style={{marginLeft:15}}>Viñedos</h1>
                <div className='viniedos-home-grid-col-left-list scroll-container'>
                  {
                    viniedos.map((item,index)=>
                      <div className='viniedos-item' key={index}>
                        <span style={{fontSize:18,fontWeight:600}}>{item.nombre}</span>
                        <div style={{display:"flex",flexDirection:"row",gap:10}}>
                          <FaLocationDot color='red'/>
                          <span>{item.localidad} {item.provincia} {item.pais}</span>
                        </div>
                        <NavLink to={`/viniedos/${item.id}`}>
                          Ver
                        </NavLink>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className='viniedos-home-grid-col viniedos-home-grid-col-right'>
                <ViniedosMap/>
              </div>
            </div>
            <div>
            {
              /*
              */
            }
            </div>
            </>
        }
        </>
      }
    </>
  )
}

export default ViniedosScreen