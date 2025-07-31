<template>
  <div class="mx-5 lg:mx-[80px] my-0 lg:overflow-hidden max-h-screen" v-if="isPageReady">
    <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <client-only>
        <RevealText class="text-[68px] md:text-[73px] lg:text-[132px] 2xl:text-[185px] font-[900] text-[#334EAC] uppercase leading-none text-center"><span class="block lg:inline">My</span></RevealText>
        <RevealText class="text-[68px] md:text-[73px] lg:text-[132px] 2xl:text-[185px] font-[900] text-[#334EAC] uppercase leading-none text-center"><span class="block lg:inline">Project</span></RevealText>
      </client-only>
    </div>
    <div v-if="pending">Loading...</div>
    <Caraousel :items="items" class="h-full lg:pt-10 2xl:pt-0" />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()
const isPageReady = ref(false)

const { data: items, pending } = await useFetch('/api/portofolio',{server:false})

onMounted(async () => {
  while (pending.value) await new Promise(resolve => setTimeout(resolve, 50))
  await nextTick()
  isPageReady.value = true
  await nextTick()

  window.dispatchEvent(new Event('page:ready')) 

  $gsap.from('.reveal', {
    autoAlpha: 0,
    opacity: 0,
    duration: 1.2,
    ease: 'sine.out',
    stagger: 0.3,
    delay: 0.2,
  })
})


</script>

<style>

</style>