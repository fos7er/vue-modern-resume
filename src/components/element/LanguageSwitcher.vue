<template>
  <element-input-select
    :model-value="locale"
    :options="selectOptions"
    @update:model-value="setLocale"
  />
</template>

<script setup>
  const { locale, locales, setLocale } = useI18n()

  const selectOptions = computed(() => {
    return locales.value.map(item => {
      return {
        label: item.code.toUpperCase(),
        value: item.code
      }
    })
  })
</script>
