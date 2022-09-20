<script setup lang="ts">
import { ref } from 'vue';
import TechnologiesRow from './TechnologiesRow.vue';

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
</script>

<template>
  <div class="self-end mr-24 mt-12">
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
