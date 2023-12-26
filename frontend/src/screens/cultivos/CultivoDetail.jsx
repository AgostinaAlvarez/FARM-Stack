/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CultivoDetail = () => {
  const params = useParams()
  const [ loading,setLoading ] = useState(true)
  const [ err,setErr ] = useState(false)
  
  useEffect(() => {
    
  }, [])
  
  return (
    <>
      {
        loading === true ?
        <div>Loading...</div>
        :
        <>
          {
            err === true ?
            <div>err</div>
            :
            <>
              <div className='scroll-container'>
                <h1>CultivoDetail {params.id}</h1>
              </div>
            
            </>
          }
        </>
      }
    </>
  )
}

export default CultivoDetail