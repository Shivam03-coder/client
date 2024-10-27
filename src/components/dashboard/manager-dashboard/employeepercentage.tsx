import RechartPieChart from "@/lib/rechart/piechart";
import React from "react";

const customData = [
  { name: "Outlet 1", value: 45 },
  { name: "Outlet 2", value: 35 },
  { name: "Outlet 3", value: 20 },
];

const customColors = ["#493628", "#FD8B51", "#FFCE56"];

const Employeepercentage: React.FC = () => {
  return (
    <div className="shadow-custom flex flex-col items-center gap-5">
      <h1 className="w-full bg-primary text-center text-light p-2 font-inter text-2xl font-bold">
        EMPLOYEE
      </h1>
      <RechartPieChart data={customData} colors={customColors} />
    </div>
  );
};

export default Employeepercentage;
