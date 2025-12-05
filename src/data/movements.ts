import { Movement, Equipment } from "@/types/questionnaire";

export const movements: Movement[] = [
  {
    id: "squat",
    name: "Squat",
    category: "Musculation",
    difficulty: "beginner",
    description: "Le squat est un exercice fondamental qui cible les quadriceps, les fessiers et les ischio-jambiers.",
    instructions: [
      "Placez vos pieds à largeur d'épaules, orteils légèrement vers l'extérieur",
      "Gardez le dos droit et la poitrine ouverte",
      "Descendez en poussant les hanches vers l'arrière comme si vous vouliez vous asseoir",
      "Gardez les genoux alignés avec les orteils",
      "Descendez jusqu'à ce que vos cuisses soient parallèles au sol",
      "Remontez en poussant sur les talons"
    ],
    breathingTips: [
      "Inspirez profondément en descendant",
      "Bloquez légèrement la respiration en bas du mouvement",
      "Expirez en remontant"
    ],
    commonErrors: [
      "Genoux qui rentrent vers l'intérieur",
      "Dos qui s'arrondit",
      "Talons qui décollent du sol",
      "Descente trop rapide sans contrôle"
    ],
    safetyWarnings: {
      "genoux": "Si vous avez des antécédents de douleur au genou, ne descendez pas au-delà de 90 degrés et évitez de laisser vos genoux dépasser vos orteils.",
      "dos": "Concentrez-vous sur le maintien de la courbure naturelle de votre colonne. Utilisez un poids léger au début.",
      "hanches": "Échauffez bien vos hanches avant l'exercice. Réduisez l'amplitude si vous ressentez une gêne."
    },
    musclesTargeted: ["Quadriceps", "Fessiers", "Ischio-jambiers", "Core"]
  },
  {
    id: "planche",
    name: "Planche (Gainage)",
    category: "Core",
    difficulty: "beginner",
    description: "La planche est un exercice isométrique qui renforce toute la ceinture abdominale.",
    instructions: [
      "Placez-vous en position de pompe, avant-bras au sol",
      "Alignez vos coudes sous vos épaules",
      "Gardez votre corps parfaitement droit de la tête aux talons",
      "Contractez vos abdominaux et vos fessiers",
      "Ne laissez pas vos hanches monter ou descendre",
      "Maintenez la position en respirant normalement"
    ],
    breathingTips: [
      "Respirez de manière régulière et contrôlée",
      "N'oubliez pas de respirer - ne bloquez jamais",
      "Expirations courtes pour maintenir la contraction"
    ],
    commonErrors: [
      "Hanches qui montent trop haut (en A)",
      "Hanches qui s'affaissent vers le sol",
      "Tête qui tombe ou regard vers le plafond",
      "Épaules qui remontent vers les oreilles"
    ],
    safetyWarnings: {
      "dos": "Si vous avez des problèmes lombaires, commencez par des planches sur les genoux et limitez la durée.",
      "épaules": "Assurez-vous que vos coudes sont bien alignés sous vos épaules pour éviter toute tension."
    },
    musclesTargeted: ["Transverse", "Grand droit", "Obliques", "Épaules", "Fessiers"]
  },
  {
    id: "salutation-soleil",
    name: "Salutation au Soleil",
    category: "Yoga",
    difficulty: "intermediate",
    description: "Séquence dynamique de yoga qui réchauffe le corps et améliore la souplesse.",
    instructions: [
      "Debout, pieds joints, mains en prière devant le cœur (Tadasana)",
      "Inspirez, levez les bras au ciel, légère extension arrière",
      "Expirez, pliez vers l'avant, mains vers le sol (Uttanasana)",
      "Inspirez, redressez le dos à mi-chemin, regard devant",
      "Expirez, sautez ou marchez vers la planche, puis Chaturanga",
      "Inspirez, Cobra ou Chien tête en haut",
      "Expirez, Chien tête en bas (5 respirations)",
      "Marchez vers l'avant, répétez la séquence"
    ],
    breathingTips: [
      "Synchronisez chaque mouvement avec la respiration",
      "Les extensions s'accompagnent d'inspirations",
      "Les flexions s'accompagnent d'expirations"
    ],
    commonErrors: [
      "Respiration désynchronisée des mouvements",
      "Mouvements précipités sans contrôle",
      "Épaules tendues vers les oreilles",
      "Compression du bas du dos en extension"
    ],
    safetyWarnings: {
      "dos": "Évitez les extensions profondes. Gardez les genoux légèrement fléchis dans les flexions avant.",
      "poignets": "En planche et Chaturanga, répartissez bien le poids sur toute la main, pas seulement sur les poignets."
    },
    musclesTargeted: ["Corps entier", "Chaîne postérieure", "Épaules", "Jambes"]
  },
  {
    id: "fentes",
    name: "Fentes Avant",
    category: "Musculation",
    difficulty: "beginner",
    description: "Exercice unilatéral excellent pour développer force et équilibre des jambes.",
    instructions: [
      "Debout, pieds à largeur de hanches",
      "Faites un grand pas en avant avec une jambe",
      "Descendez jusqu'à ce que les deux genoux soient à 90°",
      "Le genou avant ne doit pas dépasser les orteils",
      "Le genou arrière frôle le sol sans le toucher",
      "Poussez sur le talon avant pour revenir à la position initiale"
    ],
    breathingTips: [
      "Inspirez en descendant",
      "Expirez en remontant",
      "Gardez une respiration fluide"
    ],
    commonErrors: [
      "Genou avant qui dépasse les orteils",
      "Buste penché trop en avant",
      "Perte d'équilibre latéral",
      "Pas trop court ou trop long"
    ],
    safetyWarnings: {
      "genoux": "Commencez avec des fentes moins profondes. Ne laissez jamais le genou avant dépasser les orteils.",
      "hanches": "Gardez les hanches carrées et orientées vers l'avant. Échauffez-vous correctement avant."
    },
    musclesTargeted: ["Quadriceps", "Fessiers", "Ischio-jambiers", "Core"]
  },
  {
    id: "pompes",
    name: "Pompes",
    category: "Musculation",
    difficulty: "intermediate",
    description: "Exercice polyarticulaire classique pour le haut du corps.",
    instructions: [
      "Position de planche, mains légèrement plus larges que les épaules",
      "Corps aligné de la tête aux talons",
      "Descendez en pliant les coudes (angle 45° avec le corps)",
      "La poitrine frôle le sol",
      "Poussez pour revenir en position haute",
      "Gardez le core engagé tout au long du mouvement"
    ],
    breathingTips: [
      "Inspirez en descendant",
      "Expirez en poussant vers le haut",
      "Ne retenez pas votre souffle"
    ],
    commonErrors: [
      "Hanches qui s'affaissent ou montent",
      "Coudes qui s'écartent trop (angle > 90°)",
      "Amplitude incomplète",
      "Tête qui tombe ou monte"
    ],
    safetyWarnings: {
      "épaules": "Si vous avez des problèmes d'épaule, gardez les coudes plus près du corps (angle 30-45°).",
      "poignets": "Utilisez des poignées de pompes si vous ressentez une gêne aux poignets."
    },
    musclesTargeted: ["Pectoraux", "Triceps", "Épaules", "Core"]
  }
];

export const equipment: Equipment[] = [
  {
    id: "tapis-yoga",
    name: "Tapis de Yoga Antidérapant",
    description: "Surface stable et confortable pour tous vos exercices au sol.",
    relevantFor: ["planche", "salutation-soleil", "pompes"],
    imageUrl: "https://contents.mediadecathlon.com/p2059547/k$8d1b8f4c7c8c5c5c5c5c5c5c5c5c5c5c/tapis-yoga-doux-confort-8-mm-gris.jpg",
    link: "https://www.decathlon.fr/p/tapis-yoga-doux-confort-8-mm/_/R-p-305117",
    safetyBenefit: "Prévient les glissements et protège vos articulations pendant les exercices au sol."
  },
  {
    id: "brique-yoga",
    name: "Brique de Yoga",
    description: "Aide à maintenir une posture correcte pour les débutants.",
    relevantFor: ["salutation-soleil", "fentes"],
    imageUrl: "https://contents.mediadecathlon.com/p1694091/k$8d1b8f4c7c8c5c5c5c5c5c5c5c5c5c5c/brique-yoga-mousse.jpg",
    link: "https://www.decathlon.fr/p/brique-yoga-mousse/_/R-p-14582",
    safetyBenefit: "Permet d'adapter les postures à votre niveau de souplesse sans forcer."
  },
  {
    id: "genouilleres",
    name: "Genouillères de Protection",
    description: "Protection et maintien pour les genoux sensibles.",
    relevantFor: ["squat", "fentes"],
    imageUrl: "https://contents.mediadecathlon.com/p2026697/k$8d1b8f4c7c8c5c5c5c5c5c5c5c5c5c5c/genouillere-maintien-gauche-droite.jpg",
    link: "https://www.decathlon.fr/p/genouillere-maintien-gauche-droite/_/R-p-330736",
    safetyBenefit: "Soutient l'articulation du genou pendant les mouvements de flexion."
  },
  {
    id: "ceinture-lombaire",
    name: "Ceinture Lombaire de Musculation",
    description: "Soutien du bas du dos pendant les exercices de force.",
    relevantFor: ["squat", "fentes"],
    imageUrl: "https://contents.mediadecathlon.com/p2095289/k$8d1b8f4c7c8c5c5c5c5c5c5c5c5c5c5c/ceinture-musculation-cuir.jpg",
    link: "https://www.decathlon.fr/p/ceinture-musculation-cuir/_/R-p-305128",
    safetyBenefit: "Aide à maintenir la colonne vertébrale neutre pendant les charges lourdes."
  },
  {
    id: "poignees-pompes",
    name: "Poignées de Pompes",
    description: "Réduit la pression sur les poignets pendant les pompes.",
    relevantFor: ["pompes", "planche"],
    imageUrl: "https://contents.mediadecathlon.com/p2059547/k$8d1b8f4c7c8c5c5c5c5c5c5c5c5c5c5c/poignees-pompes.jpg",
    link: "https://www.decathlon.fr/p/poignees-pompes/_/R-p-305125",
    safetyBenefit: "Position neutre du poignet pour éviter les douleurs et blessures."
  },
  {
    id: "bandes-resistance",
    name: "Bandes de Résistance",
    description: "Parfaites pour l'échauffement et l'activation musculaire.",
    relevantFor: ["squat", "fentes", "pompes"],
    imageUrl: "https://contents.mediadecathlon.com/p1694091/k$8d1b8f4c7c8c5c5c5c5c5c5c5c5c5c5c/elastiband.jpg",
    link: "https://www.decathlon.fr/p/elastiband/_/R-p-14583",
    safetyBenefit: "Excellent pour l'activation des muscles stabilisateurs avant l'entraînement."
  }
];

export const sportsList = [
  { id: "musculation", label: "Musculation", icon: "💪" },
  { id: "yoga", label: "Yoga", icon: "🧘" },
  { id: "running", label: "Course à pied", icon: "🏃" },
  { id: "crossfit", label: "CrossFit", icon: "🏋️" },
  { id: "natation", label: "Natation", icon: "🏊" },
  { id: "cyclisme", label: "Cyclisme", icon: "🚴" },
  { id: "football", label: "Football", icon: "⚽" },
  { id: "tennis", label: "Tennis", icon: "🎾" },
];

export const objectivesList = [
  { id: "force", label: "Gagner en Force", icon: "💪" },
  { id: "souplesse", label: "Améliorer la Souplesse", icon: "🤸" },
  { id: "endurance", label: "Développer l'Endurance", icon: "❤️" },
  { id: "equilibre", label: "Améliorer l'Équilibre", icon: "⚖️" },
  { id: "posture", label: "Corriger ma Posture", icon: "🧍" },
  { id: "prevention", label: "Prévenir les Blessures", icon: "🛡️" },
];

export const injuryZonesList = [
  { id: "dos", label: "Dos / Lombaires", icon: "🔙" },
  { id: "genoux", label: "Genoux", icon: "🦵" },
  { id: "épaules", label: "Épaules", icon: "💪" },
  { id: "hanches", label: "Hanches", icon: "🦴" },
  { id: "poignets", label: "Poignets", icon: "✋" },
  { id: "chevilles", label: "Chevilles", icon: "🦶" },
  { id: "aucune", label: "Aucune blessure", icon: "✅" },
];
