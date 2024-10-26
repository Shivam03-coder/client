"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define the data type for the chart entries
interface DataItem {
  name: string;
  value: number;
}

// Define the component's props
interface PieChartProps {
  data: DataItem[];
  colors?: string[];
}

const RechartPieChart: React.FC<PieChartProps> = ({
  data,
  colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart className="space-y-3">
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RechartPieChart;
