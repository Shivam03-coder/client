"use client";
import RechartPieChart from "@/lib/rechart/piechart";
import { useGetTotalEmployeegenederCountQuery } from "@/store/api";
import React, { useMemo } from "react";


const customColors = ["#493628", "#FD8B51", "#FFCE56"];

const GenderSharePiechart: React.FC = () => {
  const { data: Genderpercentagedata, isError: isGenderQueryError } =
    useGetTotalEmployeegenederCountQuery(null);

  if (isGenderQueryError) {
    return <>SOME ERROR OCCURED</>;
  }

  const customData = useMemo(() => {
    if (!Genderpercentagedata) return [];

    return [
      { name: "Male", value: Number(Genderpercentagedata?.malePercentage) },
      { name: "Female", value: Number(Genderpercentagedata?.femalePercentage) },
    ];
  }, [Genderpercentagedata]);
  console.log("🚀 ~ customData ~ customData:", customData);

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
