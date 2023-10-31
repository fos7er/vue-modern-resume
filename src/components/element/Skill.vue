<template>
  <li class="mb-6">
    <div class="mb-2 uppercase font-bold tracking-[2px] text-black/70">
      <slot/>
    </div>
    <div class="bg-dark max-w-[600px] h-[42px]">
      <div :style="`background-color:${color};width:${value}%`" class="h-full"></div>
    </div>
  </li>
</template>

<script setup>
  defineProps({
    color: {
      type: String,
      default: '#fff'
    },
    value: {
      type: String,
      default: 100
    }
  })
</script>
