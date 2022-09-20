<script setup lang="ts">
import TechnologiesGrid from './TechnologiesGrid.vue';
</script>

<template>
  <section
    class="bg-white min-h-screen flex flex-col justify-evenly relative px-4 md:px-8 xl:px-24"
  >
    <div class="border-t border-gray-600"></div>
    <div class="flex items-center justify-between gap-24">
      <div>
        <h2 class="text-2xl font-semibold">about me</h2>
        <h3 class="text-[50px] leading-[70px] font-normal">
          Passionate about new technologies.
        </h3>
      </div>
      <div class="flex items-center gap-10">
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
    <div class="self-end relative flex items-center gap-12">
      <div class="flex items-center mt-[15%]">
        <p class="text-4xl font-medium">technologies i use</p>
        <img
          src="./../../assets/icons/arrow.svg"
          alt=""
          class="rotate-[200deg] relative bottom-12 left-1"
        />
      </div>
      <TechnologiesGrid />
    </div>
  </section>
</template>
