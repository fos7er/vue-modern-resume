<template>
  <header ref="header" class="app-header">
    <nav role="navigation">
      <div class="menu h-12">
        <div class="logo">
          <NuxtLink class="block" :to="{ path:localePath('/'), hash: '#home' }">
            <layout-header-logo/>
          </NuxtLink>
        </div>
        <div class="links hidden md:block" :key="route.path">
          <ul class="flex whitespace-nowrap">
            <li
              v-for="item in menu"
              :key="item.id"
              class="main-link"
              tabindex="0"
            >
              <NuxtLink
                v-if="item.path"
                :to="{ path:localePath(item.path), hash: item.hash }"
                class="block main-link__text"
                :class="{'text-accent-active': item.active}"
              >
                {{ t(item.text) }}
              </NuxtLink>
              <div v-else class="cursor-pointer main-link__text" :class="{'text-accent-active': item.active}">
                {{ t(item.text) }}
              </div>
              <div class="main-link__dropdown">
                <ul v-if="item.group" class="bg-white pt-6 px-6">
                  <li v-for="link in item.group"
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
        <div class="actions ml-auto mr-8 md:mr-0 md:ml-0 flex items-center">
          <div>
            <select name="sdf" id="sdf">
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        <div class="burger inline-block md:hidden">
          <burger
            ref="burger"
            :fold="showMenu"
            @burger-click="burgerClickHandler"
          />
        </div>
      </div>
      <div class="px-4 bg-white">
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
    @apply fixed w-full bg-[#1d191a] text-white font-roboto select-none z-10 tracking-[2.5px]
  }

  .app-header .menu {
    @apply flex justify-between items-center px-4 xl:px-10 border-b border-black
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
    padding: 0 13px;
    line-height: 2rem;
    text-transform: uppercase;

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
    }

    &:hover &__dropdown {
      display: block;
    }

    &:focus-within > &__text, &:hover > &__text {
      color: theme('colors.primary')
    }
  }
</style>
