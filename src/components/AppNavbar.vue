<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import AppButton from "./AppButton.vue";
import { useMedia } from "./../composables/useMedia";

interface Link {
  name: string;
  url: string;
}

const links = ref<Link[]>([
  {
    name: "home",
    url: "#home",
  },
  {
    name: "about",
    url: "#about",
  },
  {
    name: "projects",
    url: "#projects",
  },
  {
    name: "contact",
    url: "#contact",
  },
]);

const mobileNav = ref(false);
const nav = ref<HTMLDivElement>();
const isReducedMotion = useMedia("(prefers-reduced-motion)");

const handleRedirect = (url: string) => {
  window.location.href = url;
  toggleMobileNav();
};

onMounted(() => {
  if (!isReducedMotion.value) {
    gsap.fromTo(
      nav.value as HTMLDivElement,
      {
        opacity: 0,
        delay: 0.5,
        y: "20px",
      },
      {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        y: 0,
      }
    );
  }
});

const toggleMobileNav = (): void => {
  mobileNav.value = !mobileNav.value;
  document.body.classList.toggle("fixed-bg");
};
</script>

<template>
  <div>
    <header
      ref="nav"
      id="home"
      class="flex items-center justify-between w-full mx-auto pt-12 px-4 md:px-8 xl:px-24 relative"
    >
      <div class="w-full mx-auto flex items-center justify-between">
        <a href="/" class="text-xl xs:text-2xl md:text-4xl">Kajetan Domagała</a>
        <nav class="flex items-center justify-start">
          <ul class="flex items-center md:gap-10">
            <li>
              <a
                href="#contact"
                class="hidden md:inline-block link text-2xl leading-[78px] text-white transition-colors duration-250 hover:text-primary cursor-pointer"
              >
                contact
              </a>
            </li>
            <li>
              <AppButton @click="toggleMobileNav"> menu </AppButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <transition name="mobile-nav">
      <nav
        v-show="mobileNav"
        class="flex flex-col justify-center h-full fixed inset-0 py-12 px-4 md:px-8 xl:px-24 w-full bg-black text-white z-30"
      >
        <AppButton
          class="z-50 !absolute top-12 right-4 md:right-0 xl:right-24"
          @click="toggleMobileNav"
        >
          close
        </AppButton>
        <ul class="self-center md:self-start">
          <li
            v-for="link in links"
            :key="link.name"
            class="py-8 font-bold transition duration-300 cursor-pointer text-white"
          >
            <a class="inline-block" @click="handleRedirect(link.url)">
              <span
                class="font-medium uppercase text-5xl sm:text-7xl lg:text-[120px] lg:leading-[100px] hover:text-primary transition-colors"
              >
                {{ link.name }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease-in-out;
}
.mobile-nav-enter-from {
  transform: translateX(100%);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(100%);
}
</style>
Footer
