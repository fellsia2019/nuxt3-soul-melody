<template>
  <button class="toogle-button">
    <ArrowBackwardIcom />
  </button>
</template>

<style lang="scss">
.toogle-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid $color-dark;
  cursor: pointer;
  transition: $transition-mod;
  background-color: $color-thunder-sky;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: $color-warning;
    border-color: $color-warning;
  }
}
</style>
