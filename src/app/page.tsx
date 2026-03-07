import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service d'études — SPF Finances",
  description:
    "Soutenir le gouvernement dans la définition et l'évaluation des politiques socio-économiques, budgétaires et fiscales.",
};

const stats = [
  { value: "547", label: "Notes stratégiques" },
  { value: "2 561", label: "Réponses aux questions" },
  { value: "1 885", label: "Simulations" },
  { value: "148", label: "Transferts de données" },
  { value: "78", label: "Analyses" },
  { value: "56", label: "Questionnaires" },
  { value: "28", label: "Publications" },
  { value: "201", label: "Réunions" },
  { value: "6", label: "Présentations" },
];

const news = [
  {
    tag: "Rapport",
    date: "Juillet 2025",
    title: "Rapport du Comité d'Étude sur le Vieillissement (SCVV)",
    description:
      "Prévoit une hausse des dépenses sociales de 25,8 % du PIB en 2023 à 30,0 % du PIB en 2070 (coût budgétaire de 4,1 points de pourcentage).",
    href: "/publications",
    cta: "Lire le rapport",
  },
  {
    tag: "Statistiques",
    date: "Récent",
    title: "Projet VAT-gap",
    description:
      "L'écart total de TVA est passé de 8 % à 7 % du PIB en 2021, avec un « compliance gap » moyen de 2 % concentré dans les services professionnels.",
    href: "/statistiques/vat-gap",
    cta: "Voir les statistiques",
  },
];

export default function Home() {
  return (
    <>
      {/* ── GLOBAL STYLES ──────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy:   #003878;
          --blue:   #0057a8;
          --sky:    #0094d4;
          --gold:   #f0a500;
          --smoke:  #f4f6f9;
          --white:  #ffffff;
          --ink:    #1a1a2e;
          --muted:  #5c6575;
          --border: #d6dce8;
          --serif:  'Source Serif 4', Georgia, serif;
          --sans:   'Source Sans 3', system-ui, sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: var(--sans);
          color: var(--ink);
          background: var(--white);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }

        /* ── NAV ─────────────────────────────────────────────────────── */
        .site-header {
          position: sticky; top: 0; z-index: 100;
          background: var(--navy);
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
        }

        .top-bar {
          background: var(--ink);
          padding: 6px 0;
          font-size: 11.5px;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
          text-align: right;
        }
        .top-bar a { color: rgba(255,255,255,0.7); margin-left: 20px; transition: color .2s; }
        .top-bar a:hover { color: var(--gold); }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          gap: 0;
          height: 68px;
        }

        .logo-block {
          display: flex; flex-direction: column; gap: 1px;
          margin-right: 48px; flex-shrink: 0;
          border-right: 1px solid rgba(255,255,255,0.15);
          padding-right: 36px;
        }
        .logo-top {
          font-family: var(--sans);
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gold);
        }
        .logo-bottom {
          font-family: var(--serif);
          font-size: 17px; font-weight: 600;
          color: var(--white);
          letter-spacing: 0.01em;
        }

        .nav-links {
          display: flex; gap: 2px; list-style: none; flex: 1;
        }
        .nav-links a {
          display: block;
          padding: 8px 16px;
          font-size: 13.5px; font-weight: 500;
          color: rgba(255,255,255,0.82);
          letter-spacing: 0.01em;
          border-radius: 3px;
          transition: background .18s, color .18s;
          white-space: nowrap;
        }
        .nav-links a:hover { background: rgba(255,255,255,0.1); color: var(--white); }
        .nav-links a.active { color: var(--white); background: rgba(255,255,255,0.12); }

        /* ── HERO ─────────────────────────────────────────────────────── */
        .hero {
          background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 60%, var(--sky) 100%);
          color: var(--white);
          padding: 80px 32px 88px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 85% 50%, rgba(0,148,212,0.25) 0%, transparent 70%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-content {
          max-width: 1200px; margin: 0 auto;
          position: relative;
          display: grid; grid-template-columns: 1fr 340px; gap: 64px; align-items: center;
        }
        .hero-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 18px;
          display: flex; align-items: center; gap: 10px;
        }
        .hero-eyebrow::before {
          content: ''; display: block;
          width: 28px; height: 2px; background: var(--gold);
        }
        .hero h1 {
          font-family: var(--serif);
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 700; line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .hero-lead {
          font-size: 17px; font-weight: 300; line-height: 1.75;
          color: rgba(255,255,255,0.88); max-width: 540px;
        }
        .hero-actions { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 26px;
          background: var(--gold); color: var(--ink);
          font-size: 13.5px; font-weight: 700; letter-spacing: 0.04em;
          border-radius: 3px; border: none; cursor: pointer;
          transition: filter .2s, transform .15s;
        }
        .btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px;
          background: transparent; color: rgba(255,255,255,0.9);
          font-size: 13.5px; font-weight: 500;
          border-radius: 3px; border: 1px solid rgba(255,255,255,0.35);
          cursor: pointer; transition: border-color .2s, color .2s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.7); color: var(--white); }

        .hero-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px; padding: 28px;
          backdrop-filter: blur(8px);
        }
        .hero-card-title {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 16px;
        }
        .hero-card-stat {
          display: flex; align-items: baseline; gap: 8px;
          margin-bottom: 12px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-card-stat:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .hero-card-num {
          font-family: var(--serif); font-size: 26px; font-weight: 700; color: var(--white);
        }
        .hero-card-label { font-size: 13px; color: rgba(255,255,255,0.7); }

        /* ── STATS BAND ───────────────────────────────────────────────── */
        .stats-band {
          background: var(--smoke);
          border-top: 3px solid var(--gold);
          border-bottom: 1px solid var(--border);
          padding: 40px 32px;
        }
        .stats-band-inner { max-width: 1200px; margin: 0 auto; }
        .stats-band-title {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 28px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        .stat-cell {
          background: var(--white);
          padding: 22px 20px;
          transition: background .18s;
        }
        .stat-cell:hover { background: #eef2f8; }
        .stat-num {
          font-family: var(--serif);
          font-size: 34px; font-weight: 700;
          color: var(--navy); line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12.5px; color: var(--muted);
          font-weight: 500; line-height: 1.3;
        }

        /* ── MAIN CONTENT ─────────────────────────────────────────────── */
        .main-content {
          max-width: 1200px; margin: 0 auto;
          padding: 64px 32px 80px;
          display: grid; grid-template-columns: 1fr 300px; gap: 64px;
        }

        /* ── NEWS SECTION ─────────────────────────────────────────────── */
        .section-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--blue);
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 24px;
        }
        .section-eyebrow::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
        }

        .news-card {
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 20px;
          transition: box-shadow .2s, transform .2s;
        }
        .news-card:hover {
          box-shadow: 0 8px 32px rgba(0,56,120,0.1);
          transform: translateY(-2px);
        }
        .news-card-header {
          background: linear-gradient(90deg, var(--navy), var(--blue));
          padding: 14px 22px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .news-tag {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.15);
          color: var(--white); padding: 3px 10px; border-radius: 20px;
        }
        .news-date {
          font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 300;
        }
        .news-card-body { padding: 24px; }
        .news-card-title {
          font-family: var(--serif);
          font-size: 19px; font-weight: 600; line-height: 1.35;
          color: var(--navy); margin-bottom: 12px;
        }
        .news-card-desc {
          font-size: 14px; color: var(--muted); line-height: 1.7;
          margin-bottom: 18px;
        }
        .news-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700;
          color: var(--blue); letter-spacing: 0.03em;
          transition: gap .2s, color .2s;
        }
        .news-cta:hover { gap: 10px; color: var(--navy); }
        .news-cta::after { content: '→'; }

        /* ── SIDEBAR ──────────────────────────────────────────────────── */
        .sidebar-card {
          border: 1px solid var(--border); border-radius: 6px;
          overflow: hidden; margin-bottom: 20px;
        }
        .sidebar-card-head {
          background: var(--navy); color: var(--white);
          padding: 13px 18px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }
        .sidebar-card-head-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
        }
        .sidebar-nav { list-style: none; }
        .sidebar-nav li {
          border-bottom: 1px solid var(--border);
        }
        .sidebar-nav li:last-child { border-bottom: none; }
        .sidebar-nav a {
          display: flex; justify-content: space-between; align-items: center;
          padding: 13px 18px;
          font-size: 13.5px; font-weight: 500; color: var(--ink);
          transition: background .15s, color .15s, padding-left .15s;
        }
        .sidebar-nav a:hover {
          background: #eef2f8; color: var(--navy); padding-left: 22px;
        }
        .sidebar-nav a span { color: var(--muted); font-size: 14px; }

        .mission-box {
          background: linear-gradient(150deg, #eef2fa 0%, #e6f0fb 100%);
          border: 1px solid #c8d8f0;
          border-left: 3px solid var(--blue);
          border-radius: 6px;
          padding: 22px 20px;
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.7;
          margin-top: 4px;
        }
        .mission-box strong { color: var(--navy); font-weight: 600; display: block; margin-bottom: 8px; }

        /* ── FOOTER ───────────────────────────────────────────────────── */
        footer {
          background: var(--ink);
          color: rgba(255,255,255,0.65);
          padding: 40px 32px 28px;
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: flex-end;
          flex-wrap: wrap; gap: 20px;
        }
        .footer-brand {
          font-family: var(--serif); font-size: 15px;
          color: rgba(255,255,255,0.85);
        }
        .footer-brand small {
          display: block; font-family: var(--sans); font-size: 11px;
          color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 4px; font-weight: 700;
        }
        .footer-links {
          display: flex; gap: 24px; list-style: none; flex-wrap: wrap;
        }
        .footer-links a {
          font-size: 12.5px; transition: color .2s;
        }
        .footer-links a:hover { color: var(--white); }
        .footer-copy {
          width: 100%;
          padding-top: 20px;
          margin-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 11.5px;
          color: rgba(255,255,255,0.35);
        }

        @media (max-width: 900px) {
          .hero-content { grid-template-columns: 1fr; }
          .hero-card { display: none; }
          .main-content { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className="site-header">
        <div className="top-bar">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
            <a href="#">FR</a>
            <a href="#">NL</a>
            <a href="#">DE</a>
            <a href="#">EN</a>
          </div>
        </div>
        <nav className="nav-inner">
          <div className="logo-block">
            <span className="logo-top">SPF Finances</span>
            <span className="logo-bottom">Service d'études</span>
          </div>
          <ul className="nav-links">
            <li><a href="/" className="active">Accueil</a></li>
            <li><a href="/organisation">Organisation</a></li>
            <li><a href="/recherche/modeles">Modèles</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/statistiques/vat-gap">Statistiques TVA</a></li>
          </ul>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-content">
          <div>
            <p className="hero-eyebrow">Service d'études — SPF Finances</p>
            <h1>Expertise économique<br />au service de la politique</h1>
            <p className="hero-lead">
              Soutenir le gouvernement dans la définition et l'évaluation des politiques
              socio-économiques, budgétaires et fiscales grâce à l'expertise, aux données
              et à la modélisation avancée.
            </p>
            <div className="hero-actions">
              <a href="/publications" className="btn-primary">Nos publications</a>
              <a href="/organisation" className="btn-ghost">En savoir plus</a>
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-card-title">Chiffres clés 2025</p>
            {[
              { n: "547", l: "Notes stratégiques" },
              { n: "2 561", l: "Réponses aux questions" },
              { n: "1 885", l: "Simulations réalisées" },
            ].map((s) => (
              <div key={s.l} className="hero-card-stat">
                <span className="hero-card-num">{s.n}</span>
                <span className="hero-card-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────────────── */}
      <section className="stats-band">
        <div className="stats-band-inner">
          <p className="stats-band-title">Statistiques globales 2025</p>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-cell">
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN ───────────────────────────────────────────────────────── */}
      <main className="main-content">
        {/* News */}
        <div>
          <p className="section-eyebrow">Actualités &amp; Projets phares</p>
          {news.map((n) => (
            <article key={n.title} className="news-card">
              <div className="news-card-header">
                <span className="news-tag">{n.tag}</span>
                <span className="news-date">{n.date}</span>
              </div>
              <div className="news-card-body">
                <h2 className="news-card-title">{n.title}</h2>
                <p className="news-card-desc">{n.description}</p>
                <a href={n.href} className="news-cta">{n.cta}</a>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside>
          <div className="sidebar-card">
            <div className="sidebar-card-head">
              <span className="sidebar-card-head-dot" />
              Navigation rapide
            </div>
            <ul className="sidebar-nav">
              {[
                { label: "Organisation", href: "/organisation" },
                { label: "Modèles de microsimulation", href: "/recherche/modeles" },
                { label: "Publications", href: "/publications" },
                { label: "Statistiques TVA", href: "/statistiques/vat-gap" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label} <span>›</span></a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mission-box">
            <strong>Notre mission</strong>
            Fournir analyses indépendantes et simulations rigoureuses pour éclairer
            les décisions de politique économique, sociale et fiscale en Belgique.
          </div>
        </aside>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <small>SPF Finances</small>
            Service d'études
          </div>
          <ul className="footer-links">
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/accessibilite">Accessibilité (EAA 2025)</a></li>
          </ul>
          <p className="footer-copy">© 2026 SPF Finances — Service d'études. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
