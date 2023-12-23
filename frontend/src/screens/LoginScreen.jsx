

//frontend en react

import axios from 'axios'
import React, { useState } from 'react'

const LoginScreen = () => {
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
    login()
  }

  async function login (){
    try{
      const response = await axios.post('http://localhost:8000/api/login',userData)
      console.log(response.data)
      if(response.data.login === true){
        console.log('Login permitido')
        document.cookie = `jwt=${response.data.token}; path=/`;
      }else{
        console.log('Login no permitido')
      }
    }catch(err){
      console.log(err)
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