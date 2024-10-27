"use client";
import { Card } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";
import {
  useGetTotalactiveEmployeeQuery,
} from "@/store/api";
import React from "react";

const Employeecards = () => {
  const { data: ActiveEmployeeecount, isError } =
  useGetTotalactiveEmployeeQuery(null);

  if (isError) {
    return <>SOME ERROR OCCURED</>;
  }

  console.log(
    "🚀 ~ Employeecards ~ ActiveEmployeeecount:",
    ActiveEmployeeecount?.totalEmployees
  );

  return (
    <section className="space-y-7">
      <h1 className="w-full bg-primary text-center text-light p-2 font-inter text-2xl font-bold">
        EMPLOYEE
      </h1>
      <div className="grid grid-cols-3 gap-10 px-16 ">
        <Card className="relative flex size-[12rem] bg-secondary border  shadow-md">
          <div className="w-4 bg-green-500 h-full rounded-l-xl" />
          <div className="w-full h-full  py-5 space-y-7">
            <h1 className="text-2xl text-center font-bold text-primary">
              ACTIVE EMPLOYEE
            </h1>
            <div className="flex-center text-5xl font-bold font-inter">
              <NumberTicker value={ActiveEmployeeecount?.totalEmployees! || 11} />
            </div>
          </div>
        </Card>
        <Card className="relative flex size-[12rem] bg-secondary border  shadow-md">
          <div className="w-4 bg-yellow-500 h-full rounded-l-xl" />
          <div className="w-full h-full  py-5 space-y-7">
            <h1 className="text-2xl text-center font-bold text-primary">
              EFFCETIVE EMPLOYEE
            </h1>
            <div className="flex-center text-5xl font-bold font-inter">
              <NumberTicker value={10} />
            </div>
          </div>
        </Card>
        <Card className="relative flex size-[12rem] bg-secondary border  shadow-md">
          <div className="w-4 bg-red-500 h-full rounded-l-xl" />
          <div className="w-full h-full  py-5 space-y-7">
            <h1 className="text-2xl text-center font-bold text-primary">
              APPLICANT EMPLOYEE
            </h1>
            <div className="flex-center text-5xl font-bold font-inter">
              <NumberTicker value={18} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Employeecards;
