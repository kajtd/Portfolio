import { mount } from "@vue/test-utils";
import AppButton from "../components/AppButton.vue";
import { describe, expect, test } from "vitest";

describe("AppButton.vue", () => {
    test("renders the correct tailwind classes for secondary button", () => {
        const secondary = true
        const secondaryClasses = ['bg-transparent', 'border-2', 'md:border-4', 'border-black', 'border-solid', 'hover:!shadow-none'];
        const wrapper = mount(AppButton, {
            props: { secondary },
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(secondaryClasses)
        );
    });

    test("renders the correct tailwind classes for disabled button", () => {
        const disabled = true
        const disabledClasses = ['opacity-50', 'pointer-events-none'];
        const wrapper = mount(AppButton, {
            props: { disabled },
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(disabledClasses)
        );
    });
});