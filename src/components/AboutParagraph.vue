<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const detailsSection = ref<HTMLElement>();

const text = ref(
  "I enjoy seeing my work come to life in the form of functional and human-first websites. I am driven by the challenge of adapting to emerging technologies and designing digital experiences that resonate with users."
);

onMounted(() => {
  if (detailsSection.value) {
    gsap.to(".details-char", {
      scrollTrigger: {
        trigger: detailsSection.value,
        start: "top center",
        end: `+=${detailsSection.value.offsetHeight / 1.2}`,
        scrub: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  }
});
</script>

<template>
  <div
    ref="detailsSection"
    class="bg-white opacity-100 py-24 sm:min-h-screen grid place-items-center text-4xl sm:text-5xl md:text-7xl md:leading-[80px] xl:text-[90px] xl:leading-[100px] font-semibold text-black p-9 lg:p-32"
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
