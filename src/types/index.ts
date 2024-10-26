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

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Team {
  name: string;
  logo: any;
  plan: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: any; // Replace 'any' with the appropriate type for the icon
  isActive?: boolean;
  items?: Array<{ title: string; url: string }>;
}

export interface Project {
  name: string;
  url: string;
  icon: any; // Replace 'any' with the appropriate type for the icon
}

export interface SidebarLinksData {
  user: User;
  teams: Team[];
  navMain: NavItem[];
  projects: Project[];
}
