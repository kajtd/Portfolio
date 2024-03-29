import { ref } from 'vue';

export const useIntersectionObserver = (callback?: Function) => {
  const observedElement = ref<Element>();
  const elementClass = ref('');

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        (observedElement.value as Element).classList.add(
          elementClass.value
        );
        if (callback) {
          callback()
        }
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback);
  return {
    observedElement,
    elementClass,
    observer,
  };
};