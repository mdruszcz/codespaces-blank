"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const directorates = [
  {
    id: "dr1",
    title: "Direction Opérationnelle 1 (DR1)",
    roles: [
      "Études macroéconomiques et prévisions",
      "Analyse de l'impact des politiques publiques",
      "Modélisation budgétaire",
    ],
  },
  {
    id: "dr2",
    title: "Direction Opérationnelle 2 (DR2)",
    roles: [
      "Statistiques structurelles et sectorielles",
      "Suivi des indicateurs économiques clés",
      "Rapports annuels de compétitivité",
    ],
  },
  {
    id: "dr3",
    title: "Direction Opérationnelle 3 (DR3)",
    roles: [
      "Gestion des transferts de données",
      "Développement de plateformes de visualisation",
      "Gouvernance des données et conformité",
    ],
  },
  {
    id: "dr4",
    title: "Direction Opérationnelle 4 (DR4)",
    roles: [
      "Recherche appliquée et innovation",
      "Coordination des projets internationaux",
      "Support méthodologique aux autres directions",
    ],
  },
];

export default function OrganisationPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Organisation</h1>
        <p className="text-lg text-gray-600">
          Présentation de l'Administration (AABEO)
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Direction Générale</h2>
            <div className="flex items-center space-x-4 mt-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                DL
              </div>
              <div>
                <p className="font-medium text-gray-900 text-lg">Didier Leemans</p>
                <p className="text-gray-500">Administrateur Général (AABEO)</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Service d'Études</h2>
            <div className="flex items-center space-x-4 mt-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                LV
              </div>
              <div>
                <p className="font-medium text-gray-900 text-lg">Liesbet Vanclooster</p>
                <p className="text-gray-500">Directrice du Service d'Études</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Directions Opérationnelles</h2>
        <div className="space-y-4">
          {directorates.map((dir) => {
            const isOpen = openAccordion === dir.id;
            return (
              <div key={dir.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(dir.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus-visible:ring-primary-500"
                  aria-expanded={isOpen}
                  aria-controls={`sect-${dir.id}`}
                >
                  <span className="font-semibold text-gray-900">{dir.title}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <div
                  id={`sect-${dir.id}`}
                  role="region"
                  aria-labelledby={dir.id}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {dir.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
