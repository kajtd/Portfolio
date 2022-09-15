<script setup lang="ts">
interface Props {
  href?: string;
}

defineProps<Props>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || ''"
    class="transition-shadow duration-500 hover:shadow-outlined-primary-shadow font-medium text-2xl grid place-items-center shadow-lg h-16 w-48 bg-primary text-black"
  >
    <slot />
  </component>
</template>
