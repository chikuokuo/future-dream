import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Import images
import milanDuomoImg from '@/assets/images/TravelCard/milan_duomo_rooftop_vr.jpg'
import milanPhotographyImg from '@/assets/images/TravelCard/milan_private_photography_tour.jpg'
import milanLeonardoImg from '@/assets/images/TravelCard/milan_leonardo_codex_atlanticus.jpg'
import italyPrivateTourImg from '@/assets/images/TravelCard/italy_private_tour_5days_rome_florence_venice.jpg'
import florenceDayTripImg from '@/assets/images/TravelCard/florence_daytrip_from_rome_train.jpg'
import florenceRenaissanceImg from '@/assets/images/TravelCard/florence_smallgroup_renaissance_tour.jpg'
import neuschwansteinImg from '@/assets/images/NeuschwansteinCastle.png'

export const useTours = () => {
  const { t } = useI18n()

  const toursData = computed(() => ({
    italy: [
        {
        "_id": "TR__33060P7",
        "name": "Milan Duomo Rooftop Tour Including Free Virtual Reality Jump into the Past",
        "intro": "Enjoy an amazing view of Milan from above visiting the terraces of the Duomo with professional local guides. During this 1-hour tour you'll get spectacular views over the city of Milan while walking on the rooftop of this majestic monument. You will also be impressed of the countless Gothic statues, spires and bizarre gargoyles decorating the outside of the cathedral while your personal guide teaches you about facts and anecdotes of the most iconic symbol of the city. Then take your chance to live a unique immersive experience wearing a 3-D virtual reality headset. Enhancing your visit is a free included option.",
        "highlights": "",
        "price_eur": "39.0",
        "images": [milanDuomoImg],
        "location": t('popularTours.milan'),
        "country": "italy"
      },
      {
        "_id": "TR__7842P32",
        "name": "Private Photography Tour of Milan",
        "intro": "Rich in historical architecture and brimming with next season's haute couture, Milan provides endless photo opportunities. It's fast and determined during rush hours, but there are spots that were made for people watching. Follow along with your professional photographer-guide on your private tour as you explore the most captivating angles of Milan. You will demystify the complexities of your camera and find the best spots to capture the perfect shot. Choose from one of 2 departure times and durations when you book.",
        "highlights": "",
        "price_eur": "175.0",
        "images": [milanPhotographyImg],
        "location": t('popularTours.milan'),
        "country": "italy"
      },
      {
        "_id": "TR__40358P1",
        "name": "Leonardo da Vinci's Codex Atlanticus Admission in Milan",
        "intro": "See the original notes and drawings of Leonardo da Vinci, which are displayed at Milan's Codex Atlanticus exhibit in the Pinacoteca Ambrosiana. The entry ticket includes access to both the museum and the exhibition, where pages from the artist's notebook are given pride of place. Visit the ancient library where the full Codex Atlanticus is stored, and admire art by Caravaggio, Raphael, Titian, and more. Allow yourself 1.5 hours for a visit.",
        "highlights": "",
        "price_eur": "16.5",
        "images": [milanLeonardoImg],
        "location": t('popularTours.milan'),
        "country": "italy"
      },
      {
        "_id": "TR__8434P12",
        "name": "5-Day Italy Private Tour: Rome, Florence and Venice",
        "intro": "Discover the three most famous and visited cities of Italy with this private 5 days tour around the 'Bel Paese'. Starting from Rome, the Italian capital, this tour will stop in Florence and Venice. Enjoy the magical atmosphere of these cities, walking through their narrow alleys and visiting their top attractions.",
        "highlights": "",
        "price_eur": "999.0",
        "images": [italyPrivateTourImg],
        "location": t('popularTours.florence'),
        "country": "italy"
      },
      {
        "_id": "TR__5034ROMFLOSHUTTLE",
        "name": "Florence Day Trip from Rome by High-Speed Train",
        "intro": "Spend a day in Florence on this day trip from Rome by high-speed train. After starting the experience with a hotel pickup, travel from Rome Termini Station to Florence Santa Maria Novella Railway Station in roughly 1.5 hours. Then, explore the city with a walking tour and skip-the-line entrance ticket to the impressive Uffizi Gallery — home to a wealth of Renaissance artwork. Lunch at a traditional Florentine restaurant is included, as well as some free time in the afternoon, before making your way back to Rome.",
        "highlights": "",
        "price_eur": "155.0",
        "images": [florenceDayTripImg],
        "location": t('popularTours.florence'),
        "country": "italy"
      },
      {
        "_id": "TR__8515P5",
        "name": "Small Group Tour: Florence the Cradle of the Renaissance from Rome",
        "intro": "Explore the Renaissance cities of Florence on a full-day tour from Rome. The city tour will start from Piazzale Michelangelo where you will see a beautiful view of Ponte Vecchio. Here you will meet your guide who will show you the Santa Maria's del Fiore Cathedral with its beautiful Dome by Brunelleschi. Other treasure, the Baptistery and Giotto's Bell Tower can also be admired before reaching Piazza della Signoria. Then your guide will take you to the Accademia Gallery and show you where our star used to stand outside the doors.",
        "highlights": "",
        "price_eur": "168.0",
        "images": [florenceRenaissanceImg],
        "location": t('popularTours.florence'),
        "country": "italy"
      }
    ],
    germany: [
      {
        "_id": "TR__NCS_01",
        "name": "Neuschwanstein Castle Skip-the-Line Ticket",
        "intro": "Visit the fairytale castle of King Ludwig II, nestled in the Bavarian Alps. This ticket provides skip-the-line access to one of the most famous castles in the world.",
        "highlights": "",
        "price_eur": "21.0",
        "images": [neuschwansteinImg],
        "location": t('popularTours.germany'),
        "country": "germany"
      }
    ]
  }));

  const allTours = computed(() => [...toursData.value.italy, ...toursData.value.germany]);

  return {
    toursData,
    allTours
  }
}
