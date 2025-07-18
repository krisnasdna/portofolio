<template>
  <div
    class="overflow-hidden relative w-full"
    ref="carousel"
    @mousedown="onDragStart"
    @touchstart="onDragStart"
    @mousemove="onDragMove"
    @touchmove="onDragMove"
    @mouseup="onDragEnd"
    @touchend="onDragEnd"
    @mouseleave="onDragEnd"
  >
    <div
      ref="track"
      class="flex"
      :class="{ 'transition-transform duration-300 ease-out': !jumping }"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <div
        v-for="(item, index) in clonedItems"
        :key="index"
        class="min-w-full flex-shrink-0 flex justify-center items-center h-64 bg-gray-200 text-3xl font-bold"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const originalItems = ['1', '2', '3', '4', '5']
const clonedItems = ref([])

const currentIndex = ref(1)
const carousel = ref(null)
const translateX = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentDrag = ref(0)
const jumping = ref(false) 

const getSlideWidth = () => carousel.value?.offsetWidth || 0


onMounted(() => {
  clonedItems.value = [
    originalItems[originalItems.length - 1], 
    ...originalItems,
    originalItems[0] 
  ]
  nextTick(() => {
    goToSlide(currentIndex.value)
    window.addEventListener('resize', () => goToSlide(currentIndex.value))
  })
})

const goToSlide = (index, smooth = true) => {
  const width = getSlideWidth()
  jumping.value = !smooth
  translateX.value = -index * width
  currentIndex.value = index
}

const onDragStart = (e) => {
  isDragging.value = true
  startX.value = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
}

const onDragMove = (e) => {
  if (!isDragging.value) return
  const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
  currentDrag.value = x - startX.value
  translateX.value = -currentIndex.value * getSlideWidth() + currentDrag.value
}

const onDragEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const width = getSlideWidth()
  const threshold = width / 4
  const dragged = currentDrag.value

  if (dragged > threshold) {
    currentIndex.value--
  } else if (dragged < -threshold) {
    currentIndex.value++
  }

  goToSlide(currentIndex.value)
  currentDrag.value = 0
}


watch(currentIndex, async (i) => {
  const lastRealIndex = originalItems.length
  if (i === 0) {
    // clone terakhir ke real terakhir
    await waitTransition()
    goToSlide(lastRealIndex, false)
  } else if (i === lastRealIndex + 1) {
    // clone pertama ke real pertama
    await waitTransition()
    goToSlide(1, false)
  }
})


const waitTransition = () => new Promise((r) => setTimeout(r, 310));
</script>

<style scoped>
div[ref="carousel"] {
  cursor: grab;
  user-select: none;
}
</style>
