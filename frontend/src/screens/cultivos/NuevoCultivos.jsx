/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const NuevoCultivos = ({setOverlay}) => {
  
  const { axiosConfig } = useContext(AppContext);

  const [ loading,setLoading ] = useState(true);
  const [ err,setErr ] = useState(false)

  const [ viniedos,setViniedos ] = useState([]);
  const [ parcelas,setParcelas ] = useState([]);

  const [ idViniedo,setIdViniedo ] = useState(null);

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

  /*PRIMERA PANTALLA*/
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

  /*SEGUNDA PANTALLA*/
  const SecondScreen = () =>{
    return(
      <>
        <span>Segundo paso</span>
        <span>Seleccionar parcela</span>
        {
          parcelas.map((parcela,index)=>
          <div key={index} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
            <div style={parcela.selected === false ? {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%"} : {height:"20px",width:"20px",border:"1px solid black",borderRadius:"50%",backgroundColor:"black"}}></div>
            <span>{parcela.nombre}</span>
          </div>
          )
        }
        {
          parcelas.find((item)=>item.selected === true) ?
          <button onClick={()=>{getParcelas()}}>Siguiente</button>
          :
          <></>
        }
      </>
    )
  }

  const screenCurrent = () => {
    switch (currentScreen) {
      case 0:
        return <FirstScreen/>;
      
      case 1:
        return <SecondScreen/>;
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