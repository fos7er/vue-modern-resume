<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
    <NuxtLoadingIndicator color="#000" :duration="1000"/>
    {{head}}
    <slot />
    </Body>
    </Html>
  </div>
</template>

<script setup>
  const route = useRoute()
  const { t } = useI18n()
  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: false
  })

  const title = computed(() => t('layouts.title', { title: t(route.meta.title ?? 'TBD') }))
</script>
