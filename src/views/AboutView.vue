<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('about.hero.title') }}</h1>
        <p class="hero-subtitle">{{ $t('about.hero.subtitle') }}</p>
      </div>
    </section>

    <div class="container content-container">
      <!-- About Section -->
      <section class="about-intro-section">
        <h2 class="section-heading">{{ $t('about.intro.title') }}</h2>
        <h3 class="section-subheading">{{ $t('about.intro.subtitle') }}</h3>
        <p class="section-paragraph">{{ $t('about.intro.content') }}</p>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <h2 class="section-heading">{{ $t('about.mission.title') }}</h2>
        <h3 class="section-subheading">{{ $t('about.mission.subtitle') }}</h3>
        <p class="section-paragraph">{{ $t('about.mission.content') }}</p>
      </section>

      <!-- Promise Section -->
      <section class="promise-section">
        <h2 class="section-heading">{{ $t('about.promise.title') }}</h2>
        <div class="promise-grid">
          <div class="promise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h4 class="promise-title">{{ $t('about.promise.items.simple.title') }}</h4>
            <p>{{ $t('about.promise.items.simple.content') }}</p>
          </div>
          <div class="promise-card">
            <div class="card-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h4 class="promise-title">{{ $t('about.promise.items.local.title') }}</h4>
            <p>{{ $t('about.promise.items.local.content') }}</p>
          </div>
          <div class="promise-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <h4 class="promise-title">{{ $t('about.promise.items.curiosity.title') }}</h4>
            <p>{{ $t('about.promise.items.curiosity.content') }}</p>
          </div>
        </div>
      </section>

      <!-- Partnerships Section -->
      <section class="partnerships-section">
        <div class="partnership-layout">
          <div class="partnership-text-content">
            <h2 class="section-heading">{{ $t('about.partnerships.title') }}</h2>
            <p class="section-paragraph">{{ $t('about.partnerships.subtitle') }}</p>
            <p class="section-paragraph">{{ $t('about.partnerships.content') }}</p>
          </div>
          <div class="partnership-photos-container">
            <img src="@/assets/images/aboutUs-cowork-1.jpg" alt="Corporate Partnership 1" class="partnership-photo" />
            <img src="@/assets/images/aboutUs-cowork-2.jpg" alt="Corporate Partnership 2" class="partnership-photo" />
          </div>
        </div>
      </section>

      <!-- Investors Section -->
      <section class="investors-section">
        <div class="investor-layout">
          <div class="investor-photo-container">
            <img src="@/assets/images/aboutUs-investor-1.jpg" alt="Future Dream Investors" class="investor-photo" />
          </div>
          <div class="investor-text-content">
            <h2 class="section-heading">{{ $t('about.investors.title') }}</h2>
            <p class="section-paragraph">{{ $t('about.investors.subtitle') }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about-page {
  background-color: var(--bg-default);
  color: var(--text-primary);
}

.hero-section {
  height: 50vh; /* Reduced height from 60vh */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/images/Bg-aboutUs.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  padding: 0 2rem;
  margin-bottom: 4rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 0 1px 3px var(--color-shadow-black54);
  color: var(--color-white);
}

.content-container {
  padding-top: 6rem; /* Increased spacing */
  padding-bottom: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-intro-section,
.mission-section,
.promise-section,
.partnerships-section,
.investors-section {
  text-align: center;
  margin-bottom: 6rem;
}

.partnerships-section,
.investors-section {
  text-align: left;
}

.section-heading {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-subheading {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.section-paragraph {
  font-size: 1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-secondary);
}

.investor-layout {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.investor-photo-container {
  flex: 1;
}

.investor-text-content {
  flex: 1;
}

.partnership-layout {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.partnership-text-content {
  flex: 1;
}

.partnership-photos-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.partnership-photo {
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.investor-photo {
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.promise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.promise-card {
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-light);
  border-radius: 16px;
  background-color: var(--bg-paper);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.promise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.card-icon {
  margin-bottom: 1.5rem;
  color: var(--md-primary);
}

.card-icon svg {
  width: 48px;
  height: 48px;
}

.promise-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.promise-card p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .partnership-layout,
  .investor-layout {
    flex-direction: column;
    text-align: center;
  }
}
</style>
