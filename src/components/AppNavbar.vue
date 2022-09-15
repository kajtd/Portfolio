<script setup lang="ts">
import { ref } from 'vue';
import HamburgerMenuButton from './HamburgerMenuButton.vue';
import AppButton from './AppButton.vue';

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

const toggleMobileNav = (): void => {
  mobileNav.value = !mobileNav.value;
  document.body.classList.toggle('fixed-bg');
};
</script>

<template>
  <header class="flex items-center justify-between w-full mx-auto">
    <div class="w-full mx-auto flex items-center justify-between">
      <div
        class="font-medium flex items-center leading-[78px] text-lg md:text-[32px]"
      >
        <img
          src="./../assets/icons/spiral.svg"
          alt=""
          class="mr-1 w-[32px] md:w-auto"
        />
        <span>Kajetan Domagała</span>
      </div>
      <HamburgerMenuButton
        :checked="mobileNav"
        @toggle-mobile-nav="toggleMobileNav"
      />
      <nav class="hidden xl:flex items-center justify-start">
        <ul class="flex items-center gap-8">
          <li v-for="link in links" :key="link.name">
            <a :href="link.url" class="inline-block">
              <span class="font-medium text-[32px] leading-[78px]">
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
          class="xl:hidden flex flex-col items-center justify-center h-full fixed bottom-0 left-0 p-8 w-full bg-white z-30"
        >
          <ul>
            <li
              v-for="link in links"
              :key="link.name"
              class="text-3xl py-6 font-semibold transition duration-300 cursor-pointer text-gray-900"
            >
              <button @click="toggleMobileNav">
                <a :href="link.url" class="inline-block">
                  <span class="font-semibold text-xl">
                    {{ link.name }}
                  </span>
                </a>
              </button>
            </li>
            <li>
              <AppButton
                href="#contact"
                class="text-xl h-14 w-44 mt-40"
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
