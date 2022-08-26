<template>
  <div class="logo text-center">
    <nuxt-link class="logo__link" :to="{ name: 'index' }">
      <h2 class="logo__text text-xl color-warning">soul melody</h2>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.logo {
  border: 2px solid $color-warning;
  padding: 10px;
}
</style>
