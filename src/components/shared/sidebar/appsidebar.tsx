"use client";
import { sideBarLinksData } from "@/data";
import { setisSidebarOpen } from "@/store/state/globalstate";
import { useAppSelector } from "@/store/store";
import { CircleX, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SidebarLinks from "./sidebarLinks";

const AppSidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.global);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed z-50 flex h-[100%] flex-col  justify-between overflow-y-auto overflow-x-hidden bg-secondary-300 shadow-xl transition-all duration-300 dark:bg-dark-primary ${
        !isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full w-0"
      }`}
      style={{
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <div className="flex h-[100%] w-full flex-col justify-start dark:text-secondary-100">
        <div className="z-50 flex min-h-16 w-72 items-center justify-between bg-secondary-200 px-6 dark:bg-primary-500">
          <div className="text-2xl font-bold tracking-wide">TESLA TEAM</div>
          {!isSidebarOpen ? (
            <button
              className="py-3"
              onClick={() => dispatch(setisSidebarOpen(!isSidebarOpen))}
            >
              <CircleX className="size-7" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-secondary-100 px-8 py-3">
          <Image src="/applogo.png" alt="Logo-image" width={45} height={50} />
          <div className="font-TitilliumWeb text-base font-medium">
            <h3 className="font-medium">SYSTEM</h3>
            <div className="mt-1 flex items-center gap-2">
              <Lock className="mt-1 size-4" />
              <p className="mt-2 text-sm font-medium opacity-85">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full">
          {sideBarLinksData.map(({ href, icon, label }, i) => (
            <SidebarLinks key={href} href={href} icon={icon} label={label} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppSidebar;
