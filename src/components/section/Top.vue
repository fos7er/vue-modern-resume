<template>
  <section>
    <div class="top relative">
      <div id="tsparticles"/>
    </div>
    <div class="bottom"/>
  </section>
</template>

<script setup>
  useHead({
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/tsparticles/2.12.0/tsparticles.bundle.min.js' }]
  })

  const options = {
    fps_limit: 60,
    fullScreen: {
      enable: false
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        push: { quantity: 3 },
        attract: { distance: 400, duration: 0.4, factor: 5 }
      }
    },
    particles: {
      color: { value: '#ffffff' },
      line_linked: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: 'none',
        enable: true,
        out_mode: 'out',
        random: false,
        speed: 0.8,
        straight: false
      },
      number: { density: { enable: true, value_area: 1300 }, value: 90 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      size: {
        random: true,
        value: 2
      }
    },
    retina_detect: true
  }

  onMounted(() => {
    tsParticles.load('tsparticles', options)
  })

</script>

<style lang="scss" scoped>

  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .top {
    height: 58.11vh;
    background: url('@/assets/img/desert1.webp') no-repeat bottom;
    background-size: cover;
    z-index: 1;
  }

  .bottom {
    height: 41.89vh;
    background: url('@/assets/img/desert2.webp') no-repeat top;
    background-size: cover;
  }
</style>
