<script setup lang="ts">
  import IconAdd from './icons/IconAdd.vue';
  import { useImageStore } from "@/stores/imageStore";
  import { computed } from 'vue'

  const useImage = useImageStore()
  const images = useImage.images
  const selectedImageUrl = computed(() => useImage.selectedImage.imgUrl)
</script>
<template>
  <main
    class="flex flex-col md:flex-row items-center justify-between -mt-14 w-full"
  >
    <div class="w-full md:w-1/6">
      <h1 class="flex flex-col text-[7rem] font-thin">
        <span> Just </span>
        <span> Do </span>
        <span> It </span>
      </h1>
    </div>
    <div class="w-full md:w-3/5 relative">
      <div
        class="relative flex justify-center items-center w-full h-screen top-20 z-30 left-1/2 -translate-x-1/2 ">
        <div class="shoes flex flex-col justify-start items-center w-full h-screen">
          <div 
            v-for="(image, index) in images" :key="index"
            class="flex items-center justify-center w-full abolute h-screen fixed pb-60 shrink-0"
          >
            <img :src="selectedImageUrl" :alt="image.name" class=" w-[45rem]" />
          </div>
        </div>
      </div>
      <h1
        class="absolute text-[37rem] transform  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase text-[#E8E8E8]"
      >
        Nike
      </h1>
      <div
        class="absolute rounded-full -bottom-96 h-12 bg-[#d1d0d0] w-1/2 transform top- left-1/2 -translate-x-1/2 -translate-y-1/2 flex blur-lg shadow-md"
      ></div>
    </div>
    <div class="w-full md:w-1/5 relative flex justify-end md:left-32">
      <div class="w-full flex flex-col">
        <h3 class="text-3xl">Nike Air Force</h3>
        <h4 class="text-2xl mt-4 mb-2">New collection</h4>
        <span class="text-xl">150$</span>
        <div class="flex items-center justify-start -ml-4 gap-4 p-2">
          <button
            class="bg-white border border-gray-200 flex p-2 rounded-full px-4 gap-3"
          >
            <span class="text-lg">Add to cart</span>
            <IconAdd/>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
