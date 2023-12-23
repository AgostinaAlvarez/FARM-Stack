
import axios from 'axios';
import React from 'react'

const HomeScreen = () => {
  function setCookieJwt(){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lIjoicGF5bG9hZCJ9.4twFt5NiznN84AWoo1d7KO1T_yoc0Z6XOpOVswacPZg"
    document.cookie = `token=${token}; path=/`;
  }

  async function testerJWT (){
    try{
      const response = await axios.get('http://localhost:8000/api/user-info', {
      withCredentials: true // Habilitar el intercambio de cookies
      });
      console.log(response);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <h1>Home screen</h1>
    <button onClick={()=>{setCookieJwt()}}>Setear cookie del jwt</button>
    <button onClick={()=>{testerJWT()}}>Testear</button>
    </>
  )
}

export default HomeScreen