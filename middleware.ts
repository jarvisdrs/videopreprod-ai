// Middleware disabilitato temporaneamente per testare JWT session
// TODO: Riabilitare dopo aver fixato il problema sessione

export const config = {
  matcher: [],
}

export default function middleware() {
  // Nessun controllo — tutte le pagine sono accessibili
  return null
}
