<template>
  <div ref="textRef" class="overflow-hidden">
    <slot />
  </div>
</template>

<script setup>
const { $gsap, $SplitText } = useNuxtApp()
const textRef = ref()

onMounted(() => {
  const split = $SplitText.create(textRef.value, {
    type: 'chars',
    charsClass: 'char-span',
    mask: 'chars'
  })

  $gsap.set(split.chars, {
    yPercent: -100,
    opacity: 0,
  })

  $gsap.to(split.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 1.2,
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
