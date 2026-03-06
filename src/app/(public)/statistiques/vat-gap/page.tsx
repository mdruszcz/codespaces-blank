"use client";

import { mockDatabase } from "@/data/mockDatabase";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function StatistiquesVatGap() {
  const data = mockDatabase.vatGapData;
  const details = mockDatabase.vatGapDetails;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
          Statistiques de l'Écart de TVA (VAT Gap)
        </h1>
        <p className="text-lg text-neutral-900 max-w-3xl leading-relaxed mb-12">
          Le Service d'études analyse et publie périodiquement l'écart de TVA en Belgique.
          Voici l'évolution récente de l'écart total en pourcentage du PIB.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <h2 className="text-xl font-bold text-primary-900 mb-6">Évolution de l'écart total de TVA (2017-2021)</h2>
            <div className="h-[400px] min-h-[400px] w-full" aria-label="Graphique interactif montrant la baisse de l'écart total de TVA de 2017 à 2021">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="annee" tick={{ fill: '#333333' }} />
                  <YAxis 
                    domain={[0, 15]} 
                    tickFormatter={(value) => `${value}%`} 
                    tick={{ fill: '#333333' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'VAT Gap']}
                    labelFormatter={(label) => `Année ${label}`}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="gap" 
                    name="Écart total de TVA (% PIB)" 
                    stroke="#288CFA" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: '#003366', strokeWidth: 2, stroke: '#ffffff' }} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
              <h3 className="text-lg font-bold text-primary-900 mb-2">Chiffres Clés (2021)</h3>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="text-neutral-500 text-sm font-semibold">Écart total de TVA</div>
                  <div className="text-3xl font-bold text-primary-700 tabular-nums">{details.totalGap}</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-sm font-semibold">Compliance Gap (Déficit de conformité)</div>
                  <div className="text-3xl font-bold text-primary-500 tabular-nums">{details.complianceGap}</div>
                  <div className="text-sm text-neutral-900 mt-1">Concentré dans : <span className="font-semibold">{details.complianceGapFocus}</span></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <h3 className="text-lg font-bold text-primary-900 mb-2">Comprendre l'écart</h3>
              <p className="text-sm text-neutral-900 mb-3">L'écart total de TVA se compose de deux éléments :</p>
              <ul className="text-sm space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Compliance Gap (Déficit de conformité) :</strong> Différence due à la fraude, l'évasion fiscale, l'insolvabilité ou les erreurs administratives. (Actuellement à {details.complianceGap})</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Policy Gap (Écart de politique) :</strong> Différence causée par l'application de taux réduits ou d'exemptions légales par rapport au taux standard.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
