import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import sitemap from 'vite-plugin-sitemap'

// All strain and terpene IDs — kept in sync with strainsData.js / terpenesData.js
const strainIds = [
  "snowtorious-krypton", "blood-orange-kush", "kush-mints", "bakerstreet",
  "red-velvet-cake", "jack-haze", "delahaze", "pink-kush-aurora-20",
  "ghost-train-haze", "aurora-electric-honeydew", "aurora-27-black-jelly",
  "equiposa", "s-lab-22-animintz", "s-lab-22-pink-certz", "s-lab-18-pink-certz",
  "s-lab-18-animal-rntz", "s-lab-18-spiced-latte", "s-lab-22-pink-kush",
  "s-lab-22-galaxy-walker-og", "s-lab-22-powdered-donuts", "s-lab-22-wappa",
  "s-lab-22-inzane", "s-lab-18-lilac-diesel", "s-lab-beach-crasher-18",
  "s-lab-beach-crasher-22", "cosma-22-black-r", "tilray-18-cataract-kush",
  "tilray-22-cataract-kush", "tilray-22-lilac-diesel", "tilray-18-lilac-diesel",
  "tilray-22-master-kush", "tilray-22-pink-kush", "synoptis-18-cataract-kush",
  "synoptis-22-purps", "synoptis-22-master-kush", "synoptis-22-facade",
  "synoptis-22-galaxy-walker-og", "synoptis-22-pink-kush", "synoptis-22-lilac-diesel",
  "synoptis-18-lilac-diesel", "synoptis-22-wappa", "synoptis-18-frosted-cherry-cookies",
  "synoptis-18-pink-kush", "synoptis-22-island-sweet-skunk", "cantourage-gelato-33",
  "suprobion-mystic-wonder", "suprobion-gorilla-glue", "suprobion-humble-warrior",
  "phytopur-bio-frosted-lemon-angel", "phytopur-bio-big-purple-dragon",
];

const terpeneIds = [
  "mircen", "limonen", "kariofilen", "terpinolen", "pinen",
  "linalol", "humulen", "ocymen", "bisabolol", "nerolidol",
  "guaiol", "farnezen", "selinadien",
];

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error',
  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
    sitemap({
      hostname: 'https://www.terpeneatlas.org', // ← update to your real domain
      dynamicRoutes: [
        '/',
        '/terpeny',
        '/poradnik-pacjenta',
        '/polityka-prywatnosci',
        ...strainIds.map((id) => `/odmiana/${id}`),
        ...terpeneIds.map((id) => `/terpeny/${id}`),
      ],
      // Priority hints for Google
      changefreq: 'weekly',
      priority: 0.7,
      // Higher priority for key pages
      readable: true,
    }),
  ]
});
