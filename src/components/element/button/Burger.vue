<template>
  <div :class="fold ? 'burger_fold' : ''" class="burger cursor-pointer" @click="$emit('burger-click')">
    <div class="bar1 bg-primary"></div>
    <div class="bar2 bg-primary"></div>
    <div class="bar3 bg-primary"></div>
  </div>
</template>

<script>
  export default {
    name: 'AppBurger',
    props: {
      fold: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .burger {
    &_fold {
      .bar1 {
        transform: rotate(-45deg) translate(-9px, 9px);
      }

      .bar2 {
        opacity: 0;
      }

      .bar3 {
        transform: rotate(45deg) translate(-8px, -8px);
      }
    }
  }

  .bar1, .bar2, .bar3 {
    width: 25px;
    height: 2px;
    transition: 0.2s;
  }

  .bar1, .bar2 {
    margin-bottom: 10px;
  }
</style>
