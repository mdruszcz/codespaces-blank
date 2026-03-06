import { mockDatabase } from "@/data/mockDatabase";
import { Users, UserCircle2 } from "lucide-react";

export default function Organisation() {
  const org = mockDatabase.organisation;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
        <h1 className="text-3xl font-bold text-primary-900 mb-6">Organisation</h1>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-white p-3 rounded-full text-primary-700 shadow-sm">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary-900">{org.departement}</h2>
              <p className="text-neutral-500 font-medium mt-1">Directeur : {org.directeurAabeo}</p>
            </div>
          </div>
          
          <div className="ml-6 pl-6 border-l-2 border-primary-200">
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full text-primary-500 shadow-sm">
                <UserCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-900">{org.service}</h3>
                <p className="text-neutral-500 font-medium mt-1">Directrice : {org.directriceService}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary-900 mb-8 border-b border-neutral-200 pb-2">Nos Directions (DR)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {org.directions.map((dr) => (
            <div key={dr.id} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:border-primary-500 transition-colors">
              <h3 className="text-lg font-bold text-primary-700 mb-3">{dr.nom}</h3>
              <p className="text-neutral-900">{dr.mission}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
