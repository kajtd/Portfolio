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
      class="flex items-center justify-between w-full mx-auto pt-12 px-4 md:px-8 xl:px-24 relative z-30"
    >
      <div class="w-full mx-auto flex items-center justify-between">
        <a href="/" class="text-xl md:text-3xl xl:text-4xl cursor-pointer z-1">
          Kajetan Domagała
        </a>
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
              <AppButton class="!z-50" @click="toggleMobileNav">
                {{ mobileNav ? "close" : "menu" }}
              </AppButton>
            </li>
          </ul>
        </nav>
        <transition name="mobile-nav">
          <nav
            v-show="mobileNav"
            class="flex flex-col justify-center h-screen fixed top-0 left-0 py-12 px-4 md:px-8 xl:px-24 w-full bg-black text-white z-30"
          >
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
    </header>
  </div>
</template>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease-in-out;
}
.mobile-nav-enter-from {
  transform: translateY(-100%);
}
.mobile-nav-enter-to {
  transform: translateY(0);
}
.mobile-nav-leave-to {
  transform: translateY(-100%);
}
</style>
Footer
