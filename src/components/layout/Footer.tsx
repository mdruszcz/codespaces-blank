import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SPF Finances - Service d'études
        </div>
        <ul className="flex flex-wrap space-x-6 text-sm">
          <li>
            <Link href="/mentions-legales" className="hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href="/accessibilite" className="hover:text-primary-500 focus-ring px-2 py-1 rounded">
              Déclaration d'accessibilité (EAA 2025)
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
