/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from '../../context/AppContext';
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';


const NuevaTarea = ({setOpenModal,obj}) => {

  const { axiosConfig } = useContext(AppContext);
  const fecha = new Date()
  const [ loading,setLoading ] = useState(false);
  const [ err,setErr ] = useState(false);
  
  const [ data,setData ] = useState({
    id:'',
    nombre_tarea:'',
    descripcion: '',
    fecha_creacion:`${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}`,
    fecha_limite:null,
    prioridad:'',
    estado:'Pendiente'
  })
  
  const handleDateChange = (date) => {
    setData({
      ...data,fecha_limite:date
    })
  };

  const [ listaPrioridad,setListaPrioridad ] = useState([
    {
      name:"Alta",
      selected:false
    },
    {
      name:"Media",
      selected:false
    },
    {
      name:"Baja",
      selected:false
    }
  ])

  function selectPrioridad(name){
    const updateData = listaPrioridad.map((item)=>{
      if(item.name === name){
        return {...item,selected:true}
      }
      return {...item,selected:false}
    })
    setListaPrioridad(updateData)
    setData({
      ...data,prioridad:name
    })
  }

  async function saveTask(e){
    e.preventDefault()
    const id = uuidv4()
    const objD = {...data,fecha_limite:`${data.fecha_limite.getFullYear()}-${data.fecha_limite.getMonth()+1}-${data.fecha_limite.getDate()}`,id:id}
    console.log(obj)
    try{
      await axios.post('http://localhost:8000/api/tarea',objD,{withCredentials: true})
      await axios.post('http://localhost:8000/api/tarea-por-parcela',{id_tarea:id,id_parcela:obj.id},axiosConfig)
      setErr(false)
    }catch(err){
      console.log(err)
      setErr(true)
      setLoading(false)
    }finally{
      setOpenModal(false)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tarea creada!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <button onClick={()=>{setOpenModal(false)}}>Cerrar modal</button>
        {
          obj === null ?
          <>
            <span>No hay parcela seleccionada</span>
          </>
          :
          <>
            {
              loading === true ?
              <span>Cargando...</span>
              :
              <>
                {
                  err === true ?
                  <>
                    <span>Error</span>
                    <button>Cerrar</button>
                    <button>Intentar de nuevo</button>                  
                  </>
                  :
                  <>
                    <span>Hay parcela seleccionada</span>
                    <span>{obj.parcela} | id:{obj.id}</span>
                    <span>Datos de la tarea que va a ser de esa parcela</span>
                    
                    <form onSubmit={saveTask} style={{display:"flex",flexDirection:"column"}}>
                      <input type='text' placeholder='titulo' value={data.nombre_tarea} onChange={(e)=>{
                        setData({...data,nombre_tarea:e.target.value})
                      }}/>
                      <textarea value={data.descripcion} placeholder='descripcion' onChange={(e)=>{
                        setData({
                          ...data,descripcion:e.target.value
                        })
                      }}/>
                      <label>Fecha limite</label>
                      <DatePicker
                        selected={data.fecha_limite}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy" 
                      />
                      <label>Prioridad</label>
                      <div>
                        {
                          listaPrioridad.map((item,index)=>
                          <div onClick={()=>{selectPrioridad(item.name)}} key={index} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
                            <div style={item.selected === false ? {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%"} : {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%",backgroundColor:"black"}}></div>
                            <span>{item.name}</span>
                          </div>
                          )
                        }
                      </div>
                      <button type='submit'>Guardar</button>
                    </form>
                  </>
                }
              </>
            }

          </>
        }
      </div>    
    </div>
  )
}

export default NuevaTarea