"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, FileText, User, Tag } from "lucide-react";

type Publication = {
  id: number;
  title: string;
  type: string;
  author: string;
  jel: string;
  date: string;
};

const mockPublications: Publication[] = [
  { id: 1, title: "L'impact de l'inflation sur les recettes", type: "Working Paper", author: "Dupont, J.", jel: "E31", date: "2024-05-12" },
  { id: 2, title: "Analyse des recettes TVA", type: "Rapport Annuel", author: "Martin, L.", jel: "H21", date: "2023-11-04" },
  { id: 3, title: "Prévisions budgétaires à court terme", type: "Working Paper", author: "Peeters, S.", jel: "E62", date: "2024-02-18" },
  { id: 4, title: "Évaluation du VAT Gap", type: "Étude Sectorielle", author: "Janssens, P.", jel: "H26", date: "2023-09-22" },
  { id: 5, title: "Taxation environnementale", type: "Working Paper", author: "Dupont, J.", jel: "Q58", date: "2024-01-10" },
  { id: 6, title: "Compétitivité des entreprises", type: "Rapport Annuel", author: "Peeters, S.", jel: "L11", date: "2023-12-01" },
];

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("All");
  const [selectedJel, setSelectedJel] = useState<string>("All");

  const types = ["All", ...Array.from(new Set(mockPublications.map(p => p.type)))];
  const authors = ["All", ...Array.from(new Set(mockPublications.map(p => p.author)))];
  const jels = ["All", ...Array.from(new Set(mockPublications.map(p => p.jel)))];

  const filteredPublications = useMemo(() => {
    return mockPublications.filter((pub) => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "All" || pub.type === selectedType;
      const matchesAuthor = selectedAuthor === "All" || pub.author === selectedAuthor;
      const matchesJel = selectedJel === "All" || pub.jel === selectedJel;
      return matchesSearch && matchesType && matchesAuthor && matchesJel;
    });
  }, [searchTerm, selectedType, selectedAuthor, selectedJel]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Publications</h1>
        <p className="mt-2 text-gray-600">Recherchez et filtrez nos documents et rapports de recherche.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-2" /> Filtres
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de document</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                >
                  {types.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Auteur</label>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                >
                  {authors.map(author => <option key={author} value={author}>{author}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Classification JEL</label>
                <select
                  value={selectedJel}
                  onChange={(e) => setSelectedJel(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                >
                  {jels.map(jel => <option key={jel} value={jel}>{jel}</option>)}
                </select>
              </div>
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("All");
                setSelectedAuthor("All");
                setSelectedJel("All");
              }}
              className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Réinitialiser
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher par titre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
            />
          </div>

          <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub) => (
                  <li key={pub.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">{pub.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center"><FileText className="w-4 h-4 mr-1" /> {pub.type}</span>
                          <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {pub.author}</span>
                          <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> JEL: {pub.jel}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 tabular-nums">
                        {new Date(pub.date).toLocaleDateString("fr-BE")}
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-12 text-center text-gray-500">
                  Aucun document ne correspond à vos critères de recherche.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
