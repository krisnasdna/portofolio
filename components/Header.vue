<template>
  <div class="flex flex-row justify-between items-center mt-6 mx-5 lg:mx-[80px]">
    <div class="flex flex-row items-center justify-center gap-4">
      <div>
        <img src="~/assets/image/icon.png" alt="icon" class="lg:w-10 lg:h-10 w-8 h-8">
      </div>
      <div>
        <h6 class="text-base text-[14px] italic">
        Open for any <br>
        collaboration and offers 
        </h6>
      </div>
    </div>
    <div class="justify-self-center hidden lg:inline">
      <h6 class="text-base italic">Indonesia ( {{ time }})</h6>
    </div>
    <div class="relative">
      <button class="px-4 lg:px-8 py-1 border border-[#334EAC] rounded-xl" @click="open = !open">
        <h6 class="text-base font-semibold italic">Menu</h6>
      </button>
      <div class="absolute w-68 bg-[#BAD6EB] origin-top-right right-0 top-0 rounded-xl px-3 py-3" v-if="open">
        <div class="flex justify-end items-center gap-2 cursor-pointer me-4" @click="open = !open">
          <h2 class="text-base font-semibold text-[#334EAC] italic text-center">Close</h2>
        </div>
        <div class="flex flex-col gap-5">
          <NuxtLink class="text-base font-bold uppercase text-[#334EAC]" to="/" :class="{'hidden' : route.path === '/', 'inline' : route.path === !'/'}" @click="open = !open">Home</NuxtLink>
          <NuxtLink class="text-base font-bold uppercase text-[#334EAC]" to="/project" :class="{'hidden' : route.path === '/project', 'inline' : route.path === !'/project'}" @click="open = !open">Project</NuxtLink>
          <NuxtLink class="text-base font-bold uppercase text-[#334EAC]" to="/about" :class="{'hidden' : route.path === '/about', 'inline' : route.path === !'/about'}" @click="open = !open">About</NuxtLink>
          <NuxtLink class="text-base font-bold uppercase text-[#334EAC]" to="/contact" :class="{'hidden' : route.path === '/contact', 'inline' : route.path === !'/contact'}" @click="open = !open">Contact</NuxtLink>
        </div>
        <div class="flex gap-3 mt-5">
          <h6 class="text-sm text-[#334EAC] underline">Instagram</h6>
          <h6 class="text-sm text-[#334EAC] underline">Instagram</h6>
          <h6 class="text-sm text-[#334EAC] underline">Instagram</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { NuxtLink } from '#components';

const route = useRoute()
const open = ref(false);
const time = ref('');

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString('id-ID',{
      timeZone: 'Asia/Makassar',
      hour12: true
    })
  }, 1000)
}); 

</script>

<style>

</style>