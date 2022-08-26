<template>
  <component :is="tag" class="custom-link" :class="classObject" :href="href">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface ILinkProps {
  tag?: string;
  theme?: string;
  href?: string;
}

enum CustomLinkThemeSettings {
  PRIMARY = "primary",
  DANGER = "danger",
  SUCCESS = "success",
}

const props = withDefaults<ILinkProps, Required<ILinkProps>>(
  defineProps<ILinkProps>(),
  {
    theme: "DANGER",
    tag: "a",
    href: "",
  }
);

const classObject = computed<string>(() => {
  return `custom-link--${
    CustomLinkThemeSettings[props.theme as keyof typeof CustomLinkThemeSettings]
  }`;
});
</script>

<style lang="scss">
.custom-link {
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: $transition-mod;
  text-decoration-line: underline;

  // .custom-link--primary
  &--primary {
    color: $color-primary;
  }

  // .custom-link--danger
  &--danger {
    color: $color-danger;
  }

  // .custom-link--success
  &--success {
    color: $color-success;
  }
}
</style>
