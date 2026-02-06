import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import type { Adapter } from "next-auth/adapters"

// Cast esplicito per evitare problemi di bundling
export const adapter = PrismaAdapter(prisma) as Adapter
