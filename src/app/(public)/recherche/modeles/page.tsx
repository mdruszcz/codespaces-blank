import { mockDatabase } from "@/data/mockDatabase";
import { Calculator } from "lucide-react";

export default function ModelesMicrosimulation() {
  const modeles = mockDatabase.modeles;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
          Modèles de Microsimulation
        </h1>
        <p className="text-lg text-neutral-900 max-w-3xl leading-relaxed mb-12">
          Le Service d'études exploite plusieurs modèles de microsimulation pour analyser l'impact 
          des réformes fiscales et budgétaires. Voici nos principaux modèles et leur activité en 2025.
        </p>

        <div className="space-y-8">
          {modeles.map((modele) => (
            <div key={modele.id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:border-primary-500 transition-colors">
              <div className="bg-primary-50 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calculator className="w-6 h-6 text-primary-700" />
                  <h2 className="text-2xl font-bold text-primary-900">{modele.nom}</h2>
                </div>
                <div className="bg-primary-100 text-primary-900 font-bold px-4 py-2 rounded-full tabular-nums">
                  {modele.simulations2025} simulations (2025)
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-900 text-lg leading-relaxed">{modele.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
