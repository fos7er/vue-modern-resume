<template>
  <footer class="bg-black py-12 text-white text-[14px] text-center relative">
    <div class="container flex flex-col justify-between animate fade-in-top">
      <ul class="social-links flex justify-center gap-9 text-[32px] mt-5 mb-8">
        <li v-for="link in socialLinks" :key="link.href">
          <a :href="link.href" target="_blank">
            <span :class="link.class"/>
          </a>
        </li>
      </ul>
      <ul class="copyright flex justify-center flex-wrap">
        <li>{{ new Date().getFullYear() }} {{ t('name') }}</li>
        <li>
          <span class="px-2.5">•</span>
          <span class="mr-2">Design by</span>
          <a href="https://www.styleshout.com/" target="_blank" title="Styleshout">Styleshout</a>
        </li>
      </ul>
    </div>
    <element-button-go-to class="go-to-top">
      <span class="i-mdi-chevron-up"/>
    </element-button-go-to>
  </footer>
</template>

<script setup>
  const { t } = useI18n()
  const socialLinks = [
    {
      href: 'https://facebook.com',
      class: 'i-fa-brands-facebook'
    },
    {
      href: 'https://twitter.com',
      class: 'i-fa-brands-twitter'
    },
    {
      href: 'https://web.telegram.org/k/',
      class: 'i-fa-brands-telegram'
    },
    {
      href: 'https://github.com',
      class: 'i-fa-brands-github'
    }
  ]
</script>

<style lang="scss" scoped>
  footer {
    .social-links {
      -webkit-font-smoothing: antialiased;
    }
  }

  .go-to-top {
    position: absolute;
    top: -24px;
    left: 0;
    right: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    font-size: 50px;
    background-color: #525252;
    transition: all 0.2s ease-in-out;
    border-radius: 100%;
  }
</style>
