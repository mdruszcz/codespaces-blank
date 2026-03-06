"use client";

import { useState } from "react";
import { mockDatabase } from "@/data/mockDatabase";
import { Search, FileText } from "lucide-react";

export default function Publications() {
  const allPubs = mockDatabase.publications;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPubs = allPubs.filter(
    (pub) =>
      pub.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub.auteur && pub.auteur.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
          Publications
        </h1>
        <p className="text-lg text-neutral-900 max-w-3xl leading-relaxed mb-8">
          Consultez les derniers rapports, working papers et analyses du Service d'études.
        </p>

        <div className="relative max-w-2xl mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-xl leading-5 bg-white placeholder-neutral-500 focus-ring sm:text-sm shadow-sm"
            placeholder="Rechercher une publication par titre, auteur ou mot-clé..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Rechercher une publication"
          />
        </div>

        <div className="space-y-6">
          {filteredPubs.length > 0 ? (
            filteredPubs.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:border-primary-500 transition-colors flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary-50 p-4 rounded-lg text-primary-700">
                    <FileText className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-neutral-100 text-neutral-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {pub.type}
                    </span>
                    {pub.date && <span className="text-neutral-500 text-sm font-semibold">{pub.date}</span>}
                  </div>
                  <h2 className="text-xl font-bold text-primary-900 mb-2">{pub.titre}</h2>
                  {pub.auteur && <p className="text-neutral-700 font-medium mb-3">Auteur : {pub.auteur}</p>}
                  <p className="text-neutral-900">{pub.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-neutral-200 border-dashed">
              <p className="text-neutral-500 text-lg">Aucune publication trouvée pour "{searchTerm}".</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
