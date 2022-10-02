<script lang="ts" setup>
import TheTechnology from './TheTechnology.vue';

interface Props {
  indexes: number[];
  technologies: string[];
}

defineProps<Props>();
</script>

<template>
  <div
    class="w-full h-[92px] sm:h-[125px] flex items-center justify-center sm:flex-wrap mt-[-35px]"
  >
    <TheTechnology
      v-for="index in indexes"
      :key="index"
      :technology="technologies[index]"
    >
    </TheTechnology>
  </div>
</template>
