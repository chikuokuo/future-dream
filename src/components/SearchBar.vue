<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <div class="search-input-group destination-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <input 
          type="text" 
          v-model="destinationInput"
          :placeholder="$t('search.destination')"
          @input="handleDestinationInput"
          @focus="showSuggestions = true"
          @blur="handleBlur"
          autocomplete="off"
        />
        <div v-if="showSuggestions && filteredDestinations.length > 0" class="suggestions-dropdown">
          <div 
            v-for="dest in filteredDestinations" 
            :key="dest.id"
            class="suggestion-item"
            @mousedown="selectDestination(dest)"
          >
            <div class="suggestion-main">
              <span class="destination-name">{{ dest.name }}</span>
              <span class="destination-region">{{ dest.region }}</span>
            </div>
            <div class="suggestion-attractions">
              {{ dest.attractions.slice(0, 2).join(', ') }}
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="search-input-group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <input type="text" v-model="date" onfocus="(this.type='date')" onblur="(this.type='text')" :placeholder="$t('search.date')" />
      </div>
      <div class="divider"></div>
      <div class="search-input-group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <input type="number" v-model="people" :placeholder="$t('search.people')" min="1" />
      </div>
      <button class="search-button" @click="handleSearch">
        {{ $t('search.button') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { italianDestinations, searchDestinations, type Destination } from '@/data/italianDestinations'

interface Props {
  initialDestination?: string
  initialDate?: string
  initialPeople?: number
}

const props = defineProps<Props>()

const router = useRouter()
const destinationInput = ref('')
const selectedDestination = ref<Destination | null>(null)
const date = ref('')
const people = ref(1)
const showSuggestions = ref(false)

// Search functionality
const filteredDestinations = computed(() => {
  if (!destinationInput.value.trim()) return []
  return searchDestinations(destinationInput.value).slice(0, 8)
})

const handleDestinationInput = () => {
  selectedDestination.value = null
  showSuggestions.value = true
}

const selectDestination = (destination: Destination) => {
  selectedDestination.value = destination
  destinationInput.value = destination.name
  showSuggestions.value = false
}

const handleBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false
  }, 200)
}

// Initialize from props when provided (used on Search page)
const applyInitial = () => {
  if (typeof props.initialDestination === 'string') {
    destinationInput.value = props.initialDestination
  }
  if (typeof props.initialDate === 'string') {
    date.value = props.initialDate
  }
  if (typeof props.initialPeople === 'number' && !Number.isNaN(props.initialPeople)) {
    people.value = Math.max(1, props.initialPeople)
  }
}
applyInitial()

watch(() => [props.initialDestination, props.initialDate, props.initialPeople], applyInitial)

const handleSearch = () => {
  const destinationQuery = selectedDestination.value ? selectedDestination.value.name : destinationInput.value
  
  router.push({
    name: 'search',
    query: {
      destination: destinationQuery || 'italy',
      date: date.value,
      people: people.value,
    },
  })
}
</script>

<style scoped>
.search-bar-container {
  padding: 0.1rem;
  background-color: var(--color-warning-800); /* Dark warm background */
  border-radius: 9999px; /* Fully rounded */
  max-width: 900px;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--bg-paper);
  border-radius: 9999px;
  padding: 0.5rem;
  box-shadow: 0 4px 15px var(--color-shadow-light);
  gap: 0.25rem;
}

.search-input-group {
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 0.75rem;
  min-width: 0; /* allow shrink */
}

.destination-search {
  position: relative;
}

.search-icon {
  color: var(--text-secondary);
  margin-right: 0.5rem;
  flex: 0 0 auto;
}

.search-input-group input,
.search-input-group select {
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: var(--color-transparent);
}

.divider { width: 1px; height: 24px; background-color: var(--border-light); }

.search-button {
  background-color: var(--color-warning); /* Warm button */
  color: var(--color-white);
  border: none;
  border-radius: 9999px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 0 0 auto;
}

.search-button:hover { background-color: var(--color-warning-600); }

/* Suggestions Dropdown */
.suggestions-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-paper);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
}

.suggestion-item {
  padding: 0.75rem;
  cursor: pointer;
  border-bottom: 1px solid var(--border-light);
  transition: background-color 0.2s ease;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background-color: var(--md-primary-container);
}

.suggestion-main {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.destination-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.destination-region {
  font-size: 0.8rem;
  color: var(--text-secondary);
  background: var(--bg-default);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

.suggestion-attractions {
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.2;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .search-bar-container { padding: 0.35rem; }
  .search-bar { padding: 0.35rem; border-radius: 32px; }
  .search-input-group { padding: 0 0.5rem; }
  .search-icon { width: 20px; height: 20px; }
  .divider { display: none; }
}

@media (max-width: 480px) {
  .search-input-group input,
  .search-input-group select { font-size: 0.95rem; }
  .search-button { padding: 0.5rem 0.9rem; font-size: 0.9rem; }
}

@media (max-width: 360px) {
  .search-button { padding: 0.45rem 0.8rem; font-size: 0.85rem; }
}
</style>
