<script setup lang="ts">
import { ref } from "vue"
import { useImageStore } from "@/stores/imageStore";

import gsap from "gsap";

const userImage = useImageStore()
const images = userImage.images
interface Image {
  id: number;
  imgUrl: string;
}


const handleClick = (image: Image) => {
  userImage.setSelectedImageUrl(image.imgUrl);
}
</script>

<template>
  <div class="flex justify-center items-center mt-20 gap-20 z-50 relative">
    <div class="flex justify-center items-center gap-10">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="bg-white py-5 px-6 rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:px-14 flex items-center justify-center h-full shrink-0"
        @click="handleClick(image)"
      >
        <img :src="image.imgUrl" alt="" class="w-56 h-32 object-cover" />
      </div>
    </div>
  </div>
</template>
