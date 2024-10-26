"use client";
import Navbar from "@/components/shared/navbar";
import AppSidebar from "@/components/shared/sidebar/appsidebar";
import { useAppSelector } from "@/store/store";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useAppSelector((state) => state.global);
  return (
    <div className="flex min-h-screen w-full bg-secondary-300 text-primary-600">
      <AppSidebar />
      <main
        className={`flex w-full flex-col bg-secondary-300 dark:bg-dark-primary ${
          !isSidebarOpen ? "md:pl-72" : ""
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default layout;
