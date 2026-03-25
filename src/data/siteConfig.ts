export const siteConfig = {
  name: "RepereFuite",
  tagline: "Recherche de fuite sans destruction",
  fullTagline:
    "Spécialisé dans la localisation de fuites d'eau dans les habitations, piscines et réseaux enterrés, sans destruction inutile.",
  url: "https://reperefuite.fr",
  phone: "0785432408",
  phoneDisplay: "07 85 43 24 08",
  phoneTel: "tel:0785432408",
  email: "reperefuite@gmail.com",
  zone: "Est lyonnais – Nord Isère – Sud Ain",
  zoneDetail:
    "Intervention dans un rayon d'environ 50 km autour de Lyon Est.",
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
    ]
  },
  { label: "Réseau enterré", href: "/recherche-fuite-reseau-enterre" },
  { label: "Humidité", href: "/diagnostic-humidite" },
  { label: "Méthodes", href: "/methodes-recherche-fuite" },
  { label: "Contact", href: "/contact" },
]
