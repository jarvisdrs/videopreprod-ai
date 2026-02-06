import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

// Secret deve corrispondere a AUTH_SECRET su Vercel
const secret = process.env.AUTH_SECRET

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Ottieni il token JWT dalla sessione
  const token = await getToken({ 
    req: request, 
    secret,
    secureCookie: process.env.NODE_ENV === "production"
  })
  
  // Se l'utente è loggato e sta cercando di accedere a /login, reindirizza alla dashboard
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }
  
  // Se l'utente NON è loggato e sta cercando di accedere a pagine protette, reindirizza al login
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  
  // Altrimenti, procedi normalmente
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/login",
    "/dashboard/:path*",
    "/api/protected/:path*",
  ],
}
