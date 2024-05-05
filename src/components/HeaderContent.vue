<script setup>
import IconSearch from "./icons/IconSearch.vue";
import IconShoping from "./icons/IconShoping.vue";
</script>
<template>
  <header class="py-4 relative z-50">
    <div class="flex justify-between items-center w-full">
      <div class="fex-shrink-0l">
        <img
          src="/nike_logo.png"
          class="w-16 md:w-20 cursor-pointer"
          alt="Nike Logo"
        />
      </div>
      <nav class="hidden md:flex justify-center flex-grow">
        <ul class="flex gap-20 uppercase">
          <li class="nav_link">
            <router-link to="/">Men</router-link>
          </li>
          <li class="nav_link">
            <router-link to="/">Women</router-link>
          </li>
          <li class="nav_link">
            <router-link to="/">Kids</router-link>
          </li>
          <li class="nav_link">
            <router-link to="/">Sales</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
        <div class="hidden md:block">
          <div class="py-1 px-4 bg-gray-200 flex rounded-full">
            <input
              class="bg-transparent focus:outline-none"
              type="search"
              placeholder="Search"
            />
            <IconSearch />
          </div>
        </div>
        <div class="">
          <IconShoping />
        </div>
      </div>
    </div>
  </header>
</template>
