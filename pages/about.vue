<template>
  <div class="mx-5 lg:mx-[80px] my-0">
    <RevealText class="text-[42px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none ">Want to know more?</RevealText>
    <h2 class="lg:text-[28px] text-base font-semibold uppercase text-center lg:mt-60 mt-20 reveal-on-scroll">Let me take you behind the code.</h2>
    <div class="grid lg:grid-cols-2 grid-cols-1 justify-start lg:mt-60 mt-20">
      <div class="justify-self-start row-start-2 lg:row-start-auto mt-16">
        <img src="~/assets/image/karakter.gif" alt="icon">
      </div>
      <div class="flex flex-col gap-10">
          <h2 class="lg:text-[28px] text-base italic font-medium text-[#334EAC] text-justify lg:leading-[1.2] subpixel-antialiased" ref="animatedText1">Hi, I’m Krisna — a tech enthusiast with a passion for front-end development and web  design. I recently graduated with a degree in Information Technology, and now I spend most of my time turning ideas into engaging web experiences.</h2>
          <h2 class="lg:text-[28px] text-base italic font-medium text-[#334EAC] text-justify lg:leading-[1.2] reveal-on-scroll" ref="animatedText2">Outside of design and development, I’m also exploring about  AI and IoT — because I believe the future of the web goes far beyond just screens. I’m always learning, always building, and always up for a challenge.</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText";
definePageMeta({
 title: 'ABOUT'
});
const animatedText1 = ref(null)
const animatedText2 = ref(null)


onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Fungsi animasi untuk teks per karakter
  const animateTextSequentially = () => {
    const split1 = SplitText.create(animatedText1.value, 
    { 
      types: 'lines', 
      linesClass: "line",
      autoSplit: true,
      mask: "lines", 
    })
    const split2 = SplitText.create(animatedText2.value, 
    {  
      types: 'lines', 
      linesClass: "line",
      autoSplit: true,
      mask: "lines", 
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedText1.value,
        start: 'top 90%',
        toggleActions: 'restart none none none',
        once: false,
        markers:false
      },
    })

    tl.from(split1.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "expo.out",
    })
      .to(split1.lines, { opacity: 1 }, '<') // jaga-jaga biar opacity konsisten
      .from(
        split2.lines,
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out", 
        },
        '+=0.1' // jeda setelah animasi pertama selesai
      )
  }

  animateTextSequentially()
});

</script>

<style>

</style>