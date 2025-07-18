import  prisma  from '~/lib/prisma'

export default defineEventHandler(async () => {
  const projects = await prisma.portfolio.findMany()
  return projects
})