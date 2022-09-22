<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useMedia } from '../composables/useMedia';

const isReducedMotion = useMedia('(prefers-reduced-motion)');
const title = ref<HTMLHeadingElement>();

onMounted(() => {
  if (!isReducedMotion.value) {
    gsap.fromTo(
      title.value as HTMLHeadingElement,
      {
        opacity: 0,
        y: '100%',
      },
      {
        duration: 1.5,
        delay: 2.5,
        opacity: 1,
        y: 0,
      }
    );
  }
});
</script>

<template>
  <section
    class="h-full flex-1 flex flex-col justify-center relative"
  >
    <h1
      id="title"
      ref="title"
      class="text-black text-[34px] md:text-[64px] leading-[60px] font-medium md:leading-[96px] max-w-5xl lg:ml-24 mb-24"
    >
      <span
        class="relative after:h-2 md:after:h-3 after:w-[98%] after:bg-primary after:absolute after:bottom-[-6px] md:after:-bottom-2 after:left-0"
      >
        Frontend developer
      </span>
      passionate about creating web applications
    </h1>
    <div
      class="hidden xs:flex bottom-12 right-0 absolute sm:bottom-24 sm:right-16 xl:!bottom-20 xl:!right-20"
    >
      <img
        src="./../assets/icons/arrow.svg"
        alt=""
        class="w-24 relative top-14 left-2"
      />
      <p class="text-black text-base max-w-[150px]">
        View the projects in my portfolio to learn more about who I
        am.
      </p>
    </div>
    <div
      class="absolute bottom-0 left-4 md:left-8 xl:left-0 flex flex-col items-center gap-2"
    >
      <a href="https://github.com/kajtd" target="_blank">
        <img
          src="./../assets/icons/github.svg"
          alt=""
          class="w-8 md:w-12 custom-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kajetan-domagala/"
        target="_blank"
      >
        <img
          src="./../assets/icons/linkedin.svg"
          alt=""
          class="w-8 md:w-12 custom-icon"
        />
      </a>
      <div class="h-16 w-2 bg-black"></div>
    </div>
  </section>
</template>
