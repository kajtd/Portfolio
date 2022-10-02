<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppButton from './AppButton.vue';
import { useIntersectionObserver } from './../composables/useIntersectionObserver';

const { observedElement, elementClass, observer } =
  useIntersectionObserver();

const contactText = ref<Element>();

onMounted(() => {
  observedElement.value = contactText.value;
  elementClass.value = 'fadein--animation';
  observer.observe(observedElement.value as Element);
});
</script>

<template>
  <footer
    id="contact"
    class="relative bg-black text-white min-h-screen h-full flex flex-col pt-24 xl:pt-48 px-6 pb-1 md:px-8 xl:px-24"
  >
    <div
      class="flex flex-col xl:flex-row items-center justify-around w-full"
    >
      <div ref="contactText" class="fadein">
        <h2 class="text-base xl:text-2xl font-semibold">
          contact me
        </h2>
        <div class="flex mb-24 xl:mb-0">
          <h3
            class="text-4xl leading-[48px] xl:text-[62px] xl:leading-[92px] max-w-6xl"
          >
            I would love to
            <span
              class="inline-block relative after:h-1 after:xl:h-2 after:w-[98%] after:bg-primary after:absolute after:bottom-[-2px] after:xl:-bottom-1 after:left-0"
            >
              hear from you
            </span>
            if you have any comments or questions.
          </h3>
          <img
            src="./../assets/icons/arrow-white.svg"
            alt=""
            class="relative right-10 hidden xl:block"
          />
        </div>
      </div>
      <form
        class="flex flex-col w-full max-w-[500px]"
        action="https://formsubmit.co/kajetan.domagala00@gmail.com"
        method="POST"
      >
        <h3 class="text-4xl mb-6 font-medium">Let's get in touch!</h3>
        <label for="email" class="text-lg my-2">Email</label>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            class="form-box border-b-2 border-white border-solid outline-none w-full block bg-transparent text-gray-100 text-lg py-3 focus:border-transparent"
          />
          <div
            class="h-[2px] relative bottom-[2px] bg-primary w-0 transition-all duration-500 line"
          ></div>
        </div>
        <label for="message" class="text-lg my-2"> Message </label>
        <div class="mb-10">
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            maxlength="500"
            class="form-box outline-none border-b-2 border-white border-solid w-full block bg-transparent text-gray-100 text-lg py-3 focus:border-transparent"
          ></textarea>
          <div
            class="h-[2px] relative bottom-[2px] bg-primary w-0 transition-all duration-500 line"
          ></div>
        </div>
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" class="hidden" />
        <AppButton type="submit">Contact</AppButton>
      </form>
    </div>

    <div class="w-full mt-auto">
      <div class="flex items-center gap-3 md:gap-6 mb-4 mt-36">
        <a
          href="https://github.com/kajtd"
          target="_blank"
          aria-label="Github"
        >
          <img
            src="./../assets/icons/github-white.svg"
            alt=""
            class="custom-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kajetan-domagala/"
          target="_blank"
          aria-label="Linkedin"
        >
          <img
            src="./../assets/icons/linkedin-white.svg"
            alt=""
            class="custom-icon"
          />
        </a>
      </div>
      <p
        class="border-t border-solid border-gray-300 w-full grid place-items-center py-4 text-gray-300 text-sm text-center"
      >
        Copyright 2022 Kajetan Domagała. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.form-box:focus ~ .line {
  width: 100%;
}
</style>
