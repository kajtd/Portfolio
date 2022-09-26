<script setup lang="ts">
interface Props {
  href?: string;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  secondary?: boolean;
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
      'button relative overflow-hidden transition-shadow duration-500 hover:shadow-outlined-primary-shadow font-medium text-xl md:text-2xl grid place-items-center shadow-lg h-12 w-36 md:h-16 md:w-48 bg-primary text-black',
      { 'opacity-50 pointer-events-none': disabled },
      {
        'bg-transparent border-2 md:border-4 border-black border-solid hover:!shadow-none':
          secondary,
      },
    ]"
  >
    <div
      class="overlay bg-background absolute z-[-1] top-0 left-0 right-0 bottom-0 w-full h-full transition-all duration-500 translate-y-[-100%] opacity-0"
    ></div>
    <span v-if="disabled">😴</span>
    <slot v-else />
  </component>
</template>

<style scoped>
.button:hover .overlay {
  @apply opacity-100 translate-y-0;
}
</style>
