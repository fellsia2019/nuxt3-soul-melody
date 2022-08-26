<template>
  <div class="music-detail-page">
    <h1 class="music-detail-page__title">
      Music detail page -
      <span class="color-primary">{{ route.params.slug }}</span>
    </h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

onMounted(() => {
  console.log("route:", route, route.params);
});
</script>
