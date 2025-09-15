<template>
  <div class="search-page">
    <div class="search-bar-wrapper">
      <SearchBar />
    </div>
    <div class="search-grid">
      <!-- Left column: POI list + Map -->
      <section class="left-column">
        <aside class="poi-list">
          <h3>Italy Highlights</h3>
          <div class="poi-group">
            <h4>Milano</h4>
            <div class="poi-buttons">
              <button @click="showPlace('Duomo di Milano, Milan')">📍 Duomo di Milano</button>
              <button @click="showPlace('Galleria Vittorio Emanuele II, Milan')">📍 Galleria Vittorio Emanuele II</button>
              <button @click="showPlace('Castello Sforzesco, Milan')">📍 Castello Sforzesco</button>
              <button @click="showPlace('Teatro alla Scala, Milan')">📍 Teatro alla Scala</button>
              <button @click="showPlace('Santa Maria delle Grazie, Milan')">📍 Santa Maria delle Grazie</button>
            </div>
          </div>
          <div class="poi-group">
            <h4>Roma</h4>
            <div class="poi-buttons">
              <button @click="showPlace('Colosseum, Rome')">📍 Colosseo</button>
              <button @click="showPlace('Pantheon, Rome')">📍 Pantheon</button>
              <button @click="showPlace('Trevi Fountain, Rome')">📍 Fontana di Trevi</button>
              <button @click="showPlace('Piazza Navona, Rome')">📍 Piazza Navona</button>
              <button @click="showPlace('St. Peter\'s Basilica, Vatican City')">📍 Basilica di San Pietro</button>
              <button @click="showPlace('Vatican Museums, Vatican City')">📍 Musei Vaticani</button>
              <button @click="showPlace('Spanish Steps, Rome')">📍 Spanish Steps</button>
              <button @click="showPlace('Campo de\' Fiori, Rome')">📍 Campo de’ Fiori</button>
              <button @click="showPlace('Trastevere, Rome')">📍 Trastevere</button>
              <button @click="showPlace('Appian Way, Rome')">📍 Via Appia Antica</button>
            </div>
          </div>
          <div class="poi-group">
            <h4>Firenze</h4>
            <div class="poi-buttons">
              <button @click="showPlace('Cathedral of Santa Maria del Fiore, Florence')">📍 Cattedrale di Santa Maria del Fiore</button>
              <button @click="showPlace('Ponte Vecchio, Florence')">📍 Ponte Vecchio</button>
              <button @click="showPlace('Uffizi Gallery, Florence')">📍 Galleria degli Uffizi</button>
              <button @click="showPlace('Piazza della Signoria, Florence')">📍 Piazza della Signoria</button>
            </div>
          </div>
          <div class="poi-group">
            <h4>Venezia</h4>
            <div class="poi-buttons">
              <button @click="showPlace('Piazza San Marco, Venice')">📍 Piazza San Marco</button>
              <button @click="showPlace('Basilica di San Marco, Venice')">📍 Basilica di San Marco</button>
              <button @click="showPlace('Grand Canal, Venice')">📍 Canal Grande</button>
              <button @click="showPlace('Rialto Bridge, Venice')">📍 Ponte di Rialto</button>
              <button @click="showPlace('Gondola Rides, Venice')">📍 Gondola Rides</button>
            </div>
          </div>
        </aside>
        <div class="results-map">
          <iframe class="gmap" :src="mapSrc" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <!-- Right column: Tours -->
      <section class="right-column">
        <div v-if="filteredTours.length > 0">
          <article v-for="tour in filteredTours" :key="tour._id" class="tour-card">
            <img :src="tour.images[0]" :alt="tour.name" class="tour-image" />
            <div class="tour-content">
              <h3 class="tour-title">{{ tour.name }}</h3>
              <p class="tour-location">{{ tour.location }}</p>
              <p v-if="tour.intro" class="tour-intro">{{ truncate(tour.intro, 140) }}</p>
              <div class="tour-meta">
                <div class="tour-price">{{ formatCurrency(parseFloat(tour.price_eur)) }}</div>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="no-results">
          <p>No tours found for the selected destination.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import { useTours } from '@/composables/useTours'
import { useCurrency } from '@/composables/useCurrency'

const route = useRoute()
const { allTours } = useTours()
const { format: formatCurrency } = useCurrency()

const effectiveDestination = computed(() => (route.query.destination as string) || 'italy')

const filteredTours = computed(() => {
  const destination = effectiveDestination.value
  if (!destination) return allTours.value
  return allTours.value.filter(tour => tour.country === destination)
})

const placeQuery = ref('Italy')
const mapSrc = computed(() => `https://www.google.com/maps?q=${encodeURIComponent(placeQuery.value)}&output=embed`)
const showPlace = (q: string) => { placeQuery.value = q }

const truncate = (s: string, n: number) => (s && s.length > n ? s.slice(0, n) + '…' : s)
</script>

<style scoped>
.search-page { padding-top: 80px; }
.search-bar-wrapper { background-color: var(--bg-default); padding: 2rem 0; border-bottom: 1px solid var(--border-light); }

/* Grid layout: two columns on desktop */
.search-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 1600px; margin: 0 auto; padding: 2rem; }
.left-column { display: grid; grid-template-rows: auto 1fr; gap: 1rem; }
.right-column { height: calc(100vh - 80px - 125px); overflow-y: auto; }

/* POI list */
.poi-list { background: var(--bg-paper); border: 1px solid var(--border-light); border-radius: 12px; padding: 1rem; }
.poi-list h3 { margin: 0 0 0.75rem 0; color: var(--text-primary); }
.poi-group { margin-bottom: 0.75rem; }
.poi-group h4 { margin: 0.5rem 0; color: var(--md-primary); }
.poi-buttons { display: grid; grid-template-columns: 1fr; gap: 0.4rem; }
.poi-buttons button { text-align: left; background: var(--bg-default); border: 1px solid var(--border-light); border-radius: 8px; padding: 0.5rem 0.75rem; cursor: pointer; color: var(--text-primary); transition: all 0.2s ease; }
.poi-buttons button:hover { background: var(--md-primary-container); border-color: var(--md-primary); }

/* Map */
.results-map { width: 100%; height: 100%; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-light); }
.gmap { width: 100%; height: 100%; border: 0; }

/* Tours */
.tour-card { display: flex; background: var(--bg-paper); border: 1px solid var(--border-light); border-radius: 16px; margin-bottom: 1.5rem; overflow: hidden; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.07); cursor: pointer; }
.tour-card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
.tour-image { width: 200px; height: auto; object-fit: cover; }
.tour-content { padding: 1.25rem 1.5rem; display: flex; flex-direction: column; flex: 1; gap: 0.4rem; }
.tour-title { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin: 0; }
.tour-location { color: var(--text-secondary); font-size: 0.9rem; }
.tour-intro { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; }
.tour-meta { display: flex; justify-content: flex-end; align-items: center; margin-top: 0.25rem; }
.tour-price { font-size: 1.2rem; font-weight: 800; color: var(--md-primary); }

/* RWD */
@media (max-width: 1024px) {
  .search-grid { grid-template-columns: 1fr; }
  .right-column { height: auto; overflow: visible; }
}

@media (max-width: 640px) {
  .tour-image { width: 140px; }
  .tour-title { font-size: 1rem; }
  .tour-intro { font-size: 0.9rem; }
}
</style>
