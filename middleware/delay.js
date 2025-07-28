export default defineNuxtRouteMiddleware( async(to, from) => {
  if (to.path === '/project') {
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
})
