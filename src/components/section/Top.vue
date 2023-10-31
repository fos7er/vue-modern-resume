<template>
  <section>
    <div class="bg">
      <div id="particles"/>
      <div
        class="bg__text-wrapper"
        :class="{'hidden': !isReady}"
      >
        <h1 class="bg__title animate fade-in-top">{{ t('top.title') }}</h1>
        <h2 class="bg__subtitle animate fade-in-top">
          {{ t('top.subtitle') }}
        </h2>
      </div>
      <element-button-go-to class="go-to-top" target="#about">
        <span class="i-mdi-chevron-down"/>
      </element-button-go-to>
    </div>
  </section>
</template>

<script setup>
  useHead({
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/tsparticles/2.12.0/tsparticles.bundle.min.js' }]
  })

  const { t } = useI18n()
  const isReady = ref(false)

  const options = {
    fps_limit: 60,
    fullScreen: {
      enable: false
    },
    interactivity: {
      detect_on: 'canvas',
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
      color: { value: '#fff' },
      line_linked: {
        color: '#fff',
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
    isReady.value = true
    tsParticles.load('particles', options)
  })

</script>

<style lang="scss" scoped>

  #particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
  }

  .bg {
    position: relative;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 40px;
    color: #fff;
    text-align: center;
    font-family: 'Roboto', 'sans-serif';
    font-weight: bold;
    background: #000 url('@/assets/img/desert.webp') no-repeat top;
    background-size: cover;
    z-index: 1;

    &__text-wrapper {
      max-width: 1000px;
    }

    &__title {
      margin-top: -50px;
      margin-bottom: 0.7rem;
      font-size: calc(var(--resolution) * 2);
      line-height: calc(var(--resolution) * 2.2);
      text-shadow: 0 0 15px #9f4a33;
    }

    &__subtitle {
      padding-bottom: 0.5rem;
      line-height: 1.5rem;
      border-bottom: solid 1px rgba(255, 255, 255, 0.4);
    }

    .go-to-top {
      position: absolute;
      bottom: calc(15vh);
      left: 0;
      right: 0;
      margin: auto;
      width: 60px;
      height: 60px;
      font-size: 50px;
      background-color: #525252;
      transition: all 0.2s ease-in-out;
      border-radius: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    #particles {
      height: 70%;
    }

    .bg {
      margin-top: 0;
      padding: 50px 60px;

      &__title {
        margin-top: 0;
      }

      &__subtitle {
        font-size: calc(var(--resolution) * 0.65);
        line-height: calc(var(--resolution) * 1);
      }

      .go-to-top {
        bottom: 24px;
      }
    }
  }
</style>
