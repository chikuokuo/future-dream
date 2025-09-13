<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import LandingPage from '@/components/LandingPage.vue'
</script>

<template>
  <div id="app">
    <AppHeader />
    <LandingPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  background-color: #ffffff;
  color: #1f2937;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
