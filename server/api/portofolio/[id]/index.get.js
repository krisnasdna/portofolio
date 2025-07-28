import  prisma  from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id)
  const projects = await prisma.portofolio.findUnique({
    where:{
        id: id
    }
  })
  return projects
})