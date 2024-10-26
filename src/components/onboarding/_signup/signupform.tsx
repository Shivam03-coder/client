"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import validate from "./validate"; // Assuming you have a validate function
import React from "react";
import { useSignupUserMutation } from "@/store/api/auth";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch } from "@/store/store";
import { setUser } from "@/store/state/authstate";
import { useRouter } from "next/navigation";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  password: "",
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
        const response = await SignupUser(values).unwrap();
        console.log("🚀 ~ onSubmit: ~ response:", response)
        if (response?.status === "Success" || response?.data) {
          dispatch(setUser(response.data));

          toast({
            title: response?.message,
          });

          action.resetForm();

          Router.push("/signin");
        }
        if (response?.status === "failed") {
          toast({
            title: response?.message,
          });
        }
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
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 w-[50%] mx-auto shadow-2xl p-4"
    >
      <div>
        <label htmlFor="firstname" className="block text-sm font-medium">
          First Name
        </label>
        <Input
          type="text"
          id="firstname"
          name="firstname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
          placeholder="Enter your first name"
          required
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lastname" className="block text-sm font-medium">
          Last Name
        </label>
        <Input
          type="text"
          id="lastname"
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
          placeholder="Enter your last name"
          required
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
        ) : null}
      </div>

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
        <label htmlFor="phonenumber" className="block text-sm font-medium">
          Phone Number
        </label>
        <Input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phonenumber}
          placeholder="Enter your phone number"
          required
        />
        {formik.touched.phonenumber && formik.errors.phonenumber ? (
          <div className="text-red-500 text-sm">
            {formik.errors.phonenumber}
          </div>
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
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
