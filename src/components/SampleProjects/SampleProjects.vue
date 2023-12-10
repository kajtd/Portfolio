<script setup lang="ts">
import { ref } from 'vue';
import TheProject from './TheProject.vue';
import { useMedia } from './../../composables/useMedia';

interface Project {
  imageName: string;
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl?: string;
}

const isReducedMotion = useMedia('(prefers-reduced-motion)');

const projects = ref<Project[]>([
  {
    imageName: isReducedMotion.value ? 'cryptoarc-image.webp' : 'cryptoarc-gif.webp',
    title: 'Cryptoarc',
    description: 'Send Ether to everyone with this web3 decentralized application.',
    codeUrl: 'https://github.com/kajtd/cryptoarc',
    liveUrl: 'https://cryptoarc.netlify.app/',
  },
  {
    imageName: isReducedMotion.value ? 'web_cookbook-image.webp' : 'web_cookbook-gif.webp',
    title: 'WebCookbook',
    description: 'Social media app for people who love to cook.',
    codeUrl: 'https://github.com/kajtd/WebCookbook',
  },
  {
    imageName: isReducedMotion.value ? 'devdorne-image.webp' : 'devdorne-gif.webp',
    title: 'devdorne',
    description: 'SEO-optimized blogging platform for developers.',
    codeUrl: 'https://github.com/kajtd/devdorne',
    liveUrl: 'https://devdorne.com',
  },
  {
    imageName: isReducedMotion.value ? 'md_previewer-image.webp' : 'md_previewer-gif.webp',
    title: 'MDPreviewer',
    description: 'Edit your markdown files in the browser.',
    codeUrl: 'https://github.com/kajtd/MD-Previewer',
    liveUrl: 'https://md-preview-editor.netlify.app/',
  },
]);
</script>

<template>
  <section
    id="projects"
    class="w-full h-full overflow-x-hidden min-h-screen flex flex-col justify-evenly gap-12 md:gap-36 py-12 md:py-36 px-6 md:px-8 xl:px-24"
  >
    <div>
      <h2 class="text-4xl sm:text-[64px] sm:leading-[80px]">Sample projects</h2>
    </div>
    <TheProject
      v-for="(project, index) in projects"
      :key="index"
      :image-name="project.imageName"
      :title="project.title"
      :description="project.description"
      :codeUrl="project.codeUrl"
      :liveUrl="project.liveUrl"
      :class="index % 2 ? 'self-end' : 'self-start'"
      :animation-class="index % 2 ? 'movein-right' : 'movein-left'"
    />
  </section>
</template>
