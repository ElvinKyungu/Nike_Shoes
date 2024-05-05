<script setup>
  import IconArrowLeft from './icons/IconArrowLeft.vue'
  import IconArrowRight from './icons/IconArrowRight.vue'
</script>
<template>
  <div class="flex justify-center items-center mt-44 gap-20 z-50 relative">
    <div class="w-16 h-16 cursor-pointer">
      <IconArrowLeft/>
    </div>
    <div class="flex justify-center items-center gap-10">
      <div>
        <img src="../assets/shoe2.png" alt="" class="w-36 h-24 object-cover" />
      </div>
      <div>
        <img src="../assets/shoe4.png" alt="" class="w-36 h-24 object-cover" />
      </div>
    </div>
    <div class="w-16 h-16 cursor-pointer">
      <IconArrowRight/>
    </div>
  </div>
</template>
