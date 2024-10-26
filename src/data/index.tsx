import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  Home,
  Hourglass,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Search,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
  UserRound,
  UsersRound,
} from "lucide-react"

import { CarouselimageDataType, sideBarLinkDataTypes } from "@/types";

export const carouselIamgeData: Array<CarouselimageDataType> = [
  {
    id: 0,
    img: "/g3.png",
    heading: "Elevate Your Projects to New Heights",
    descr:
      "Meet your new productivity powerhouse. Our tool is designed to be your go-to partner in achieving maximum efficiency and project success.",
  },
  {
    id: 1,
    img: "/g2.png",
    heading: "Effortless Collaboration, Seamless Success",
    descr:
      "Discover a new level of project management excellence. Our tool helps you streamline processes, ensuring your projects soar above the rest.",
  },
  {
    id: 2,
    img: "/g1.png",
    heading: "From Planning to Perfection",
    descr:
      "Discover a new level of project management excellence. Our tool helps you streamline processes, ensuring your projects soar above the rest.",
  },
  {
    id: 3,
    img: "/g4.png",
    heading: "Manage Smarter, Deliver Faster",
    descr:
      "Revolutionise your project management. Smart features and intuitive design help you manage projects more effectively and deliver results in record time.",
  },
];
export const sideBarLinksData: Array<sideBarLinkDataTypes> = [
  {
    href: "/home",
    icon: Home,
    label: "Home",
  },
  {
    href: "/timeline",
    icon: Hourglass,
    label: "Timeline",
  },
  {
    href: "/search",
    icon: Search,
    label: "Search",
  },
  {
    href: "/users",
    icon: UserRound,
    label: "User",
  },
  {
    href: "/teams",
    icon: UsersRound,
    label: "Teams",
  },
];