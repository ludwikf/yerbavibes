import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (req.nextauth.token?.role !== "admin") {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);

export const config = { matcher: ["/admin-cp", "/api/admin/:path*"] };
