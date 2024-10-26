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
  }),
});

export const { useSignupUserMutation ,useSigninUserMutation  } = authendpoints;
