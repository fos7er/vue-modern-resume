<template>
  <section class="relative">
    <div id="tsparticles">
    </div>
    <div class="top">
    </div>
    <div class="bottom">
    </div>
  </section>
</template>

<script setup>
  import { tsParticles } from "tsparticles-engine";
  import {loadFull} from 'tsparticles'

  onMounted(() => {
    (async () => {
      await loadFull(tsParticles); // not needed if using the bundle script, required for any other installation

      await tsParticles.load({
        id: "tsparticles",
        options: {
          fps_limit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: { enable: true, mode: "push" },
              onhover: {
                enable: false,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true
            },
            modes: {
              push: { quantity: 4 },
              attract: { distance: 200, duration: 0.4, factor: 5 }
            }
          },
          particles: {
            color: { value: "#ffffff" },
            line_linked: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
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
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
              },
              image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100
              },
              polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 0 },
              type: "circle"
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 5
            }
          },
          polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: ""
          },
          retina_detect: true
        }
      })
    })()

  })

</script>

<style lang="scss" scoped>
  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 0; /* if you use -1 you have to set to `"window"` the interactivity.detectsOn property */
  }

  .top {
    position: absolute;
    top:0;
    left:0;
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
