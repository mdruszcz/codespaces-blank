import { mockDatabase } from "@/data/mockDatabase";
import Link from "next/link";
import { FileText, MessageSquare, Calculator, Database, BarChart3, ClipboardList, BookOpen, Users, Presentation } from "lucide-react";

export default function Home() {
  const stats = mockDatabase.stats2025;
  const pubs = mockDatabase.publications;

  const statItems = [
    { label: "Notes stratégiques", value: stats.notesStrategiques, icon: FileText },
    { label: "Réponses aux questions", value: stats.reponsesQuestions, icon: MessageSquare },
    { label: "Simulations", value: stats.simulations, icon: Calculator },
    { label: "Transferts de données", value: stats.transfertsDonnees, icon: Database },
    { label: "Analyses", value: stats.analyses, icon: BarChart3 },
    { label: "Questionnaires", value: stats.questionnaires, icon: ClipboardList },
    { label: "Publications", value: stats.publications, icon: BookOpen },
    { label: "Réunions", value: stats.reunions, icon: Users },
    { label: "Présentations", value: stats.presentations, icon: Presentation },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <section className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center md:text-left shadow-sm border border-primary-100">
        <h1 className="text-3xl md:text-5xl text-primary-900 mb-6">Service d'études du SPF Finances</h1>
        <p className="text-lg text-neutral-900 max-w-3xl leading-relaxed">
          Soutenir le gouvernement dans la définition et l'évaluation des politiques socio-économiques, 
          budgétaires et fiscales grâce à l'expertise, aux données et à la modélisation avancée.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-primary-900 mb-8 border-b border-neutral-200 pb-2">Statistiques Globales 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900 tabular-nums">{item.value}</div>
                  <div className="text-sm text-neutral-500 font-medium">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-primary-900 mb-8 border-b border-neutral-200 pb-2">Actualités & Projets Phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/publications" className="group block h-full">
            <div className="bg-white h-full p-8 rounded-xl shadow-sm border border-neutral-200 focus-ring group-hover:border-primary-500 transition-colors flex flex-col">
              <h3 className="text-xl text-primary-700 mb-3 group-hover:text-primary-500">{pubs[0].titre}</h3>
              <p className="text-neutral-500 text-sm mb-4 font-semibold">{pubs[0].date}</p>
              <p className="text-neutral-900 flex-grow">{pubs[0].description}</p>
              <span className="text-primary-500 font-semibold mt-6 inline-flex items-center">
                Lire le rapport &rarr;
              </span>
            </div>
          </Link>
          
          <Link href="/statistiques/vat-gap" className="group block h-full">
            <div className="bg-white h-full p-8 rounded-xl shadow-sm border border-neutral-200 focus-ring group-hover:border-primary-500 transition-colors flex flex-col">
              <h3 className="text-xl text-primary-700 mb-3 group-hover:text-primary-500">Projet VAT-gap</h3>
              <p className="text-neutral-500 text-sm mb-4 font-semibold">Statistiques Récentes</p>
              <p className="text-neutral-900 flex-grow">
                L'écart total de TVA est passé de 8 % à 7 % du PIB en 2021, avec un "compliance gap" (déficit de conformité) moyen de 2 % concentré dans les services professionnels.
              </p>
              <span className="text-primary-500 font-semibold mt-6 inline-flex items-center">
                Voir les statistiques &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
