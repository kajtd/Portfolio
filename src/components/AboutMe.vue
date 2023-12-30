<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalSlider from "./HorizontalSlider.vue";

gsap.registerPlugin(ScrollTrigger);

const technologiesWrapper = ref<HTMLElement>();

onMounted(() => {
  gsap.to(".technologiesWrapper span", {
    scrollTrigger: {
      trigger: technologiesWrapper.value as HTMLElement,
      start: `top bottom`,
      end: `+=${window.innerHeight}`,
      scrub: true,
    },
    rotate: 0,
    ease: "none",
    stagger: 0.1,
  });
});
</script>
<template>
  <section
    id="about"
    class="min-h-screen flex flex-col relative overflow-hidden"
  >
    <HorizontalSlider>About</HorizontalSlider>
    <div
      class="pt-20 flex flex-col xl:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6"
    >
      <div class="max-w-xl flex flex-col gap-5">
        <h2 class="font-bold text-5xl sm:text-8xl">About me</h2>
        <p class="text-lg sm:text-2xl font-medium mt-5 text-gray-200">
          I’m a freelance frontend developer who enjoys coding things from
          scratch.
        </p>
        <p class="text-lg sm:text-2xl font-medium my-3 text-gray-200">
          I’m located in Poland and I’ve been creating websites since 2019.
          Besides programming I'm also fascinated by technical SEO,
          productivity, and biohacking.
        </p>
        <p class="text-lg sm:text-2xl font-medium text-gray-200">
          <span class="font-bold">Vue + TypeScript + Tailwind</span> is my
          favorite technology stack, but I don't limit myself to it. I like
          trying new solutions and seeing what works and what doesn't.
        </p>
      </div>
      <ul class="max-w-md mt-12 xl:mt-32 font-medium">
        <li
          class="mb-12 text-lg sm:text-xl relative pl-14 before:w-10 before:h-10 before:text-xl before:font-semibold before:content-['1'] before:rounded-full before:bg-gradient-to-r before:from-[#9f95ff] before:to-[#e44f26] before:text-white before:absolute before:-top-1 before:left-0 before:place-items-center before:grid"
        >
          Passionate about merging aesthetics with functionality for superior
          UX.
        </li>
        <li
          class="mb-12 text-lg sm:text-xl relative pl-14 before:w-10 before:h-10 before:text-xl before:font-semibold before:content-['2'] before:rounded-full before:bg-gradient-to-r before:from-[#9f95ff] before:to-[#e44f26] before:text-white before:absolute before:-top-1 before:left-0 before:place-items-center before:grid"
        >
          Invested in exploring new horizons in web technology.
        </li>
        <li
          class="mb-12 text-lg sm:text-xl relative pl-14 before:w-10 before:h-10 before:text-xl before:font-semibold before:content-['3'] before:rounded-full before:bg-gradient-to-r before:from-[#9f95ff] before:to-[#e44f26] before:text-white before:absolute before:-top-1 before:left-0 before:place-items-center before:grid"
        >
          Continuously expanding my digital toolkit with innovative tools and
          technologies.
        </li>
      </ul>
    </div>
    <div
      class="flex flex-col-reverse gap-12 xl:flex-row items-center justify-between mb-24 max-w-7xl mx-auto w-full px-6 mt-12"
    >
      <div
        ref="technologiesWrapper"
        class="technologiesWrapper text-4xl sm:text-6xl text-[#979797] flex flex-row flex-wrap max-w-lg gap-4 font-extrabold"
      >
        <span class="rotate-12">HTML</span>
        <span class="-rotate-6">CSS</span>
        <span class="-rotate-6">JavaScript</span>
        <span class="rotate-6">Vue</span>
        <span class="rotate-12">TypeScript</span>
        <span class="rotate-12">Tailwind</span>
        <span class="-rotate-6">Firebase</span>
        <span class="rotate-12">SEO</span>
      </div>
    </div>
  </section>
</template>
