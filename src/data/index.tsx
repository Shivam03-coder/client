import {
  Home,
  Hourglass,
  Search,
  TimerIcon,
  UserRound,
  UsersRound,
} from "lucide-react";

import { CarouselimageDataType, sideBarLinkDataTypes, UserData } from "@/types";

export const carouselImageData: Array<CarouselimageDataType> = [
  {
    id: 0,
    img: "/g3.png",
    heading: "Streamline Your Coffee Shop Operations",
    descr:
      "Our HRMS is designed to optimize your coffee shop's workforce management, making scheduling and employee management a breeze.",
  },
  {
    id: 1,
    img: "/g2.png",
    heading: "Empower Your Team with Efficient Scheduling",
    descr:
      "Easily create and manage employee shifts, ensuring that your coffee shop runs smoothly while keeping your staff happy and engaged.",
  },
  {
    id: 2,
    img: "/g1.png",
    heading: "Enhance Employee Experience",
    descr:
      "With our HRMS, prioritize employee well-being by considering personal constraints and labor laws, fostering a supportive workplace.",
  },
  {
    id: 3,
    img: "/g4.png",
    heading: "Achieve Operational Excellence",
    descr:
      "Transform your coffee shop management with data-driven insights and automation, allowing you to focus on serving your customers.",
  },
];

export const sideBarLinksData: Array<sideBarLinkDataTypes> = [
  {
    href: "/admin-dashboard",
    icon: Home,
    label: "Home",
  },
  {
    href: "/admin-dashboard/employee-management",
    icon: UsersRound,
    label: "User-Manage",
  },
  {
    href: "/admin-dashboard/scheduling",
    icon: TimerIcon,
    label: "Scheduling",
  },
];

export const sampleUserData: UserData[] = Array.from(
  { length: 40 },
  (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    outletLocation: `Outlet ${(i % 3) + 1}`,
    shiftNow: `Shift ${i % 2 === 0 ? "Morning" : "Evening"}`,
    mobileNumber: `+91-90000${i + 1000}`,
    mail: `user${i + 1}@example.com`,
    leaveDate: `2024-11-${String((i % 28) + 1).padStart(2, "0")}`,
    workingHours: `${(i % 8) + 1} hours`,
    read: i % 2 === 0,
    write: i % 3 === 0,
  })
);
