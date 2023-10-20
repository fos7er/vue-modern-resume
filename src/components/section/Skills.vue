<template>
  <section class="py-12">
    <div class="container">
      <div class="header md:grid grid-cols-4">
        <element-title-bordered>{{ t('skills.title') }}</element-title-bordered>
        <div class="description col-span-3">
          <p class="mb-8">{{ t('skills.subtitle' ) }}</p>
        </div>
      </div>
      <div class="body">
        <element-skill value="80">Name</element-skill>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n()
</script>

<style lang="scss" scoped>

</style>
