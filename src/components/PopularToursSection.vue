<template>
  <section id="popular-tours" class="popular-tours-section">
    <div class="container">
      <h2 class="section-title">{{ $t('popularTours.title') }}</h2>
      <p class="section-subtitle">{{ $t('popularTours.subtitle') }}</p>

      <div class="tours-grid">
        <!-- Milan Tours -->
        <div v-for="tour in milanTours" :key="tour._id" class="tour-card">
          <div class="card-image">
            <img :src="tour.images[0]" :alt="tour.name" />
            <div class="location-badge">{{ $t('popularTours.milan') }}</div>
          </div>
          <div class="card-content">
            <h3 class="tour-title">{{ tour.name }}</h3>
            <p class="tour-intro">{{ truncateText(tour.intro, 120) }}</p>
            <div class="card-footer">
              <div class="price">
                <span class="price-label">{{ $t('popularTours.from') }}</span>
                <span class="price-amount">{{ $t('popularTours.eur') }} {{ tour.price_eur }}</span>
              </div>
              <button class="view-more-btn">{{ $t('popularTours.viewMore') }}</button>
            </div>
          </div>
        </div>

        <!-- Florence Tours -->
        <div v-for="tour in florenceTours" :key="tour._id" class="tour-card">
          <div class="card-image">
            <img :src="tour.images[0]" :alt="tour.name" />
            <div class="location-badge florence">{{ $t('popularTours.florence') }}</div>
          </div>
          <div class="card-content">
            <h3 class="tour-title">{{ tour.name }}</h3>
            <p class="tour-intro">{{ truncateText(tour.intro, 120) }}</p>
            <div class="card-footer">
              <div class="price">
                <span class="price-label">{{ $t('popularTours.from') }}</span>
                <span class="price-amount">{{ $t('popularTours.eur') }} {{ tour.price_eur }}</span>
              </div>
              <button class="view-more-btn">{{ $t('popularTours.viewMore') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'


// Import images
import milanDuomoImg from '@/assets/images/TravelCard/milan_duomo_rooftop_vr.jpg'
import milanPhotographyImg from '@/assets/images/TravelCard/milan_private_photography_tour.jpg'
import milanLeonardoImg from '@/assets/images/TravelCard/milan_leonardo_codex_atlanticus.jpg'
import italyPrivateTourImg from '@/assets/images/TravelCard/italy_private_tour_5days_rome_florence_venice.jpg'
import florenceDayTripImg from '@/assets/images/TravelCard/florence_daytrip_from_rome_train.jpg'
import florenceRenaissanceImg from '@/assets/images/TravelCard/florence_smallgroup_renaissance_tour.jpg'

// Product data
const toursData = {
  milan_top5_highest_price: [
    {
      "_id": "TR__33060P7",
      "name": "Milan Duomo Rooftop Tour Including Free Virtual Reality Jump into the Past",
      "intro": "Enjoy an amazing view of Milan from above visiting the terraces of the Duomo with professional local guides. During this 1-hour tour you'll get spectacular views over the city of Milan while walking on the rooftop of this majestic monument. You will also be impressed of the countless Gothic statues, spires and bizarre gargoyles decorating the outside of the cathedral while your personal guide teaches you about facts and anecdotes of the most iconic symbol of the city. Then take your chance to live a unique immersive experience wearing a 3-D virtual reality headset. Enhancing your visit is a free included option.",
      "highlights": "",
      "price_eur": "39.0",
      "images": [
        milanDuomoImg
      ],
      "location": "Milan"
    },
    {
      "_id": "TR__7842P32",
      "name": "Private Photography Tour of Milan",
      "intro": "Rich in historical architecture and brimming with next season's haute couture, Milan provides endless photo opportunities. It's fast and determined during rush hours, but there are spots that were made for people watching. Follow along with your professional photographer-guide on your private tour as you explore the most captivating angles of Milan. You will demystify the complexities of your camera and find the best spots to capture the perfect shot. Choose from one of 2 departure times and durations when you book.",
      "highlights": "",
      "price_eur": "175.0",
      "images": [
        milanPhotographyImg
      ],
      "location": "Milan"
    },
    {
      "_id": "TR__40358P1",
      "name": "Leonardo da Vinci's Codex Atlanticus Admission in Milan",
      "intro": "See the original notes and drawings of Leonardo da Vinci, which are displayed at Milan's Codex Atlanticus exhibit in the Pinacoteca Ambrosiana. The entry ticket includes access to both the museum and the exhibition, where pages from the artist's notebook are given pride of place. Visit the ancient library where the full Codex Atlanticus is stored, and admire art by Caravaggio, Raphael, Titian, and more. Allow yourself 1.5 hours for a visit.",
      "highlights": "",
      "price_eur": "16.5",
      "images": [
        milanLeonardoImg
      ],
      "location": "Milan"
    }
  ],
  florence_top5_highest_price: [
    {
      "_id": "TR__8434P12",
      "name": "5-Day Italy Private Tour: Rome, Florence and Venice",
      "intro": "Discover the three most famous and visited cities of Italy with this private 5 days tour around the 'Bel Paese'. Starting from Rome, the Italian capital, this tour will stop in Florence and Venice. Enjoy the magical atmosphere of these cities, walking through their narrow alleys and visiting their top attractions.",
      "highlights": "",
      "price_eur": "999.0",
      "images": [
        italyPrivateTourImg
      ],
      "location": "Florence"
    },
    {
      "_id": "TR__5034ROMFLOSHUTTLE",
      "name": "Florence Day Trip from Rome by High-Speed Train",
      "intro": "Spend a day in Florence on this day trip from Rome by high-speed train. After starting the experience with a hotel pickup, travel from Rome Termini Station to Florence Santa Maria Novella Railway Station in roughly 1.5 hours. Then, explore the city with a walking tour and skip-the-line entrance ticket to the impressive Uffizi Gallery — home to a wealth of Renaissance artwork. Lunch at a traditional Florentine restaurant is included, as well as some free time in the afternoon, before making your way back to Rome.",
      "highlights": "",
      "price_eur": "155.0",
      "images": [
        florenceDayTripImg
      ],
      "location": "Florence"
    },
    {
      "_id": "TR__8515P5",
      "name": "Small Group Tour: Florence the Cradle of the Renaissance from Rome",
      "intro": "Explore the Renaissance cities of Florence on a full-day tour from Rome. The city tour will start from Piazzale Michelangelo where you will see a beautiful view of Ponte Vecchio. Here you will meet your guide who will show you the Santa Maria's del Fiore Cathedral with its beautiful Dome by Brunelleschi. Other treasure, the Baptistery and Giotto's Bell Tower can also be admired before reaching Piazza della Signoria. Then your guide will take you to the Accademia Gallery and show you where our star used to stand outside the doors.",
      "highlights": "",
      "price_eur": "168.0",
      "images": [
        florenceRenaissanceImg
      ],
      "location": "Florence"
    }
  ]
}

const milanTours = computed(() => toursData.milan_top5_highest_price.slice(0, 3))
const florenceTours = computed(() => toursData.florence_top5_highest_price.slice(0, 3))

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
</script>

<style scoped>
.popular-tours-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  color: #1f2937;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.section-subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #6b7280;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  padding: 0 1rem;
}

.tour-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  max-width: 380px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tour-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06);
}

.card-image {
  position: relative;
  width: 100%;
  height: 220px;
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
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.location-badge.florence {
  background: #10b981;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tour-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tour-intro {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  height: 4.8rem;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price-label {
  font-size: 0.8rem;
  color: #9ca3af;
  font-weight: 500;
}

.price-amount {
  font-size: 1.4rem;
  font-weight: bold;
  color: #059669;
}

.view-more-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
}

.view-more-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .tours-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
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
    margin-bottom: 3rem;
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
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .card-content {
    padding: 1.25rem;
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
