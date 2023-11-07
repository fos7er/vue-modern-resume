<template>
  <div class="mobile-menu">
    <div class="mobile-menu__links">
      <ul class="flex flex-col whitespace-nowrap">
        <li
          v-for="(item, i) in items"
          :key="item.id"
          class="mobile-menu__link-group p-2 border-b border-grey-light"
          tabindex="0"
          @click="$emit('toggle',i)"
        >
          <div class="mobile-menu__link-group__title px-2 hover:text-primary cursor-pointer relative">
            <NuxtLink
              v-if="item.path"
              :to="{path:localePath(item.path), hash: item.hash}"
              class="block"
              @click="$emit('linkClick')"
            >
              {{ t(item.text) }}
            </NuxtLink>
            <span v-else class="transition-ease-in-out">{{ t(item.text) }}</span>
            <div v-if="item.group" class="arrow border-t border-r border-white"/>
          </div>
          <ul
            v-if="item.group"
            :class="{hidden: !item.showGroup}"
            class="my-4 mx-2 px-5 border-l border-gray-light font-medium"
          >
            <li v-for="link in item.group" :key="link.id" class="mb-5">
              <NuxtLink v-if="link.path" :to="localePath(link.path)" class="block" @click="$emit('linkClick')">
                {{ t(link.text) }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import type { Menu } from '@/types/menu'

  const localePath = useLocalePath()
  const { t } = useI18n()

  defineProps({
    items: {
      type: Object as PropType<Menu>,
      required: true
    }
  })

  defineEmits(['toggle', 'linkClick'])
</script>

<style lang="scss" scoped>
  .mobile-menu {

    @apply flex flex-col uppercase;

    &__link-group:focus-within > &__link-group__title {
      color: theme('colors.primary')
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
