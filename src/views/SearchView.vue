<template>
  <div class="search-page">
    <div class="search-bar-wrapper">
      <SearchBar />
    </div>
    <div class="search-results-container">
      <div class="results-list">
        <div v-if="filteredTours.length > 0">
          <div v-for="tour in filteredTours" :key="tour._id" class="tour-card">
            <img :src="tour.images[0]" :alt="tour.name" class="tour-image" />
            <div class="tour-content">
              <h3 class="tour-title">{{ tour.name }}</h3>
              <p class="tour-location">{{ tour.location }}</p>
              <div class="tour-price">{{ formatCurrency(parseFloat(tour.price_eur)) }}</div>
            </div>
          </div>
        </div>
        <div v-else class="no-results">
          <p>No tours found for the selected destination.</p>
        </div>
      </div>
      <div class="results-map">
        <!-- Placeholder for Google Map -->
        <div class="map-placeholder">
          <p>Google Map will be displayed here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import { useTours } from '@/composables/useTours'
import { useCurrency } from '@/composables/useCurrency'

const route = useRoute()
const { allTours } = useTours()
const { format: formatCurrency } = useCurrency()

const filteredTours = computed(() => {
  const destination = route.query.destination as string
  if (!destination) {
    return allTours.value
  }
  return allTours.value.filter(tour => tour.country === destination)
})
</script>

<style scoped>
.search-page {
  padding-top: 80px; /* Adjust for fixed header */
}

.search-bar-wrapper {
  background-color: var(--bg-default);
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-light);
}

.search-results-container {
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
}

.results-list {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  height: calc(100vh - 80px - 125px); /* Full height minus header and search bar */
}

.no-results {
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.tour-card {
  display: flex;
  background: var(--bg-paper);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  cursor: pointer;
}

.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.tour-image {
  width: 200px;
  height: auto;
  object-fit: cover;
}

.tour-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tour-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.tour-location {
  color: var(--text-secondary);
  margin-bottom: auto;
  font-size: 0.9rem;
}

.tour-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--md-primary);
  margin-top: 1rem;
  align-self: flex-end;
}

.results-map {
  flex: 1;
  position: sticky;
  top: 80px; /* Stick to the bottom of the header */
  height: calc(100vh - 80px);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--bg-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
}

/* Placeholder styles for tour cards */
.placeholder-card {
  background: var(--bg-paper);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
}
.placeholder-image {
  width: 100%;
  height: 150px;
  background-color: var(--bg-default);
  border-radius: 4px;
  margin-bottom: 1rem;
}
.placeholder-text {
  width: 80%;
  height: 20px;
  background-color: var(--bg-default);
  border-radius: 4px;
}
</style>
