<template>
  <div ref="overlay" class="fixed inset-0 bg-[#334EAC] z-[9999] flex items-center justify-center text-white overflow-hidden">
    <h1 ref="loadingText" class="text-4xl font-bold tracking-widest uppercase opacity-0">Loading...</h1>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const overlay = ref(null)
const loadingText = ref(null)
const router = useRouter()

onMounted(() => {
  $gsap.set(overlay.value, { y: '100%' })
  $gsap.set(loadingText.value, { opacity: 0, y: 20 })
})

router.beforeEach(async (to, from, next) => {
  await playIn()
  next()
})

router.afterEach(() => {
  const stop = router.afterEach(() => {}) // optional guard

  const handlePageReady = () => {
    playOut()
    window.removeEventListener('page:ready', handlePageReady)
  }

  window.addEventListener('page:ready', handlePageReady)
})



function playIn() {
  return new Promise((resolve) => {
    document.body.style.overflow = 'hidden'

    const tl = $gsap.timeline({
      onComplete: resolve
    })

    tl.to(overlay.value, {
      y: 0,
      duration: 0.8,
      ease: 'power4.inOut',
    })
    .to(loadingText.value, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4')
  })
}

function playOut() {
  const tl = $gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = ''
      $gsap.set(overlay.value, { y: '100%' })
      $gsap.set(loadingText.value, { opacity: 0, y: 20 })
    },
  })
  tl.to(loadingText.value, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power2.in'
  })
  .to(overlay.value, {
    y: '-100%',
    duration: 0.8,
    ease: 'power4.inOut',
  }, '-=0.2')
}
</script>

<style scoped>
div {
  transform: translateY(100%);
}
</style>

