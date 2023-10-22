<script setup lang="ts">
  import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

  const gl = {
    clearColor: '#82DBC5',
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping
  }

  const akuAkuRef = shallowRef(null)

  watchEffect(() => {
    console.log(akuAkuRef.value)
  })
</script>

<template>
  <TresCanvas
    v-bind="gl"
    clear-color="#000"
  >
    <TresPerspectiveCamera
      :position="[5, 5, 5]"
      :fov="90"
      :near="1"
      :zoom="1"
      :far="10000000"
    />
    <OrbitControls />

    <TresAmbientLight
      :color="0xffffff"
      :intensity="0.75"
    />
    <TresDirectionalLight
      :position="[0, 8, 4]"
      :intensity="1"
      cast-shadow
    />
    <Suspense>
      <GLTFModel
        ref="akuAkuRef"
        path="/model3d/scene.gltf"
        draco
      />
    </Suspense>
  </TresCanvas>
</template>
