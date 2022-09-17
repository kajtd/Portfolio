<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import AppOverlay from './components/AppOverlay.vue';
import { useMedia } from './composables/useMedia';

const isReducedMotion = useMedia('(prefers-reduced-motion)');
</script>

<template>
  <main class="w-full">
    <AppOverlay v-if="!isReducedMotion" />
    <div class="min-h-screen h-full flex flex-col">
      <AppNavbar />
      <HeroSection />
    </div>
  </main>
</template>
