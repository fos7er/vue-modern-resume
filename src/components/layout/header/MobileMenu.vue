<template>
  <div class="mobile-menu">
    <div class="mobile-menu__links">
      <ul class="flex flex-col whitespace-nowrap">
        <li v-for="(item, i) in items"
            :key="item.id"
            class="mobile-menu__link-group py-2 border-b border-grey-light dark:border-white"
            tabindex="0"
            @click="$emit('toggle',i)"
        >
          <div class="mobile-menu__link-group__title hover:text-accent cursor-pointer relative">
            <NuxtLink
              v-if="item.path"
              :class="{'text-accent-active': item.active}"
              :to="{path:localePath(item.path), hash: item.hash}"
              class="block"
              no-prefetch
            >
              {{ t(item.text) }}
            </NuxtLink>
            <span v-else :class="{'text-accent-active': item.active}">{{ t(item.text) }}</span>
            <div v-if="item.group" class="arrow border-t border-r border-black dark:border-white"></div>
          </div>
          <ul
            v-if="item.group"
            :class="{hidden: !item.showGroup}"
            class="my-4 mx-2 px-5 border-l border-gray-light font-medium dark:border-white"
          >
            <li v-for="link in item.group" :key="link.id" class="mb-5">
              <NuxtLink v-if="link.path" :to="localePath(link.path)" class="block" no-prefetch>
                {{ t(link.text) }}
              </NuxtLink>
              <ul v-if="link.group">
                <li v-for="miniLink in link.group" :key="miniLink.id" class="mb-5">
                  <NuxtLink v-if="miniLink.path" no-prefetch :to="localePath(miniLink.path)" class="block">
                    {{ t(miniLink.text) }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import type { Menu } from '@/composables/menu'

  const localePath = useLocalePath()
  const { t } = useI18n()

  defineProps({
    items: {
      type: Object as PropType<Menu>,
      required: true
    }
  })

</script>

<style lang="scss" scoped>
  .mobile-menu {

    @apply flex flex-col text-sm font-bold;

    &__link-group:focus-within > &__link-group__title {
      color: theme('colors.accent')
    }

    &__link-group .arrow {
      position: absolute;
      top: 0;
      right: 3px;
      display: inline-block;
      width: 0.7rem;
      height: 0.7rem;
      transform: rotate(135deg);
      cursor: pointer;
    }
  }
</style>
