<template>
  <div class="search-page">
    <div class="search-bar-wrapper">
      <SearchBar
        :initialDestination="(route.query.destination as string) || 'italy'"
        :initialDate="(route.query.date as string) || ''"
        :initialPeople="Number(route.query.people) || 1"
        style="padding: 0.1rem; margin: 1rem;"
      />
    </div>
    <!-- Map Section -->
    <section class="map-section">
      <div class="map-container">
        <iframe class="gmap" :src="mapSrc" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        <!-- Bottom Filter Button -->
        <div class="map-filter-button">
          <button class="filter-btn" @click="toggleFilterMenu">
            <span class="filter-icon">☰</span>
            <span class="filter-text">{{ $t('search.listButton') }}</span>
          </button>
        </div>

        <!-- Filter Menu (when expanded) -->
        <div v-if="showFilterMenu" class="filter-menu">
          <div class="filter-menu-content">
            <h3>{{ $t('search.highlights') }}</h3>
            <div class="city-filters">
              <div class="city-group">
                <h4>{{ $t('search.cities.milano') }}</h4>
                <button @click="showPlace('Duomo di Milano, Milan')">{{ $t('search.attractions.duomoMilano') }}</button>
                <button @click="showPlace('Galleria Vittorio Emanuele II, Milan')">{{ $t('search.attractions.galleriaVittorio') }}</button>
              </div>
              <div class="city-group">
                <h4>{{ $t('search.cities.roma') }}</h4>
                <button @click="showPlace('Colosseum, Rome')">{{ $t('search.attractions.colosseum') }}</button>
                <button @click="showPlace('Pantheon, Rome')">{{ $t('search.attractions.pantheon') }}</button>
                <button @click="showPlace('Trevi Fountain, Rome')">{{ $t('search.attractions.treviFountain') }}</button>
              </div>
              <div class="city-group">
                <h4>{{ $t('search.cities.firenze') }}</h4>
                <button @click="showPlace('Uffizi Gallery, Florence')">{{ $t('search.attractions.uffiziGallery') }}</button>
                <button @click="showPlace('Ponte Vecchio, Florence')">{{ $t('search.attractions.ponteVecchio') }}</button>
              </div>
              <div class="city-group">
                <h4>{{ $t('search.cities.venezia') }}</h4>
                <button @click="showPlace('Piazza San Marco, Venice')">{{ $t('search.attractions.piazzaSanMarco') }}</button>
                <button @click="showPlace('Grand Canal, Venice')">{{ $t('search.attractions.grandCanal') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tours Section -->
    <section class="tours-section">
      <div class="container">
        <div v-if="filteredTours.length > 0" class="tours-grid">
          <div v-for="tour in filteredTours" :key="tour._id" class="tour-card" @click="() => handleViewMoreClick(tour)">
            <div class="card-image">
              <img :src="tour.images[0]" :alt="tour.name" />
              <div class="location-badge" :class="tour.location.toLowerCase()">{{ tour.location }}</div>
            </div>
            <div class="card-content">
              <h3 class="tour-title">{{ tour.name }}</h3>
              <p class="tour-intro">{{ truncate(tour.intro, 120) }}</p>
              <div class="card-footer">
                <div class="price">
                  <span class="price-label">{{ $t('popularTours.from') }}</span>
                  <span class="price-amount">{{ formatCurrency(parseFloat(tour.price_eur)) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-results">
          <p>{{ $t('search.noResults') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SearchBar from '@/components/SearchBar.vue'
import { useTours } from '@/composables/useTours'
import { useCurrency } from '@/composables/useCurrency'
import { trackButtonClick } from '@/utils/analytics'

const route = useRoute()
const { allTours } = useTours()
const { format: formatCurrency } = useCurrency()
const { locale, t } = useI18n()

const effectiveDestination = computed(() => (route.query.destination as string) || 'italy')

const filteredTours = computed(() => {
  const destination = effectiveDestination.value
  if (!destination) return allTours.value
  return allTours.value.filter(tour => tour.country === destination)
})

const placeQuery = ref('Italy')
const mapSrc = computed(() => `https://www.google.com/maps?q=${encodeURIComponent(placeQuery.value)}&output=embed`)
const showPlace = (q: string) => {
  placeQuery.value = q
  showFilterMenu.value = false
}

const showFilterMenu = ref(false)
const toggleFilterMenu = () => {
  showFilterMenu.value = !showFilterMenu.value
}

const truncate = (s: string, n: number) => (s && s.length > n ? s.slice(0, n) + '…' : s)

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
    section: 'search_results',
    current_language: locale.value
  })
}
</script>

<style scoped>
.search-page { padding-top: 80px; }
.search-bar-wrapper {
  background-color: var(--bg-default);
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Map Section */
.map-section {
  position: relative;
  height: 70vh;
  width: 100%;
  margin-bottom: 2rem;
}

.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.gmap {
  width: 100%;
  height: 100%;
  border: 0;
}

/* POI Markers */
.poi-markers {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.poi-marker {
  position: absolute;
  pointer-events: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
}

.poi-marker:hover {
  transform: scale(1.1);
}

.marker-pin {
  font-size: 1.5rem;
  margin-bottom: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.marker-label {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  backdrop-filter: blur(5px);
  white-space: nowrap;
}

/* Map Filter Button */
.map-filter-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--border-light);
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

.filter-icon {
  font-size: 1rem;
}

/* Filter Menu */
.filter-menu {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  backdrop-filter: blur(15px);
  z-index: 20;
  max-height: 60vh;
  overflow-y: auto;
}

.filter-menu-content {
  padding: 1.5rem;
}

.filter-menu h3 {
  margin: 0 0 1rem 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
}

.city-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.city-group h4 {
  margin: 0 0 0.5rem 0;
  color: var(--md-primary);
  font-size: 0.9rem;
  font-weight: 600;
}

.city-group button {
  display: block;
  width: 100%;
  text-align: left;
  background: var(--bg-default);
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.2s ease;
  font-size: 0.8rem;
}

.city-group button:hover {
  background: var(--md-primary-container);
  border-color: var(--md-primary);
}

/* Tours Section */
.tours-section {
  padding: 2rem 0;
  background-color: var(--bg-default);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Tours Grid */
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
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
  min-height: 2.8em;
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

/* RWD */
@media (max-width: 1024px) {
  .tours-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .filter-menu {
    width: 95%;
    max-width: 450px;
  }

  .city-filters {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .map-section {
    height: 50vh;
    margin-bottom: 1.5rem;
  }

  .marker-pin {
    font-size: 1.2rem;
  }

  .marker-label {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }

  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }

  .filter-menu {
    width: 95%;
    bottom: 70px;
  }

  .filter-menu-content {
    padding: 1rem;
  }

  .city-filters {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .tours-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .map-section {
    height: 40vh;
  }

  .marker-pin {
    font-size: 1rem;
  }

  .marker-label {
    font-size: 0.65rem;
    padding: 0.15rem 0.3rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .filter-menu {
    width: 98%;
    bottom: 60px;
    max-height: 50vh;
  }

  .filter-menu-content {
    padding: 0.75rem;
  }

  .filter-menu h3 {
    font-size: 1rem;
  }

  .city-group h4 {
    font-size: 0.85rem;
  }

  .city-group button {
    font-size: 0.75rem;
    padding: 0.35rem 0.5rem;
  }
}
</style>
