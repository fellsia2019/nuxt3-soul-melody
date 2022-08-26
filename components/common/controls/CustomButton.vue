<template>
  <component
    :is="tag"
    class="custom-button"
    :class="classObject"
    :disabled="disabled"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
interface IButtonProps {
  size?: string;
  theme?: string;
  disabled?: boolean;
  tag?: string;
}

enum CustomButtonSizeSettings {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

enum CustomButtonThemeSettings {
  PRIMARY = "primary",
  DANGER = "danger",
  WARNING = "warning",
  DARK = "dark",
  SUCCESS = "success",
}

const props = withDefaults<IButtonProps, Required<IButtonProps>>(
  defineProps<IButtonProps>(),
  {
    size: "LG",
    theme: "PRIMARY",
    tag: "button",
    disabled: false,
  }
);

const classObject = computed<string>(() => {
  return `custom-button--${
    CustomButtonSizeSettings[
      props.size as keyof typeof CustomButtonSizeSettings
    ]
  } custom-button--${
    CustomButtonThemeSettings[
      props.theme as keyof typeof CustomButtonThemeSettings
    ]
  }`;
});
</script>

<style lang="scss">
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  transition: $transition-mod;
  border: 1px solid transparent;
  cursor: pointer;

  // themes
  // .custom-button--danger
  &--danger {
    background-color: $color-danger;
    color: $color-light;
    border-color: $color-danger;
    &:hover {
      background-color: transparent;
      color: $color-danger;
    }
    &:active {
      background-color: $color-danger;
      color: $color-light;
    }
  }

  // .custom-button--primary
  &--primary {
    background-color: $color-primary;
    color: $color-light;
    border-color: $color-primary;
    &:hover {
      background-color: transparent;
      color: $color-primary;
    }
    &:active {
      background-color: $color-primary;
      color: $color-light;
    }
  }

  // .custom-button--success
  &--success {
    background-color: $color-success;
    color: $color-light;
    border-color: $color-success;
    &:hover {
      background-color: transparent;
      color: $color-success;
    }
    &:active {
      background-color: $color-success;
      color: $color-light;
    }
  }

  // .custom-button--dark
  &--dark {
    background-color: $color-dark;
    color: $color-light;
    border-color: $color-dark;
    &:hover {
      background-color: transparent;
      color: $color-dark;
    }
    &:active {
      background-color: $color-dark;
      color: $color-light;
    }
  }

  // .custom-button--warning
  &--warning {
    background-color: $color-warning;
    color: $color-light;
    border-color: $color-warning;
    &:hover {
      background-color: transparent;
      color: $color-warning;
    }
    &:active {
      background-color: $color-warning;
      color: $color-light;
    }
  }

  // sizes
  // .custom-button--sm
  &--sm {
    padding: 14px 20px;
    border-radius: 20px;

    @media screen and (max-width: $breakpoint-tablet-sm) {
      padding: 12px 16px;
    }
  }

  // .custom-button--md
  &--md {
    padding: 14px 40px;
    border-radius: 30px;

    @media screen and (max-width: $breakpoint-tablet-sm) {
      padding: 12px 26px;
    }
  }

  // .custom-button--lg
  &--lg {
    padding: 22px 30px;
    border-radius: 25px;
    font-size: 18px;

    @media screen and (max-width: $breakpoint-tablet-sm) {
      padding: 12px 22px;
    }
  }
}
</style>
