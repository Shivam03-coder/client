"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import validate from "./validate";
import React from "react";
import { useSigninUserMutation } from "@/store/api/auth";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm: React.FC = () => {
  const [Signin] = useSigninUserMutation();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const Router = useRouter();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, action) => {
      console.log("Form Data:", values);
      try {
        const response = await Signin(values).unwrap();
        if (response?.status === "Success" || response?.data) {
          toast({
            title: response?.message,
          });
          action.resetForm();
          Router.push("/dashboard");
        } else if (response?.status === "failed") {
          toast({
            title: response?.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        toast({
          title: "An error occurred during sign-in.",
        });
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 w-[50%] mx-auto shadow-2xl p-4"
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email"
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Enter your password"
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <Button type="submit" className="w-full mt-4">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
