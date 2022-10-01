<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import AppOverlay from './components/AppOverlay.vue';
import { useMedia } from './composables/useMedia';
import AboutMe from './components/AboutMe/AboutMe.vue';
import SampleProjects from './components/SampleProjects/SampleProjects.vue';
import ContactMe from './components/ContactMe.vue';
import AppCursor from './components/AppCursor.vue';

const isReducedMotion = useMedia('(prefers-reduced-motion)');
</script>

<template>
  <AppCursor />
  <main class="w-full">
    <AppOverlay v-if="!isReducedMotion" />
    <div class="min-h-screen h-full flex flex-col">
      <AppNavbar />
      <HeroSection />
    </div>
    <AboutMe />
    <SampleProjects />
    <ContactMe />
  </main>
</template>
