<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <!-- Mobile Heading -->
      <div class="flex lg:hidden flex-col items-start px-5 gap-10 mt-28">
        <div class="w-full text-center">
          <h1 class="text-3xl font-extrabold text-[#334EAC] uppercase leading-tight">
            Amed Turtle Snorkeling Trips
          </h1>
        </div>
        <div class="flex justify-between w-full text-sm">
          <NuxtLink to="https://amedturtlesnorkeling.com" class="underline">Visit Website</NuxtLink>
          <p class="font-bold uppercase text-[#334EAC]">@2025</p>
        </div>
      </div>

      <!-- Desktop Heading -->
      <div class="hidden lg:flex justify-between items-end px-5 lg:px-20 pt-[600px]">
        <NuxtLink to="https://amedturtlesnorkeling.com" class="underline text-base">Visit Website</NuxtLink>
        <h1 class="text-[68px] font-extrabold text-[#334EAC] uppercase leading-none text-center">
          Amed Turtle Snorkeling Trips
        </h1>
        <p class="font-bold uppercase text-[#334EAC] text-base">@2025</p>
      </div>

      <!-- Parallax Hero Image -->
      <div class="relative w-full h-screen overflow-hidden my-10">
        <img
          src="~/assets/image/amed-thum.png"
          alt="thumb"
          class="object-cover w-full h-full"
          data-speed="0.5"
        />
      </div>

      <!-- Project Overview -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-20 my-20">
        <h2 class="text-2xl lg:text-3xl font-extrabold text-[#334EAC] uppercase">Project Overview</h2>
        <div class="flex flex-col gap-8 text-sm lg:text-base">
          <p class="text-justify">
            I designed and developed the official website for Amed Turtle Snorkeling Trip, a local snorkeling tour provider based in Amed, Bali. The project involved crafting a modern, responsive website that highlights their eco-tourism experience through vibrant visuals and a smooth user interface.
          </p>
          <div class="flex justify-between border-b border-black py-2">
            <h3 class="uppercase font-semibold">Project Type</h3>
            <h3 class="uppercase font-semibold">Digital Product</h3>
          </div>
          <div class="flex justify-between border-b border-black py-2">
            <h3 class="uppercase font-semibold">Service</h3>
            <div class="text-right">
              <p class="uppercase font-semibold">UI Design</p>
              <p class="uppercase font-semibold">Web Development</p>
            </div>
          </div>
          <div class="flex justify-between border-b border-black py-2">
            <h3 class="uppercase font-semibold">Year</h3>
            <h3 class="uppercase font-semibold">2025</h3>
          </div>
        </div>
      </div>
      <div class="relative w-full h-full">
        <img src="~/assets/image/mockup_amed.png" alt="mockup" class="w-full h-full" />
      </div>
      <div class="relative w-full h-full">
        <img src="~/assets/image/amed-full.png" alt="full" class="w-full h-full" />
      </div>
      <div class=" relative w-full h-auto mb-20">
        <img src="~/assets/image/mobile-amed.png" alt="mobile" class="w-full h-auto" />
      </div>
      <div class="mt-20">
        adwadwaawd
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap, $ScrollSmoother, $SplitText } = useNuxtApp()

onMounted(() => {
  // Init ScrollSmoother
  $ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.2,
    effects: true,
  })

  // Reveal Heading Animations
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
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
#smooth-content {
  will-change: transform;
}
</style>
