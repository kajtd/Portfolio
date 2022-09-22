import { ref } from 'vue'
import { useEventListener } from './useEventListener';

export function useMedia(query: string) {
    const mediaQuery = window.matchMedia(query);
    const matches = ref(mediaQuery.matches);
    useEventListener(mediaQuery, 'change', (event: Event) => {
    const element = event.target as Element;
      matches.value = element.matches(query);
    });
    return matches;
  }