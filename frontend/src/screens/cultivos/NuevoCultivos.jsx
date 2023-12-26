/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

const NuevoCultivos = ({setOverlay}) => {
  
  const { axiosConfig } = useContext(AppContext);

  const [ loading,setLoading ] = useState(true);
  const [ err,setErr ] = useState(false)

  const [ viniedos,setViniedos ] = useState([]);
  const [ parcelas,setParcelas ] = useState([]);
  const [ uvas,setUvas ] = useState([]);

  //IDS
  const [ idViniedo,setIdViniedo ] = useState(null);
  const [ idParcela,setIdParcela ] = useState(null);
  const [ idUva,setIdUva ] = useState(null)

  const [ currentScreen,setCurrentScreen ] = useState(0)

  useEffect(() => {
    getDataViniedos()
  }, [])
  
  async function getDataViniedos (){
    try{
      const response = await axios.get('http://localhost:8000/api/get-viniedos',axiosConfig)
      const response_modify = response.data.viniedos.map((viniedo)=>{
        return {...viniedo,selected:false}
      })
      setViniedos(response_modify)
      setErr(false)
    }catch(err){
      console.log(err)
      setErr(true)
    }finally{
      //
      setLoading(false)
    }
  }

  function selectViniedo (id){
    const updateData = viniedos.map((viniedo)=>{
      if(viniedo.id === id){
        return {...viniedo,selected:true}
      }
      return {...viniedo,selected:false}
    })
    setViniedos(updateData)
    setIdViniedo(id)
  }

  async function getParcelas (){
    setLoading(true)
    try{
      const response = await axios.get(`http://localhost:8000/api/viniedo/${idViniedo}`,axiosConfig)
      const response_modify = response.data.parcelas.map((parcela)=>{
        return {...parcela,selected:false}
      })
      setParcelas(response_modify)
    }catch(err){
      console.log(err)
      setErr(true)
    }finally{
      setCurrentScreen(1)
      setLoading(false)
    }
  }

  function selectParcela (id){
    const updateData = parcelas.map((parcela)=>{
      if(parcela.id === id){
        return {...parcela,selected:true}
      }
      return {...parcela,selected:false}
    })
    setParcelas(updateData)
    setIdParcela(id)
  }


  async function getUvas (){
    setLoading(true)
    try{
      const response = await axios.get("http://localhost:8000/api/uvas",axiosConfig)
      console.log(response.data.uvas)
      const response_modify = response.data.uvas.map((uva)=>{
        return {...uva, selected:false}
      })
      setUvas(response_modify)
      setErr(false)
    }catch(err){
      console.log(err)
      setErr(true)
    }finally{
      setCurrentScreen(2)
      setLoading(false)
    }
  }


  function selectUva (id){
    const updateData = uvas.map((uva)=>{
      if(uva.id === id){
        return {...uva,selected:true}
      }
      return {...uva,selected:false}
    })
    setUvas(updateData)
    setIdUva(id)
  }

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  async function sendDatos (){
    const obj = {
      id: uuidv4(),
      id_uva: idUva,
      id_parcela: idParcela,
      fecha: `${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${selectedDate.getDate()}`
    }

    console.log(obj)
    setLoading(true)
    try{
      await axios.post('http://localhost:8000/api/plantaciones',obj,axiosConfig)
      setErr(false)
    }catch(err){
      console.log(err)
      setErr(true)
    }finally{
      setLoading(false)

    }

  }

  /*PRIMERA PANTALLA VINIEDO*/
  const FirstScreen = () =>{

    return(
      <>
        <span>Primer paso</span>
        <span>Seleccionar viñedo</span>
        {
          viniedos.map((viniedo,index)=>
          <div onClick={()=>{selectViniedo(viniedo.id)}} key={index} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
            <div style={viniedo.selected === false ? {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%"} : {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%",backgroundColor:"black"}}></div>
            <span>{viniedo.nombre} - {viniedo.localidad} {viniedo.provincia} {viniedo.pais}</span>
          </div>
          )
        }
        {
          viniedos.find((item)=>item.selected === true) ?
          <button onClick={()=>{getParcelas()}}>Siguiente</button>
          :
          <></>
        }
      </>
    )
  }

  /*SEGUNDA PANTALLA PARCELA*/
  const SecondScreen = () =>{
    return(
      <>
        <span>Segundo paso</span>
        <span>Seleccionar parcela</span>
        {
          parcelas.map((parcela,index)=>
          <div onClick={()=>{selectParcela(parcela.id)}} key={index} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
            <div style={parcela.selected === false ? {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%"} : {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%",backgroundColor:"black"}}></div>
            <span>{parcela.nombre}</span>
          </div>
          )
        }
        {
          parcelas.find((item)=>item.selected === true) ?
          <button onClick={()=>{getUvas()}}>Siguiente</button>
          :
          <></>
        }
      </>
    )
  }

  /*TERCERA PANTALLA DATOS*/

  const ThirdScreen = () =>{
    return(
      <>
        <span>Tipo de uva cultivada</span>
        {
          uvas.map((uva,index)=> 
          <div onClick={()=>{selectUva(uva.id)}} key={index} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
            <div style={uva.selected === false ? {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%"} : {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%",backgroundColor:"black"}}></div>
            <span>{uva.nombre}</span>
          </div>
          )
        }
        <span>Fecha de plantacion</span>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy" 
        />
        <span>Notas</span>
        <textarea></textarea>
        <button onClick={sendDatos}>Guardar</button>
      </>
    )
  }

  const screenCurrent = () => {
    switch (currentScreen) {
      case 0:
        return <FirstScreen/>;
      case 1:
        return <SecondScreen/>;
      case 2:
        return <ThirdScreen/>;
    }
  }


  return (
    <div className='overlay'>
      <div className='modal'>
        <button onClick={()=>{setOverlay(false)}}>cerrar</button>
        {
          loading === true ?
          <div>Cargando...</div>
          :
          <>
            {
              err === true ?
              <div>Error!</div>
              :
              <>
                {screenCurrent()}
              </>
            }
          </>
        }
      </div>
    </div>
  )
}

export default NuevoCultivos