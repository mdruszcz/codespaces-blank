import { GlobalStats, MicrosimulationModel, Publication, VatGapSeriesData } from "@/types";

export const globalStatsData: GlobalStats = {
  strategicNotes: 547,
  parliamentaryQuestions: 2561,
  modelSimulations: 1885,
  publications: 28,
};

export const microsimulationModelsData: MicrosimulationModel[] = [
  {
    id: "m-1",
    name: "AURORA",
    simulationsCount: 333,
  },
  {
    id: "m-2",
    name: "SIRE",
    simulationsCount: 150,
  },
  {
    id: "m-3",
    name: "MISis",
    simulationsCount: 616,
    description: "couvrant plus de 500 000 sociétés",
  },
];

export const publicationsData: Publication[] = [
  {
    id: "p-1",
    title: "Rapport sur les conséquences financières et sociales du vieillissement",
    authorOrOrganization: "Comité d'Étude sur le Vieillissement (SCVV)",
    year: 2025,
    description: "Projetant une hausse des dépenses sociales de 25,8 % du PIB (2023) à 30,0 % (2070).",
  },
  {
    id: "p-2",
    title: "Les systèmes de caisses enregistreuses dans l'Horeca",
    authorOrOrganization: "Wim van Delft",
    year: 2025,
    description: "Analyse et impacts de l'introduction du système dans le secteur Horeca.",
    reference: "Working paper 2025/001",
  },
];

export const vatGapData: VatGapSeriesData[] = [
  {
    year: 2020,
    gapPercentageOfGDP: 8,
    description: "Écart total de TVA (estimation)",
  },
  {
    year: 2021,
    gapPercentageOfGDP: 7,
    description: "Baisse de l'écart total de TVA",
  },
];
