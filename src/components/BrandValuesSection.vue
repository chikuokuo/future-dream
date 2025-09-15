<template>
  <section class="brand-values-section">
    <div class="container">
      <h2 class="section-title">{{ $t('brandValues.title') }}</h2>
      <div class="values-grid">
        <!-- Convenience -->
        <div class="value-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
          </div>
          <h3 class="value-title">{{ $t('brandValues.convenience.title') }}</h3>
          <p class="value-description">{{ $t('brandValues.convenience.description') }}</p>
        </div>

        <!-- Trust -->
        <div class="value-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3 class="value-title">{{ $t('brandValues.trust.title') }}</h3>
          <p class="value-description">{{ $t('brandValues.trust.description') }}</p>
        </div>

        <!-- Discovery -->
        <div class="value-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path><path d="M12 12L16 10"></path><path d="M12 12L10 16"></path><path d="M12 12L18 14"></path></svg>
          </div>
          <h3 class="value-title">{{ $t('brandValues.discovery.title') }}</h3>
          <p class="value-description">{{ $t('brandValues.discovery.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.brand-values-section {
  padding: 5rem 0;
  background-color: var(--bg-default);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: var(--bg-paper);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--border-light);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.card-icon {
  margin-bottom: 1.5rem;
  color: var(--md-primary);
}

.value-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.value-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
}
</style>
