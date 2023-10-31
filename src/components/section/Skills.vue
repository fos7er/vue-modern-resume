<template>
  <section class="animate flip-in-left">
    <div class="container skills">
      <div class="md:grid grid-cols-4">
        <element-title-bordered>{{ t('skills.title') }}</element-title-bordered>
        <div class="col-span-3">
          <p class="mb-8">{{ t('skills.subtitle') }}</p>
          <ul class="skills">
            <element-skill
              v-for="item in tm('skills.items')"
              :key="rt(item.name)"
              :color="rt(item.color)"
              :value="rt(item.value)"
            >
              {{ rt(item.name) }}
            </element-skill>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t, tm, rt } = useI18n()
</script>
