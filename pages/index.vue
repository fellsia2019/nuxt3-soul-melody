<template>
  <main class="main-page">
    <Introdution />
  </main>
</template>

<style lang="scss">
.main-page {
  margin-top: 15vh;

  @media screen and (max-width: $breakpoint-desktop-md) {
    margin-top: 100px;
  }

  @media screen and (max-width: $breakpoint-tablet-sm) {
    margin-top: 40px;
  }
}
</style>
