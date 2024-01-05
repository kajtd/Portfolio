<template>
  <div
    class="flex items-center justify-center gradient-background h-32 md:h-48 uppercase text-7xl md:text-[160px] text-black font-semibold gap-12"
  >
    <div>
      <div
        class="slider absolute top-0 left-0 overflow-hidden pointer-events-none"
      >
        <div
          class="slider__content flex items-center relative w-fit h-32 md:h-48"
        >
          <span
            v-for="i in 99"
            :key="i"
            class="text-center whitespace-nowrap p-4 font-black leading-[100%]"
          >
            <slot />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider__content {
  transform: translate3d(0, 0, 0);
  /* TODO: fix in the future and clone the nodes once they are hidden */
  animation: sliding 180s linear infinite;
}

@keyframes sliding {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
