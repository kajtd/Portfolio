<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const detailsSection = ref<HTMLElement>();

const text = ref(
  "I enjoy seeing my work come to life in the form of functional and human-first websites. I'm motivated to create meaningful digital experiences that positively impact people's lives."
);

onMounted(() => {
  gsap.from(detailsSection.value as HTMLElement, {
    transformOrigin: "center",
    ease: "none",
    opacity: 0.4,
    scrollTrigger: {
      trigger: detailsSection.value as HTMLElement,
      start: "top center",
      end: `+=100`,
      scrub: true,
    },
    stagger: 0.1,
  });
  gsap.to(".details-char", {
    scrollTrigger: {
      trigger: detailsSection.value as HTMLElement,
      start: "top center",
      end: `+=${window.innerHeight / 1.3}`,
      scrub: true,
    },
    opacity: 1,
    ease: "none",
    stagger: 0.1,
  });
});
</script>

<template>
  <div
    ref="detailsSection"
    class="bg-primary opacity-100 sm:min-h-screen text-2xl sm:text-5xl lg:text-7xl 2xl:text-[90px] 2xl:leading-[100px] font-semibold text-black p-9 lg:p-32"
  >
    <div>
      <div
        class="word inline-block m-0 mr-[1.5vw]"
        v-for="(word, wordIndex) in text.split(' ')"
        :key="`word-${wordIndex}`"
      >
        <div
          class="details-char inline-block opacity-20"
          v-for="(char, charIndex) in word.split('')"
          :key="`details-char-${charIndex}`"
        >
          {{ char }}
        </div>
      </div>
    </div>
  </div>
</template>
