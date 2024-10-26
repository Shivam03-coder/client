import { Card } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";
import React from "react";

const Employeecards = ({ label, data }: { label?: string; data?: number }) => {
  return (
    <section className="space-y-7">
      <h1 className="w-full bg-primary text-center text-light py-3 font-inter text-2xl font-bold">
        EMPLOYEE
      </h1>
      <div className="grid grid-cols-4 gap-10">
        <Card className="relative size-[12rem] bg-secondary border bg-secondary shadow-md">
          <div className="absolute top-5 left-5 text-2xl font-bold text-primary">
            ACTIVE EMPLOYEE
          </div>
          <div className="flex items-center justify-center h-full">
            {" "}
            {/* Centering the data */}
            <div className="flex-center mt-16 text-5xl font-bold font-inter">
              <NumberTicker value={70} />
            </div>
          </div>
        </Card>
        <Card className="relative size-[12rem] bg-secondary border bg-secondary shadow-md">
          <div className="absolute top-5 left-5 text-2xl font-bold text-primary">
            EFFECTIVE EMPLOYEE
          </div>
          <div className="flex items-center justify-center h-full">
            {" "}
            {/* Centering the data */}
            <div className="flex-center mt-16 text-5xl font-bold font-inter">
              <NumberTicker value={60} />
            </div>
          </div>
        </Card>
        <Card className="relative size-[12rem] bg-light border bg-secondary shadow-md">
          <div className="absolute top-5 left-5 text-2xl font-bold text-primary">
            PENDING APPLICATION
          </div>
          <div className="flex items-center justify-center h-full">
            {" "}
            {/* Centering the data */}
            <div className="flex-center mt-16 text-5xl font-bold font-inter">
              <NumberTicker value={40} />
            </div>
          </div>
        </Card>
        <Card className="relative size-[12rem] bg-light border bg-secondary shadow-md">
          <div className="absolute top-5 left-5 text-2xl font-bold text-primary">
            PENDING APPLICATION
          </div>
          <div className="flex items-center justify-center h-full">
            {" "}
            {/* Centering the data */}
            <div className="flex-center mt-16 text-5xl font-bold font-inter">
              <NumberTicker value={40} />
            </div>
          </div>
        </Card>
      
      </div>
    </section>
  );
};

export default Employeecards;
