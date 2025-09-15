<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <div class="search-input-group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <select v-model="destination">
          <option value="" disabled>{{ $t('search.destination') }}</option>
          <option value="italy">{{ $t('popularTours.countries.italy') }}</option>
          <option value="germany">{{ $t('popularTours.countries.germany') }}</option>
        </select>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const destination = ref('')
const date = ref('')
const people = ref(1)

const handleSearch = () => {
  router.push({
    name: 'search',
    query: {
      destination: destination.value,
      date: date.value,
      people: people.value,
    },
  })
}
</script>

<style scoped>
.search-bar-container {
  padding: 0.5rem;
  background-color: var(--color-warning-800); /* Dark warm background */
  border-radius: 9999px; /* Fully rounded */
  max-width: 800px;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--bg-paper);
  border-radius: 9999px;
  padding: 0.5rem;
  box-shadow: 0 4px 15px var(--color-shadow-light);
}

.search-input-group {
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 1rem;
}

.search-icon {
  color: var(--text-secondary);
  margin-right: 0.75rem;
}

.search-input-group input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: var(--color-transparent);
}

.search-input-group select {
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: var(--color-transparent);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

.divider {
  width: 1px;
  height: 24px;
  background-color: var(--border-light);
}

.search-button {
  background-color: var(--color-warning); /* Warm button */
  color: var(--color-white);
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: var(--color-warning-600);
}
</style>
