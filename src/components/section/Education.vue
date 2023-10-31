<template>
  <section class="animate flip-in-left">
    <div class="container education">
      <div class="md:grid grid-cols-4">
        <element-title-bordered>{{ t('education.title') }}</element-title-bordered>
        <div class="col-span-3">
          <block-bio
            v-for="item in tm('education.items')"
            :key="rt(item.name)"
            :description="rt(item.description)"
            :period="rt(item.period)"
            :subtitle="rt(item.position)"
            :title="rt(item.name)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t, tm, rt } = useI18n()
</script>
