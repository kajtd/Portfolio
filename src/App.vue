<template>
  <main class="w-full flex flex-col">
    <AppOverlay />
    <AppNavbar />
    <HeroSection />
  </main>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import AppOverlay from './components/AppOverlay.vue';
</script>
