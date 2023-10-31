<template>
  <section class="bg-[#2b2b2b] text-[#7A7A7A]">
    <div class="container about pt-24 pb-16">
      <div class="md:grid grid-cols-4 items-start">
        <div class="photo flex justify-center md:justify-start">
          <img alt="myPhoto" class="mb-6 rounded-full w-[180px]" src="@/assets/img/myPhoto.jpeg">
        </div>
        <div class="col-span-3">
          <h3 class="mb-3 text-lg text-white font-bold">{{ t('about.title') }}</h3>
          <p class="mb-6">
            {{ t('about.subtitle') }}
          </p>
          <h3 class="mb-3 text-lg text-white font-bold">{{ t('about.contactDetailsTitle')}}</h3>
          <div class="md:grid grid-cols-2 gap-6">
            <div class="mb-6">
              <div class="address">
                <div v-for="item in tm('about.contactDetails')">{{ item }}</div>
                <a :href="`mailto:${email}`">{{ email }}</a>
              </div>
            </div>
            <div class="btns-wrapper flex flex-col gap-y-6 lg:items-end">
              <div>
                <a
                  :href="t('about.btn2Link')"
                  class="flex w-[250px] items-center px-5 py-3 bg-[#444] text-white font-bold cursor-pointer hover:bg-white hover:text-black transition-ease-in-out"
                  target="_blank"
                >
                  <span class="i-fa-brands-github mr-2"/>
                  <span>{{ t('about.btn2Text') }}</span>
                </a>
              </div>
              <div>
                <a
                  :href="resume"
                  class="flex w-[250px] items-center px-5 py-3 bg-[#444] text-white font-bold cursor-pointer hover:bg-white hover:text-black transition-ease-in-out"
                  target="_blank"
                >
                  <span class="i-mdi-download mr-2"/>
                  <span>{{ t('about.downloadBtnText')}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import resume from '@/assets/docs/resume.pdf'
  import { email } from '@/assets/constants'

  const { t, tm } = useI18n()
</script>
