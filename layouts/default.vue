<template>
  <div class="default-layout">
    <AsideMenu class="default-layout__aside-menu" />
    <div class="default-layout__main-content"><NuxtPage /></div>
  </div>
</template>

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
    width: 220px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    @include scroll-bar-off;
  }

  // .default-layout__main-content
  &__main-content {
    padding: 40px;
    margin-left: 220px;
  }
}
</style>
