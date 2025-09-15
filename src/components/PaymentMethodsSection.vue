<template>
  <section class="payment-methods-section">
    <div class="container">
      <h2 class="section-title">{{ $t('paymentMethods.title') }}</h2>
      <p class="section-subtitle">{{ $t('paymentMethods.subtitle') }}</p>
      <div class="methods-grid">
        <div class="method-card">
          <div class="method-icon">💳</div>
          <h3>{{ $t('paymentMethods.creditCard.title') }}</h3>
          <p>{{ $t('paymentMethods.creditCard.description') }}</p>
        </div>
        <div class="method-card">
          <div class="method-icon">🏦</div>
          <h3>{{ $t('paymentMethods.bankTransfer.title') }}</h3>
          <p>{{ $t('paymentMethods.bankTransfer.description') }}</p>
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
.payment-methods-section {
  padding: 5rem 0;
  background-color: #ffffff;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 4rem;
  line-height: 1.6;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.method-card {
  background: #f8fafc;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.method-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.method-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.method-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.method-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
</style>
