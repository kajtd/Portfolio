<script setup lang="ts">
import TechnologiesGrid from './TechnologiesGrid.vue';
</script>

<template>
  <section
    class="min-h-screen bg-white flex flex-col justify-evenly relative px-6 md:px-8 xl:px-24"
  >
    <div class="border-t border-gray-600 mt-8 xl:mt-2"></div>
    <div
      class="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-24"
    >
      <div>
        <h2 class="text-xl md:text-2xl font-semibold pt-8 xl:pt-0">
          about me
        </h2>
        <h3
          class="text-[40px] leading-[50px] md:text-[50px] md:leading-[70px] font-normal"
        >
          Passionate about new technologies.
        </h3>
      </div>
      <div
        class="flex flex-col md:flex-row items-start gap-10 w-full md:w-auto"
      >
        <p class="max-w-xs">
          I’ve started learning frontend developer in 2019 and haven’t
          stopped since. With over one year of commercial experience,
          I am planning on growing as a Frontend Developer.
        </p>
        <p class="max-w-xs">
          My favourite framework is
          <span class="font-medium text-green-600">VueJS</span>,
          although I don’t limit myself only in this area. Interested
          in blockchain development, learning web3 technologies.
        </p>
      </div>
    </div>
    <div
      class="self-center xl:self-end flex-col xl:flex-row relative flex items-center xl:gap-12"
    >
      <div class="flex items-center mt-[15%]">
        <p
          class="text-3xl md:text-4xl font-medium text-center md:text-left"
        >
          technologies i use
        </p>
        <img
          src="./../../assets/icons/arrow.svg"
          alt=""
          class="rotate-[200deg] relative bottom-12 left-1 hidden xl:block"
        />
      </div>
      <TechnologiesGrid />
    </div>
  </section>
</template>
