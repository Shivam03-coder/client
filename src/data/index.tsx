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
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react"

import { CarouselimageDataType, SidebarLinksData } from "@/types";

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
export const SidebarLinksdata: SidebarLinksData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
