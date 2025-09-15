<template>
  <div class="destination-search-demo">
    <h3>Italian Destinations Search Demo</h3>

    <!-- Search Input -->
    <div class="search-section">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search Italian destinations, attractions, or regions..."
        class="search-input"
      />
    </div>

    <!-- Popular Destinations -->
    <div v-if="!searchQuery" class="popular-section">
      <h4>Popular Destinations</h4>
      <div class="destinations-grid">
        <div
          v-for="dest in popularDestinations"
          :key="dest.id"
          class="destination-card"
          @click="showDestinationDetail(dest)"
        >
          <h5>{{ dest.name }}</h5>
          <p class="region">{{ dest.region }}</p>
          <div class="attractions">
            {{ dest.attractions.slice(0, 2).join(', ') }}
          </div>
        </div>
      </div>
    </div>

    <!-- Search Results -->
    <div v-if="searchQuery && searchResults.length > 0" class="results-section">
      <h4>Search Results ({{ searchResults.length }})</h4>
      <div class="destinations-grid">
        <div
          v-for="dest in searchResults"
          :key="dest.id"
          class="destination-card"
          @click="showDestinationDetail(dest)"
        >
          <h5>{{ dest.name }}</h5>
          <p class="region">{{ dest.region }}</p>
          <div class="attractions">
            {{ dest.attractions.slice(0, 2).join(', ') }}
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="searchQuery && searchResults.length === 0" class="no-results">
      <p>No destinations found for "{{ searchQuery }}"</p>
    </div>

    <!-- Categories -->
    <div v-if="!searchQuery" class="categories-section">
      <h4>Browse by Category</h4>
      <div class="category-tabs">
        <button
          v-for="(destinations, category) in filteredByCategory"
          :key="category"
          @click="selectedCategory = category"
          :class="{ active: selectedCategory === category }"
          class="category-tab"
        >
          {{ category }} ({{ destinations.length }})
        </button>
      </div>

      <div v-if="selectedCategory" class="category-results">
        <div class="destinations-grid">
          <div
            v-for="dest in filteredByCategory[selectedCategory]"
            :key="dest.id"
            class="destination-card"
            @click="showDestinationDetail(dest)"
          >
            <h5>{{ dest.name }}</h5>
            <p class="region">{{ dest.region }}</p>
            <div class="attractions">
              {{ dest.attractions.slice(0, 2).join(', ') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Destination Detail -->
    <div v-if="selectedDestination" class="destination-detail">
      <h4>{{ selectedDestination.name }}, {{ selectedDestination.region }}</h4>
      <p><strong>Category:</strong> {{ selectedDestination.category }}</p>
      <p><strong>Coordinates:</strong> {{ selectedDestination.coordinates }}</p>
      <div class="attractions-list">
        <strong>Attractions:</strong>
        <ul>
          <li v-for="attraction in selectedDestination.attractions" :key="attraction">
            {{ attraction }}
          </li>
        </ul>
      </div>
      <button @click="selectedDestination = null" class="close-btn">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDestinationSearch } from '@/composables/useDestinationSearch'
import type { Destination, DestinationCategory } from '@/data/italianDestinations'

const {
  searchQuery,
  searchResults,
  filteredByCategory,
  popularDestinations
} = useDestinationSearch()

const selectedDestination = ref<Destination | null>(null)
const selectedCategory = ref<DestinationCategory>('cities')

const showDestinationDetail = (destination: Destination) => {
  selectedDestination.value = destination
}
</script>

<style scoped>
.destination-search-demo {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.search-section {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-light);
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: var(--md-primary);
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.destination-card {
  padding: 1rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--bg-paper);
}

.destination-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--md-primary);
}

.destination-card h5 {
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
  font-weight: 600;
}

.region {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0 0 0.5rem 0;
  background: var(--bg-default);
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.attractions {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.3;
}

.category-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.category-tab {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-light);
  border-radius: 20px;
  background: var(--bg-paper);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  text-transform: capitalize;
}

.category-tab:hover {
  background: var(--md-primary-container);
}

.category-tab.active {
  background: var(--md-primary);
  color: var(--md-on-primary);
  border-color: var(--md-primary);
}

.destination-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg-paper);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  max-width: 500px;
  width: 90%;
  z-index: 1000;
}

.destination-detail h4 {
  margin: 0 0 1rem 0;
  color: var(--text-primary);
}

.attractions-list {
  margin: 1rem 0;
}

.attractions-list ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.attractions-list li {
  margin-bottom: 0.25rem;
  color: var(--text-secondary);
}

.close-btn {
  background: var(--md-primary);
  color: var(--md-on-primary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
}

.popular-section, .results-section, .categories-section {
  margin-bottom: 2rem;
}

.popular-section h4, .results-section h4, .categories-section h4 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}
</style>
