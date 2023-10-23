<template>
  <section >
    <div class="top relative">
      <div id="tsparticles">
      </div>
    </div>
    <div class="bottom">
    </div>
  </section>
</template>

<script setup>
  useHead({
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/tsparticles/1.18.11/tsparticles.min.js' }]
  })

  const options = {
    fps_limit: 60,
    interactivity: {
      detect_on: 'window',
      events: {
        onclick: { enable: true, mode: 'push' },
        onhover: {
          enable: false,
          mode: 'attract',
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 2 },
        attract: { distance: 200, duration: 0.4, factor: 5 }
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
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: '400'
        },
        image: {
          height: 100,
          replace_color: true,
          src: 'images/github.svg',
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: '#000000', width: 0 },
        type: 'circle'
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: 'none',
      url: ''
    },
    retina_detect: true
  }

  onMounted(() => {
    tsParticles.load('tsparticles', options)

  })

</script>

<style lang="scss" scoped>
  .hero-body {
    position: relative;
  }

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
