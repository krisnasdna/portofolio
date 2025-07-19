export default defineNuxtRouteMiddleware( async(to, from) => {
  if (to.path === '/project') {
    // Delay fetch simulation
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
})
