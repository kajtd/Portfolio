<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import gsap from "gsap";
import { useMedia } from "../composables/useMedia";
import AppButton from "./AppButton.vue";

const isReducedMotion = useMedia("(prefers-reduced-motion)");
const heroSection = ref<HTMLDivElement>();

const mainHeaderSplit = computed(() => "Hi, I'm Kajetan".split(""));
const scrollDown = ref<HTMLElement>();
const hireMeButton = ref<HTMLElement>();

const windowWidth = ref(window.innerWidth);

const onResize = () => {
  windowWidth.value = window.innerWidth;
};
const svgDimensions = computed(() => {
  if (windowWidth.value < 768) {
    return { width: 100, height: 100 };
  }
  return { width: 200, height: 200 };
});

onMounted(() => {
  window.addEventListener("resize", onResize);
  if (!isReducedMotion.value) {
    gsap.to(".main-header-char", {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.1,
    });
    gsap.fromTo(
      scrollDown.value as HTMLElement,
      {
        opacity: 0,
      },
      {
        duration: 1.5,
        delay: 2,
        opacity: 1,
      }
    );
    gsap.fromTo(
      hireMeButton.value as HTMLElement,
      {
        opacity: 0,
      },
      {
        duration: 1.5,
        delay: 2,
        opacity: 1,
      }
    );
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <section
    ref="heroSection"
    class="h-full flex-1 flex items-center justify-start px-2 xs:px-6 md:px-8 xl:px-24"
  >
    <div class="flex flex-col gap-12 text-left items-start ml-4 md:ml-24">
      <h1
        ref="mainHeader"
        class="mainHeader font-medium text-white text-[34px] md:text-[70px] leading-[60px] md:leading-[100px] 2xl:text-[120px] 2xl:leading-[160px] max-w-7xl"
        id="logo"
      >
        <div
          class="word inline-block mr-1 md:mr-2"
          v-for="(word, wordIndex) in mainHeaderSplit"
          :key="`word-${wordIndex}`"
        >
          <div
            class="main-header-char inline-block transition-transform duration-500 translate-y-48"
            v-for="(char, charIndex) in word.split('')"
            :key="`main-header-char-${charIndex}`"
          >
            {{ char }}
          </div>
        </div>
      </h1>
      <div ref="hireMeButton">
        <AppButton>Hire Me</AppButton>
      </div>
    </div>
    <div
      ref="scrollDown"
      class="absolute bottom-4 right-6 md:right-20 grid place-items-center"
    >
      <img
        class="absolute animate-[spin_3s_linear_infinite] duration-[5s] w-4 h-4 md:w-9 md:h-9"
        src="./../assets/star.svg"
        alt=""
      />
      <svg
        id="rotatingText"
        class="animate-[spin_10s_linear_infinite]"
        viewBox="0 0 200 200"
        :width="svgDimensions.width"
        :height="svgDimensions.height"
      >
        <defs>
          <path
            id="circle"
            d="M 100, 100
          m -75, 0
          a 75, 75 0 1, 0 150, 0
          a 75, 75 0 1, 0 -150, 0
          "
          ></path>
        </defs>
        <text width="400">
          <textPath
            alignment-baseline="top"
            xlink:href="#circle"
            class="font-light tracking-wider uppercase text-[23.9px] fill-current"
          >
            Learn more as you scroll down.
          </textPath>
        </text>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.mainHeader {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
