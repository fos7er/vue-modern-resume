<template>
  <div class="mb-8">
    <h3 class="mb-2 text-lg font-bold text-dark">{{ title }}</h3>
    <p class="mb-4">
      <span class="italic text-gray-500 font-roboto text-[18px]">{{ subtitle }}</span>
      <span class="px-2.5">•</span>
      <span>{{ period }}</span>
    </p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    period: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  })
</script>
