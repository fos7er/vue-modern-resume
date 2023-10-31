<template>
  <div>
    <section-top id="home"/>
    <section-about id="about"/>
    <section-education id="education"/>
    <section-work id="work"/>
    <section-skills id="skills"/>
    <section-portfolio id="portfolio"/>
  </div>
</template>

<script setup>
  useWaypoints(['home', 'about', 'education', 'work', 'skills', 'portfolio'])
</script>
