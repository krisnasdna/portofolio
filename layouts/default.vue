<template>
  <div class="flex flex-col max-h-screen gap-12 lg:gap-8">
    <PageTransition/>
      <Header class="reveal"/>
      <slot />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()
onMounted(()=>{
  $gsap.from('.reveal',{
    autoAlpha: 0,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.3,
    delay: 0.2,
  })
});

</script>


<style>

</style>