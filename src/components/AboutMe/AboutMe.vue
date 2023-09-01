<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TechnologiesGrid from './TechnologiesGrid.vue';
import { useIntersectionObserver } from './../../composables/useIntersectionObserver';

const { observedElement, elementClass, observer } =
  useIntersectionObserver();

const aboutMe = ref<Element>();

onMounted(() => {
  observedElement.value = aboutMe.value;
  elementClass.value = 'fadein--animation';
  observer.observe(observedElement.value as Element);
});
</script>

<template>
  <section
    id="about"
    class="min-h-screen bg-white flex flex-col justify-evenly relative py-36 px-6 md:px-8 xl:px-24"
  >
    <div class="border-t border-gray-600 mt-8 xl:mt-2 pb-4"></div>
    <div
      class="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-24"
    >
      <div ref="aboutMe" class="fadein">
        <h2 class="text-base md:text-xl font-semibold pt-8 xl:pt-4">
          about me
        </h2>
        <h3
          class="text-[40px] leading-[50px] md:text-[80px] md:leading-[100px] font-normal max-w-4xl mt-4"
        >
          I enjoy coding things from scratch
        </h3>
      </div>
      <div
        class="flex flex-col md:flex-row items-start gap-10 w-full md:w-auto"
      >
        <p class="max-w-xs text-base lg:text-xl">
          In 2019, I began learning front-end development, and I
          haven't stopped since. With almost two years of commercial
          experience, I am planning on growing as a
          <span class="font-medium">Frontend Developer</span>.
        </p>
        <p class="max-w-xs text-base lg:text-xl">
          <span class="font-medium text-green-600">VueJS</span> is my
          favorite framework, but I'm also curious about exploring
          other exciting new technologies.
        </p>
      </div>
    </div>
    <div
      class="self-center xl:self-end flex-col xl:flex-row relative flex items-center xl:gap-12 mt-20 xl:mt-0"
    >
      <div class="flex flex-col xl:flex-row items-center sm:mt-[15%]">
        <p
          class="text-3xl md:text-4xl font-medium text-center md:text-left"
        >
          technologies I use
        </p>
        <img
          src="./../../assets/icons/arrow.svg"
          alt=""
          class="xl:rotate-[200deg] relative top-4 xl:top-0 xl:bottom-12 left-1 w-16 xl:w-auto"
        />
      </div>
      <TechnologiesGrid />
    </div>
  </section>
</template>
