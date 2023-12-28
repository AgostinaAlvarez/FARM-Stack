/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen';
import NavBar from '../components/NavBar';
import Aside from '../components/Aside';
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import RadarChartEx from '../tester/RadarChartEx';
import LineChart1 from '../tester/LineChart1';
import { FaListUl } from "react-icons/fa6";
import iconC from '../assets/icon.svg'

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

  const test = [1,2,1,1,1,1]

  
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  

  const PrioridadTask = (typeP) =>{
    switch (typeP) {
      case "Media":        
        return {borderLeft:"10px solid #F1935C"};
      case "Alta":        
        return {borderLeft:"10px solid #D45D79"};
      case "Baja":        
        return {borderLeft:"10px solid green"};   
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
            <div className='home-screen-left-col'>
              {/**/}
              <div className='home-screen-grid'>
                <div className='home-screen-grid-item'>
                  <span style={{fontSize:"12px"}}>Territorio</span>
                  <span style={{fontSize:"28px",fontWeight:500}}>2300</span>
                </div>
                <div className='home-screen-grid-item'>
                  <span style={{fontSize:"12px"}}>Produccion</span>
                  <span style={{fontSize:"28px",fontWeight:500}}>2300</span>
                </div>
                <div className='home-screen-grid-item'>
                  <span style={{fontSize:"12px"}}>Produccion</span>
                  <span style={{fontSize:"28px",fontWeight:500}}>2300</span>
                </div>
              </div>
              <div style={{width:"100%",height:320,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <LineChart1/>
                <RadarChartEx/>
              </div>
              {/**/}
              <div style={{height:"40px",display:"flex",alignItems:"center",width:"calc(100% - 40px)", margin:"0px auto",marginTop:20,fontWeight:600,fontSize:"14px"}}>Tareas programadas</div>
              {/**/}
              <div className='home-screen-taks-container ' style={{width:"calc(100% - 40px)", margin:"0px auto"}}>
                {
                    tareas.length === 0 ?
                    <>
                      <div>No hay tareas pendientes</div>
                    </>
                    :
                    <>
                      {
                        tareas.map((item,index)=>
                          <>
                            {                    
                              item.estado === 'Pendiente' ?
                              <div key={index} className='home-screen-tasks-item' style={PrioridadTask(item.prioridad)}>

                                <div style={{display:"flex",flexDirection:"column",gap:5}}>
                                  <span style={{fontWeight:600}}>{item.nombre_tarea}</span>
                                  <span>{item.nombre_viniedo} - {item.nombre_parcela}</span>
                                </div>
                                <div style={{display:"flex",gap:10}}>
                                  <button style={{cursor:"pointer"}}>Ver</button>
                                  <button style={{cursor:"pointer"}} onClick={()=>{completeTaks(item.id_tarea)}}>Completar</button>
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

            </div>
            <div className='home-screen-right-col'>
              <div style={{width:"100%",backgroundColor:"#dadadad0",boxSizing:"border-box",padding:20,borderRadius:10,textAlign:"center",fontSize:14}}>
                Jueves 28 de diciembre 2023
              </div>
              <div className='home-waether-container'>
                <img style={{height:80}} src={iconC}/>
                <div className='home-waether-info'>

                </div>
              </div>
              <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Calendar/>
              </div>
              <div>Recordatorios: </div>
              <div className='home-screen-taks-container ' style={{width:"90%", margin:"0px auto",backgroundColor:"white"}}>
                {
                    test.length === 0 ?
                    <>
                      <div>No hay Recordatorios</div>
                    </>
                    :
                    <>
                      {
                        test.map((item,index)=>
                          <>
                            <div key={index} className='home-screen-tasks-item' style={{padding:"0px",paddingRight:10,backgroundColor:"#D2E0FB",alignItems:"center",gap:10}}>
                              <div style={{display:"flex",alignItems:"center"}}>
                                <div style={{height:50, width:55,backgroundColor:"#8EACCD",display:"flex",alignItems:"center",justifyContent:"center",marginRight:10}}>
                                  <FaListUl/>
                                </div>
                                <span>Recordatorio </span>
                              </div>
                              <button>Ver</button>
                            </div> 
                          </>
                        )
                      }
                    </>
                }
                
              </div>
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