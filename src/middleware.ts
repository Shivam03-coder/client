import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Extract the refresh token from cookies
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // Define paths that should not be accessible for logged-in users
  const restrictedPathsForLoggedIn = ["/", "/signup", "/signin"]; // Include root path
  const redirectToDashboard = "/dashboard";
  const redirectToSignin = "/signin";

  // Check if the user is authenticated
  const isAuthenticated = Boolean(refreshToken);

  // Redirect logic
  if (isAuthenticated && restrictedPathsForLoggedIn.includes(request.nextUrl.pathname)) {
    // If the user is authenticated and tries to access restricted paths, redirect to dashboard
    return NextResponse.redirect(new URL(redirectToDashboard, request.url));
  }

  if (!isAuthenticated && !restrictedPathsForLoggedIn.includes(request.nextUrl.pathname)) {
    // If the user is not authenticated and tries to access other paths, redirect to signin
    return NextResponse.redirect(new URL(redirectToSignin, request.url));
  }

  // Proceed with the request if no conditions for redirection are met
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/signup", "/signin", "/dashboard", "/profile"],
};
