<template>
  <div class="mx-5 lg:mx-[80px] my-0 lg:overflow-hidden max-h-screen">
    <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <client-only>
        <RevealText class="text-[68px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none text-center"><span class="block lg:inline">My</span></RevealText>
        <RevealText class="text-[68px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none text-center"><span class="block lg:inline">Project</span></RevealText>
      </client-only>
    </div>
    <Caraousel :items="items" class="h-full" />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

definePageMeta({
  title: 'PROJECT'
})

const {data: items} = await useFetch('/api/portofolio')

onMounted(async () => {
  await nextTick()
  $gsap.from('.reveal', {
    autoAlpha: 0,
    opacity: 0,
    duration: 1.2,
    ease: 'sine.out',
    stagger: 0.3,
    delay: 0.2,
  })
});

</script>

<style>

</style>