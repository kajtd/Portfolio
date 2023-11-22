<script setup lang="ts">
interface Props {
  href?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
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
      'group rounded-full flex items-center justify-center gap-4 button relative overflow-hidden transition-shadow duration-500 hover:shadow-outlined-primary-shadow font-medium text-xl md:text-3xl shadow-lg h-12 w-36 md:h-20 md:w-48 bg-primary text-white',
      { 'opacity-50 pointer-events-none': disabled },
      {
        'bg-transparent border-2 md:border-4 border-black border-solid hover:!shadow-none text-black':
          secondary,
      },
      {
        '!text-base !w-24 !h-12 !gap-2 hover:shadow-outlined-primary-shadow-small':
          small,
      },
    ]"
  >
    <div
      class="overlay bg-background absolute z-[-1] top-0 left-0 right-0 bottom-0 w-full h-full transition-all duration-500 translate-y-[-100%] opacity-0"
    ></div>
    <span v-if="disabled">😴</span>
    <slot v-else></slot>

    <div class="icon h-8 flex justify-center items-center">
      <span
        :class="[
          'bg-white rounded-full p-0 w-0 h-0 inline-flex items-center justify-center rotate-180 transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:rounded-full group-hover:h-8 group-hover:w-8',
          { 'group-hover:!w-4 group-hover:!h-4': small },
          { '!bg-primary': secondary },
        ]"
      >
        <svg
          v-if="href"
          :width="small ? 14 : 20"
          :height="small ? 14 : 20"
          viewBox="0 0 24 24"
          fill="none"
          class="m-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          v-else
          width="17"
          height="17"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>plus [#1512]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-379.000000, -240.000000)"
              fill="#000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <polygon
                  id="plus-[#1512]"
                  points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      </span>
    </div>
  </component>
</template>

<style scoped>
.button:hover .overlay {
  @apply opacity-100 translate-y-0;
}
</style>
