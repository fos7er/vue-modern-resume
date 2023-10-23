<template>
  <div class="card bg-white">
    <lightgallery :settings="gallerySettings">
      <a
        :href="imgSrc"
        :data-sub-html="subHtml"
      >
        <NuxtPicture
          class="card__img cursor-zoom-in"
          format="avif,webp"
          :src="nuxtPictureSrc"
          :alt="title"
          sizes="100vw sm:350px"
        />
      </a>
    </lightgallery>
    <div class="card_title text-center">{{ title }}</div>
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
    nuxtPictureSrc: {
      type: String,
      default: ''
    },
    subHtml: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  })

  const gallerySettings = {
    speed: 500,
    plugins: [lgZoom],
    mode: 'lg-zoom',
    download: false,
    counter: false,
    zoom: false
  }
</script>
