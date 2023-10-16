<template>
  <div class="card bg-white">
    <lightgallery :settings="gallerySettings">
      <a href="https://stozen-spb.github.io/images/portfolio/01.jpg">
        <img class="card__img cursor-zoom-in" src="https://stozen-spb.github.io/images/portfolio/01.jpg" alt="ssdfds">
      </a>
    </lightgallery>
    <div class="card_title text-center">Smirkspace</div>
  </div>
</template>

<script setup>
  import Lightgallery from 'lightgallery/vue'
  import lgZoom from 'lightgallery/plugins/zoom'

  defineProps({
    imgSrc: {
      type: String,
      default: ''
    }
  })

  const plugins = [lgZoom]
  const gallerySettings = {
    speed: 500,
    plugins: plugins,
    mode: 'lg-zoom',
    download: false,
    counter: false,
    zoom: false
  }
</script>

<style lang="scss" scoped>
  @import 'lightgallery/scss/lightgallery.scss';
  @import 'lightgallery/scss/lg-zoom.scss';
</style>

