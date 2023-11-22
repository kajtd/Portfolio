<script setup lang="ts">
import { ref, onMounted } from "vue";
import AppButton from "./AppButton.vue";
import { useIntersectionObserver } from "./../composables/useIntersectionObserver";
import gsap from "gsap";

const contactHeading = ref<Element>();

const currentYear = ref(new Date().getFullYear());

const animateContactHeading = () => {
  gsap.to(".contact-char", {
    y: 0,
    stagger: 0.05,
    duration: 0.1,
  });
};

const { observedElement, elementClass, observer } = useIntersectionObserver(
  animateContactHeading
);

onMounted(() => {
  observedElement.value = contactHeading.value;
  elementClass.value = "stagger--animation";
  observer.observe(observedElement.value as Element);
});
</script>

<template>
  <footer
    id="contact"
    class="relative bg-black text-white min-h-screen h-full flex flex-col pt-24 xl:pt-48 px-6 pb-1 md:px-8 xl:px-24"
  >
    <div
      class="flex flex-col lg:flex-row items-center justify-around w-full mb-36 gap-24 lg:gap-0"
    >
      <h2
        class="contactHeading uppercase text-[90px] leading-[90px] md:text-[150px] md:leading-[120px] 2xl:!text-[240px] 2xl:leading-[196px] text-white lg:self-end"
        ref="contactHeading"
      >
        <div
          class="word inline-block mr-2"
          v-for="(word, wordIndex) in 'contact'.split(' ')"
          :key="`word-${wordIndex}`"
        >
          <div
            class="contact-char inline-block transition-transform duration-500 translate-y-64"
            v-for="(char, charIndex) in word.split('')"
            :key="`contact-char-${charIndex}`"
          >
            {{ char }}
          </div>
        </div>
      </h2>

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
        <AppButton type="submit">Submit</AppButton>
      </form>
    </div>

    <div class="w-full mt-auto">
      <p
        class="border-t border-solid border-gray-300 w-full grid place-items-center py-4 text-gray-300 text-sm text-center"
      >
        Copyright {{ currentYear }} Kajetan Domagała. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.form-box:focus ~ .line {
  width: 100%;
}
.contactHeading {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
