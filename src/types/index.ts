export interface Publication {
  id: string;
  title: string;
  authorOrOrganization: string;
  year: number;
  description: string;
  reference?: string;
}

export interface MicrosimulationModel {
  id: string;
  name: string;
  simulationsCount: number;
  description?: string;
}

export interface VatGapSeriesData {
  year: number;
  gapPercentageOfGDP: number;
  description?: string;
}

export interface GlobalStats {
  strategicNotes: number;
  parliamentaryQuestions: number;
  modelSimulations: number;
  publications: number;
}
