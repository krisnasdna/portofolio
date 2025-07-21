<template>
  <div class="mx-5 lg:mx-[80px] my-0 lg:overflow-hidden">
    <RevealText class="text-[36px] font-[900] uppercase leading-[1.2] text-center text-[#334EAC] lg:hidden">Let's make good sh*t together</RevealText>
    <RevealText class="hidden lg:text-[147px] font-[900] text-[#334EAC] uppercase leading-[1.1] lg:leading-none lg:text-center lg:flex flex-row justify-center items-start flex-wrap">Let's make good <span class="flex flex-row justify-center items-start lg:gap-2 gap-1">sh<img src="~/assets/image/icon.png" alt="icon" class="lg:w-10 lg:h-10 lg:mt-2 w-5 h-5 reveal">t together</span> </RevealText>
    <div class="grid lg:grid-cols-3 grid-cols-1 justify-center items-center h-full lg:mt-10">
      <div class="lg:flex flex-row items-center text-center lg:gap-20 lg:self-end mb-6 justify-start hidden reveal">
        <NuxtLink to="https://www.instagram.com/krisnasdna_" class="text-base underline italic">Instagram</Nuxtlink>
        <NuxtLink to="https://github.com/krisnasdna" class="text-base underline italic">Github</Nuxtlink>
        <NuxtLink to="instagram.com" class="text-base underline italic">Instagram</Nuxtlink>
        <NuxtLink to="instagram.com" class="text-base underline italic">Instagram</Nuxtlink>
      </div>
      <div class="justify-self-center self-start mt-10">
        <div class="bg-[#334EAC] px-5 py-3 lg:w-[483px] text-center rounded-xl reveal">
          <NuxtLink to="gmail.com" class=" text-white lg:text-[28px] text-base font-semibold uppercase">Hello@Krisna.com</NuxtLink>
        </div>
      </div> 
      <div class="justify-self-end lg:mt-6 mt-20 reveal">
        <img src="~/assets/image/karakter2.png" alt="icon">
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

definePageMeta({
 title: 'CONTACT'
});

onMounted( async ()=>{
  window.dispatchEvent(new Event('page:ready'))
  $gsap.from('.reveal',{
    autoAlpha: 0,
    opacity: 0,
    duration: 1.2,
    ease: 'sine.out',
    stagger: 0.5,
    delay: 0.2,
  })
});
</script>

<style>

</style>