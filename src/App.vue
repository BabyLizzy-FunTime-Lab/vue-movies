<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from "@/components/HeaderNav.vue";
</script>

<template>
  <HeaderNav/>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
