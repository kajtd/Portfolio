<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import HamburgerMenuButton from './HamburgerMenuButton.vue';
import AppButton from './AppButton.vue';
import { useMedia } from './../composables/useMedia';

interface Link {
  name: string;
  url: string;
}

const links = ref<Link[]>([
  {
    name: 'home',
    url: '#home',
  },
  {
    name: 'about',
    url: '#about',
  },
  {
    name: 'projects',
    url: '#projects',
  },
]);

const mobileNav = ref(false);
const nav = ref<HTMLDivElement>();
const logoWrapper = ref<HTMLDivElement>();
const isReducedMotion = useMedia('(prefers-reduced-motion)');

const handleRedirect = (url: string) => {
  window.location.href = url;
  mobileNav.value = false;
};

onMounted(() => {
  if (!isReducedMotion.value) {
    gsap.fromTo(
      logoWrapper.value as HTMLDivElement,
      {
        opacity: 0,
        delay: 2.5,
        y: '100%',
      },
      {
        duration: 1,
        opacity: 1,
        delay: 2.5,
        y: 0,
      }
    );
    gsap.fromTo(
      nav.value as HTMLDivElement,
      {
        opacity: 0,
        delay: 2.5,
        y: '100%',
      },
      {
        duration: 1,
        opacity: 1,
        delay: 2.5,
        y: 0,
      }
    );
  }
});

const toggleMobileNav = (): void => {
  mobileNav.value = !mobileNav.value;
  document.body.classList.toggle('fixed-bg');
};
</script>

<template>
  <header
    id="home"
    class="flex items-center justify-between w-full mx-auto pt-6 md:pt-16 px-4 md:px-8 xl:px-24"
  >
    <div class="w-full mx-auto flex items-center justify-between">
      <div
        ref="logoWrapper"
        class="font-medium flex items-center leading-[78px] text-lg md:text-2xl"
      >
        <img
          src="./../assets/icons/spiral.svg"
          alt=""
          class="mr-2 w-8 md:w-10"
        />
        <span class="name">Kajetan Domagała</span>
      </div>
      <HamburgerMenuButton
        :checked="mobileNav"
        @toggle-mobile-nav="toggleMobileNav"
      />
      <nav
        ref="nav"
        class="hidden xl:flex items-center justify-start"
      >
        <ul class="flex items-center gap-10">
          <li v-for="link in links" :key="link.name">
            <a :href="link.url" class="inline-block link">
              <span
                class="font-medium text-2xl leading-[78px] text-black"
              >
                {{ link.name }}
              </span>
            </a>
          </li>
          <li>
            <AppButton href="#contact">contact</AppButton>
          </li>
        </ul>
      </nav>
      <transition name="mobile-nav">
        <nav
          v-show="mobileNav"
          class="xl:hidden text-center flex flex-col items-center justify-center h-full fixed bottom-0 left-0 p-8 w-full bg-white z-30"
        >
          <ul>
            <li
              v-for="link in links"
              :key="link.name"
              class="text-3xl py-6 font-bold transition duration-300 cursor-pointer text-black"
            >
              <a
                class="inline-block"
                @click="handleRedirect(link.url)"
              >
                <span class="font-medium text-2xl">
                  {{ link.name }}
                </span>
              </a>
            </li>
            <li>
              <AppButton
                class="mt-12"
                @click="handleRedirect('#contact')"
              >
                contact
              </AppButton>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.4s ease-in-out;
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
