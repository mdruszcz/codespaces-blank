'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function MegaMenu({ isOpen, onClose, triggerRef }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Fonction de gestion de focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Mettre le focus sur le premier élément lorsque le menu s'ouvre
    if (menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      role="region"
      aria-label="Menu principal"
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg z-50 p-6 md:p-8"
    >
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => {
              onClose();
              triggerRef.current?.focus();
            }}
            className="text-slate-500 hover:text-slate-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Fermer le menu"
          >
            Fermer (Échap)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section Organisation */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              Organisation
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/organisation/missions" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  Missions et valeurs
                </Link>
              </li>
              <li>
                <Link href="/organisation/equipe" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link href="/organisation/contact" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </section>

          {/* Section Statistiques */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              Statistiques
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/statistiques/vat-gap" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  VAT-gap (Écart de TVA)
                </Link>
              </li>
              <li>
                <Link href="/statistiques/open-data" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  Open Data
                </Link>
              </li>
            </ul>
          </section>

          {/* Section Publications & Recherche */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              Publications & Recherche
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/publications/rapports" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  Rapports annuels
                </Link>
              </li>
              <li>
                <Link href="/publications/etudes" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  Études thématiques
                </Link>
              </li>
              <li>
                <Link href="/publications/articles" className="block text-slate-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1">
                  Articles et notes brèves
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
