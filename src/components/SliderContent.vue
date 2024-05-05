<script setup lang="ts">
import { useImageStore } from "@/stores/imageStore"
import gsap from "gsap";
const userImage = useImageStore()
const images = userImage.images

  const handleClick = (index: number) => {
    userImage.setSelectedImageUrl(images[index].imgUrl);
    const shoes = document.querySelector('.shoes');
    gsap.to(shoes, {
      duration: 2,
      y: `-${index * 10}%`,
      ease: "elastic.out(1,0.75)",
    });
  };
</script>

<template>
  <div class="flex justify-center items-center mt-20 gap-20 z-50 relative">
    <div class="flex justify-center items-center gap-10">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="bg-white py-5 px-6 rounded-lg cursor-pointer transition-alln flex flex-col ease-in-out duration-300 hover:px-14 items-center justify-center h-full shrink-0"
        @click="handleClick(index)"
      >
        <img :src="image.imgUrl" alt="" class="w-56 h-32 object-cover" />
        <h2 class="my-4 text-3xl font-light">{{ image.name }}</h2>
      </div>
    </div>
  </div>
</template>
