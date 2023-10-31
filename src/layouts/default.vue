<template>
  <div ref="main">
    <NuxtLoadingIndicator :duration="1000" color="#dd6a00"/>
    <layout-header/>
    <slot/>
    <layout-footer/>
  </div>
</template>

<script setup>
  const { $gsap } = useNuxtApp()
  const { locale, t } = useI18n()

  useHead({
    htmlAttrs: {
      lang: locale
    },
    title: t('title'),
    meta: [
      { name: 'description', content: t('description') }
    ]
  })

  //region animation
  const main = ref(null)
  let ctx

  onMounted(() => {
    ctx = $gsap.context((self) => {
      let targets = self.selector('.animate.flip-in-left')
      targets.forEach(target => {
        $gsap.from(target, {
          xPercent: -100,
          duration: 1,
          ease: 'power2.out',
          opacity: 0,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%'
          }
        })
      })

      targets = self.selector('.animate.fade-in-left')
      targets.forEach(target => {
        $gsap.from(target, {
          xPercent: -10,
          duration: 1,
          opacity: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 80%'
          }
        })
      })

      targets = self.selector('.animate.fade-in-top')
      targets.forEach(target => {
        $gsap.from(target, {
          yPercent: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 90%'
          }
        })
      })
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })
  //endregion
</script>
