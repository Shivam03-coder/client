"clinet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WordRotate from "@/components/ui/word-rotate";
import { useToast } from "@/hooks/use-toast";
import { useLogoutUserMutation } from "@/store/api";
import { setisSidebarOpen } from "@/store/state/globalstate";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  AlignJustify,
  Fingerprint,
  LogOutIcon,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const { isSidebarOpen, isdarkMode } = useAppSelector((state) => state.global);
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const [LogoutUser] = useLogoutUserMutation();
  const handleLogout = async () => {
    const response = await LogoutUser(null);
    if (response.data) {
      toast({
        title: "Succesfully logout",
      });
    }
  };
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
          href="/signin"
          className="size-min rounded-xl p-2 hover:bg-secondary-100 "
        >
          <LogOutIcon onClick={handleLogout} className="rounded-xl size-7" />
        </Link>
        <Link
          href="/signin"
          className="size-min rounded p-2 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-100 dark:hover:text-primary-700"
        >
          <Fingerprint className="size-7 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

export const PublicNavbar: React.FC = () => {
  return (
    <nav className="flex py-5 mx-8 rounded-3xl justify-between items-center mt-5 bg-secondary">
      <div className="px-5 text-2xl inline-flex items-center  font-inter font-bold">
        HRMS {"- "}
        <WordRotate
          className="text-2xl font-bold text-black dark:text-white"
          words={["TEAM", "TESLA", "INDORE", "MP"]}
        />
      </div>
      <Button className="px-5 text-xl mx-6 text-secondary inline-flex items-center  font-inter font-bold">
        SIGNIN
      </Button>
    </nav>
  );
};
