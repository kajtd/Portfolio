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
    class="font-medium text-[32px] grid place-items-center shadow-lg h-[78px] w-60 bg-primary"
  >
    <slot />
  </component>
</template>
