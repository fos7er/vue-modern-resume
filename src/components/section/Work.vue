<template>
  <section class="animate flip-in-left">
    <div class="container work">
      <div class="md:grid grid-cols-4">
        <element-title-bordered>{{ t('work.title') }}</element-title-bordered>
        <div class="col-span-3">
          <block-bio
            v-for="item in tm('work.items')"
            :key="rt(item.companyName)"
            :description="rt(item.description)"
            :period="rt(item.period)"
            :subtitle="rt(item.position)"
            :title="rt(item.companyName)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t, tm, rt } = useI18n()
</script>
