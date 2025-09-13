<script setup lang="ts"></script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <div class="apk-download">
    <a
      href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk"
      class="download-button"
      download
    >
      Download APK
    </a>
  </div>
</template>

<style scoped>
.apk-download {
  margin-top: 2rem;
}

.download-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #33a06f;
}
</style>
