/* eslint-disable no-unused-vars */


import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const RadarChartEx = () => {
  const data = [
    {
      marketSegment: 'Restaurantes',
      sales: 50000,
    },
    {
      marketSegment: 'Tiendas',
      sales: 65000,
    },
    {
      marketSegment: 'Exportaciones',
      sales: 90000,
    },
    {
      marketSegment: 'Venta al consumidor',
      sales: 40000,
    },
    {
      marketSegment: 'Distribuidores',
      sales: 75000,
    },
  ];

  return (
    <div style={{ width: 350, height: 300, 
    //border:"1px solid black"
    }}>
      <RadarChart width={350} height={250} outerRadius={90} data={data} style={{ fontSize: '11px' }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="marketSegment" />
        <PolarRadiusAxis angle={30} domain={[0, 100000]} />
        <Radar name="Ventas Anuales" dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  )
}

export default RadarChartEx