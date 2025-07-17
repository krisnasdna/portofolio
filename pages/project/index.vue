<template>
  <div class="mx-5 lg:mx-[80px] my-0 lg:overflow-hidden">
    <RevealText class="text-[68px] lg:text-[230px] font-[900] text-[#334EAC] uppercase leading-none flex flex-row items-end gap-1 justify-center text-center">My Project <span><img src="~/assets/image/icon.png" alt="icon" class="w-10 h-10 mb-8 hidden lg:inline"></span></RevealText>
    <div class="grid lg:grid-cols-3 grid-cols-1 justify-center items-center h-full gap-10 lg:gap-0 my-10">
      <div class="flex flex-col justify-center items-center text-center gap-10  ">
        <h2 class="text-base font-medium uppercase">
          Krisna (he/him) is an FronT-End <br> Developer & Web Designer from <br>indonesia
        </h2>
      </div>
      <div class="justify-self-center lg:mt-2 ">
        <NuxtLink to="/project/1"><img src="~/assets/image/cover-amed.png" alt="icon" ></NuxtLink>
      </div>
      <div class="flex flex-col justify-center items-center text-center gap-10">
          <h2 class="text-base font-medium uppercase">passionate about creating <br> unforgettable and beautiful <br> digital experiences.</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
 title: 'PROJECT'
});
</script>

<style>

</style>