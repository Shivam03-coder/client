"use client";
import { Subnavigations, Titlebar } from "@/components/shared/subnavs";
import { useState } from "react";
import EmployeeTable from "./employeetable/page";
import EmployeeMailing from "./employesheduling/page";
import EmployeeScheduling from "./employesheduling/page";

const EmployeeManagement = () => {
  const [isActiveSegment, setisActiveSegment] = useState<string>("Employee Table");

  return (
    <div className="xl:p-4 lg:p-6">
      <Titlebar title="User Management" />
      <div className="grid grid-cols-5 gap-4">
        {/* Sidebar navigation spans 1 column */}
        <div className="col-span-1">
          <Subnavigations
            isActiveSegment={isActiveSegment}
            setisActiveSegment={setisActiveSegment}
            Subnavs={profileSettingsubnavs}
          />
        </div>

        {/* Content area spans 2 columns */}
        <div className="col-span-4 h-auto flex-1 overflow-y-auto">
          {isActiveSegment === "Employee Table" && <EmployeeTable />}
          {isActiveSegment === "Employee Mailing" && <EmployeeMailing />}
          {isActiveSegment === "Employee Scheduling" && <EmployeeScheduling />}
        </div>
      </div>
    </div>
  );
};


const profileSettingsubnavs: string[] = [
  "Employee Table",
  "Employee Mailing",
  "Employee Scheduling",
];
export default EmployeeManagement;
