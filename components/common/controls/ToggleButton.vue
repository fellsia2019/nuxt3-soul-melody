<template>
  <button class="toggle-button">
    <ArrowBackwardIcom class="toggle-button__icon" />
  </button>
</template>

<style lang="scss">
.toggle-button {
  width: 30px;
  height: 30px;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: $transition-mod-lazzy;
  border: 1px solid $color-dark;
  border-radius: 50%;
  background-color: $color-thunder-sky;

  // .toggle-button__icon
  &__icon {
    transform: rotate(-90deg);
  }
}
</style>
