<template>
  <section id="about" class="bg-[#2b2b2b] text-[#7A7A7A]">
    <div class="container about pt-24 pb-16">
      <div class="md:grid grid-cols-4 items-start">
        <div class="photo flex justify-center md:justify-start">
          <img class="mb-6 rounded-full w-[180px]" src="@/assets/img/myPhoto.jpeg" alt="myPhoto">
        </div>
        <div class="col-span-3">
          <h3 class="mb-3 text-lg text-white font-bold">About Me</h3>
          <p class="mb-6">
            Use this bio section as your way of describing yourself and saying what you do, what technologies you like
            to
            use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in
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
              <div class="inline-flex items-center px-5 py-3 bg-[#444] text-white font-bold cursor-pointer hover:bg-white hover:text-black transition-all">
                <span class="i-mdi-download mr-2"></span>
                <span>Download Resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { email} from '@/assets/constants'
  const { t, tm } = useI18n()
</script>
