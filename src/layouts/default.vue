<template>
  <div>
    <NuxtLoadingIndicator color="#000" :duration="1000"/>
    <slot/>
  </div>
</template>

<script setup>
  const { locale, t } = useI18n()

  useHead({
    htmlAttrs: {
      lang: locale
    },
    title: t('title'),
    meta: [
      { name: 'description', content:  t('description') }
    ]
  })
</script>
