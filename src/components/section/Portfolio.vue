<template>
  <section class="bg-grey py-[90px]">
    <div class="container">
      <h2 class="mb-12  text-center uppercase font-medium text-[#95A3A3] tracking-wider">CHECK OUT SOME OF MY WORKS.</h2>
      <div class="sm:grid grid-cols-3 lg:grid-cols-4 gap-10">
        <block-card
          v-for="item in works"
          :imgSrc="getFile(item.img)"
          :title="item.title"
          class="mb-12 sm:mb-0"
        />
      </div>
    </div>
  </section>
</template>

<script setup>

  const images = import.meta.glob('../../assets/img/portfolio/*.*', { eager: true })
  const getFile = (file) => images[`../../assets/img/portfolio/${file}`]?.default
  const works = [
    {
      img: '01.jpg',
      title: 'Canadian Wanderlust'
    },
    {
      img: '02.jpg',
      title: 'Fury Fighting Gear'
    },
    {
      img: '03.jpg',
      title: 'Original Thai Food'
    },
    {
      img: '04.jpg',
      title: 'Resume Website'
    },
    {
      img: '05.jpg',
      title: 'Smirkspace'
    },
    {
      img: '06.jpg',
      title: 'Canadian Wanderlust'
    },
    {
      img: '01.jpg',
      title: 'Fury Fighting Gear'
    },
    {
      img: '02.jpg',
      title: 'Original Thai Food'
    },
    {
      img: '03.jpg',
      title: 'Resume Website'
    },
    {
      img: '04.jpg',
      title: 'Smirkspace'
    },
    {
      img: '05.jpg',
      title: 'Canadian Wanderlust'
    },
    {
      img: '06.jpg',
      title: 'Fury Fighting Gear'
    }
  ]
</script>

