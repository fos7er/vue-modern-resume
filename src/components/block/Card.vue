<template>
  <div class="card bg-white">
    <lightgallery :settings="gallerySettings">
      <a :href="imgSrc">
        <img class="card__img cursor-zoom-in" :src="imgSrc" :alt="title">
      </a>
    </lightgallery>
    <div class="card_title text-center">{{ title}}</div>
  </div>
</template>

<script setup>
  import Lightgallery from 'lightgallery/vue'
  import lgZoom from 'lightgallery/plugins/zoom'

  defineProps({
    imgSrc: {
      type: String,
      default: ''
    },
    title: {
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

