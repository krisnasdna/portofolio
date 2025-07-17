<template>
  <div ref="textRef" class="overflow-hidden inline-block">
    <slot />
  </div>
</template>

<script setup>
import gsap from 'gsap'

const textRef = ref()

onMounted(() => {
  gsap.set(textRef.value, {
    opacity: 0,
  })

  gsap.to(textRef.value, {
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.05,
    delay: 0.2,
  })
});

</script>

<style scoped>
.char-span {
  display: inline-block;
  overflow: hidden;
}
</style>
