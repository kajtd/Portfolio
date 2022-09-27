import { useMedia } from "./../composables/useMedia"
import { describe, expect, test } from "vitest";

describe("useEventListener.ts", () => {
    test('increase counter on call', async () => {
        const isReducedMotion = await useMedia('(prefers-reduced-motion)');
      
        expect(isReducedMotion.value).toBeFalsy()
      })
});