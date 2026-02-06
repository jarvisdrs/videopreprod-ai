// Middleware disabilitato - usando protezione client-side sulla dashboard
// Questo evita hydration mismatch con JWT

export const config = {
  matcher: [],
}

export default function middleware() {
  return null
}
