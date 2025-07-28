import prisma from "~/lib/prisma"


export default defineEventHandler(async () => {
  const project = await prisma.portofolio.findMany({
      orderBy: { id: 'asc' }
  })
  return project
})