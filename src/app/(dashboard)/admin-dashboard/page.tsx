import Employeecards from "@/components/dashboard/manager-dashboard/employeecards";
import EmployeePieChart from "@/components/dashboard/manager-dashboard/employeepercentage";
import EmployeeTable from "@/components/dashboard/manager-dashboard/employeetable";
import Employeetable from "@/components/dashboard/manager-dashboard/employeetable";
import GenderSharePiechart from "@/components/dashboard/manager-dashboard/gendersharepiechart";
import MonthlyBusinessGrowthChart from "@/components/dashboard/manager-dashboard/monthlygrowthlinechart";

const Admindashboard = () => {
  return (
    <div className="min-w-full p-2">
      {/* GOALS CARDS */}
      <div className="grid w-full grid-cols-6 gap-8">
        <div className="col-span-2">
          <EmployeePieChart />
        </div>
        <div className="col-span-4">
          <Employeecards />
        </div>
        <div className="col-span-4 flex items-center">
          <MonthlyBusinessGrowthChart />
        </div>
        <div className="col-span-2">
          <GenderSharePiechart />
        </div>
        <div className="col-span-full">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
