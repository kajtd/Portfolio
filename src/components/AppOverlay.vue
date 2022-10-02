<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const overlayFirst = ref<HTMLDivElement>();
const overlaySecond = ref<HTMLDivElement>();
const overlayThird = ref<HTMLDivElement>();

onMounted(() => {
  gsap.to(overlayFirst.value as HTMLDivElement, {
    delay: 0.5,
    duration: 1.5,
    top: '-100%',
  });

  gsap.to(overlaySecond.value as HTMLDivElement, {
    delay: 1,
    duration: 1.5,
    top: '-100%',
  });

  gsap.to(overlayThird.value as HTMLDivElement, {
    delay: 1.5,
    duration: 1.5,
    top: '-100%',
  });
});
</script>

<template>
  <div ref="overlayFirst" class="overlay left-0"></div>
  <div ref="overlaySecond" class="overlay left-1/3"></div>
  <div ref="overlayThird" class="overlay left-2/3"></div>
</template>

<style scoped>
.overlay {
  @apply absolute w-1/3 h-full top-0 z-50 bg-primary;
}
</style>
