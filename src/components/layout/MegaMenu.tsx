import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function MegaMenu() {
  return (
    <nav className="bg-primary-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-row space-x-8 h-16 items-center text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/organisation" className="hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Organisation
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Recherche <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-neutral-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-md overflow-hidden">
              <Link
                href="/recherche/modeles"
                className="block px-4 py-3 hover:bg-neutral-100 hover:text-primary-700 focus-ring"
              >
                Modèles de microsimulation
              </Link>
            </div>
          </li>
          <li>
            <Link href="/publications" className="hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Publications
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Statistiques <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-neutral-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-md overflow-hidden">
              <Link
                href="/statistiques/vat-gap"
                className="block px-4 py-3 hover:bg-neutral-100 hover:text-primary-700 focus-ring"
              >
                Statistiques TVA
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
