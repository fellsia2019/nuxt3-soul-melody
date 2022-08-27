<template>
  <section class="introdution text-center">
    <h1 class="introdution__title title-xl">Discover new music every day</h1>
    <p class="introdution__description text-xl color-warning">
      Immerse yourself in the harmony of classical string or keyboard acoustic
      music of all time
    </p>
    <nuxt-link :to="{ name: 'catalog' }"
      ><CustomButton>Go to catalog!</CustomButton></nuxt-link
    >
  </section>
</template>

<style lang="scss">
.introdution {
  max-width: 900px;
  margin: 0 auto;
  // .introdution__title
  &__title {
    margin-bottom: 24px;
  }

  // .introdution__description
  &__description {
    margin-bottom: 60px;
  }
}
</style>
