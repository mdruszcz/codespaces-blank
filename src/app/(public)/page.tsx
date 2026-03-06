import React from "react";
import Link from "next/link";
import {
  FileText,
  Database,
  Activity,
  MessageSquare,
  BookOpen,
  ArrowRight,
  TrendingUp,
  PieChart,
} from "lucide-react";

const stats = [
  {
    title: "Notes stratégiques",
    value: "547",
    icon: <FileText className="w-6 h-6 text-primary-600" aria-hidden="true" />,
  },
  {
    title: "Réponses aux questions",
    value: "2561",
    icon: <MessageSquare className="w-6 h-6 text-primary-600" aria-hidden="true" />,
  },
  {
    title: "Simulations exécutées",
    value: "1885",
    icon: <Activity className="w-6 h-6 text-primary-600" aria-hidden="true" />,
  },
  {
    title: "Transferts de données",
    value: "148",
    icon: <Database className="w-6 h-6 text-primary-600" aria-hidden="true" />,
  },
  {
    title: "Publications officielles",
    value: "28",
    icon: <BookOpen className="w-6 h-6 text-primary-600" aria-hidden="true" />,
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 font-montserrat tracking-tight mb-6">
          Service d'études du SPF Finances
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Le Service d'études soutient le gouvernement dans la définition et l'évaluation des politiques socio-économiques, budgétaires et fiscales. Grâce à nos analyses rigoureuses et nos modèles de simulation, nous fournissons l'expertise nécessaire pour éclairer les décisions stratégiques.
        </p>
      </section>

      {/* Tableau de bord des activités 2025 */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-900 font-montserrat">
            Tableau de bord des activités 2025
          </h2>
          <p className="mt-2 text-gray-600">
            Aperçu des indicateurs clés et du volume d'activité de l'institution pour l'année en cours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary-50 rounded-lg">{stat.icon}</div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-primary-900 tabular-nums">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Actualités et Dernières Publications */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-900 font-montserrat">
            Actualités et Dernières Publications
          </h2>
          <p className="mt-2 text-gray-600">
            Découvrez nos travaux de recherche récents et analyses d'impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: SCVV Report */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-all focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2">
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary-700">
                <TrendingUp className="w-5 h-5" aria-hidden="true" />
                <span>Rapport Juillet 2025</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                Comité d'Étude sur le Vieillissement (SCVV)
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Projection d'une hausse des dépenses sociales de <strong>25,8 %</strong> du PIB en 2023 à <strong>30,0 %</strong> en 2070. Ce rapport détaille l'impact budgétaire du vieillissement de la population sur les finances publiques.
              </p>
              <Link 
                href="/publications"
                className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md px-1 py-0.5 -ml-1"
              >
                Lire le rapport complet
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>

          {/* Card 2: VAT-gap */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-all focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2">
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-primary-700">
                <PieChart className="w-5 h-5" aria-hidden="true" />
                <span>Résultats Projet 2025</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                Évaluation de l'écart de TVA (VAT-gap)
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Baisse significative de l'écart total de TVA, passant de <strong>8 %</strong> à <strong>7 %</strong> du PIB. Cette amélioration reflète l'efficacité accrue des mesures de perception et de conformité fiscale.
              </p>
              <Link 
                href="/statistiques/vat-gap"
                className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md px-1 py-0.5 -ml-1"
              >
                Lire le rapport complet
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
