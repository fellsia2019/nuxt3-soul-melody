<template>
  <aside class="aside-menu">
    <div class="aside-menu__inner">
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
      <ToggleButton
        class="aside-menu__toggle-button"
        :class="{ 'aside-menu__toggle-button--invert-rotate': !isFullVision }"
        @click="toogleAsideMenu()"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { counterHelper } from "@/helpers/counterHelper";

interface IAsideMenuProps {
  isFullVision: boolean;
}
interface IAsideMenuEmits {
  (e: "toogleAsideMenu"): void;
}

const props = defineProps<IAsideMenuProps>();
const emit = defineEmits<IAsideMenuEmits>();

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
    title: "Guitar",
    url: "guitar",
  },
];

const toogleAsideMenu = () => {
  emit("toogleAsideMenu");
};
</script>

<style lang="scss">
.aside-menu {
  // .aside-menu__inner
  padding-right: 20px;
  &__inner {
    background-image: $gradient-secondary;
    padding: 40px 20px 40px 20px;
    height: 100%;
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

  // .aside-menu__toggle-button
  &__toggle-button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;

    // .aside-menu__toggle-button--invert-rotate
    &--invert-rotate {
      transform: translate(0, -50%) rotate(180deg);
    }
  }
}
</style>
