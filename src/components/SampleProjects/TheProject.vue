<script setup lang="ts">
interface Props {
  imageName: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <img
      :src="`images/${imageName}.png`"
      :alt="imageName"
      class="max-w-2xl w-full"
    />
    <h3 class="text-2xl sm:text-[32px] font-medium mt-10 mb-4">
      {{ title }}
    </h3>
    <p class="text-base sm:text-xl">
      {{ description }}
    </p>
  </div>
</template>
