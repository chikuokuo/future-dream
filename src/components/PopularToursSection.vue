<template>
  <section id="popular-tours" class="popular-tours-section">
    <div class="container">
      <h2 class="section-title">{{ $t('popularTours.title') }}</h2>
      <p class="section-subtitle">{{ $t('popularTours.subtitle') }}</p>

      <div class="tabs-container">
        <button class="tab-btn" :class="{ active: selectedCountry === 'italy' }" @click="selectedCountry = 'italy'">
          {{ $t('popularTours.countries.italy') }}
        </button>
        <button class="tab-btn" :class="{ active: selectedCountry === 'germany' }" @click="selectedCountry = 'germany'">
          {{ $t('popularTours.countries.germany') }}
        </button>
      </div>

      <div class="tours-grid">
        <div v-for="tour in filteredTours" :key="tour._id" class="tour-card" @click="() => handleViewMoreClick(tour)">
          <div class="card-image">
            <img :src="tour.images[0]" :alt="tour.name" />
            <div class="location-badge" :class="tour.location.toLowerCase()">{{ tour.location }}</div>
          </div>
          <div class="card-content">
            <h3 class="tour-title">{{ tour.name }}</h3>
            <p class="tour-intro">{{ truncateText(tour.intro, 120) }}</p>
            <div class="card-footer">
              <div class="price">
                <span class="price-label">{{ $t('popularTours.from') }}</span>
                <span class="price-amount">{{ formatCurrency(parseFloat(tour.price_eur)) }}</span>
              </div>
              <div class="view-more-btn">{{ $t('popularTours.viewMore') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCurrency } from '@/composables/useCurrency'
import { useTours } from '@/composables/useTours'
import { trackButtonClick } from '@/utils/analytics'

const { locale, t } = useI18n()
const { format: formatCurrency } = useCurrency()
const { toursData } = useTours()

const selectedCountry = ref<'italy' | 'germany'>('italy')

const filteredTours = computed(() => {
  const tours = toursData.value[selectedCountry.value] || [];
  return tours.map(tour => ({
    ...tour,
    category: selectedCountry.value === 'italy' ? 'Tours • Italy' : 'Tours • Germany'
  }));
});

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

interface Tour {
  _id: string;
  name: string;
  location: string;
  price_eur: string;
}

const handleViewMoreClick = (tour: Tour) => {
  trackButtonClick('viewMoreBtn', {
    tour_id: tour._id,
    tour_name: tour.name,
    tour_location: tour.location,
    tour_price: tour.price_eur,
    section: 'popular_tours',
    current_language: locale.value
  })
}
</script>

<style scoped>
.popular-tours-section {
  padding: 4rem 0;
  background-color: var(--bg-default);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-shadow: 0 1px 2px var(--color-shadow-light);
}

.section-subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.tabs-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
}

.tab-btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  background-color: var(--bg-paper);
  color: var(--text-secondary);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--color-shadow-light);
}

.tab-btn.active {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
  border-color: var(--md-primary);
  box-shadow: 0 4px 15px var(--color-shadow-medium);
}

.tab-btn:hover:not(.active) {
  background-color: var(--bg-default);
  color: var(--text-primary);
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 0 1rem;
}

.tour-card {
  background: var(--bg-paper);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: all 0.3s ease;
  width: 100%;
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tour-card:hover .card-image img {
  transform: scale(1.05);
}

.location-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--md-primary);
  color: var(--md-on-primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

.location-badge.florence {
  background: var(--color-success-700);
}

.location-badge.germany {
  background: var(--color-warning-700);
}

.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tour-category {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.tour-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8em; /* Ensure space for 2 lines */
}

.tour-intro {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.2rem;
  height: 4.2rem;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
}

.price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.price-amount {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--md-primary);
}

/* Remove view more button */
.view-more-btn {
  display: none;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .tours-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .popular-tours-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  .tours-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }

  .tour-card {
    max-width: 500px;
  }

  .card-image {
    height: 200px;
  }

  .card-footer {
    flex-direction: row;
    gap: 0;
    align-items: center;
    justify-content: space-between;
  }

  .view-more-btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .card-content {
    padding: 1rem;
  }

  .card-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .view-more-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
