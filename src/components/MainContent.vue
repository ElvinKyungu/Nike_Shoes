<template>
  <main
    class="flex flex-col md:flex-row items-center justify-between mt-40 w-full"
  >
    <div class="w-full md:w-1/5">
      <h1 class="flex flex-col text-[5rem] font-thin">
        <span> Just </span>
        <span> Do </span>
        <span> It </span>
      </h1>
    </div>
    <div class="w-full md:w-3/5 relative">
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="z-20 transform -rotate-[25deg]">
          <img src="../assets/shoe1.png" class="w-full" alt="" />
        </div>
      </div>
      <h1
        class="absolute text-[43rem] transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 uppercase text-[#E8E8E8]"
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
