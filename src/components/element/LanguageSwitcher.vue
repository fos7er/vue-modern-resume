<template>
  <element-input-select
    v-model="locale"
    :options="selectOptions"
  />
</template>

<script setup>
  const { locale, locales } = useI18n()

  const selectOptions = computed(() => {
    return locales.value.map(item => {
      return {
        label: item.toUpperCase(),
        value: item
      }
    })
  })

</script>
