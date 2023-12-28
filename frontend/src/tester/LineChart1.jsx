/* eslint-disable no-unused-vars */
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const LineChart1 = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ width: 560, height: 350, 
      //border:"1px solid black",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-end",
      gap:30,
      paddingLeft:20
    }} 
    >
      <div style={{width:"100%",color:"grey",boxSizing:"border-box",fontWeight:600,fontSize:12}}>Indice de produccion tal</div>
      <LineChart
        width={560}
        height={270}
        data={data}
        style={{ fontSize: '11px' }}
        //margin={{
          
        //  top: 5,
        //  right: 30,
        //  left: 20,
        //  bottom: 5,
        //}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}

export default LineChart1