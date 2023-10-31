<template>
  <section class="bg-[#2b2b2b] text-[#7A7A7A]">
    <div class="container about pt-24 pb-16">
      <div class="md:grid grid-cols-4 items-start">
        <div class="photo flex justify-center md:justify-start">
          <img class="mb-6 rounded-full w-[180px]" src="@/assets/img/myPhoto.jpeg" alt="myPhoto">
        </div>
        <div class="col-span-3">
          <h3 class="mb-3 text-lg text-white font-bold">{{ t('about.title') }}</h3>
          <p class="mb-6">
            {{ t('about.subtitle') }}
          </p>
          <div class="md:grid grid-cols-2 gap-2">
            <div class="mb-6">
              <h3 class="mb-3 text-lg text-white font-bold">Contact Details</h3>
              <div class="address">
                <div v-for="item in tm('about.contactDetails')">{{ item }}</div>
                <a :href="`mailto:${email}`">{{ email }}</a>
              </div>
            </div>
            <div>
              <a
                :href="resume"
                class="inline-flex items-center px-5 py-3 bg-[#444] text-white font-bold cursor-pointer hover:bg-white hover:text-black transition-ease-in-out"
                target="_blank"
              >
                <span class="i-mdi-download mr-2"/>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { email } from '@/assets/constants'
  import resume from '@/assets/docs/resume.pdf'

  const { t, tm } = useI18n()
</script>
