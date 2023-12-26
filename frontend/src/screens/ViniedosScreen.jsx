/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom'

const ViniedosScreen = () => {
  const items = [1,1,1,1]
  
  const { axiosConfig,viniedos,setViniedos } = useContext(AppContext);
  
  const [ loading,setLoading ] = useState(true)
  const [ err,setErr ] = useState(false)

  useEffect(() => {
    getViniedos()
  }, [])
  
  
  async function getViniedos (){
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
          <div className='scroll-container'>
            <h1>Viñedos</h1>
            <div>Lista de viñedos</div>
            <div>
            {
              viniedos.map((item,index)=>
                <div key={index}>
                  <h3>{item.nombre}</h3>
                  <p>{item.localidad} {item.provincia} {item.pais}</p>
                  <NavLink to={`/viniedos/${item.id}`}>
                    Ver
                  </NavLink>
                </div>
              )
            }
            </div>
          </div>
        }
        </>
      }
    </>
  )
}

export default ViniedosScreen