<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-content">
          <div class="hero-badge">
            {{ $t('hero.badge') }}
          </div>
          <h1 class="hero-title" v-html="$t('hero.title')">
          </h1>
          <p class="hero-subtitle" v-html="$t('hero.subtitle')">
          </p>

          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">🕐</span>
              <span>{{ $t('hero.features.booking') }}</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🛡️</span>
              <span>{{ $t('hero.features.trusted') }}</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⭐</span>
              <span>{{ $t('hero.features.downloads') }}</span>
            </div>
          </div>

          <div class="hero-buttons">
            <a href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk"
              class="btn-primary" download="NeuschwansteinCastle-App.apk">
              <span class="btn-icon">📱</span>
              {{ $t('hero.downloadApk') }}
            </a>
          </div>

          <button class="learn-more-btn" @click="scrollToNextSection">
            {{ $t('hero.learnMore') }}
          </button>
        </div>
      </div>
    </section>

    <PopularToursSection />
    <UffiziGallerySection />
    <NeuschwansteinCastleSection />
    <ExploreItalySection />
    <OurServicesSection />

    <!-- Why Choose Section -->
    <section id="why-choose" class="why-choose-section">
      <div class="container">
        <h2 class="section-title">{{ $t('whyChoose.title') }}</h2>
        <p class="section-subtitle" v-html="$t('whyChoose.subtitle')">
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-large">📅</div>
            <h3>{{ $t('whyChoose.features.instantBooking.title') }}</h3>
            <p>{{ $t('whyChoose.features.instantBooking.description') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">📱</div>
            <h3>{{ $t('whyChoose.features.digitalTickets.title') }}</h3>
            <p>{{ $t('whyChoose.features.digitalTickets.description') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">🛡️</div>
            <h3>{{ $t('whyChoose.features.securePayment.title') }}</h3>
            <p>{{ $t('whyChoose.features.securePayment.description') }}</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">🌍</div>
            <h3>{{ $t('whyChoose.features.multiLanguage.title') }}</h3>
            <p>{{ $t('whyChoose.features.multiLanguage.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <OurServicesSection />


    <!-- Download Section -->
    <section class="download-section">
      <div class="download-container">
        <div class="download-icon">📱</div>
        <h2 class="download-title">{{ $t('download.title') }}</h2>
        <p class="download-subtitle">{{ $t('download.subtitle') }}</p>

        <a href="https://github.com/chikuokuo/ticket_sale/releases/latest/download/app-release.apk" class="download-btn"
          download="NeuschwansteinCastle-App.apk">
          <span class="download-btn-icon">⬇️</span>
          {{ $t('download.button') }}
        </a>

        <p class="compatibility">{{ $t('download.compatibility') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import PopularToursSection from './PopularToursSection.vue'
import OurServicesSection from './OurServicesSection.vue'
import ExploreItalySection from './ExploreItalySection.vue'
import UffiziGallerySection from './UffiziGallerySection.vue'
import NeuschwansteinCastleSection from './NeuschwansteinCastleSection.vue'


const { t } = useI18n()

// SEO Meta Tags
useHead({
  title: computed(() => t('seo.title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('seo.description'))
    },
    {
      name: 'keywords',
      content:
        '新天鵝堡, 德國火車票, 德國旅遊, 德鐵, DB 火車票, 新天鵝堡門票, Neuschwanstein Castle, 門票預訂, 德國國鐵, 德國自由行, ドイツ鉄道チケット, ノイシュヴァンシュタイン城, 독일 기차표, 노이슈반슈타인 성, vé tàu Đức, Lâu đài Neuschwanstein'
    }
  ]
})

// Smooth scroll to next section (Popular Tours)
const scrollToNextSection = () => {
  const element = document.getElementById('popular-tours')
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

</script>

<style scoped>
.landing-page {
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
    url('@/assets/images/heroBackground.jpg') center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-background {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)),
    url('@/assets/images/heroBackground.jpg') center/cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center top;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 1400px;
  padding: 2rem;
  margin-top: 80px;
  /* Offset for fixed header */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.hero-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-shadow: none;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.4;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 500;
}

.feature-icon {
  font-size: 1.2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.25), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-primary:link,
.btn-primary:visited {
  text-decoration: none;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3), 0 2px 6px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: #fbbf24;
  color: #1f2937;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #f59e0b;
  transform: translateY(-2px);
}

.learn-more-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.learn-more-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Why Choose Section */
.why-choose-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #1f2937;
}

.section-subtitle {
  font-size: 1.1rem;
  text-align: center;
  color: #6b7280;
  margin-bottom: 4rem;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon-large {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}


/* Download Section */
.download-section {
  background: linear-gradient(135deg, #374151, #1f2937);
  padding: 3rem 0;
  text-align: center;
}

/* German Rail Section */
.german-rail-section {
  padding: 5rem 0;
  background: white;
}

.download-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.download-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: white;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.download-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.75rem;
}

.download-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.download-btn {
  background: #6b7280;
  color: #ffffff;
  border: 2px solid #9ca3af;
  padding: 1.25rem 3rem;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.2);
  text-decoration: none;
  justify-content: center;
}

.download-btn:link,
.download-btn:visited {
  text-decoration: none;
  color: #ffffff;
}

.download-btn:hover {
  background: #4b5563;
  border-color: #d1d5db;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(107, 114, 128, 0.3);
  text-decoration: none;
  color: #ffffff;
}

.download-btn:active {
  transform: translateY(0);
}

.download-btn-icon {
  font-size: 1.5rem;
}

.compatibility {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    margin-top: 60px;
    /* Smaller offset for mobile */
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-features {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .learn-more-btn {
    width: 100%;
    max-width: 280px;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .download-btn {
    width: 100%;
    max-width: 320px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    margin: 0 auto 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .download-title {
    font-size: 2rem;
  }

  .download-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1rem;
    margin-top: 50px;
    /* Even smaller offset for very small screens */
  }

  .hero-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
    margin: 0 auto;
  }

  .learn-more-btn {
    width: 100%;
    max-width: 250px;
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .download-btn {
    width: 100%;
    max-width: 280px;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    margin: 0 auto 1.5rem;
  }

  .download-btn-icon {
    font-size: 1.2rem;
  }
}

/* Extra small screens */
@media (max-width: 360px) {
  .hero-content {
    padding: 0.75rem;
    margin-top: 45px;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 260px;
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
    margin: 0 auto;
  }

  .learn-more-btn {
    width: 100%;
    max-width: 220px;
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }

  .download-btn {
    width: 100%;
    max-width: 250px;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    margin: 0 auto 1.5rem;
  }

  .download-btn-icon {
    font-size: 1.1rem;
  }

  .download-title {
    font-size: 1.75rem;
  }

  .download-subtitle {
    font-size: 1rem;
  }

  .download-container {
    padding: 0 0.75rem;
  }
}
</style>
