import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Service d'études — SPF Finances", template: "%s — SPF Finances" },
  description: "Soutenir le gouvernement dans la définition et l'évaluation des politiques socio-économiques, budgétaires et fiscales.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="site-header">
          <div className="top-bar">
            <div className="top-bar-inner">
              <a href="#">FR</a><a href="#">NL</a><a href="#">DE</a><a href="#">EN</a>
            </div>
          </div>
          <nav className="nav-inner">
            <a href="/" className="logo-block">
              <span className="logo-top">SPF Finances</span>
              <span className="logo-bottom">Service d&apos;études</span>
            </a>
            <ul className="nav-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/organisation">Organisation</a></li>
              <li><a href="/recherche/modeles">Modèles</a></li>
              <li><a href="/publications">Publications</a></li>
              <li><a href="/statistiques/vat-gap">Statistiques TVA</a></li>
            </ul>
          </nav>
        </header>
        <div className="page-content">{children}</div>
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <small>SPF Finances</small>
              Service d&apos;études
            </div>
            <ul className="footer-links">
              <li><a href="/mentions-legales">Mentions légales</a></li>
              <li><a href="/accessibilite">Accessibilité (EAA 2025)</a></li>
            </ul>
            <p className="footer-copy">© 2026 SPF Finances — Service d&apos;études. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
