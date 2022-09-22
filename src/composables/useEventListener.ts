import { onBeforeUnmount, onMounted, watch, isRef, unref } from "vue";
import type { Ref } from "vue";

export function useEventListener(
  // the target could be reactive ref
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => unknown
) {
  // if target is a reactive ref, use a watcher
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    // otherwise use the mounted hook
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  // clean it up
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}