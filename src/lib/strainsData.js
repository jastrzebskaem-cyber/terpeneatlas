// Terpene profile data for Polish medical cannabis strains
// Terpene values represent relative proportions (0-10 scale) based on budcare.pl profiles

export const TERPENES_LIST = [
  "mircen", "limonen", "kariofilen", "terpinolen", "pinen",
  "linalol", "humulen", "ocymen", "bisabolol", "nerolidol",
  "guaiol", "farnezen", "selinadien"
];

export const STRAINS = [
  {
    id: "snowtorious-krypton",
    name: "Snowtorious Krypton",
    producer: "Spectrum Therapeutics (Canopy Growth)",
    genetics: "Indica",
    thc: 25,
    cbd: 0.5,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Diesel", "Piżmowy", "Ziemisty"],
    description: "Indica o ciężkim, wyrazistym charakterze, powstała z połączenia genetyki Kryptona i Kush Mints. Intensywnie zielone kwiaty pokryte grubą warstwą trichomów.",
    terpenes: {
      mircen: 8, limonen: 5, kariofilen: 4, linalol: 2, pinen: 1, humulen: 2, ocymen: 1
    },
    dominantTerpene: "Mircen",
    packaging: "5g"
  },
  {
    id: "blood-orange-kush",
    name: "Blood Orange Kush",
    producer: "Spectrum Therapeutics (Canopy Growth)",
    genetics: "Indica",
    thc: 29,
    cbd: 0.5,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Cytrusowy", "Korzenny", "Ziemisty"],
    description: "Odmiana z przewagą genetyki indica, z połączenia Lemon Kush oraz Guava Kush. Charakteryzuje się wysoką zawartością THC i wyraźnym cytrusowym profilem aromatycznym.",
    terpenes: {
      limonen: 7, mircen: 6, linalol: 4, kariofilen: 3, humulen: 1, pinen: 1
    },
    dominantTerpene: "Limonen",
    packaging: "5g, 15g"
  },
  {
    id: "kush-mints",
    name: "Kush Mints",
    producer: "Spectrum Therapeutics (Canopy Growth)",
    genetics: "Hybryda",
    thc: 28,
    cbd: 0.5,
    availability: "Wysoka",
    effect: "Zrównoważone",
    aromas: ["Miętowy", "Sosnowy", "Ziemisty", "Ziołowy"],
    description: "Hybryda 50/50 indica/sativa, z połączenia Bubba Kush i Animal Mints. Gęste, żywiczne pąki w odcieniach intensywnej zieleni z fioletowymi refleksami.",
    terpenes: {
      selinadien: 6, kariofilen: 5, mircen: 4, pinen: 3, humulen: 3, limonen: 2, linalol: 1
    },
    dominantTerpene: "Selinadien",
    packaging: "5g"
  },
  {
    id: "bakerstreet",
    name: "Bakerstreet",
    producer: "Spectrum Therapeutics (Canopy Growth)",
    genetics: "Indica",
    thc: 20,
    cbd: 0.5,
    availability: "Brak",
    effect: "Relaksujące",
    aromas: ["Kamfora", "Lawendowy", "Mango", "Miętowy", "Pieprzowy"],
    description: "Odmiana o przewadze indica, mocno relaksujący efekt na ciele. Mircen daje ziołowy aromat, terpinolen nutę cytrusowo-drzewną.",
    terpenes: {
      mircen: 7, terpinolen: 5, ocymen: 4, pinen: 3, kariofilen: 2, linalol: 1
    },
    dominantTerpene: "Mircen",
    packaging: "5g"
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    producer: "Spectrum Therapeutics (Canopy Growth)",
    genetics: "Sativa",
    thc: 27,
    cbd: 0.5,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Pikantny", "Słodki", "Waniliowy"],
    description: "Sativa o intensywnym profilu aromatycznym, ze skrzyżowania Red Headed Stranger × Cookies N' Cream. Słodkie nuty wanilii, śmietanki i orzechów.",
    terpenes: {
      limonen: 6, mircen: 5, kariofilen: 5, linalol: 2, humulen: 2, pinen: 1
    },
    dominantTerpene: "Limonen",
    packaging: "5g"
  },
  {
    id: "jack-haze",
    name: "Jack Haze",
    producer: "Spectrum Therapeutics (7ACRES)",
    genetics: "Sativa",
    thc: 19,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Cytrusowy", "Kamfora", "Sosnowy"],
    description: "Sativa-dominująca odmiana będąca krzyżówką White Widow i Haze. Pobudzająca myśli i kreatywność, działająca energetyzująco.",
    terpenes: {
      terpinolen: 7, mircen: 5, ocymen: 4, pinen: 3, limonen: 2, kariofilen: 1
    },
    dominantTerpene: "Terpinolen",
    packaging: "5g"
  },
  {
    id: "delahaze",
    name: "Delahaze",
    producer: "Aurora Deutschland GmbH",
    genetics: "Sativa",
    thc: 22,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Korzenny", "Miętowy", "Pieprzowy", "Sosnowy", "Ziołowy"],
    description: "Krzyżowanie odmian Mango i Lemon Skunk. Owocowy aromat z nutami sosnowymi. Działanie aktywizujące i stymulujące.",
    terpenes: {
      terpinolen: 7, mircen: 5, pinen: 3, kariofilen: 2, ocymen: 2, limonen: 2, linalol: 1
    },
    dominantTerpene: "Terpinolen",
    packaging: "10g"
  },
  {
    id: "pink-kush",
    name: "Pink Kush",
    producer: "Aurora Deutschland GmbH",
    genetics: "Indica",
    thc: 20,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Drzewny", "Pieprzowy", "Pikantny", "Różany"],
    description: "Odmiana o przewadze indica, słodki, delikatny smak. Silne działanie przeciwbólowe, zwalczające migreny i nudności.",
    terpenes: {
      mircen: 8, kariofilen: 5, linalol: 3, limonen: 2, humulen: 2, pinen: 1, bisabolol: 1
    },
    dominantTerpene: "Mircen",
    packaging: "10g"
  },
  {
    id: "ghost-train-haze",
    name: "Ghost Train Haze",
    producer: "Aurora Deutschland GmbH",
    genetics: "Sativa",
    thc: 22,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Cytrusowy", "Korzenny", "Kwaśny", "Pikantny", "Sosnowy"],
    description: "Bardzo mocna odmiana sativa. Efekty bywają uważane za graniczne z psychodelicznymi. Wysoka zawartość terpinolenu i limonenu.",
    terpenes: {
      terpinolen: 8, limonen: 5, mircen: 3, linalol: 3, pinen: 2, kariofilen: 1, ocymen: 1
    },
    dominantTerpene: "Terpinolen",
    packaging: "10g"
  },
  {
    id: "equiposa",
    name: "Equiposa",
    producer: "Aurora Deutschland GmbH",
    genetics: "Hybryda/Sativa",
    thc: 8,
    cbd: 8.0,
    availability: "Wycofana",
    effect: "Zrównoważone",
    aromas: ["Miętowy", "Pieprzowy", "Sosnowy", "Ziemisty"],
    description: "Hybryda o zbalansowanym THC:CBD. Relaksujące efekty z zachowaniem jasności umysłu. Profil terpenów mircen-pinen.",
    terpenes: {
      mircen: 6, pinen: 5, kariofilen: 3, limonen: 2, linalol: 2, terpinolen: 1, humulen: 1
    },
    dominantTerpene: "Mircen",
    packaging: "10g"
  },
  {
    id: "s-lab-22-animintz",
    name: "Animintz",
    producer: "S-Lab",
    genetics: "Hybryda/Indica",
    thc: 22,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Ziemisty", "Cytrusowy", "Kwiatowy"],
    description: "Hybryda z dominacją indica (70/30), z połączenia Animal Mintz oraz Purp Skurp. Aromat łączy nuty ziemiste, cytrusowe i kwiatowe.",
    terpenes: {
      linalol: 7, kariofilen: 6, mircen: 5, limonen: 4, humulen: 2, bisabolol: 1
    },
    dominantTerpene: "Linalol",
    packaging: "10g"
  },
  {
    id: "s-lab-22-pink-certz",
    name: "Pink Certz 22",
    producer: "S-Lab",
    genetics: "Hybryda/Sativa",
    thc: 22,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Mentolowy", "Diesel", "Chemiczny"],
    description: "Hybryda z dominacją sativa (80/20) z połączenia The Menthol oraz Grape Gasoline. Profil terpenowy z dominacją nerolidolu, limonenu i kariofilenu.",
    terpenes: {
      nerolidol: 7, limonen: 5, kariofilen: 5, mircen: 2, humulen: 2, linalol: 1
    },
    dominantTerpene: "Nerolidol",
    packaging: "10g"
  },
  {
    id: "s-lab-18-pink-certz",
    name: "Pink Certz 18",
    producer: "S-Lab",
    genetics: "Hybryda/Sativa",
    thc: 18,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Mentolowy", "Diesel", "Chemiczny"],
    description: "Wersja 18% THC odmiany Pink Certz. Hybryda z dominacją sativa (80/20). Dominacja nerolidolu, limonenu i kariofilenu.",
    terpenes: {
      nerolidol: 7, limonen: 5, kariofilen: 5, mircen: 2, humulen: 2, linalol: 1
    },
    dominantTerpene: "Nerolidol",
    packaging: "15g"
  },
  {
    id: "s-lab-18-animal-rntz",
    name: "Animal Rntz",
    producer: "S-Lab",
    genetics: "Hybryda/Indica",
    thc: 18,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Owocowy", "Słodko-kwaśny", "Ziemisty"],
    description: "Hybryda z dominacją indica (60/40) ze skrzyżowania Animal Cookies oraz Runtz. Dominują kariofilen, limonen oraz linalol.",
    terpenes: {
      kariofilen: 7, limonen: 5, linalol: 5, mircen: 3, humulen: 2, farnezen: 1
    },
    dominantTerpene: "Kariofilen",
    packaging: "15g"
  },
  {
    id: "s-lab-18-spiced-latte",
    name: "Spiced Latte",
    producer: "S-Lab",
    genetics: "Hybryda/Sativa",
    thc: 18,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Pobudzające",
    aromas: ["Korzenny", "Ziołowy", "Cytrusowy"],
    description: "Hybryda z przewagą sativa (80/20), ze skrzyżowania Jean Guy i Alien Dawg. Pobudzający profil z nutami korzennymi.",
    terpenes: {
      terpinolen: 6, mircen: 4, kariofilen: 3, limonen: 3, pinen: 2, ocymen: 2
    },
    dominantTerpene: "Terpinolen",
    packaging: "15g"
  },
  {
    id: "cosma-22-black-r",
    name: "Black R",
    producer: "Cosma",
    genetics: "Hybryda",
    thc: 22,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Korzenny", "Ziemisty", "Drzewny"],
    description: "Hybryda 50/50 indica-sativa o fenotypie Black Russian, oparta na genetyce Black Domina x White Russian. Klasyczny, wytrawny charakter.",
    terpenes: {
      kariofilen: 8, humulen: 6, mircen: 4, limonen: 3, linalol: 1, pinen: 1
    },
    dominantTerpene: "Kariofilen",
    packaging: "10g"
  },
  {
    id: "synoptis-22-purps",
    name: "Purps",
    producer: "Synoptis Pharma",
    genetics: "Hybryda/Indica",
    thc: 22,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Ziemisty", "Kwiatowy", "Pikantny"],
    description: "Hybryda z przewagą indica (70%). Głębokie, uspokajające działanie. Kariofilen, bisabolol i linalol w profilu terpenowym.",
    terpenes: {
      kariofilen: 6, bisabolol: 5, linalol: 5, mircen: 3, limonen: 2, humulen: 2
    },
    dominantTerpene: "Kariofilen",
    packaging: "10g"
  },
  {
    id: "s-lab-beach-crasher",
    name: "Beach Crasher",
    producer: "S-Lab (Tilray)",
    genetics: "Hybryda/Indica",
    thc: 18,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Ziemisty", "Cytrusowy", "Korzenny"],
    description: "Hybryda z przewagą indica. Ziemisto-cytrusowy aromat z korzennym tłem. Dominujące kariofilen, humulen, nerolidol i mircen.",
    terpenes: {
      kariofilen: 6, humulen: 5, nerolidol: 4, mircen: 4, limonen: 2, pinen: 1
    },
    dominantTerpene: "Kariofilen",
    packaging: "15g"
  },
  {
    id: "tilray-18-cataract-kush",
    name: "Cataract Kush (Tilray)",
    producer: "Tilray",
    genetics: "Indica",
    thc: 18,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Owocowy", "Ziołowy", "Pikantny", "Ziemisty", "Drzewny"],
    description: "Indica o klasycznym kushowym charakterze, z połączenia LA Confidential i OG Kush. Gęste kwiaty z umiarkowaną ilością trichomów.",
    terpenes: {
      mircen: 6, kariofilen: 5, humulen: 4, limonen: 3, linalol: 2, pinen: 2
    },
    dominantTerpene: "Mircen",
    packaging: "10g"
  },
  {
    id: "synoptis-18-cataract-kush",
    name: "Cataract Kush (Synoptis)",
    producer: "Synoptis Pharma",
    genetics: "Indica",
    thc: 18,
    cbd: 1.0,
    availability: "Wysoka",
    effect: "Relaksujące",
    aromas: ["Owocowy", "Ziołowy", "Pikantny", "Ziemisty", "Drzewny"],
    description: "Indica o klasycznym kushowym charakterze, z połączenia LA Confidential i OG Kush. Dystrybucja Synoptis Pharma.",
    terpenes: {
      mircen: 6, kariofilen: 5, humulen: 4, limonen: 3, linalol: 2, pinen: 2
    },
    dominantTerpene: "Mircen",
    packaging: "10g"
  }
];

// Calculate cosine similarity between two terpene profiles
export function cosineSimilarity(profile1, profile2) {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (const terpene of TERPENES_LIST) {
    const v1 = profile1[terpene] || 0;
    const v2 = profile2[terpene] || 0;
    dotProduct += v1 * v2;
    norm1 += v1 * v1;
    norm2 += v2 * v2;
  }

  if (norm1 === 0 || norm2 === 0) return 0;
  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}

// Get similar strains sorted by terpene profile similarity
export function getSimilarStrains(strainId, count = 5) {
  const strain = STRAINS.find(s => s.id === strainId);
  if (!strain) return [];

  return STRAINS
    .filter(s => s.id !== strainId)
    .map(s => ({
      ...s,
      similarity: cosineSimilarity(strain.terpenes, s.terpenes)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}