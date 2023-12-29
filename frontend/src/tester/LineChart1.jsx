/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart1 = () => {
  const data = [
    { month: 'Ene', 'Viñedo Vista Andina': 200, 'Viñedo Sol de los Andes': 180 },
    { month: 'Feb', 'Viñedo Vista Andina': 220, 'Viñedo Sol de los Andes': 190 },
    { month: 'Mar', 'Viñedo Vista Andina': 210, 'Viñedo Sol de los Andes': 100 },
    { month: 'Abr', 'Viñedo Vista Andina': 230, 'Viñedo Sol de los Andes': 210 },
    { month: 'May', 'Viñedo Vista Andina': 240, 'Viñedo Sol de los Andes': 220 },
    { month: 'Jun', 'Viñedo Vista Andina': 150, 'Viñedo Sol de los Andes': 430 },
    { month: 'Jul', 'Viñedo Vista Andina': 260, 'Viñedo Sol de los Andes': 240 },
    { month: 'Ago', 'Viñedo Vista Andina': 370, 'Viñedo Sol de los Andes': 250 },
    { month: 'Sep', 'Viñedo Vista Andina': 480, 'Viñedo Sol de los Andes': 160 },
    { month: 'Oct', 'Viñedo Vista Andina': 190, 'Viñedo Sol de los Andes': 270 },
    { month: 'Nov', 'Viñedo Vista Andina': 300, 'Viñedo Sol de los Andes': 480 },
    { month: 'Dic', 'Viñedo Vista Andina': 410, 'Viñedo Sol de los Andes': 590 },
  ];

  return (
    <div style={{
      width: 540,
      height: 300,
      //border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: 30,
      paddingLeft: 20
    }}>
      <div style={{ width: "100%", color: "grey", boxSizing: "border-box", fontWeight: 600, fontSize: 12 }}>
        Rendimiento mensual por hectárea
      </div>
      <LineChart
        width={540}
        height={250}
        data={data}
        style={{ fontSize: '11px' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Viñedo Vista Andina" stroke="#8884d8" name="Viñedo Vista Andina" />
        <Line type="monotone" dataKey="Viñedo Sol de los Andes" stroke="#82ca9d" name="Viñedo Sol de los Andes" />
      </LineChart>
    </div>
  );
};

export default LineChart1;
