<template>
  <div class="mx-5 lg:mx-[80px] my-0 lg:overflow-hidden ">
    <RevealText class="text-[68px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none text-center">Krisna Sedana</RevealText>
    <div class="grid lg:grid-cols-3 grid-cols-1 justify-center items-center h-full mt-10 ">
      <div class="flex flex-col justify-center items-center text-center gap-10 reveal">
        <div >
          <img src="~/assets/image/icon-star.png" alt="">
        </div>
        <h2 class="text-base font-medium uppercase">
          Krisna (he/him) is an FronT-End <br> Developer & Web Designer from <br>indonesia
        </h2>
      </div>
      <div class="justify-self-center mt-14 reveal">
        <img src="~/assets/image/karakter.gif" alt="icon">
      </div>
      <div class="flex flex-col justify-center items-center text-center gap-10 row-start-2 mt-6 lg:mt-0 lg:row-start-auto reveal">
        <div class="hidden lg:inline">
          <img src="~/assets/image/icon-star.png" alt="karakter" class="">
        </div>
          <h2 class="text-base font-medium uppercase ">passionate about creating <br> unforgettable and beautiful <br> digital experiences.</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

definePageMeta({
 title: 'HOME'
});

onMounted(()=>{
  $gsap.from('.reveal',{
    autoAlpha: 0,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.3,
    delay: 0.2,
  })
})
</script>

<style>

</style>