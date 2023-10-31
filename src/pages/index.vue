<template>
  <div ref="main">
    <section-top id="home"/>
    <section-about id="about"/>
    <section-education id="education"/>
    <section-work id="work"/>
    <section-skills id="skills"/>
    <section-portfolio id="portfolio"/>
  </div>
</template>

<script setup>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  useWaypoints(['home', 'about', 'education', 'work', 'skills', 'portfolio'])

  //region animation
  gsap.registerPlugin(ScrollTrigger)
  const main = ref()
  let ctx

  onMounted(() => {
    ctx = gsap.context((self) => {
      const targets = self.selector('.animate.flip-in-left')
      targets.forEach(target => {
        gsap.from(target, {
          xPercent: -100,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%'
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
