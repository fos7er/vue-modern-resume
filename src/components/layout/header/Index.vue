<template>
  <header ref="header" class="app-header">
    <nav class="h-16" role="navigation">
      <div class="menu">
        <div class="logo block lg:block">
          <NuxtLink no-prefetch :to="localePath('/')">
            <layout-header-logo/>
          </NuxtLink>
        </div>
        <div class="links hidden font-semibold 2xl:block" :key="route.path">
          <ul class="flex whitespace-nowrap">
            <li v-for="item in menu"
                :key="item.id"
                class="main-link px-1.5 py-2 relative "
                tabindex="0"
            >
              <NuxtLink
                no-prefetch
                v-if="item.path"
                :to="{path:localePath(item.path), hash: item.hash}"
                class="block main-link__text"
                :class="{'text-accent-active': item.active}"
              >
                {{ t(item.text) }}
              </NuxtLink>
              <div v-else class="cursor-pointer main-link__text" :class="{'text-accent-active': item.active}">
                {{ t(item.text) }}
              </div>
              <div class="main-link__dropdown">
                <ul v-if="item.group" class="bg-white pt-6 px-6 dark:bg-black">
                  <li v-for="link in item.group"
                      :key="link.id"
                      :class="{'sub-group':link.group}"
                      class="pb-8"
                  >
                    <NuxtLink no-prefetch v-if="link.path" :to="localePath(link.path)" class="block">
                      {{ t(link.text) }}
                    </NuxtLink>
                    <span v-else>{{ t(link.text) }}</span>
                    <ul v-if="link.group" class="sub-group relative text-sm pl-4 pt-2">
                      <li v-for="miniLink in link.group" :key="miniLink.id"
                          class="sub-group__link py-2"
                      >
                        <NuxtLink no-prefetch :to="localePath(miniLink.path)" class="block">
                          {{ t(miniLink.text) }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="actions hidden 2xl:flex items-center">
          <div>
          </div>
        </div>
        <div class="burger ml-auto inline-block 2xl:hidden">
          <burger
            ref="burger"
            :fold="showMenu"
            @burger-click="burgerClickHandler"
          />
        </div>
      </div>
      <div class="px-4 bg-white dark:bg-black">
        <layout-header-mobile-menu v-show="showMenu" :items="menu" @toggle="toggleMenu">
          <div class="actions flex justify-between items-center py-4 font-medium">
          </div>
        </layout-header-mobile-menu>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import Burger from '~/components/element/button/Burger.vue'

  const localePath = useLocalePath()
  const { t } = useI18n()
  const route = useRoute()
  const { menu, toggleMenu } = useMenu()

  //region mobileMenu
  let showMenu = ref(false)
  const header = ref(null)
  const hideMobileMenu = () => {
    showMenu.value = false
    menu.forEach(item => {
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
    @apply absolute w-full bg-transparent select-none z-10
  }

  .app-header .menu {
    @apply flex justify-between items-center px-4 xl:px-10 border-b border-black dark:border-white
  }

  .app-header .logo > * {
    @apply h-16
  }

  /* Disabling hover, if header has opened element */

  .links:focus-within .main-link:hover .main-link__dropdown {
    display: none;
  }

  .links:focus-within .main-link:focus-within .main-link__dropdown {
    display: block;
  }

  .main-link {

    &__dropdown {
      display: none;
      left: -10%;
      font-size: 14px;
      line-height: 15px;
      position: absolute;
      border-top: 28px solid transparent;

      & > li:last-child {
        padding-bottom: 0;
      }

      & ul.sub-group:after {
        content: '';
        position: absolute;
        top: 14%;
        left: 4px;
        width: 1px;
        height: 78%;
        background-color: theme('colors.grey');
      }
    }

    &:hover &__dropdown {
      display: block;
    }

    &:focus-within > &__text, &:hover > &__text {
      color: theme('colors.accent')
    }
  }
</style>
