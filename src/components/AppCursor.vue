<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useEventListener } from "../composables/useEventListener";

const cursor = ref<HTMLDivElement>();
const isHidden = ref(false);

const x = ref(0);
const y = ref(0);

const handleMousemove = (event: Event) => {
  x.value = (event as MouseEvent).clientX;
  y.value = (event as MouseEvent).clientY;
};

useEventListener(document, "mousemove", handleMousemove);

onMounted(() => {
  const clickableElements = document.querySelectorAll("a, button");
  clickableElements.forEach((el) => {
    el.addEventListener("mouseenter", () => (isHidden.value = true));
    el.addEventListener("mouseleave", () => (isHidden.value = false));
  });
});
</script>

<template>
  <div
    ref="cursor"
    class="cursor hidden md:block z-50 w-2 h-2 gradient-background rounded-full transition-all duration-500 ease-out fixed top-0 left-0 pointer-events-none"
    :class="{ '!hidden': isHidden }"
    :style="`transform: translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0);`"
  ></div>
</template>

<style scoped>
.cursor {
  transform: translate(calc(-50% + 15px), -50%);
}
</style>
