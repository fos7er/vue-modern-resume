<template>
  <section>
    <div class="container education">
      <div class="md:grid grid-cols-4">
        <element-title-bordered>{{ t('education.title') }}</element-title-bordered>
        <div class="col-span-3">
          <block-bio
            v-for="item in tm('education.items')"
            :key="rt(item.name)"
            :title="rt(item.name)"
            :subtitle="rt(item.position)"
            :period="rt(item.period)"
            :description="rt(item.description)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t, tm, rt } = useI18n()
</script>
