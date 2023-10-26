<template>
  <section id="work">
    <div class="container work">
      <div class="md:grid grid-cols-4">
        <element-title-bordered>{{ t('work.title') }}</element-title-bordered>
        <div class="col-span-3">
          <block-bio
            v-for="item in tm('work.items')"
            :key="rt(item.companyName)"
            :title="rt(item.companyName)"
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
