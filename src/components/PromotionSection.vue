<template>
  <section class="promotion-section">
    <div class="container">
      <div class="promotion-card">
        <div class="promotion-content">
          <div class="promotion-header">
            <div class="sparkle-icon">✨</div>
            <h2 class="promotion-title">{{ $t('promotion.title') }}</h2>
          </div>
          
          <p class="promotion-subtitle">{{ $t('promotion.subtitle') }}</p>
          
          <div class="promotion-features">
            <div class="feature-item">
              <div class="feature-icon">🎁</div>
              <span class="feature-text">{{ $t('promotion.feature1') }}</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🌟</div>
              <span class="feature-text">{{ $t('promotion.feature2') }}</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎫</div>
              <span class="feature-text">{{ $t('promotion.feature3') }}</span>
            </div>
          </div>
          
          <button class="promotion-cta" @click="handleCTAClick">
            {{ $t('promotion.cta') }}
            <svg class="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
        </div>
        
        <div class="promotion-visual">
          <div class="floating-tickets">
            <div class="ticket ticket-1">🎫</div>
            <div class="ticket ticket-2">🎭</div>
            <div class="ticket ticket-3">🗼</div>
            <div class="ticket ticket-4">🏰</div>
          </div>
          <div class="gift-box">🎁</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { trackButtonClick } from '@/utils/analytics'

const { locale } = useI18n()

const handleCTAClick = () => {
  trackButtonClick('promotionCTA', {
    section: 'promotion',
    current_language: locale.value,
    action: 'click_discover_surprises'
  })
  
  // Scroll to popular tours section
  const popularToursSection = document.getElementById('popular-tours')
  if (popularToursSection) {
    popularToursSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.promotion-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.promotion-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.15)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.promotion-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.promotion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06);
}

.promotion-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.promotion-content {
  position: relative;
  z-index: 2;
}

.promotion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.sparkle-icon {
  font-size: 2.5rem;
  animation: sparkle 2s ease-in-out infinite alternate;
}

@keyframes sparkle {
  from { transform: scale(1) rotate(0deg); }
  to { transform: scale(1.1) rotate(5deg); }
}

.promotion-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.promotion-subtitle {
  font-size: 1.2rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
}

.promotion-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(59, 130, 246, 0.15);
  transform: translateX(5px);
}

.feature-icon {
  font-size: 1.5rem;
  min-width: 2rem;
  text-align: center;
}

.feature-text {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
}

.promotion-cta {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.promotion-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
}

.promotion-cta:active {
  transform: translateY(0);
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.promotion-cta:hover .cta-arrow {
  transform: translateX(3px);
}

.promotion-visual {
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-tickets {
  position: relative;
  width: 100%;
  height: 100%;
}

.ticket {
  position: absolute;
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
}

.ticket-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.ticket-2 {
  top: 60%;
  left: 60%;
  animation-delay: 0.5s;
}

.ticket-3 {
  top: 10%;
  right: 20%;
  animation-delay: 1s;
}

.ticket-4 {
  bottom: 20%;
  left: 30%;
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.gift-box {
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) scale(1); }
  40% { transform: translate(-50%, -50%) scale(1.1); }
  60% { transform: translate(-50%, -50%) scale(1.05); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .promotion-card {
    grid-template-columns: 1fr 250px;
    gap: 2rem;
    padding: 2.5rem;
  }
  
  .promotion-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .promotion-section {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .promotion-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
  
  .promotion-title {
    font-size: 2rem;
  }
  
  .promotion-subtitle {
    font-size: 1.1rem;
  }
  
  .promotion-visual {
    height: 200px;
  }
  
  .gift-box {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .promotion-card {
    padding: 1.5rem;
  }
  
  .promotion-title {
    font-size: 1.8rem;
  }
  
  .promotion-subtitle {
    font-size: 1rem;
  }
  
  .feature-item {
    padding: 0.5rem;
  }
  
  .feature-text {
    font-size: 0.9rem;
  }
  
  .promotion-cta {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>