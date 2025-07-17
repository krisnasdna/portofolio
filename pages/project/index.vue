<template>
  <div class="mx-5 lg:mx-[80px] my-0 lg:overflow-hidden">
    <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <RevealText class="text-[68px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none text-center"><span class="block lg:inline">My</span></RevealText>
        <RevealText class="text-[68px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none text-center"><span class="block lg:inline">Project</span></RevealText>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 justify-center items-center h-full gap-10 lg:gap-0 my-10">
      <div class="flex flex-col justify-center items-center text-center gap-10 ">
        <h2 class="text-base font-medium uppercase reveal">
          Krisna (he/him) is an FronT-End <br> Developer & Web Designer from <br>indonesia
        </h2>
      </div>
      <div class="justify-self-center lg:mt-2 reveal">
        <NuxtLink to="/project/1"><img src="~/assets/image/cover-amed.png" alt="icon" ></NuxtLink>
      </div>
      <div class="flex flex-col justify-center items-center text-center gap-10">
          <h2 class="text-base font-medium uppercase reveal">passionate about creating <br> unforgettable and beautiful <br> digital experiences.</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

definePageMeta({
 title: 'PROJECT'
});

onMounted(()=>{
  $gsap.from('.reveal',{
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