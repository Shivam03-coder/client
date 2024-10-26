"use client";

import { Toaster } from "@/components/ui/toaster";
import { setUser } from "@/store/state/authstate";
import StoreProvider, { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      dispatch(setUser(JSON.parse(userInfo)));
    }
  }, [dispatch]);
  return (
    <div className="text-primary-600 flex min-h-screen w-full">
      <main className="dark:bg-dark-primary flex w-full flex-col">
        {children}
      </main>
    </div>
  );
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AppLayout>{children}</AppLayout>
      <Toaster />
    </StoreProvider>
  );
};

export default AppWrapper;
