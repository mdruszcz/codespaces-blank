import type { Metadata } from "next";

export const metadata: Metadata = { title: "Publications" };

const publications = [
  {
    tag: "Working Paper",
    date: "Avril 2025",
    ref: "2025/001",
    author: "Wim van Delft",
    title: "Effect van de introductie van de geregistreerde kassasystemen",
    description: "Cette note de travail examine l'effet de l'introduction des systèmes de caisse enregistreurs (GKS) dans le secteur Horeca et les secteurs connexes. La note est divisée en deux parties : la première offre un aperçu de l'introduction du GKS et une description du secteur et de sa taille relative dans l'économie, tandis que la seconde partie présente le modèle économétrique.",
    href: "#",
  },
  {
    tag: "Rapport SCVV",
    date: "Juillet 2025",
    ref: "HRF-2025",
    author: "Studiecommissie voor de Vergrijzing",
    title: "Rapport annuel de la Commission d'étude sur le vieillissement",
    description: "Sur la base des hypothèses du scénario de référence, les dépenses sociales à charge de l'État passent de 25,8 % du PIB en 2023 à 30,0 % du PIB en 2070. Le coût budgétaire du vieillissement s'élève donc à 4,1 points de pourcentage du PIB entre 2023 et 2070.",
    href: "#",
  },
  {
    tag: "Statistiques",
    date: "2025",
    ref: "TVA-2025",
    author: "Direction 4",
    title: "Analyse de l'écart TVA en Belgique (2011–2021)",
    description: "De 2011 à 2021, les recettes TVA sont restées stables autour de 7 % du PIB. L'écart de conformité s'est élevé en moyenne à 2 % du PIB, principalement concentré dans le secteur des services professionnels et de gestion. L'écart TVA total a diminué sensiblement en 2021, passant d'environ 8 % à 7 % du PIB.",
    href: "/statistiques/vat-gap",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">Accueil</a><span className="breadcrumb-sep">›</span>
          <span>Publications</span>
        </div>
      </div>

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">Recherche &amp; Expertise</p>
          <h1>Publications</h1>
          <p className="page-hero-lead">
            La Studiedienst publie des notes de travail, des rapports et des études
            thématiques portant sur la fiscalité, les finances publiques et les politiques
            socio-économiques en Belgique.
          </p>
        </div>
      </section>

      <div className="content-wrap">
        <main>
          <p className="section-label">Publications 2025</p>

          <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
            {[
              { n: "28", l: "Publications" },
              { n: "1", l: "Working papers" },
              { n: "2", l: "Rapports HRF" },
            ].map(s => (
              <div key={s.l} style={{ flex: "1 1 120px", background: "#f4f6f9", border: "1px solid #d6dce8", borderRadius: 6, padding: "16px 20px" }}>
                <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 32, fontWeight: 700, color: "#003878", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12.5, color: "#5c6575", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {publications.map(p => (
            <article key={p.ref} className="card">
              <div className="card-header">
                <span className="card-tag">{p.tag}</span>
                <span className="card-date">{p.date}</span>
              </div>
              <div className="card-body">
                <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11.5, background: "#eef2f8", color: "#0057a8", padding: "2px 10px", borderRadius: 20, fontWeight: 600 }}>{p.ref}</span>
                  <span style={{ fontSize: 11.5, color: "#5c6575" }}>{p.author}</span>
                </div>
                <h2 className="card-title">{p.title}</h2>
                <p className="card-text">{p.description}</p>
                <a href={p.href} className="card-link">Consulter la publication</a>
              </div>
            </article>
          ))}

          <div className="prose" style={{ marginTop: 40 }}>
            <h2>Collaboration internationale</h2>
            <p>
              La Studiedienst contribue également à des publications et rapports
              internationaux, notamment dans le cadre de sa coopération avec l'OCDE
              et la Commission européenne. En 2025, des contributions ont été apportées
              aux questionnaires sur les Taux d'imposition effectifs, la réforme de la
              politique fiscale, Taxing Wages, le modèle TaxBenefits, les Dépenses
              sociales nettes, NESTI et la politique fondée sur les données probantes
              en Belgique.
            </p>
          </div>
        </main>

        <aside className="sidebar">
          <div className="sidebar-card">
            <div className="sidebar-card-head"><span className="sidebar-card-dot" />Navigation</div>
            <ul className="sidebar-nav">
              {[
                { label: "Accueil", href: "/" },
                { label: "Organisation", href: "/organisation" },
                { label: "Modèles", href: "/recherche/modeles" },
                { label: "Statistiques TVA", href: "/statistiques/vat-gap" },
              ].map(l => (
                <li key={l.href}><a href={l.href}>{l.label} <span>›</span></a></li>
              ))}
            </ul>
          </div>
          <div className="info-box">
            <strong>Accès aux publications</strong>
            Les publications de la Studiedienst sont également disponibles sur le portail
            Open Data lancé en janvier 2025, développé à l'initiative des Services du
            Président (DVV).
          </div>
        </aside>
      </div>
    </>
  );
}
