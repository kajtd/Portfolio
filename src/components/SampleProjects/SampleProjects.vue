<script setup lang="ts">
import { ref } from 'vue';
import TheProject from './TheProject.vue';

interface Project {
  imageName: string;
  title: string;
  description: string;
}

const projects = ref<Project[]>([
  {
    imageName: 'cryptoarc',
    title: 'Cryptoarc',
    description:
      'Send Ether to everyone with this web3 decentralized application.',
  },
  {
    imageName: 'WebCookbook',
    title: 'WebCookbook',
    description: 'Social media app for people who love to cook.',
  },
  {
    imageName: 'MD-Previewer',
    title: 'MDPreviewer',
    description: 'Edit your markdown files in the browser.',
  },
]);
</script>

<template>
  <section
    class="min-h-screen flex flex-col justify-evenly gap-12 md:gap-36 py-12 md:py-36 px-6 md:px-8 xl:px-24"
  >
    <div>
      <h2 class="text-4xl sm:text-[64px] sm:leading-[80px]">
        Sample projects
      </h2>
    </div>
    <TheProject
      v-for="(project, index) in projects"
      :key="index"
      :image-name="project.imageName"
      :title="project.title"
      :description="project.description"
      :class="index % 2 ? 'self-end' : ''"
    />
  </section>
</template>