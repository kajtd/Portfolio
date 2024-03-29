<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import gsap from "gsap";
import { useMedia } from "../composables/useMedia";

const isReducedMotion = useMedia("(prefers-reduced-motion)");
const heroSection = ref<HTMLDivElement>();

const mainHeaderSplit = computed(() => "Hi, I'm   Kajetan".split(" "));
const scrollDown = ref<HTMLElement>();

const windowWidth = ref(window.innerWidth);

const onResize = () => {
  windowWidth.value = window.innerWidth;
};
const svgDimensions = computed(() => {
  if (windowWidth.value < 768) {
    return { width: 100, height: 100 };
  }
  return { width: 150, height: 150 };
});

onMounted(() => {
  window.addEventListener("resize", onResize);
  if (!isReducedMotion.value) {
    gsap.to(".main-header-char", {
      webkitTextFillColor: "white",
      duration: 0.5,
      delay: 1.5,
      stagger: 0.05,
      ease: "none",
    });
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
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <section
    ref="heroSection"
    class="h-full flex-1 flex items-center justify-center px-2 xs:px-6 md:px-8 xl:px-24 z-1"
  >
    <div class="flex flex-col items-center gap-12">
      <h1
        ref="mainHeader"
        class="mainHeader pl-5 xs:pl-0 mb-6 font-semibold text-white text-6xl sm:text-8xl md:text-[92px] leading-tight md:leading-[140px] lg:leading-[140px] lg:text-[110px] xl:text-[130px] 2xl:text-[186px] xl:leading-[240px] uppercase"
        id="logo"
      >
        <div
          class="word inline-block mr-1 md:mr-2"
          :class="{ '!block md:!inline-block': word === 'Hi,' }"
          v-for="(word, wordIndex) in mainHeaderSplit"
          :key="`word-${wordIndex}`"
        >
          <div
            class="main-header-char inline-block transition-transform duration-500 translate-y-56 xs:translate-y-48"
            v-for="(char, charIndex) in word.split('')"
            :key="`main-header-char-${charIndex}`"
          >
            {{ char }}
          </div>
        </div>
      </h1>
    </div>
    <div
      ref="scrollDown"
      class="absolute bottom-4 right-6 md:right-20 grid place-items-center"
    >
      <img
        class="absolute animate-[spin_5s_linear_infinite] duration-[5s] w-4 h-4 md:w-6 md:h-6"
        src="./../assets/star.svg"
        alt=""
      />
      <svg
        id="rotatingText"
        class="animate-[spin_14s_linear_infinite]"
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
            alignment-baseline="middle"
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
  -webkit-text-fill-color: transparent; /* for filled text color */
  -webkit-text-stroke: 2px white; /* for text stroke */
}
</style>
