<template>
  <div id="smooth-wrapper" v-if="isPageReady">
    <div id="smooth-content">
      <!-- Mobile Heading -->
      <div class="flex lg:hidden flex-col items-start px-5 gap-10 mt-28">
        <div class="w-full text-center">
          <h1 class="text-3xl font-extrabold text-[#334EAC] uppercase leading-tight">
             {{ projects.title }}
          </h1>
        </div>
        <div class="flex justify-between w-full text-sm">
          <NuxtLink :to="projects.link" class="underline">{{ projects.link != '' ? 'Visit Website': 'Hello'}}</NuxtLink>
          <p class="font-bold uppercase text-[#334EAC]">@2025</p>
        </div>
      </div>

      <!-- Desktop Heading -->
      <div class="hidden lg:flex justify-between items-end px-5 lg:px-20 pt-[600px]">
        <NuxtLink :to="projects.link" class="underline text-base">{{ projects.link != '' ? 'Visit Website': 'Hello'}}</NuxtLink>
        <h1 class="text-[68px] font-extrabold text-[#334EAC] uppercase leading-none text-center">
          {{ projects.title }}
        </h1>
        <p class="font-bold uppercase text-[#334EAC] text-base">@{{ projects.year }}</p>
      </div>

      <!-- Parallax Hero Image -->
      <div class="relative w-full h-screen overflow-hidden my-10">
        <NuxtImg
          :src="projects.thumbnail"
          format="webp"
          alt="Thubmnail"
          class="w-full h-full object-cover object-center"
          data-speed="0.5"
        />
      </div>

      <!-- Project Overview -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-20 my-20">
        <h2 class="text-2xl lg:text-3xl font-extrabold text-[#334EAC] uppercase">Project Overview</h2>
        <div class="flex flex-col gap-8 text-sm lg:text-base">
          <div v-for="description in projects.description" :key="description">
              <p class="text-justify">{{ description }}</p>
          </div>
          <div class="flex justify-between border-b border-black py-2">
            <h3 class="uppercase font-semibold">Project Type</h3>
            <h3 class="uppercase font-semibold">{{ projects.type }}</h3>
          </div>
          <div class="flex justify-between border-b border-black py-2">
            <h3 class="uppercase font-semibold">Service</h3>
            <div class="text-right flex flex-col gap-4">
              <p class="uppercase font-semibold" v-for="(service, index ) in projects.services" :key="index">{{ service }}</p>
            </div>
          </div>
          <div class="flex justify-between border-b border-black py-2">
            <h3 class="uppercase font-semibold">Year</h3>
            <h3 class="uppercase font-semibold">{{ projects.year }}</h3>
          </div>
        </div>
      </div>
      <div class="relative w-full h-full" v-for="(result, index) in projects.screenshots" :key="index">
        <NuxtImg
          :src="result"
          format="webp"
          alt="Result"
          class="w-full h-auto object-cover"
        />
      </div>
      <div class="flex justify-end py-10 px-4 md:px-20">
        <NuxtLink
          v-if="nextProjectId"
          :to="`/project/${nextProjectId}`"
          class="text-[#334EAC]  font-bold  uppercase text-[68px] lg:text-[230px]"
        >
          Next
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap, $ScrollSmoother, $SplitText } = useNuxtApp()
const route = useRoute()
const isPageReady = ref(false)
const { data:projects, pending } = await useFetch(`/api/portofolio/${route.params.id}`, { server: false })
const { data: projectsList } = await useFetch('/api/portofolio')

const currentIndex = computed(() => {
  return projectsList.value?.findIndex(p => p.id === Number(route.params.id))
})

const nextProjectId = computed(() => {
  if (!projectsList.value?.length) return null
  const nextIndex = (currentIndex.value + 1) % projectsList.value.length
  return projectsList.value[nextIndex]?.id || null
})

onMounted(async () => {
  while (pending.value) await new Promise(resolve => setTimeout(resolve, 50))
  await nextTick()
  isPageReady.value = true
  await nextTick()

  window.dispatchEvent(new Event('page:ready')) 

  await nextTick() 

  $ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.2,
    effects: true,
  })

  const headers = document.querySelectorAll('h1, h2')
  headers.forEach((el) => {
    const split = $SplitText.create(el, { type: 'lines' })
    $gsap.from(split.lines, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.05,
    })
  })
});

</script>

<style scoped>
#smooth-wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
#smooth-content {
  will-change: transform;
  padding-bottom: 80px;
}
</style>
