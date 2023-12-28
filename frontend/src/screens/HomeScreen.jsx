/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';
import NavBar from '../components/NavBar';
import Aside from '../components/Aside';
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2'



const HomeScreen = () => {
  
  const [ error,setError ] = useState(false)
  const [ loading,setLoading ] = useState(true)

  const { tareas,setTareas,axiosConfig } = useContext(AppContext);
  

  useEffect(() => {
    getTasks()
  }, [])
  

  async function getTasks (){
    try{
      const responseTasks = await axios.get('http://localhost:8000/api/tareas',axiosConfig)
      //const responseData = await
      setTareas(responseTasks.data.tareas)
      console.log(responseTasks.data.tareas)
      setError(false)
    }catch(err){
      console.log(err)
      setError(true)
    }finally{
      setLoading(false)
    }
  }

  async function completeTaks (id){
    try{
      const response = await axios.put(`http://localhost:8000/api/tarea-completa`,{id_tarea:id},axiosConfig)
      console.log(response)
    }catch(err){
      console.log(err)
    }finally{
      const updateTasks = tareas.map((item)=>{
        if(item.id === id){
          return {...item,estado:"Completa"}
        }
        return item
      })
      setTareas(updateTasks)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tarea marcada como completa!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }


  return (
    <>
    
    {
      loading === true ?
      <div>loading</div>
      :
      <>
        {
          error === true ?
          <div>Error</div>
          :
          <div className='scroll-container home-screen'>
            <div className='home-screen-main'>
              <div>
                Grid
              </div>
            </div>
            
            <div className='home-screen-aside'>
              aside
            </div>

           
            {
              /*
              
              
              <span>Territorio: </span>
              <span>Tareas pendientes</span>
              <div>
                {
                  tareas.length === 0 ?
                  <>
                    <div>No hay tareas pendientes</div>
                  </>
                  :
                  <>
                    {
                      tareas.map((item)=>
                        <>
                          {
                            
                            item.estado === 'Pendiente' ?
                            <div key={item.id_tarea} style={{backgroundColor:"red"}} className='main-tasks-item'>
                              <div>
                                <h3>{item.nombre_tarea}</h3>
                                <span>{item.nombre_viniedo} - {item.nombre_parcela}</span>
                              </div>
                              <div>
                                <button onClick={()=>{completeTaks(item.id_tarea)}}>Completar</button>
                                <button>Ver tarea</button>
                              </div>
                            </div>
                            :
                            <></>
                            
                          }
                        </>
                      )
                    }
                  </>
                }
              </div>
              
              */
            }
          </div>
        }
      </>
    }
    
   
    </>
  )
}

export default HomeScreen