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
              <!-- Italian Cities -->
              <div class="category-section">
                <h3 class="category-title">{{ $t('search.categories.cities') }}</h3>
                <div class="destinations-grid">
                  <button @click="showPlace('Milan, Italy')" class="destination-btn">{{ $t('search.cities.milano') }}</button>
                  <button @click="showPlace('Rome, Italy')" class="destination-btn">{{ $t('search.cities.roma') }}</button>
                  <button @click="showPlace('Florence, Italy')" class="destination-btn">{{ $t('search.cities.firenze') }}</button>
                  <button @click="showPlace('Venice, Italy')" class="destination-btn">{{ $t('search.cities.venezia') }}</button>
                  <button @click="showPlace('Pisa, Italy')" class="destination-btn">{{ $t('search.cities.pisa') }}</button>
                  <button @click="showPlace('Siena, Italy')" class="destination-btn">{{ $t('search.cities.siena') }}</button>
                  <button @click="showPlace('Lucca, Italy')" class="destination-btn">{{ $t('search.cities.lucca') }}</button>
                  <button @click="showPlace('Naples, Italy')" class="destination-btn">{{ $t('search.cities.napoli') }}</button>
                  <button @click="showPlace('Pompeii, Italy')" class="destination-btn">{{ $t('search.cities.pompeii') }}</button>
                  <button @click="showPlace('Amalfi, Italy')" class="destination-btn">{{ $t('search.cities.amalfi') }}</button>
                  <button @click="showPlace('Sorrento, Italy')" class="destination-btn">{{ $t('search.cities.sorrento') }}</button>
                  <button @click="showPlace('Capri, Italy')" class="destination-btn">{{ $t('search.cities.capri') }}</button>
                  <button @click="showPlace('Ischia, Italy')" class="destination-btn">{{ $t('search.cities.ischia') }}</button>
                  <button @click="showPlace('Turin, Italy')" class="destination-btn">{{ $t('search.cities.turin') }}</button>
                  <button @click="showPlace('Genova, Italy')" class="destination-btn">{{ $t('search.cities.genova') }}</button>
                  <button @click="showPlace('Portofino, Italy')" class="destination-btn">{{ $t('search.cities.portofino') }}</button>
                  <button @click="showPlace('Verona, Italy')" class="destination-btn">{{ $t('search.cities.verona') }}</button>
                  <button @click="showPlace('Bologna, Italy')" class="destination-btn">{{ $t('search.cities.bologna') }}</button>
                  <button @click="showPlace('Assisi, Italy')" class="destination-btn">{{ $t('search.cities.assisi') }}</button>
                  <button @click="showPlace('Orvieto, Italy')" class="destination-btn">{{ $t('search.cities.orvieto') }}</button>
                </div>
              </div>

              <!-- Lakes & Mountains -->
              <div class="category-section">
                <h3 class="category-title">{{ $t('search.categories.lakes') }}</h3>
                <div class="destinations-grid">
                  <button @click="showPlace('Lake Como, Italy')" class="destination-btn">{{ $t('search.lakes.lagodiComo') }}</button>
                  <button @click="showPlace('Bellagio, Italy')" class="destination-btn">{{ $t('search.lakes.bellagio') }}</button>
                  <button @click="showPlace('Lake Garda, Italy')" class="destination-btn">{{ $t('search.lakes.lagodiGarda') }}</button>
                  <button @click="showPlace('Sirmione, Italy')" class="destination-btn">{{ $t('search.lakes.sirmione') }}</button>
                  <button @click="showPlace('Desenzano, Italy')" class="destination-btn">{{ $t('search.lakes.desenzano') }}</button>
                  <button @click="showPlace('Lake Maggiore, Italy')" class="destination-btn">{{ $t('search.lakes.lagoMaggiore') }}</button>
                  <button @click="showPlace('Lake Orta, Italy')" class="destination-btn">{{ $t('search.lakes.lagodOrta') }}</button>
                  <button @click="showPlace('Lake Iseo, Italy')" class="destination-btn">{{ $t('search.lakes.lagodIseo') }}</button>
                  <button @click="showPlace('Dolomites, Italy')" class="destination-btn">{{ $t('search.lakes.dolomiti') }}</button>
                  <button @click="showPlace('Canazei, Italy')" class="destination-btn">{{ $t('search.lakes.canazei') }}</button>
                  <button @click="showPlace('Cortina d\\\'Ampezzo, Italy')" class="destination-btn">{{ $t('search.lakes.cortina') }}</button>
                  <button @click="showPlace('Tre Cime di Lavaredo, Italy')" class="destination-btn">{{ $t('search.lakes.treCime') }}</button>
                </div>
              </div>

              <!-- Cinque Terre -->
              <div class="category-section">
                <h3 class="category-title">{{ $t('search.cinqueTerre.title') }}</h3>
                <div class="destinations-grid">
                  <button @click="showPlace('Riomaggiore, Italy')" class="destination-btn">{{ $t('search.cinqueTerre.riomaggiore') }}</button>
                  <button @click="showPlace('Manarola, Italy')" class="destination-btn">{{ $t('search.cinqueTerre.manarola') }}</button>
                  <button @click="showPlace('Corniglia, Italy')" class="destination-btn">{{ $t('search.cinqueTerre.corniglia') }}</button>
                  <button @click="showPlace('Vernazza, Italy')" class="destination-btn">{{ $t('search.cinqueTerre.vernazza') }}</button>
                  <button @click="showPlace('Monterosso al Mare, Italy')" class="destination-btn">{{ $t('search.cinqueTerre.monterosso') }}</button>
                </div>
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
              <div class="location-badge" :class="tour.location.toLowerCase()">{{ $t('popularTours.' + tour.location.toLowerCase()) }}</div>
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
import { italianDestinations, getDestinationById, type Destination } from '@/data/italianDestinations'

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

// Define multiple locations with their coordinates and prices
const mapLocations = [
  { name: 'Duomo di Milano', coords: '45.464664,9.188540', price: '€85' },
  { name: 'Colosseum Rome', coords: '41.890251,12.492373', price: '€95' },
  { name: 'Uffizi Gallery Florence', coords: '43.768175,11.255576', price: '€120' },
  { name: 'Piazza San Marco Venice', coords: '45.434046,12.338874', price: '€110' },
  { name: 'Pantheon Rome', coords: '41.898762,12.476915', price: '€65' },
  { name: 'Ponte Vecchio Florence', coords: '43.767960,11.253252', price: '€45' },
  { name: 'Grand Canal Venice', coords: '45.440847,12.315515', price: '€89' },
  { name: 'Trevi Fountain Rome', coords: '41.900928,12.483313', price: '€55' }
]

const mapSrc = computed(() => {
  if (placeQuery.value && placeQuery.value !== 'Italy') {
    // Show specific location when clicked
    return `https://www.google.com/maps?q=${encodeURIComponent(placeQuery.value)}&output=embed`
  } else {
    // Show Italy overview with centered view
    // Unfortunately, Google Maps Embed API doesn't support multiple custom markers
    // We would need to implement Google Maps JavaScript API for custom markers with prices
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5906818.875331818!2d9.183594!3d41.87194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1000000000000!5m2!1sen!2sit&output=embed`
  }
})

const showPlace = (q: string) => {
  placeQuery.value = q
  showFilterMenu.value = false
}

const showDestination = (destinationId: string) => {
  const destination = getDestinationById(destinationId)
  if (destination) {
    placeQuery.value = `${destination.name}, Italy`
    showFilterMenu.value = false
  }
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.category-section {
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 1rem;
}

.category-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.category-title {
  margin: 0 0 0.75rem 0;
  color: var(--md-primary);
  font-size: 1rem;
  font-weight: 600;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.5rem;
}

.destination-btn {
  text-align: left;
  background: var(--bg-default);
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.2s ease;
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.destination-btn:hover {
  background: var(--md-primary-container);
  border-color: var(--md-primary);
  transform: translateY(-1px);
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

  .destinations-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.4rem;
  }

  .destination-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
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

  .category-title {
    font-size: 0.9rem;
  }

  .destinations-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.3rem;
  }

  .destination-btn {
    font-size: 0.75rem;
    padding: 0.35rem 0.5rem;
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
