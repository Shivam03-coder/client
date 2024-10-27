import { EmployeeGenderStats, IEmployee, ScheduleData, Totalemployeedata } from "@/types";
import { ApiService } from "../middleware";

const authendpoints = ApiService.injectEndpoints({
  endpoints: (build) => ({
    signupUser: build.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    signinUser: build.mutation({
      query: (userData) => ({
        url: "/auth/signin",
        method: "POST",
        body: userData,
      }),
    }),
    logoutUser: build.mutation<any, null>({
      query: (userData) => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getTotalactiveEmployee: build.query<Totalemployeedata, null>({
      query: () => ({
        url: "/admin/employees/count",
        method: "GET",
      }),
      transformResponse: (results: any) => results.data,
    }),
    getTotalEmployeegenederCount: build.query<EmployeeGenderStats, null>({
      query: () => ({
        url: "/admin/employees/gender-stats",
        method: "GET",
      }),
      transformResponse: (results: any) => results.data,
    }),
    getEmployees: build.query<IEmployee[], null>({
      query: () => ({
        url: "/admin/employees",
        method: "GET",
      }),
      transformResponse: (results: any) => results.data,
    }),
    getShedules: build.query<any, null>({
      query: () => ({
        url: "/scheduler/schedule",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useSigninUserMutation,
  useGetEmployeesQuery,
  useGetTotalEmployeegenederCountQuery,
  useGetTotalactiveEmployeeQuery,
  useLogoutUserMutation,
  useGetShedulesQuery,
} = authendpoints;
