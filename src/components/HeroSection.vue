<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useMedia } from '../composables/useMedia';

const isReducedMotion = useMedia('(prefers-reduced-motion)');
const title = ref<HTMLHeadingElement>();
const heroText = ref<HTMLDivElement>();

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
        delay: 3,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      heroText.value as HTMLDivElement,
      {
        opacity: 0,
        y: '100%',
      },
      {
        duration: 1.5,
        delay: 3,
        opacity: 1,
        y: 0,
      }
    );
  }
});
</script>

<template>
  <section
    ref="heroSection"
    class="h-full flex-1 flex flex-col justify-center relative px-6 md:px-8 xl:px-24"
  >
    <h1
      id="title"
      ref="title"
      class="text-black text-[34px] md:text-[70px] leading-[60px] font-medium md:leading-[100px] 2xl:text-[90px] 2xl:leading-[120px] max-w-7xl lg:ml-24 mb-24"
    >
      <span
        class="inline-block relative after:h-1 md:after:h-2 after:w-[50%] after:bg-primary after:absolute after:-bottom-1 md:after:-bottom-2 after:left-0"
      >
        Frontend developer
      </span>
      passionate about creating web applications
    </h1>
    <div
      ref="heroText"
      class="flex bottom-20 right-0 absolute sm:bottom-24 sm:right-16 xl:!bottom-20 xl:!right-20"
    >
      <img
        src="./../assets/icons/arrow.svg"
        alt=""
        class="w-12 xs:w-24 relative top-10 xs:top-14 left-2"
      />
      <p
        class="text-black text-sm xs:text-base md:!text-xl max-w-[250px]"
      >
        View the projects in my portfolio to learn more about who I
        am.
      </p>
    </div>
  </section>
</template>
