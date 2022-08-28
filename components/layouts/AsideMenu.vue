<template>
  <aside class="aside-menu">
    <Logo class="aside-menu__logo" />
    <nav class="aside-menu__nav">
      <ul class="aside-menu__navigation-list">
        <li
          class="aside-menu__navigation-item"
          v-for="(item, index) in navigationList"
          :key="`aside-menu__navigation-item-${item.url}`"
        >
          <nuxt-link
            class="aside-menu__navigation-link color-light"
            :to="{ name: 'music-slug', params: { slug: item.url } }"
            >{{ counterHelper(index) }}\ {{ item.title }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { counterHelper } from "@/helpers/counterHelper";

const navigationList: Array<{
  title: string;
  url: string;
}> = [
  {
    title: "Pianino",
    url: "pianino",
  },
  {
    title: "Koto",
    url: "koto",
  },
  {
    title: "Violin",
    url: "violin",
  },
  {
    title: "Shamisen",
    url: "shamisen",
  },
];
</script>

<style lang="scss">
.aside-menu {
  background-image: $gradient-secondary;
  padding: 40px 20px;

  @media screen and (max-width: $breakpoint-tablet-sm) {
    padding: 20px 18px 40px 18px;
  }

  // .aside-menu__logo
  &__logo {
    margin-bottom: 50px;
  }

  // .aside-menu__navigation-item
  &__navigation-item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  // .aside-menu__navigation-link
  &__navigation-link {
    user-select: none;
    cursor: pointer;
    transition: $transition-mod;
    &:visited {
      color: $color-warning-light;
    }
    &:hover {
      color: $color-warning;
    }
    &:active {
      color: $color-light;
    }
  }
}
</style>
