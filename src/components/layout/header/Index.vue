<template>
  <header ref="header" class="app-header">
    <nav role="navigation">
      <div class="menu">
        <div class="menu__logo">
          <NuxtLink :to="{ path:localePath('/'), hash: '#home' }" class="block">
            <layout-header-logo/>
          </NuxtLink>
        </div>
        <div :key="route.path" class="menu__links">
          <ul class="flex whitespace-nowrap">
            <li
              v-for="item in store.menu"
              :key="item.id"
              :class="{'text-primary': item.active}"
              class="main-link"
              tabindex="0"
            >
              <NuxtLink
                v-if="item.path"
                :to="{ path:localePath(item.path), hash: item.hash }"
                class="block main-link__text"

              >
                {{ t(item.text) }}
              </NuxtLink>
              <div v-else class="cursor-pointer main-link__text">
                {{ t(item.text) }}
              </div>
              <div class="main-link__dropdown">
                <ul v-if="item.group" class="pt-6 px-6">
                  <li
                    v-for="link in item.group"
                    :key="link.id"
                    :class="{'sub-group':link.group}"
                    class="pb-8"
                  >
                    <NuxtLink v-if="link.path" :to="localePath(link.path)" class="block">
                      {{ t(link.text) }}
                    </NuxtLink>
                    <span v-else>{{ t(link.text) }}</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="menu__actions">
          <div class="pr-3">
            <element-language-switcher/>
          </div>
        </div>
        <div class="burger inline-block lg:hidden">
          <element-button-burger
            ref="burger"
            :fold="showMenu"
            @burger-click="burgerClickHandler"
          />
        </div>
      </div>
      <div class="bg-header">
        <layout-header-mobile-menu
          v-show="showMenu"
          :items="store.menu"
          @linkClick="hideMobileMenu"
          @toggle="store.toggleMenu"
        >
          <div class="actions flex justify-between items-center px-2 py-4">
            <a :href="`mailto:${email}`" class="lowercase">{{ email }}</a>
            <element-language-switcher/>
          </div>
        </layout-header-mobile-menu>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { email } from '@/assets/constants'
  import { useHeaderStore } from '~/store/header'

  const localePath = useLocalePath()
  const { t } = useI18n()
  const route = useRoute()
  const store = useHeaderStore()

  //region mobileMenu
  let showMenu = ref(false)
  const header = ref(null)
  const hideMobileMenu = () => {
    showMenu.value = false
    store.menu.forEach(item => {
      item.showGroup = false
    })
  }

  const burgerClickHandler = () => {
    if (showMenu.value) {
      showMenu.value = false
      hideMobileMenu()
    } else {
      showMenu.value = true
    }
  }

  onClickOutside(header, hideMobileMenu)

  onMounted(() => {
    window.addEventListener('resize', hideMobileMenu)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', hideMobileMenu)
  })

  watch(() => route.path, () => {
    hideMobileMenu()
  })
  //endregion

</script>

<style lang="postcss" scoped>
  .app-header {
    @apply fixed w-full bg-header text-white font-roboto select-none z-10 tracking-[2.5px];
  }

  .menu {
    @apply h-12 grid grid-cols-12 items-center px-4 xl:px-10 border-b border-header;

    &__logo {
      @apply col-span-2;
    }

    &__links {
      @apply col-span-8 hidden justify-center lg:flex;
    }

    &__actions {
      @apply col-span-2 flex justify-end items-center col-start-10 lg:col-start-auto;
    }
  }

  .app-header .logo > * {
    @apply h-12
  }

  /* Disabling hover, if header has opened element */

  .links:focus-within .main-link:hover .main-link__dropdown {
    display: none;
  }

  .links:focus-within .main-link:focus-within .main-link__dropdown {
    display: block;
  }

  .main-link {
    position: relative;
    padding: 0 9px;
    line-height: 2rem;
    text-transform: uppercase;

    &__text {
      transition: color .3s ease-in-out;
    }

    &__dropdown {
      display: none;
      position: absolute;
      left: -10%;
      font-size: 14px;
      line-height: 15px;
      background: theme('colors.header');
      border-top: 28px solid transparent;

      & > li:last-child {
        padding-bottom: 0;
      }
    }

    &:hover &__dropdown {
      display: block;
    }

    &:hover > &__text {
      color: theme('colors.primary')
    }
  }
</style>
