// Pharmacy availability data per strain
// Format: strainId -> array of pharmacy objects
// Update regularly based on current stock from wholesalers

export const PHARMACIES = {
  "snowtorious-krypton": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "blood-orange-kush": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
  ],
  "kush-mints": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "red-velvet-cake": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "jack-haze": [
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "delahaze": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "pink-kush-aurora-20": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "ghost-train-haze": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
  ],
  "aurora-electric-honeydew": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "aurora-27-black-jelly": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "s-lab-22-animintz": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "s-lab-22-pink-certz": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "s-lab-18-pink-certz": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "s-lab-18-animal-rntz": [
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "s-lab-18-spiced-latte": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "s-lab-22-pink-kush": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "s-lab-22-galaxy-walker-og": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "s-lab-22-powdered-donuts": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "s-lab-22-wappa": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
  ],
  "s-lab-22-inzane": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "s-lab-18-lilac-diesel": [
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "s-lab-beach-crasher-18": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
  ],
  "s-lab-beach-crasher-22": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "cosma-22-black-r": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "tilray-18-cataract-kush": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "tilray-22-cataract-kush": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "tilray-22-lilac-diesel": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "tilray-18-lilac-diesel": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
  ],
  "tilray-22-master-kush": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "tilray-22-pink-kush": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
  ],
  "synoptis-18-cataract-kush": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "synoptis-22-purps": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "synoptis-22-master-kush": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "synoptis-22-facade": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "synoptis-22-galaxy-walker-og": [
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "synoptis-22-pink-kush": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "synoptis-22-lilac-diesel": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "synoptis-18-lilac-diesel": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
  "synoptis-22-island-sweet-skunk": [
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "synoptis-18-frosted-cherry-cookies": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "synoptis-18-pink-kush": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
  ],
  "cantourage-gelato-33": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "suprobion-mystic-wonder": [
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "suprobion-gorilla-glue": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "suprobion-humble-warrior": [
    { name: "Apteka Zdrowie", city: "Poznań", address: "ul. Półwiejska 22", phone: "61 222 33 44" },
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
  ],
  "phytopur-bio-frosted-lemon-angel": [
    { name: "Apteka Przy Klinice", city: "Warszawa", address: "ul. Mokotowska 12", phone: "22 123 45 67" },
    { name: "Apteka Centralna", city: "Gdańsk", address: "ul. Długa 46", phone: "58 333 44 55" },
    { name: "Apteka Medyczna", city: "Kraków", address: "ul. Długa 8", phone: "12 987 65 43" },
  ],
  "phytopur-bio-big-purple-dragon": [
    { name: "Farmacja 24", city: "Wrocław", address: "ul. Świdnicka 31", phone: "71 456 78 90" },
    { name: "Apteka Zdrowie", city: "Łódź", address: "ul. Piotrkowska 58", phone: "42 555 66 77" },
  ],
};

export function getPharmacies(strainId) {
  return PHARMACIES[strainId] || [];
}