<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 justify-center items-center lg:max-h-screen gap-10 lg:gap-0 my-10">
      <div class="flex flex-col justify-center items-center text-center gap-10 ">
          <h2 class="text-base font-medium uppercase reveal">
            selected projects <br> I have done 
          </h2>
      </div>
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
            class="min-w-full lg:flex-shrink-0 flex justify-center items-center text-3xl font-bold spect-square w-full h-full"
          >
          <NuxtLink class="no-drag cursor-pointer" draggable="false"  @click.prevent="hasDragged ? null : navigateTo(`/project/${item.id}`)"> 
             <NuxtImg
                :src="item.cover"
                format="webp"
                :alt="item.title"
                :width="1200"
                :height="1200"
                class="object-cover no-drag lg:grayscale lg:hover:grayscale-0"
                draggable="false"
              />
          </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center text-center gap-10">
          <h2 class="text-base font-medium uppercase reveal">drag to discover</h2>
      </div>
    </div>

</template>

<script setup>
import { NuxtLink } from '#components'
import { ref, onMounted, watch, nextTick } from 'vue'
const props = defineProps({
  items: Array
})

const originalItems = props?.items
const clonedItems = ref([])
const currentIndex = ref(1)
const carousel = ref(null)
const translateX = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentDrag = ref(0)
const jumping = ref(false) 
const hasDragged = ref(false)

const getSlideWidth = () => carousel.value?.offsetWidth || 0


onMounted(async () => {

  clonedItems.value = [
    originalItems[originalItems.length - 1],
    ...originalItems,
    originalItems[0]
  ]

  await nextTick()

  await waitForElementSize()


  forceReflow(carousel.value)

  goToSlide(currentIndex.value)
  window.addEventListener('resize', () => goToSlide(currentIndex.value))
})


const waitForElementSize = async () => {
  let tries = 0
  while ((getSlideWidth() < 100) && tries < 20) {
    await new Promise((r) => setTimeout(r, 50))
    tries++
  }
}

const forceReflow = (el) => {
  if (!el) return
  el.style.display = 'none'
  el.offsetHeight 
  el.style.display = ''
}

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

  if (Math.abs(currentDrag.value) > 5) {
    hasDragged.value = true 
  }
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

  setTimeout(() => {
    hasDragged.value = false 
  }, 0)
}



watch(currentIndex, async (i) => {
  const lastRealIndex = originalItems.length
  if (i === 0) {
    await waitTransition()
    goToSlide(lastRealIndex, false)
  } else if (i === lastRealIndex + 1) {
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
