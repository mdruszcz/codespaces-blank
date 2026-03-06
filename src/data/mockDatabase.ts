export const mockDatabase = {
  stats2025: {
    notesStrategiques: 547,
    reponsesQuestions: 2561,
    simulations: 1885,
    transfertsDonnees: 148,
    analyses: 78,
    questionnaires: 56,
    publications: 28,
    reunions: 201,
    presentations: 6,
  },
  modeles: [
    {
      id: "aurora",
      nom: "AURORA",
      description: "Modèle IPP (Impôt des personnes physiques)",
      simulations2025: 333,
    },
    {
      id: "sire",
      nom: "SIRE",
      description: "Modèle d'échantillonnage rapide",
      simulations2025: 150,
    },
    {
      id: "misis",
      nom: "MISis",
      description: "Modèle ISoc (Impôt des sociétés) couvrant plus de 500 000 sociétés",
      simulations2025: 616,
    },
  ],
  publications: [
    {
      id: "scvv-2025",
      titre: "Rapport du Comité d'Étude sur le Vieillissement (SCVV)",
      date: "Juillet 2025",
      description:
        "Prévoit une hausse des dépenses sociales de 25,8 % du PIB en 2023 à 30,0 % du PIB en 2070 (coût budgétaire de 4,1 points de pourcentage).",
      type: "Rapport",
    },
    {
      id: "wp-2025-001",
      titre: "Working paper 2025/001",
      auteur: "Wim van Delft",
      description:
        "Effet de l'introduction des systèmes de caisses enregistreuses (GKS) dans le secteur Horeca.",
      type: "Working Paper",
    },
  ],
  vatGapData: [
    { annee: 2017, gap: 11.2 },
    { annee: 2018, gap: 10.5 },
    { annee: 2019, gap: 9.3 },
    { annee: 2020, gap: 8.0 },
    { annee: 2021, gap: 7.0 },
  ],
  vatGapDetails: {
    totalGap: "7%",
    complianceGap: "2%",
    complianceGapFocus: "Services professionnels",
  },
  organisation: {
    departement: "Administration générale de l'Expertise et du Support en matière de Politique (AABEO)",
    directeurAabeo: "Didier Leemans",
    service: "Service d'études",
    directriceService: "Liesbet Vanclooster",
    directions: [
      {
        id: "dr1",
        nom: "DR1 (Macro-budgettaire ramingen)",
        mission: "Raming (estimation) des recettes fiscales et transferts de la loi spéciale de financement.",
      },
      {
        id: "dr2",
        nom: "DR2 (Algemeen Fiscaal Beleid en Microsimulaties)",
        mission: "Exploitation des modèles AURORA, SIRE, MISis et secrétariat du Conseil Supérieur des Finances.",
      },
      {
        id: "dr3",
        nom: "DR3 (Financiering deelgebieden)",
        mission: "Secrétariat de la Conférence Interministérielle et suivi des statistiques des comptes publics.",
      },
      {
        id: "dr4",
        nom: "DR4 (Centralisatie van Ontvangsten en Analyses)",
        mission: "Centralisation des recettes, répartition des ressources et impact des impôts indirects.",
      },
    ],
  },
};
