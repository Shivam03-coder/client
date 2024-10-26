"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// Sample data representing monthly business growth
const data = [
  { month: 'Jan', growth: 4000 },
  { month: 'Feb', growth: 3000 },
  { month: 'Mar', growth: 2000 },
  { month: 'Apr', growth: 2780 },
  { month: 'May', growth: 1890 },
  { month: 'Jun', growth: 2390 },
  { month: 'Jul', growth: 3490 },
  { month: 'Aug', growth: 4500 },
  { month: 'Sep', growth: 3200 },
  { month: 'Oct', growth: 4800 },
  { month: 'Nov', growth: 5000 },
  { month: 'Dec', growth: 6000 },
];

const MonthlyBusinessGrowthChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="growth" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyBusinessGrowthChart;
