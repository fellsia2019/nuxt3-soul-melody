<template>
  <button class="play-button">
    <PlayIcon class="play-button__icon" />
  </button>
</template>

<style lang="scss">
.play-button {
  width: 25px;
  height: 25px;
  border: 2px solid $color-warning;
  background-color: $color-warning;

  padding: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  cursor: pointer;
  transition: $transition-mod;

  //   .play-button__icon
  &__icon {
    width: 100%;
    height: 100%;
    color: $color-dark;
    margin-left: 3px;
  }
}
</style>
