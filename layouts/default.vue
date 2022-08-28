<template>
  <div class="default-layout">
    <AsideMenu
      class="default-layout__aside-menu"
      :class="{
        'default-layout__aside-menu--is-mob-active': !isMobileMenuHidden,
      }"
    />
    <ToggleButton
      class="default-layout__toggle-button"
      :class="{
        'default-layout__toggle-button--is-mob-active': !isMobileMenuHidden,
      }"
      @click="toogleMobileAsideMenu()"
    />
    <div class="default-layout__main-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isMobileMenuHidden = ref<boolean>(true);

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  isMobileMenuHidden.value = true;
  window.scrollTo(0, 0);
});

const toogleMobileAsideMenu = () => {
  isMobileMenuHidden.value = !isMobileMenuHidden.value;
};

watch(
  () => isMobileMenuHidden.value,
  () => {
    if (!isMobileMenuHidden.value) return (document.body.style.overflowY = "");
    document.body.style.overflowY = "hidden";
  }
);
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

    @include scroll-bar-off;

    @media screen and (max-width: $breakpoint-desktop-md) {
      width: 220px;
    }

    @media screen and (max-width: $breakpoint-tablet-sm) {
      z-index: 10;
      width: 100%;
      padding-bottom: 60px;
      transform: translateY(calc(-100% + 15px));
      transition: $transition-mod-lazzy;
    }

    // .default-layout__aside-menu--is-mob-active
    &--is-mob-active {
      @media screen and (max-width: $breakpoint-tablet-sm) {
        width: 100%;
        transform: translateY(0);
      }
    }
  }

  // .default-layout__toggle-button
  &__toggle-button {
    @media screen and (min-width: ($breakpoint-tablet-sm + 1)) {
      display: none;
    }
    @media screen and (max-width: $breakpoint-tablet-sm) {
      z-index: 11;
      position: fixed;
      top: 1px;
      left: 50%;
      transform: translateX(-50%);
    }

    // .default-layout__toggle-button--is-mob-active
    &--is-mob-active {
      transform: translateX(-50%) translateY(calc(-100% - 5px)) rotate(180deg);
      top: 100%;
    }
  }

  // .default-layout__main-content
  &__main-content {
    padding: 40px;
    margin-left: 320px;

    @media screen and (max-width: $breakpoint-desktop-md) {
      margin-left: 220px;
    }

    @media screen and (max-width: $breakpoint-tablet-sm) {
      margin-left: 0;
      padding: 40px 18px;
    }
  }
}
</style>
