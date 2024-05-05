<script setup>
import Header from "./components/HeaderContent.vue";
import Main from "./components/MainContent.vue";
import Slide from "./components/SliderContent.vue";
</script>

<template>
  <main class="px-32 bg-[#d8d7d7] h-screen fixed w-full flex flex-col justify-center items-center font-primary">
    <Header />
    <Main />
    <Slide />
  </main>
</template>

<style scoped></style>
