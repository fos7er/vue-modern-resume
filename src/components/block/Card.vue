<template>
  <div class="card bg-white">
    <lightgallery :settings="gallerySettings">
      <a
        :data-sub-html="subHtml"
        :href="imgSrc"
        class="relative cursor-zoom-in"
      >
        <NuxtPicture
          :alt="title"
          :src="nuxtPictureSrc"
          class="card__img"
          format="avif,webp"
          sizes="100vw sm:350px"
        />
        <div
          class="
          card__overlay
          absolute
          top-0
          left-0
          opacity-0
          w-full
          flex
          justify-center
          items-center
          h-full
          bg-black/50
          hover:opacity-100"
        >
          <div
            class="
            px-2.5
            py-[5px]
            rounded-3xl
            text-white
            text-[15px]
            hover:text-accent
            bg-[#2b2b2b]/70
            cursor-pointer
            z-10"
          >
            Show more
          </div>
        </div>
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

<style lang="scss" scoped>
  .card {
    &__overlay {
      transition: 0.3s ease-in-out;
    }
  }
</style>
