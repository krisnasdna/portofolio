<template>
  <div
    ref="carousel"
    class="overflow-hidden w-[320px] mx-auto relative touch-pan-x"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div ref="track" class="flex w-max">
      <div
        v-for="(item, i) in visibleItems"
        :key="i"
        :ref="el => itemRefs[i] = el"
        class="carousel-item w-[320px] shrink-0 h-[200px] bg-sky-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold opacity-50 scale-90 transition-all duration-300 ease-in-out"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
const { $gsap, $Draggable } = useNuxtApp()

// Raw items
const rawItems = ['One', 'Two', 'Three', 'Four', 'Five']

// Create clone items (prepend + append)
const visibleItems = computed(() => {
  return [
    rawItems[rawItems.length - 1], // clone last
    ...rawItems,
    rawItems[0], // clone first
  ]
})

const itemRefs = []
const carousel = ref(null)
const track = ref(null)

const currentIndex = ref(1) // because 0 is clone
const itemWidth = 320
const threshold = 50
let startX = 0

const updatePosition = (index, animate = true) => {
  const centerOffset = (carousel.value.offsetWidth - itemWidth) / 2
  const targetX = -(index * itemWidth) + centerOffset

  $gsap.to(track.value, {
    x: targetX,
    duration: animate ? 0.4 : 0,
    ease: 'power2.out',
    onComplete: fixLoop,
  })

  itemRefs.forEach((el, i) => {
    $gsap.to(el, {
      scale: i === index ? 1 : 0.9,
      opacity: i === index ? 1 : 0.4,
      duration: 0.4,
      ease: 'power2.out',
    })
  })
}

// Handle loop secara seamless
const fixLoop = () => {
  // Jika ke kanan lewat batas
  if (currentIndex.value === visibleItems.value.length - 1) {
    currentIndex.value = 1
    updatePosition(currentIndex.value, false)
  }

  // Jika ke kiri lewat batas
  if (currentIndex.value === 0) {
    currentIndex.value = rawItems.length
    updatePosition(currentIndex.value, false)
  }
}

const onTouchStart = (e) => {
  startX = e.changedTouches[0].clientX
}

const onTouchEnd = (e) => {
  const endX = e.changedTouches[0].clientX
  const delta = endX - startX

  if (delta < -threshold) {
    currentIndex.value++
  } else if (delta > threshold) {
    currentIndex.value--
  }

  updatePosition(currentIndex.value)
}

onMounted(async () => {
  await nextTick()

  updatePosition(currentIndex.value, false)

  let dragStart = 0
  let dragEnd = 0

  $Draggable.create(track.value, {
    type: 'x',
    onDragStart() {
      dragStart = this.x
    },
    onDragEnd() {
      dragEnd = this.x
      const delta = dragEnd - dragStart

      if (delta < -threshold) {
        currentIndex.value++
      } else if (delta > threshold) {
        currentIndex.value--
      }

      updatePosition(currentIndex.value)
    },
  })
});
</script>

<style scoped>
.carousel-item {
  will-change: transform, opacity;
}
</style>
