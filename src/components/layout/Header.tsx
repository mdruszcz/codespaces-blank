'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white border-b border-slate-200 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus-visible:ring-primary-500 rounded px-2 py-1"
            >
              SPF Finances
            </Link>
          </div>

          <nav aria-label="Navigation principale" className="flex items-center">
            <button
              ref={triggerRef}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              className="flex items-center space-x-2 text-slate-700 hover:text-primary-700 font-medium px-4 py-2 rounded focus:outline-none focus:ring-2 focus-visible:ring-primary-500"
            >
              <span>Menu</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <MegaMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        triggerRef={triggerRef} 
      />
    </header>
  );
}
