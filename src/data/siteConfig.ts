export const siteConfig = {
  name: "RepereFuite",
  // Nom exact tel qu'il apparaît sur la fiche Google Business
  gbpName: "RepèreFuite - Recherche de fuite & Détection non destructive",
  tagline: "Recherche de fuite sans destruction",
  fullTagline:
    "Spécialisé dans la localisation de fuites d'eau dans les habitations, piscines et canalisations enterrées, sans destruction inutile.",
  url: "https://reperefuite.fr",
  phone: "0785432408",
  phoneDisplay: "07 85 43 24 08",
  phoneTel: "tel:0785432408",
  email: "reperefuite@gmail.com",
  zone: "Est lyonnais – Nord Isère – Sud Ain",
  zoneDetail:
    "Intervention dans un rayon d'environ 50 km autour de Lyon Est.",

  // ─── Adresse NAP (Name, Address, Phone) ────────────────────────────────────
  // ⚠️ IMPORTANT : Ces données doivent être identiques à celles de votre fiche GBP
  address: {
    streetAddress: "",          // TODO: Remplir si adresse physique sur GBP (ex: "12 Rue des Lilas")
    postalCode: "69000",        // TODO: Mettre le vrai code postal de la fiche GBP
    addressLocality: "Lyon",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },

  // ─── Coordonnées géographiques ──────────────────────────────────────────────
  geo: {
    latitude: 45.764,
    longitude: 4.8357,
  },

  // ─── Google Business Profile ────────────────────────────────────────────────
  google: {
    // URL directe vers la fiche GBP (format maps.app.goo.gl ou maps.google.com)
    // TODO: Remplacer par l'URL réelle de votre fiche Google Maps
    businessUrl:
      "https://www.google.com/maps/place/Rep%C3%A8reFuite+-+Recherche+de+fuite+%26+D%C3%A9tection+non+destructive",
    // URL pour laisser un avis (format: https://search.google.com/local/writereview?placeid=VOTRE_PLACE_ID)
    // TODO: Remplacer VOTRE_PLACE_ID par votre vrai Place ID Google
    reviewUrl:
      "https://www.google.com/search?q=Rep%C3%A8reFuite+-+Recherche+de+fuite+%26+D%C3%A9tection+non+destructive#lrd=,1,,,",
    // Place ID Google (https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
    // TODO: Remplir avec votre vrai Place ID
    placeId: "",
    // URL pour embed Google Maps dans le site
    // TODO: Générer depuis Google Maps > Partager > Intégrer une carte
    embedUrl: "",
  },

  // ─── Avis Google (à synchroniser avec la fiche GBP) ────────────────────────
  reviews: {
    ratingValue: "5",     // Note moyenne GBP
    reviewCount: "8",     // Nombre total d'avis GBP (TODO: mettre à jour)
    bestRating: "5",
    worstRating: "1",
  },

  communes: {
    rhone: [
      "Vaulx-en-Velin",
      "Villeurbanne",
      "Décines",
      "Meyzieu",
      "Bron",
      "Chassieu",
      "Genas",
      "Saint-Priest",
      "Rillieux-la-Pape",
      "Caluire-et-Cuire",
    ],
    isere: [
      "Bourgoin-Jallieu",
      "L'Isle-d'Abeau",
      "Saint-Quentin-Fallavier",
    ],
    ain: ["Ambérieu-en-Bugey", "Miribel", "Beynost", "Neyron"],
  },
  creditAgency: {
    name: "Genlead",
    url: "https://genlead.fr",
  },
  web3formsKey: "c7e3c242-ab85-405c-9c02-7a072a04a323",
}

export const navLinks = [
  { label: "Accueil", href: "/" },
  { 
    label: "Habitation", 
    href: "/recherche-fuite-habitation",
    dropdown: [
      { label: "Recherche de fuite habitation", href: "/recherche-fuite-habitation" },
      { label: "Infiltration toiture terrasse", href: "/recherche-fuite-terrasse-lyon" },
    ]
  },
  { 
    label: "Piscine", 
    href: "/recherche-fuite-piscine",
    dropdown: [
      { label: "Recherche de fuite piscine", href: "/recherche-fuite-piscine" },
      { label: "Piscine enterrée", href: "/detection-fuite-piscine-enterree" },
      { label: "Intervention rapide à Lyon", href: "/detection-fuite-piscine-lyon" },
    ]
  },
  { label: "Canalisation enterrée", href: "/recherche-fuite-canalisation-enterree" },
  { label: "Humidité", href: "/diagnostic-humidite" },
  { label: "Méthodes", href: "/methodes-recherche-fuite" },
  { 
    label: "Zones d'intervention", 
    href: "/zones-intervention",
    dropdown: [
      { label: "Toutes nos zones", href: "/zones-intervention" },
      { label: "Lyon Métropole", href: "/zones-intervention/lyon-metropole" },
      { label: "Est Lyonnais", href: "/zones-intervention/est-lyonnais" },
      { label: "Nord de Lyon", href: "/zones-intervention/nord-de-lyon" },
      { label: "Nord-Isère (38)", href: "/zones-intervention/nord-isere" },
      { label: "Ain-Sud (01)", href: "/zones-intervention/ain-sud" },
      { label: "Loire-Nord (42)", href: "/zones-intervention/loire-nord" },
    ]
  },
  { label: "Contact", href: "/contact" },
]
