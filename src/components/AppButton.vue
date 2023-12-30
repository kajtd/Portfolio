<script setup lang="ts">
interface Props {
  href?: string;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  secondary?: boolean;
  small?: boolean;
}

defineProps<Props>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || ''"
    :disabled="disabled"
    :type="type || 'button'"
    :class="[
      'z-50 group relative rounded-full flex items-center justify-center cursor-pointer gap-4 overflow-hidden transition-colors duration-500 text-lg md:text-2xl h-24 w-24 md:h-32 md:w-32',
      'gradient-border',
      { 'opacity-50 pointer-events-none': disabled },
      {
        'bg-transparent border-2 md:border-4 border-black border-solid hover:!shadow-none text-black':
          secondary,
      },
      {
        '!text-lg !w-28 !h-28 !gap-2': small,
      },
    ]"
  >
    <slot></slot>
  </component>
</template>
