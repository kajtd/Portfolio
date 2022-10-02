<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TechnologiesRow from './TechnologiesRow.vue';
import { useIntersectionObserver } from './../../composables/useIntersectionObserver';

const technologies = ref<string[]>([
  'html',
  'css',
  'javascript',
  'vue',
  'git',
  'nuxt',
  'typescript',
  'scss',
  'solidity',
  'firebase',
]);

const { observedElement, elementClass, observer } =
  useIntersectionObserver();

const technologiesGrid = ref<Element>();

onMounted(() => {
  observedElement.value = technologiesGrid.value;
  elementClass.value = 'fadein--animation';
  observer.observe(observedElement.value as Element);
});
</script>

<template>
  <div
    ref="technologiesGrid"
    class="fadein w-full self-end xl:mr-24 mt-16 xl:mt-12"
  >
    <TechnologiesRow
      :indexes="[0, 1, 2, 3]"
      :technologies="technologies"
    />
    <TechnologiesRow
      :indexes="[4, 5, 6]"
      :technologies="technologies"
    />
    <TechnologiesRow :indexes="[7, 8]" :technologies="technologies" />
    <TechnologiesRow :indexes="[9]" :technologies="technologies" />
  </div>
</template>
