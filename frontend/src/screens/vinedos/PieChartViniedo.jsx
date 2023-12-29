/* eslint-disable no-unused-vars */
import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const COLORS = ['#711DB0', '#A367B1', '#392467', '#7E30E1'];

const data = [
  { name: 'Cabernet Sauvignion', value: 3400 },
  { name: 'Chardonnay', value: 3244 },
  { name: 'Merlot', value: 2234 },
  { name: 'Sauvignon Blanc', value: 1321 }
];


const PieChartViniedo = () => {

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: 350, height: 300, 
    //border:"1px solid black"
    boxSizing:"border-box",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
    }}>
      <div style={{ width: "100%", color: "grey", boxSizing: "border-box", fontWeight: 600, fontSize: 12 }}>
        Porcenatjes de uva
      </div>
      <PieChart width={350} height={180} style={{ fontSize: '13px' }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          //labelLine={false}
          //label={({ name }) => `${name}`}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
          labelLine={false} // Elimina las líneas hacia afuera
          label={renderCustomizedLabel}
          //label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </div>
  );
};

export default PieChartViniedo;
