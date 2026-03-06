import React from "react";
import { Settings, BarChart2 } from "lucide-react";

const models = [
  {
    name: "AURORA",
    description: "Modèle de simulation pour les prévisions de recettes de TVA.",
    parameters: ["Taux de TVA par secteur", "Consommation des ménages", "Investissements"],
    annualVolume: "45 exécutions/an",
    color: "bg-blue-500",
  },
  {
    name: "SIRE",
    description: "Système Intégré de Recherche Économique pour l'impôt des sociétés.",
    parameters: ["Bénéfices des entreprises", "Déductions fiscales", "Taux d'imposition"],
    annualVolume: "120 exécutions/an",
    color: "bg-green-500",
  },
  {
    name: "MISis",
    description: "Modèle d'Impôt sur le revenu des personnes physiques.",
    parameters: ["Revenus salariaux", "Quotité exemptée", "Frais professionnels"],
    annualVolume: "85 exécutions/an",
    color: "bg-purple-500",
  },
];

export default function ModelsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Modèles Économétriques</h1>
        <p className="mt-2 text-gray-600">
          Aperçu des modèles utilisés par le Service d'Études pour les prévisions et analyses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className={`h-2 ${model.color}`}></div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h2>
              <p className="text-gray-600 mb-6 flex-1">{model.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center mb-2">
                    <Settings className="w-4 h-4 mr-2 text-gray-500" />
                    Paramètres principaux
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                    {model.parameters.map((param, i) => (
                      <li key={i}>{param}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center mb-1">
                    <BarChart2 className="w-4 h-4 mr-2 text-gray-500" />
                    Volume annuel
                  </h3>
                  <p className="text-lg font-medium text-gray-900 pl-6 tabular-nums">
                    {model.annualVolume}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
