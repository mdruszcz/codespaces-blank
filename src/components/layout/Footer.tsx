import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 py-6 border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            <p>© {new Date().getFullYear()} SPF Finances - Service d'études</p>
          </div>
          
          <nav aria-label="Liens légaux">
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <Link 
                  href="/accessibilite" 
                  className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus-visible:ring-primary-500 rounded px-1"
                >
                  Déclaration d'accessibilité EAA
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookies" 
                  className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus-visible:ring-primary-500 rounded px-1"
                >
                  Politique des cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
