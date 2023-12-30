<script setup lang="ts">
import AppButton from "../AppButton.vue";

interface Props {
  imageName: string;
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl?: string;
  left?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'flex xl:items-center gap-12 md:gap-24 justify-evenly max-w-[2080px] mx-0 xl:mx-auto',
      left ? 'flex-col xl:flex-row' : 'flex-col xl:flex-row-reverse',
    ]"
    ref="project"
  >
    <div class="xl:max-w-4xl relative overflow-hidden xl:w-1/2">
      <a :class="{ 'cursor-pointer': liveUrl }" :href="liveUrl" target="_blank">
        <img
          :src="`./images/${imageName}`"
          :alt="imageName"
          loading="lazy"
          :class="[
            'max-w-4xl w-full max-h-[500px]',
            { 'transition-transform duration-1000 hover:scale-110': liveUrl },
          ]"
        />
      </a>
    </div>
    <div class="flex flex-col">
      <h3 class="text-2xl md:text-[32px] font-medium md:mb-4">
        {{ title }}
      </h3>
      <p
        class="text-sm xs:text-base md:!text-xl font-sans flex-1 max-w-xl mt-4 mb-12 lg:mb-24"
      >
        {{ description }}
      </p>
      <a
        class="mt-auto flex-1 custom-link custom-link--black"
        :href="codeUrl"
        target="_blank"
        small
      >
        Code
      </a>
    </div>
  </div>
</template>
