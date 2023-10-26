<template>
  <div class="wrapper inline-flex justify-center items-center cursor-pointer hover:text-accent" @click="scroll">
    <slot/>
  </div>
</template>

<script setup>
  const props = defineProps({
    behavior: {
      type: String,
      default: 'smooth'
    },
    target: {
      type: String,
      default: 'top'
    }
  })
  const scroll = () => {
    if (props.target === 'top') {
      return window.scrollTo({
        top: 0,
        left: 0,
        behavior: props.behavior
      })
    }

    //header height
    const yOffset = -48
    const y = document.querySelector(props.target).getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: props.behavior })
  }
</script>
