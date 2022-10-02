<script setup lang="ts">
interface Props {
  technology: string;
}

defineProps<Props>();
</script>

<template>
  <div class="hexagon">
    <img
      :src="`technologies/${technology}.svg`"
      alt=""
      class="w-12"
    />
  </div>
</template>

<style scoped>
.hexagon {
  @apply relative w-[100px] h-[57.74px] bg-[#241B2F] text-white border-transparent border border-solid grid place-items-center my-[32.87px] mx-[2px] transition-all duration-200 ease-linear;
}

.hexagon::after {
  content: '';
  @apply absolute w-0 border-x-[50px] border-transparent top-full border-t-[28.87px] border-t-[#241B2F]  transition-all duration-200 ease-linear;
}

.hexagon::before {
  content: '';
  @apply absolute w-0 border-x-[50px] border-transparent bottom-full border-b-[28.87px] border-b-[#241B2F]  transition-all duration-200 ease-linear;
}
</style>
