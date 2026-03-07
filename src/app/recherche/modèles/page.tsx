import type { Metadata } from "next";

export const metadata: Metadata = { title: "Modèles de microsimulation" };

const models = [
  {
    id: "AURORA",
    color: "#003878",
    simulations: "333",
    description: "Le modèle AURORA fonctionne sur la base des déclarations contrôlées et validées à l'impôt des personnes physiques par les services P-beheer. Les données sont disponibles à l'analyse généralement un an après l'année de déclaration concernée (année de revenus +2). À l'aide des codes de déclaration, le modèle peut simuler l'impact mécanique des changements de politique et réaliser une estimation détaillée des effets de redistribution par type de ménage.",
    scope: "Impôt des personnes physiques",
    source: "Déclarations IPP contrôlées",
    year: "2025",
  },
  {
    id: "SIRE",
    color: "#0057a8",
    simulations: "150",
    description: "Le modèle SIRE utilise la même source de données qu'AURORA, mais applique une méthode d'échantillonnage et traite les simulations via Visual Basic, en tenant compte de la législation en vigueur. Grâce à cette approche, l'effet mécanique des ajustements aux mesures fiscales peut être simulé rapidement et efficacement. Le modèle offre également la possibilité d'évaluer ex-ante les effets de distribution sur différentes catégories de revenus.",
    scope: "Impôt des personnes physiques",
    source: "Échantillon de déclarations",
    year: "2025",
  },
  {
    id: "MISis",
    color: "#0094d4",
    simulations: "616",
    description: "MISis collecte des données de plus de 500.000 personnes morales ayant déposé une déclaration à l'impôt des sociétés, complétées par des informations issues des comptes annuels. Il modélise le fonctionnement de l'impôt des sociétés et permet d'analyser l'impact des changements de politique sur différents types d'entreprises. Il est ainsi possible de cartographier tant les conséquences financières directes que les effets redistributifs des ajustements politiques pour les petites, moyennes et grandes entreprises.",
    scope: "Impôt des sociétés",
    source: "Déclarations ISOC + comptes annuels",
    year: "2025",
  },
];

export default function ModelesPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">Accueil</a><span className="breadcrumb-sep">›</span>
          <span>Recherche</span><span className="breadcrumb-sep">›</span>
          <span>Modèles de microsimulation</span>
        </div>
      </div>

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">Recherche</p>
          <h1>Modèles de microsimulation</h1>
          <p className="page-hero-lead">
            La Studiedienst développe et exploite des modèles de microsimulation fiscale
            permettant d'estimer l'impact budgétaire et redistributif des propositions
            politiques sur divers types de ménages et d'entreprises.
          </p>
        </div>
      </section>

      <div className="content-wrap">
        <main>
          <p className="section-label">Modèles actifs en 2025</p>

          <div className="stat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginBottom: 40 }}>
            {models.map(m => (
              <div key={m.id} className="stat-cell">
                <div className="stat-num" style={{ color: m.color }}>{m.simulations}</div>
                <div className="stat-label">simulations {m.id}</div>
              </div>
            ))}
          </div>

          {models.map((m, i) => (
            <div key={m.id} className="card" style={{ marginBottom: 24 }}>
              <div className="card-header" style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}cc)` }}>
                <span className="card-tag">{m.id}</span>
                <span className="card-date">{m.simulations} simulations en {m.year}</span>
              </div>
              <div className="card-body">
                <h2 className="card-title" style={{ fontSize: 17 }}>Modèle {m.id}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: "#f4f6f9", borderRadius: 4, padding: "8px 12px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5c6575", marginBottom: 3 }}>Champ</div>
                    <div style={{ fontSize: 13.5, color: "#1a1a2e", fontWeight: 500 }}>{m.scope}</div>
                  </div>
                  <div style={{ background: "#f4f6f9", borderRadius: 4, padding: "8px 12px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5c6575", marginBottom: 3 }}>Source de données</div>
                    <div style={{ fontSize: 13.5, color: "#1a1a2e", fontWeight: 500 }}>{m.source}</div>
                  </div>
                </div>
                <p className="card-text">{m.description}</p>
              </div>
            </div>
          ))}

          <div className="prose">
            <h2>Objectifs des modèles</h2>
            <p>
              Les modèles de microsimulation constituent un outil essentiel pour la
              Studiedienst. Ils permettent non seulement d'avoir un aperçu de la situation
              actuelle, mais aussi d'effectuer des calculs détaillés. Ils peuvent réaliser
              des estimations ex-ante de l'impact des changements de politique et analyser
              comment ces changements affectent différents groupes, tels que les diverses
              compositions familiales ou les types d'entreprises.
            </p>
            <p>
              Chaque année, les différents modèles de microsimulation sont mis à jour et,
              dans la mesure du possible, affinés afin d'intégrer les dernières évolutions
              législatives et les données les plus récentes.
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
                { label: "Publications", href: "/publications" },
                { label: "Statistiques TVA", href: "/statistiques/vat-gap" },
              ].map(l => (
                <li key={l.href}><a href={l.href}>{l.label} <span>›</span></a></li>
              ))}
            </ul>
          </div>
          <div className="info-box">
            <strong>Total 2025</strong>
            En 2025, les trois modèles ont réalisé ensemble <strong style={{ color: "#003878" }}>1 885 simulations</strong> au
            service des directions et des parties prenantes de la Studiedienst.
          </div>
        </aside>
      </div>
    </>
  );
}
