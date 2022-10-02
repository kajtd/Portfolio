<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppButton from '../AppButton.vue';
import { useIntersectionObserver } from './../../composables/useIntersectionObserver';

interface Props {
  imageName: string;
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl?: string;
  animationClass: string;
}

const props = defineProps<Props>();

const { observedElement, elementClass, observer } =
  useIntersectionObserver();

const project = ref<Element>();

onMounted(() => {
  observedElement.value = project.value;
  elementClass.value = `${props.animationClass}--animation`;
  observer.observe(observedElement.value as Element);
});
</script>

<template>
  <div ref="project" :class="animationClass">
    <div
      class="relative max-w-4xl w-full img-wrapper overflow-hidden cursor-pointer"
    >
      <img
        :src="`./images/${imageName}`"
        :alt="imageName"
        class="max-w-4xl w-full max-h-[500px] object-cover"
      />
      <div
        class="overlay gap-8 flex flex-col items-center justify-center bg-primary absolute top-0 left-0 right-0 bottom-0 w-full h-full transition-all duration-500 translate-y-[-100%] opacity-0"
      >
        <h3 class="text-2xl sm:text-[32px] font-medium">
          {{ title }}
        </h3>
        <div class="flex items-center gap-2">
          <AppButton
            class="w-24 h-12 text-base"
            secondary
            :href="codeUrl"
            :disabled="!codeUrl"
          >
            Code ⌨️
          </AppButton>
          <AppButton
            class="w-24 h-12 text-base"
            secondary
            :href="liveUrl"
            :disabled="!liveUrl"
          >
            Live 📡
          </AppButton>
        </div>
      </div>
    </div>
    <h3 class="text-2xl sm:text-[32px] font-medium mt-10 mb-4">
      {{ title }}
    </h3>
    <p class="text-base sm:text-xl">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.img-wrapper:hover .overlay {
  @apply opacity-100 translate-y-0;
}
</style>
