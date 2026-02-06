import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/protected/:path*",
    "/projects/:path*",
    "/scripts/:path*",
    "/tasks/:path*",
    "/team/:path*",
    "/budget/:path*",
    "/locations/:path*",
  ],
}
