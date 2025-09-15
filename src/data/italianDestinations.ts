export interface Destination {
  id: string
  name: string
  category: 'cities' | 'lakes' | 'cinqueTerre' | 'south' | 'tuscany' | 'other'
  coordinates: string
  region: string
  attractions: string[]
}

export const italianDestinations: Destination[] = [
  // Milan 米蘭
  {
    id: 'milan',
    name: 'Milan',
    category: 'cities',
    coordinates: '45.4642,9.1900',
    region: 'Lombardy',
    attractions: [
      'Duomo di Milano',
      'Galleria Vittorio Emanuele II',
      'Castello Sforzesco',
      'Teatro alla Scala',
      'Santa Maria delle Grazie'
    ]
  },

  // Rome 羅馬
  {
    id: 'rome',
    name: 'Rome',
    category: 'cities',
    coordinates: '41.9028,12.4964',
    region: 'Lazio',
    attractions: [
      'Colosseo',
      'Pantheon',
      'Fontana di Trevi',
      'Piazza Navona',
      'Basilica di San Pietro',
      'Musei Vaticani',
      'Spanish Steps',
      'Campo de\' Fiori',
      'Trastevere',
      'Appian Way'
    ]
  },

  // Florence 佛羅倫斯
  {
    id: 'florence',
    name: 'Florence',
    category: 'tuscany',
    coordinates: '43.7696,11.2558',
    region: 'Tuscany',
    attractions: [
      'Cattedrale di Santa Maria del Fiore',
      'Ponte Vecchio',
      'Galleria degli Uffizi',
      'Piazza della Signoria'
    ]
  },

  // Venice 威尼斯
  {
    id: 'venice',
    name: 'Venice',
    category: 'cities',
    coordinates: '45.4408,12.3155',
    region: 'Veneto',
    attractions: [
      'Piazza San Marco',
      'Basilica di San Marco',
      'Canal Grande',
      'Ponte di Rialto',
      'Gondola Rides'
    ]
  },

  // Tuscany 托斯卡尼
  {
    id: 'siena',
    name: 'Siena',
    category: 'tuscany',
    coordinates: '43.3188,11.3307',
    region: 'Tuscany',
    attractions: ['Siena Cathedral']
  },
  {
    id: 'san-gimignano',
    name: 'San Gimignano',
    category: 'tuscany',
    coordinates: '43.4676,11.0431',
    region: 'Tuscany',
    attractions: ['Medieval Towers']
  },
  {
    id: 'pisa',
    name: 'Pisa',
    category: 'tuscany',
    coordinates: '43.7228,10.4017',
    region: 'Tuscany',
    attractions: ['Pisa Leaning Tower']
  },
  {
    id: 'lucca',
    name: 'Lucca',
    category: 'tuscany',
    coordinates: '43.8439,10.5030',
    region: 'Tuscany',
    attractions: ['Lucca City Walls']
  },

  // Lakes 湖區
  {
    id: 'como',
    name: 'Lake Como',
    category: 'lakes',
    coordinates: '45.8150,9.0850',
    region: 'Lombardy',
    attractions: ['Lago di Como']
  },
  {
    id: 'bellagio',
    name: 'Bellagio',
    category: 'lakes',
    coordinates: '45.9777,9.2608',
    region: 'Lombardy',
    attractions: ['Villa del Balbianello', 'Bellagio Gardens']
  },
  {
    id: 'garda',
    name: 'Lake Garda',
    category: 'lakes',
    coordinates: '45.6389,10.7167',
    region: 'Veneto',
    attractions: ['Lago di Garda']
  },
  {
    id: 'sirmione',
    name: 'Sirmione',
    category: 'lakes',
    coordinates: '45.4906,10.6069',
    region: 'Lombardy',
    attractions: ['Grotte di Catullo', 'Scaliger Castle']
  },
  {
    id: 'maggiore',
    name: 'Lake Maggiore',
    category: 'lakes',
    coordinates: '45.8667,8.5500',
    region: 'Piedmont',
    attractions: ['Lago Maggiore', 'Isola Bella']
  },
  {
    id: 'orta',
    name: 'Lake Orta',
    category: 'lakes',
    coordinates: '45.8000,8.4167',
    region: 'Piedmont',
    attractions: ['Lago d\'Orta', 'Isola San Giulio']
  },
  {
    id: 'iseo',
    name: 'Lake Iseo',
    category: 'lakes',
    coordinates: '45.6500,10.0833',
    region: 'Lombardy',
    attractions: ['Lago d\'Iseo', 'Monte Isola']
  },

  // Cinque Terre 五漁村
  {
    id: 'riomaggiore',
    name: 'Riomaggiore',
    category: 'cinqueTerre',
    coordinates: '44.1011,9.7378',
    region: 'Liguria',
    attractions: ['Riomaggiore Village', 'Via dell\'Amore']
  },
  {
    id: 'manarola',
    name: 'Manarola',
    category: 'cinqueTerre',
    coordinates: '44.1069,9.7297',
    region: 'Liguria',
    attractions: ['Manarola Vineyards', 'Nessun Dorma']
  },
  {
    id: 'corniglia',
    name: 'Corniglia',
    category: 'cinqueTerre',
    coordinates: '44.1189,9.7161',
    region: 'Liguria',
    attractions: ['Corniglia Village']
  },
  {
    id: 'vernazza',
    name: 'Vernazza',
    category: 'cinqueTerre',
    coordinates: '44.1356,9.6850',
    region: 'Liguria',
    attractions: ['Vernazza Harbor', 'Doria Castle']
  },
  {
    id: 'monterosso',
    name: 'Monterosso al Mare',
    category: 'cinqueTerre',
    coordinates: '44.1456,9.6533',
    region: 'Liguria',
    attractions: ['Monterosso Beach', 'Giant Statue']
  },

  // South 南義大利
  {
    id: 'naples',
    name: 'Napoli',
    category: 'south',
    coordinates: '40.8518,14.2681',
    region: 'Campania',
    attractions: ['Napoli Historic Center', 'Pizza Napoletana']
  },
  {
    id: 'pompeii',
    name: 'Pompeii',
    category: 'south',
    coordinates: '40.7461,14.4989',
    region: 'Campania',
    attractions: ['Pompeii Archaeological Site']
  },
  {
    id: 'vesuvius',
    name: 'Vesuvio',
    category: 'south',
    coordinates: '40.8210,14.4289',
    region: 'Campania',
    attractions: ['Mount Vesuvius Crater']
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    category: 'south',
    coordinates: '40.6340,14.6026',
    region: 'Campania',
    attractions: ['Amalfi Cathedral', 'Amalfi Drive']
  },
  {
    id: 'capri',
    name: 'Capri',
    category: 'south',
    coordinates: '40.5472,14.2389',
    region: 'Campania',
    attractions: ['Blue Grotto', 'Villa San Michele', 'Faraglioni']
  },
  {
    id: 'ischia',
    name: 'Ischia',
    category: 'south',
    coordinates: '40.7500,13.9000',
    region: 'Campania',
    attractions: ['Ischia Thermal Baths', 'Aragonese Castle']
  },
  {
    id: 'sorrento',
    name: 'Sorrento',
    category: 'south',
    coordinates: '40.6264,14.3678',
    region: 'Campania',
    attractions: ['Sorrento Cliffs', 'Limoncello']
  },

  // Other Cities 其他城市
  {
    id: 'turin',
    name: 'Torino',
    category: 'other',
    coordinates: '45.0703,7.6869',
    region: 'Piedmont',
    attractions: ['Mole Antonelliana', 'Egyptian Museum']
  },
  {
    id: 'genoa',
    name: 'Genova',
    category: 'other',
    coordinates: '44.4056,8.9463',
    region: 'Liguria',
    attractions: ['Palazzo Rosso', 'Columbus House']
  },
  {
    id: 'portofino',
    name: 'Portofino',
    category: 'other',
    coordinates: '44.3030,9.2097',
    region: 'Liguria',
    attractions: ['Portofino Harbor', 'Castello Brown']
  },
  {
    id: 'verona',
    name: 'Verona',
    category: 'other',
    coordinates: '45.4384,10.9916',
    region: 'Veneto',
    attractions: ['Casa di Giulietta', 'Arena di Verona']
  },
  {
    id: 'bologna',
    name: 'Bologna',
    category: 'other',
    coordinates: '44.4949,11.3426',
    region: 'Emilia-Romagna',
    attractions: ['Due Torri', 'Piazza Maggiore', 'Food Tours']
  },
  {
    id: 'assisi',
    name: 'Assisi',
    category: 'other',
    coordinates: '43.0708,12.6114',
    region: 'Umbria',
    attractions: ['Basilica di San Francesco']
  },
  {
    id: 'orvieto',
    name: 'Orvieto',
    category: 'other',
    coordinates: '42.7166,12.1128',
    region: 'Umbria',
    attractions: ['Orvieto Cathedral']
  }
]

// Search functions
export const searchDestinations = (query: string): Destination[] => {
  if (!query.trim()) return italianDestinations

  const searchTerm = query.toLowerCase().trim()
  
  return italianDestinations.filter(destination => 
    destination.name.toLowerCase().includes(searchTerm) ||
    destination.region.toLowerCase().includes(searchTerm) ||
    destination.category.toLowerCase().includes(searchTerm) ||
    destination.attractions.some(attraction => 
      attraction.toLowerCase().includes(searchTerm)
    )
  )
}

export const getDestinationsByCategory = (category: Destination['category']): Destination[] => {
  return italianDestinations.filter(dest => dest.category === category)
}

export const getDestinationById = (id: string): Destination | undefined => {
  return italianDestinations.find(dest => dest.id === id)
}