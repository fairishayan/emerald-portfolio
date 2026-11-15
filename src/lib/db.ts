import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

function createPrismaClient() {
  return new PrismaClient()
}

function getOrCreatePrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient()
  }
  return globalForPrisma.prisma
}

// Lazy proxy — defers PrismaClient creation to the first actual DB call.
// This prevents "Failed to collect page data" errors during `next build`.
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    return getOrCreatePrisma()[prop as keyof PrismaClient]
  },
})

export default prisma
