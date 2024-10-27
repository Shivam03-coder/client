"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assuming you have a Select component
import { useFormik } from "formik";
import validate from "./validate"; // Assuming you have a validate function
import React from "react";
import { useSignupUserMutation } from "@/store/api";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch } from "@/store/store";
import { setUser } from "@/store/state/authstate";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UserRound } from "lucide-react";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  password: "",
  profilePhoto: "",
  gender: "",
  skill: "",
  shift: "",
  activehours: "",
  grade: "",
  role: "",
};

const SignupForm: React.FC = () => {
  const [SignupUser] = useSignupUserMutation();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const Router = useRouter();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, action) => {
      console.log("Form Data:", values);
      try {
        // const response = await SignupUser(values).unwrap();
        // console.log("🚀 ~ onSubmit: ~ response:", response);
        // if (response?.status === "Success" || response?.data) {
        //   dispatch(setUser(response.data));
        //   toast({
        //     title: response?.message,
        //   });
        //   action.resetForm();
        //   Router.push("/signin");
        // }
        // if (response?.status === "failed") {
        //   toast({
        //     title: response?.message,
        //   });
        // }
      } catch (error) {
        console.error("Error during sign up:", error);
        toast({
          title: "An error occurred during sign up.",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    },
  });

  return (
    <Card className="space-y-4 w-[50%] mx-auto shadow-2xl p-4">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
            <div className="flex items-center gap-2 md:gap-5">
              <UserRound className="h-6 w-6 text-primary" />
              <input
                type="email"
                placeholder="Enter Your Email or Username"
                className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="email"
                  placeholder="Enter Your First Name"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="email"
                  placeholder="Enter Your Last Name"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="number"
                  placeholder="Enter Your Phone number"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="password"
                  placeholder="Enter Your PassWord"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-start gap-1">
            <Select >
              <SelectTrigger className="p-4">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent className="bg-secondary p-4">
                <SelectGroup>
                  <SelectLabel className="p-4">GENDER</SelectLabel>
                  <SelectItem className="p-4" value="apple">
                    M
                  </SelectItem>
                  <SelectItem className="p-4" value="banana">
                    F
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="password"
                  placeholder="Enter Your PassWord"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="number"
                  placeholder="Enter Your Phone number"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex h-[3.375rem] w-full items-center justify-between self-stretch rounded-lg border border-[#00172f] bg-white px-3 py-2.5">
              <div className="flex items-center gap-2 md:gap-5">
                <UserRound className="h-6 w-6 text-primary" />
                <input
                  type="password"
                  placeholder="Enter Your PassWord"
                  className="bg-transparent font-inter text-lg placeholder:text-[1rem] font-normal text-primary outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full mt-4 text-secondary text-2xl py-6"
        >
          SIGN UP
        </Button>
      </form>
    </Card>
  );
};

export default SignupForm;
