<template>
  <div>
    <NuxtLoadingIndicator color="#dd6a00" :duration="1000"/>
    <layout-header/>
    <slot/>
    <layout-footer/>
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
