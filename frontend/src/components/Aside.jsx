

import React from 'react'
import FarmIcon from '../assets/farm-svgrepo-com.svg';
import { FaWarehouse } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import LabIcon from '../assets/lab.svg';
import Agro from '../assets/agro.svg';
import { useNavigate } from 'react-router-dom';
import { IoSunnySharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { TbAbacus } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";


const Aside = () => {
  const navigate = useNavigate()
  return (
    <aside className='aside'>
        <div  onClick={()=>{navigate('/')}} className='aside-icon'>
            <FaHome style={{fontSize:25,color:"white"}}/>
            <span>Home</span>
        </div>
        <div  onClick={()=>{navigate('/vinedos')}}  className='aside-icon'>
            <img src={FarmIcon} alt="Farm Icon" style={{width:25}}/>
            <span>Vinedos</span>
        </div>
        <div onClick={()=>{navigate('/cultivos')}} className='aside-icon'>
            <img src={Agro} style={{width:25}}/>
            <span>Cultivos</span>
        </div>
        <div className='aside-icon'>
            <FaWarehouse style={{fontSize:25, color:"white"}}/>
            <span>Inventario</span>
        </div>
        <div className='aside-icon'>
            <img src={LabIcon} style={{width:25}}/>
            <span>Laboratorio</span>
        </div>
        
        <div className='aside-icon'>
            <IoSunnySharp style={{fontSize:25, color:"white"}}/>
            <span>Registro Ambiental</span>
        </div>
        <div className='aside-icon'>
            <FaClipboardList style={{fontSize:25, color:"white"}}/>
            <span>Formularios</span>
        </div>
        <div className='aside-icon'>
            <TbAbacus style={{fontSize:25, color:"white"}}/>
            <span>Contabilidad</span>
        </div>
        <div className='aside-icon'>
            <BsGraphUp style={{fontSize:25, color:"white"}}/>
            <span>Analisis</span>
        </div>
    </aside>
  )
}

export default Aside