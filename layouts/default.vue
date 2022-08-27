<template>
  <div class="default-layout">
    <AsideMenu
      class="default-layout__aside-menu"
      :class="{
        'default-layout__aside-menu--short-vision': !isVisibleFullAsideMenu,
      }"
      @toogleAsideMenu="toogleAsideMenu()"
      :isFullVision="isVisibleFullAsideMenu"
    />
    <div
      class="default-layout__main-content"
      :class="{
        'default-layout__main-content--full-vision': !isVisibleFullAsideMenu,
      }"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isVisibleFullAsideMenu = ref<boolean>(true);

const toogleAsideMenu = () => {
  isVisibleFullAsideMenu.value = !isVisibleFullAsideMenu.value;
};
</script>

<style lang="scss">
.default-layout {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  //   .default-layout__aside-menu
  &__aside-menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 320px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    transition: $transition-mod-lazzy;
    @include scroll-bar-off;

    // .default-layout__aside-menu--short-vision
    &--short-vision {
      transform: translateX(calc(-100% + 40px));
    }

    @media screen and (max-width: $breakpoint-desktop-md) {
      &:not(.default-layout__aside-menu--short-vision) {
        width: 220px;
      }
    }
  }

  // .default-layout__main-content
  &__main-content {
    padding: 40px;
    margin-left: 320px;
    transition: $transition-mod-lazzy;

    // .default-layout__main-content--full-vision
    &--full-vision {
      margin-left: 40px;
    }

    @media screen and (max-width: $breakpoint-desktop-md) {
      &:not(.default-layout__main-content--full-vision) {
        margin-left: 220px;
      }
    }
  }
}
</style>
