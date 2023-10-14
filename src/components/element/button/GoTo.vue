<template>
  <div class="wrapper inline-flex justify-center items-center cursor-pointer" @click="scroll">
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    behavior: {
      type: String,
      default: 'smooth'
    },
    href: {
      type: String,
      default: 'top'
    }
  })
  const scroll = () => {
    if (props.href === 'top') {
      return window.scrollTo({
        top: 0,
        left: 0,
        behavior: props.behavior
      })
    }

    document.getElementById(props.href).scrollIntoView({ behavior: props.behavior })
  }
</script>

<style lang="scss" scoped>


</style>
