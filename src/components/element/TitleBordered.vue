<template>
  <div class="pb-12 text-md font-bold text-black/70 text-center md:text-left">
    <h2><slot/></h2>
  </div>
</template>

<style lang="scss" scoped>
  h2 {
    @apply inline-block pb-1 border-b-[3px] border-blue-600 uppercase
  }
</style>
