<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('about.hero.title') }}</h1>
        <p class="hero-subtitle">{{ $t('about.hero.subtitle') }}</p>
      </div>
    </section>
    <div class="container content-container">
      <div class="brand-section">
        <h2 class="section-title">{{ $t('about.brand.title') }}</h2>
        <p>{{ $t('about.brand.paragraph1') }}</p>
        <p>{{ $t('about.brand.paragraph2') }}</p>
      </div>
      <div class="product-section">
        <h2 class="section-title">{{ $t('about.product.title') }}</h2>
        <p>{{ $t('about.product.paragraph1') }}</p>
        <p>{{ $t('about.product.paragraph2') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about-page {
  background-color: #f8fafc;
}

.hero-section {
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/images/Bg-aboutUs.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

.content-container {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 4rem;
}

.brand-section,
.product-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  display: inline-block;
}

p {
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
</style>
