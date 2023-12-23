import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    getDatos()
  }, [])
  
  async function getDatos (){
    const response = await axios.get('http://localhost:8000/api/viniedos')
    console.log(response.data.items)
  }

  return (
    <>
      
    </>
  )
}

export default App
