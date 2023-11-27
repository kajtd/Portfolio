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
    class="relative bg-black text-white min-h-[120vh] h-full flex flex-col pt-24 px-6 pb-1 md:px-8 xl:px-24"
  >
    <div
      class="flex flex-col xl:flex-row sm:items-center xl:items-start justify-around w-full mb-36 gap-12 xl:gap-24"
    >
      <div class="h-full flex flex-col justify-between">
        <h2
          ref="contactHeading"
          class="contactHeading font-bold uppercase text-5xl sm:text-7xl lg:text-[120px] lg:leading-[100px] xl:text-[110px] xl:leading-[95px] 2xl:!text-[10.5vw] 2xl:leading-[9vw] text-white flex-1"
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
        <div
          class="absolute bottom-32 left-6 xl:static xl:mt-48 xl:ml-12 flex flex-col gap-8"
        >
          <a
            class="custom-link"
            href="https://www.linkedin.com/in/kajetan-domagala/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            class="custom-link"
            href="https://github.com/kajtd"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
      <form
        class="flex flex-col w-full max-w-[500px] mb-32 xl:mb-0"
        action="https://formsubmit.co/kajetan.domagala00@gmail.com"
        method="POST"
      >
        <h3 class="text-2xl lg:text-5xl mb-5 lg:mb-10 font-medium">
          Let's get in touch!
        </h3>
        <p class="font-sans mb-6 lg:mb-8 text-base lg:text-xl">
          Do you have an interesting website idea, or just want to say hello?
          I'm all ears! Let's chat and see how I can help you out.
        </p>
        <label for="email" class="text-2xl my-2">Email</label>
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
            class="h-[2px] relative bottom-[2px] bg-gradient-to-r from-[#9f95ff] to-[#e44f26] w-0 transition-all duration-500 line"
          ></div>
        </div>
        <label for="message" class="text-2xl mt-12 mb-2"> Message </label>
        <div class="mb-12">
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            maxlength="500"
            class="form-box outline-none border-b-2 border-white border-solid w-full block bg-transparent text-gray-100 text-lg py-3 focus:border-transparent"
          ></textarea>
          <div
            class="h-[2px] relative bottom-[2px] bg-gradient-to-r from-[#9f95ff] to-[#e44f26] w-0 transition-all duration-500 line"
          ></div>
        </div>
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" class="hidden" />
        <AppButton type="submit">submit</AppButton>
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
