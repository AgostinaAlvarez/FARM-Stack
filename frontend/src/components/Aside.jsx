import React from 'react'
import FarmIcon from '../assets/farm-svgrepo-com.svg';
import { FaWarehouse } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import LabIcon from '../assets/lab.svg';
import Agro from '../assets/agro.svg';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
  const navigate = useNavigate()
  return (
    <aside className='aside'>
        <div  onClick={()=>{navigate('/')}} className='aside-icon'>
            <FaHome style={{fontSize:25}}/>
            <span>Home</span>
        </div>
        <div  onClick={()=>{navigate('/vinedos')}}  className='aside-icon'>
            <img src={FarmIcon} alt="Farm Icon" style={{width:25}}/>
            <span>Vinedos</span>
        </div>
        <div className='aside-icon'>
            <FaWarehouse style={{fontSize:25}}/>
            <span>Inventario</span>
        </div>
        <div className='aside-icon'>
            <img src={LabIcon} style={{width:25}}/>
            <span>Laboratorio</span>
        </div>
        <div onClick={()=>{navigate('/cultivos')}} className='aside-icon'>
            <img src={Agro} style={{width:25}}/>
            <span>Cultivos</span>
        </div>
        <div className='aside-icon'>
            <img src={Agro} style={{width:25}}/>
            <span>Registro Ambiental</span>
        </div>
    </aside>
  )
}

export default Aside