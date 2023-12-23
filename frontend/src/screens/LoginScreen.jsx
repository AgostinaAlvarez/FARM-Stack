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
    console.log(userData)
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