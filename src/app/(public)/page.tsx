import React from "react";
import { ArrowUpRight, Database, FileText, Activity } from "lucide-react";

const stats = [
  {
    title: "Nota's",
    value: "547",
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    trend: "+12%",
  },
  {
    title: "Transferts de données",
    value: "148",
    icon: <Database className="w-6 h-6 text-green-500" />,
    trend: "+5%",
  },
  {
    title: "Modèles actifs",
    value: "3",
    icon: <Activity className="w-6 h-6 text-purple-500" />,
    trend: "Stable",
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord - Production 2025</h1>
        <p className="mt-2 text-gray-600">Aperçu des indicateurs de l'année en cours.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
              <span className="flex items-center text-sm font-medium text-gray-500">
                {stat.trend}
                {stat.trend.startsWith("+") && <ArrowUpRight className="w-4 h-4 ml-1" />}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 tabular-nums">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
