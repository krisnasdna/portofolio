<template>
  <div class="mx-5 lg:mx-[80px] my-0">
    <RevealText class="text-[42px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none ">Want to know more?</RevealText>
    <h2 class="lg:text-[28px] text-base font-semibold uppercase text-center lg:mt-60 mt-20 reveal-on-scroll">Let me take you behind the code.</h2>
    <div class="grid lg:grid-cols-2 grid-cols-1 justify-start lg:mt-60 mt-20">
      <div class="justify-self-start row-start-2 lg:row-start-auto mt-16">
        <img src="~/assets/image/karakter.gif" alt="icon">
      </div>
      <div class="flex flex-col gap-10">
          <h2 class="lg:text-[28px] text-base italic font-medium text-[#334EAC] text-justify lg:leading-[1.2] inline" ref="animatedText1">Hi, I’m Krisna — a tech enthusiast with a passion for front-end development and web  design. I recently graduated with a degree in Information Technology, and now I spend most of my time turning ideas into engaging web experiences.</h2>
          <h2 class="lg:text-[28px] text-base italic font-medium text-[#334EAC] text-justify lg:leading-[1.2] inline" ref="animatedText2">Outside of design and development, I’m also exploring about  AI and IoT — because I believe the future of the web goes far beyond just screens. I’m always learning, always building, and always up for a challenge.</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { $gsap, $ScrollTrigger, $SplitText } = useNuxtApp()
definePageMeta({ title: 'ABOUT' })

const animatedText1 = ref(null)
const animatedText2 = ref(null)

let ctx = null

const animateTextSequentially = () => {
  if (ctx) ctx.revert()

  ctx = $gsap.context(() => {
    $ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const split1 = $SplitText.create(animatedText1.value, {
      type: 'lines',
      linesClass: 'line',
      mask: 'lines',
    })

    const split2 = $SplitText.create(animatedText2.value, {
      type: 'lines',
      linesClass: 'line',
      mask: 'lines',
    })

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: animatedText1.value,
        start: 'top 90%',
        toggleActions: 'restart none none none',
        once: false,
      },
    })

    tl.from(split1.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'expo.out',
    })
      .to(split1.lines, { opacity: 1 }, '<')
      .from(
        split2.lines,
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'expo.out',
        },
        '+=0.2' // jeda antar animasi
      )
  })
}

onMounted(async () => {
  await nextTick()
  animateTextSequentially()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    animateTextSequentially()
  }
)

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
});
</script>

<style>

</style>