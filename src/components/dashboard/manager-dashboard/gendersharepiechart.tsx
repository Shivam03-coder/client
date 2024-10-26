import RechartPieChart from "@/lib/rechart/piechart";
import React from "react";

const customData = [
  { name: "Male", value: 45 },   // Adjusted for gender distribution
  { name: "Female", value: 35 }, // Adjusted for gender distribution
  { name: "Other", value: 20 },  // Adjusted for gender distribution
];

const customColors = ["#493628", "#FD8B51", "#FFCE56"];

const GenderSharePiechart: React.FC = () => {
  return (
    <div className="shadow-custom flex flex-col items-center gap-5">
      <h1 className="w-full bg-primary text-center text-light py-3 font-inter text-2xl font-bold">
        GENDER RATIO
      </h1>
      <RechartPieChart data={customData} colors={customColors} />
    </div>
  );
};

export default GenderSharePiechart;
