<template>
  <section class="bg-grey py-[90px]">
    <div class="container">
      <h2 class="mb-12  text-center uppercase font-medium text-[#95A3A3]">CHECK OUT SOME OF MY WORKS.</h2>
      <div class="sm:grid grid-cols-3 lg:grid-cols-4 gap-10">
        <block-card v-for="item in works" :imgSrc="item.imgSrc" class="mb-12 sm:mb-0"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  const works = [
    {
      imgSrc: '@/assets/img/portfolio/01.jpg',
      title:''
    }
  ]

</script>

