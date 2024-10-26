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
