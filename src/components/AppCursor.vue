<script setup lang="ts">
import { ref } from "vue";
import { useEventListener } from "../composables/useEventListener";

const cursor = ref<HTMLDivElement>();

const x = ref(0);
const y = ref(0);

const handleMousemove = (event: Event) => {
  x.value = (event as MouseEvent).clientX;
  y.value = (event as MouseEvent).clientY;
};

useEventListener(document, "mousemove", handleMousemove);
</script>

<template>
  <div
    ref="cursor"
    class="cursor hidden md:block z-50 w-16 h-16 rounded-full border-2 border-gray-500 border-solid transition-all duration-400 ease-out fixed top-0 left-0 pointer-events-none"
    :style="`transform: translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0);`"
  ></div>
</template>

<style scoped>
.cursor {
  transform: translate(calc(-50% + 15px), -50%);
}
</style>
