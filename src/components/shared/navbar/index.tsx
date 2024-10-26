import { Input } from "@/components/ui/input";
import { setisSidebarOpen } from "@/store/state/globalstate";
import { useAppSelector } from "@/store/store";
import {
    AlignJustify,
    Fingerprint,
    Search,
    SlidersHorizontal,
    Sun,
  } from "lucide-react";
  import Link from "next/link";
  import { useDispatch } from "react-redux";
  const Navbar = () => {
    const { isSidebarOpen, isdarkMode } = useAppSelector((state) => state.global);
    const dispatch = useDispatch();
    return (
      <div className="flex items-center justify-between bg-secondary-300 px-4 py-3 dark:bg-dark-primary">
        {/* SEARCH BAR */}
        <div className="flex items-center gap-8">
          {!isSidebarOpen ? null : (
            <button
              className="rounded-xl p-2 hover:bg-secondary-100 "
              onClick={() => dispatch(setisSidebarOpen(!isSidebarOpen))}
            >
              <AlignJustify className="size-7 dark:text-dark-secondary" />
            </button>
          )}
          <div className="relative flex p-3 h-min min-w-[230px]">
            <Search className="absolute top-[50%] ml-2 size-6 -translate-y-1/2 cursor-pointer dark:text-primary-600" />
            <Input className="pl-10 bg-secondary " />
          </div>
        </div>
        {/* ICONS */}
        <div className="flex items-center">
          <Link
            href="/app-settings"
            className="size-min rounded-xl p-2 hover:bg-secondary-100 "
          >
            <SlidersHorizontal className="rounded-xl size-7  "/>
          </Link>
          <Link
            href="/authentication"
            className="size-min rounded p-2 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-100 dark:hover:text-primary-700"
          >
            <Fingerprint className="size-7 cursor-pointer" />
          </Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;