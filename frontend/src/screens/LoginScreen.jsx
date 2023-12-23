

//frontend en react

import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const LoginScreen = () => {
  const { login,setLogin } = useContext(AppContext)
  const [userData,setUserData] = useState({email:'',password:''})
  
  const handleChangeEmail = (e) =>{
    setUserData({
      ...userData,email: e.target.value
    })
  }

  const handleChangePassword = (e) =>{
    setUserData({
      ...userData,password: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('hacer el login')
    //console.log(userData)
    log_in()
  }

  async function log_in (){
    try{
      const response = await axios.get(`http://localhost:8000/api/log-in/${userData.email}/${userData.password}`)
      console.log(response.data)
      if(response.data.login === true){
        console.log('Login permitido')
        document.cookie = `token=${response.data.token}; path=/`;
        setLogin(true)
      }else{
        console.log('Login no permitido')
        setLogin(false)
      }
    }catch(err){
      console.log(err)
      setLogin(false)
    }
  }

  return (
    <div>
        <h1>Login Screen</h1>
        <form onSubmit={handleSubmit}>
            <input value={userData.email} type='text' placeholder='email' onChange={handleChangeEmail}/>
            <input value={userData.password} type='password' placeholder='contrasenia' onChange={handleChangePassword}/>
            <button type='submit'>Entrar</button>
        </form>
    </div>
  )
}

export default LoginScreen