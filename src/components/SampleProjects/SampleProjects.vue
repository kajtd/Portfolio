<script setup lang="ts">
import { ref } from "vue";
import TheProject from "./TheProject.vue";
import { useMedia } from "./../../composables/useMedia";
import HorizontalSlider from "../HorizontalSlider.vue";

interface Project {
  imageName: string;
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl?: string;
}

const isReducedMotion = useMedia("(prefers-reduced-motion)");

const projects = ref<Project[]>([
  {
    imageName: isReducedMotion.value
      ? "cryptoarc-image.webp"
      : "cryptoarc-gif.webp",
    title: "Cryptoarc",
    description:
      "Cryptoarc is a decentralized application that enables users to send Ether to anyone. It leverages web3 technology to interact with the Ethereum blockchain.",
    codeUrl: "https://github.com/kajtd/cryptoarc",
    liveUrl: "https://cryptoarc.netlify.app/",
  },
  {
    imageName: isReducedMotion.value
      ? "web_cookbook-image.webp"
      : "web_cookbook-gif.webp",
    title: "WebCookbook",
    description:
      "WebCookbook is a social media platform designed for cooking enthusiasts. It allows users to share their favorite recipes and cooking tips.",
    codeUrl: "https://github.com/kajtd/WebCookbook",
  },
  {
    imageName: isReducedMotion.value
      ? "devdorne-image.webp"
      : "devdorne-gif.webp",
    title: "devdorne",
    description:
      "devdorne is an SEO-optimized blogging platform specifically designed for developers.",
    codeUrl: "https://github.com/kajtd/devdorne",
    liveUrl: "https://devdorne.com",
  },
  {
    imageName: isReducedMotion.value
      ? "md_previewer-image.webp"
      : "md_previewer-gif.webp",
    title: "MDPreviewer",
    description:
      "MDPreviewer is a web-based markdown editor. It allows users to write and edit markdown files directly in the browser.",
    codeUrl: "https://github.com/kajtd/MD-Previewer",
    liveUrl: "https://md-preview-editor.netlify.app/",
  },
]);
</script>

<template>
  <section
    id="projects"
    class="min-h-screen flex flex-col relative overflow-hidden bg-white text-black"
  >
    <HorizontalSlider>Projects</HorizontalSlider>
    <div
      class="w-full h-full overflow-x-hidden min-h-screen flex flex-col justify-evenly gap-12 md:gap-36 py-12 md:py-36 px-6 md:px-16 xl:px-24"
    >
      <TheProject
        v-for="(project, index) in projects"
        :key="index"
        :image-name="project.imageName"
        :title="project.title"
        :description="project.description"
        :codeUrl="project.codeUrl"
        :liveUrl="project.liveUrl"
        :left="index % 2 ? false : true"
      />
    </div>
  </section>
</template>
