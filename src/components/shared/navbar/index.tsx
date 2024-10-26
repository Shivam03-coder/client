import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const ApplicationNavbar = () => {
  return (
    <nav className="flex w-full py-3 items-center min-h-[4.5rem] ">
      {/* APPLOGO */}
      <div className="flex flex-1 items-center gap-5">
        <div className="bg-secondary p-2 rounded-full">
          <SidebarTrigger />
        </div>
        <div className="w-[11.25rem] font-inter text-2xl font-bold flex items-center h-[2.1875rem] text-primary relative">
         HRMS-APP
        </div>
      </div>
    </nav>
  );
};

export default ApplicationNavbar;
