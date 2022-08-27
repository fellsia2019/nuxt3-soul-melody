<template>
  <section class="catalog-title-block">
    <h1 class="catalog-title-block__title title-xl text-center">{{ title }}</h1>
  </section>
</template>

<script lang="ts" setup>
interface ICatalogTitleBlock {
  title: string;
}

const props = defineProps<ICatalogTitleBlock>();
</script>

<style lang="scss">
.catalog-title-block {
  max-width: 800px;
  margin: 0 auto;
}
</style>
