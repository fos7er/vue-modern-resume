<template>
  <section class="bg-grey py-[90px]">
    <div class="container animate fade-in-left">
      <h2 class="mb-12 text-center uppercase font-medium text-[#95A3A3] tracking-wider">
        {{ t('portfolio.title') }}
      </h2>
      <div class="sm:grid grid-cols-3 gap-10">
        <block-card
          v-for="item in works"
          :key="item.id"
          :img-src="getFile(item.img)"
          :nuxt-picture-src="item.img"
          :sub-html="item.subHtml"
          :title="item.title"
          class="mb-12 sm:mb-0"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n()
  const images = import.meta.glob('../../assets/img/portfolio/*.*', { eager: true })
  const getFile = (file) => images[`../../assets/img/portfolio/${file}`]?.default
  const works = [
    {
      id: 1,
      img: '01.jpg',
      title: 'Canadian Wanderlust',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 2,
      img: '02.jpg',
      title: 'Fury Fighting Gear',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 3,
      img: '03.jpg',
      title: 'Original Thai Food',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 4,
      img: '04.jpg',
      title: 'Resume Website',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 5,
      img: '05.jpg',
      title: 'Smirkspace',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 6,
      img: '06.jpg',
      title: 'Canadian Wanderlust',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 7,
      img: '02.jpg',
      title: 'Fury Fighting Gear',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 8,
      img: '01.jpg',
      title: 'Original Thai Food',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    },
    {
      id: 9,
      img: '05.jpg',
      title: 'Resume Website',
      subHtml: '<h4> Source on - <a href="https://github.com" > GitHub </a></h4> <p> My awesome  work example</p>'
    }
  ]
</script>

