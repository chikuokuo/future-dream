import { ref, computed } from 'vue'
import { italianDestinations, searchDestinations, type Destination } from '@/data/italianDestinations'

export const useDestinationSearch = () => {
  const searchQuery = ref('')
  const selectedDestination = ref<Destination | null>(null)

  const searchResults = computed(() => {
    if (!searchQuery.value.trim()) {
      return italianDestinations
    }
    return searchDestinations(searchQuery.value)
  })

  const filteredByCategory = computed(() => {
    const categories = {
      cities: italianDestinations.filter(d => d.category === 'cities'),
      lakes: italianDestinations.filter(d => d.category === 'lakes'),
      cinqueTerre: italianDestinations.filter(d => d.category === 'cinqueTerre'),
      tuscany: italianDestinations.filter(d => d.category === 'tuscany'),
      south: italianDestinations.filter(d => d.category === 'south'),
      other: italianDestinations.filter(d => d.category === 'other')
    }
    return categories
  })

  const popularDestinations = computed(() => {
    // Return most popular destinations based on predefined list
    const popularIds = ['rome', 'florence', 'venice', 'milan', 'amalfi', 'como', 'riomaggiore', 'naples']
    return italianDestinations.filter(dest => popularIds.includes(dest.id))
  })

  const searchByAttraction = (attraction: string) => {
    return italianDestinations.filter(dest => 
      dest.attractions.some(attr => 
        attr.toLowerCase().includes(attraction.toLowerCase())
      )
    )
  }

  const getDestinationsByRegion = (region: string) => {
    return italianDestinations.filter(dest => 
      dest.region.toLowerCase().includes(region.toLowerCase())
    )
  }

  const clearSearch = () => {
    searchQuery.value = ''
    selectedDestination.value = null
  }

  return {
    searchQuery,
    selectedDestination,
    searchResults,
    filteredByCategory,
    popularDestinations,
    searchByAttraction,
    getDestinationsByRegion,
    clearSearch
  }
}