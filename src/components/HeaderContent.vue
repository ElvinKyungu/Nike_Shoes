<script setup></script>
<template>
  <header class="py-4 relative">
    <div class="flex justify-between items-center w-full">
      <div class="fex-shrink-0l">
        <img src="../assets/nike_logo.png" class="w-16 md:w-20 cursor-pointer" alt="Nike Logo" />
      </div>
      <nav class="hidden md:flex justify-center flex-grow">
        <ul class="flex gap-20">
          <li class="nav_link">Men</li>
          <li class="nav_link">Women</li>
          <li class="nav_link">Kids</li>
          <li class="nav_link">Sales</li>
        </ul>
      </nav>
      <div class="flex items-center gap-4">
        <div class="hidden md:block">
          <div class="py-1 px-4 bg-gray-200 flex rounded-full">
            <input class="bg-transparent focus:outline-none" type="search" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div class="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
