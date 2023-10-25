<template>
  <section>
    <div class="bg">
      <div id="particles"/>
      <h1 class="bg__title">My name is Jonathan Black.</h1>
      <h2 class="bg__subtitle">
        I am a web developer and I use react and vue.js to develop pages. This project is
        a template that can be used as the home page or resume page.
      </h2>
    </div>
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
    background:#000 url('@/assets/img/desert.webp') no-repeat top;
    background-size: cover;
    z-index: 1;

    &__title {
      margin-top: -50px;
      margin-bottom: 0.7rem;
      font-size: calc(var(--resolution) * 2.3);
      line-height: calc(var(--resolution) * 2.3);
      text-shadow: 0 0 15px #9f4a33;
    }

    &__subtitle {
      max-width: 900px;
      padding-bottom: 0.5rem;
      line-height: 1.5rem;
      border-bottom: solid 1px rgba(255, 255, 255, 0.4);
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
        font-size: calc(var(--resolution) * 0.8);
        line-height: calc(var(--resolution) * 1.5);
      }
    }
  }
</style>
