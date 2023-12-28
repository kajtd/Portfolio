<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutMe from "./components/AboutMe.vue";
import SampleProjects from "./components/SampleProjects/SampleProjects.vue";
import ContactMe from "./components/ContactMe.vue";
import AboutParagraph from "./components/AboutParagraph.vue";
import AppCursor from "./components/AppCursor.vue";
</script>

<template>
  <AppCursor />
  <main class="w-full">
    <div class="min-h-screen h-full flex flex-col">
      <AppNavbar />
      <HeroSection />
    </div>
    <AboutParagraph />
    <AboutMe />
    <SampleProjects />
    <ContactMe />
  </main>
</template>
