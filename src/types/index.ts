import { LucideIcon } from "lucide-react";

export interface globalStateTypes {
  isSidebarOpen: boolean;
  isdarkMode: boolean;
}

export interface authStateTypes {
  isSidebarOpen: boolean;
  isdarkMode: boolean;
}

export interface CarouselimageDataType {
  id: number;
  img: string;
  heading: string;
  descr: string;
}

export interface sideBarLinkDataTypes {
  href: string;
  icon: LucideIcon;
  label: string;
}

// types.ts

// types.ts

export type Order = "asc" | "desc";

export interface UserData {
  id: number;
  name: string;
  outletLocation: string;
  shiftNow: string;
  mobileNumber: string;
  mail: string;
  leaveDate: string;
  workingHours: string;
  read: boolean; // New property
  write: boolean; // New property
}

export interface EmployeeGenderStats {
  totalEmployees: number;
  maleCount: number;
  femaleCount: number;
  malePercentage: string;
  femalePercentage: string;
}

export interface Totalemployeedata {
  totalEmployees: number;
}

export interface IEmployee {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  profilePhoto: string;
  gender: "male" | "female";
  skill: string;
  shift: string | null;
  activehours: number;
  grade: string;
  role: string;
  storeId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface INewFiltredEmployee {
  id: string; // Assuming _id is a string
  name: string;
  gender: "male" | "female"; // Specify the union type for gender
  shiftNow: string | null; // Make sure this matches the expected type
  mobileNumber: string;
  mail: string;
  workingHours: number;
  skill: string; // If skill is an array, change this to string[]
}

export interface EmployeeShift {
  shiftId: string;
  employees: string[];
}

export interface DaySchedule {
  date: string;
  shifts: EmployeeShift[];
}

export type ScheduleData = DaySchedule[];
