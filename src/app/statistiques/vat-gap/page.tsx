import type { Metadata } from "next";

export const metadata: Metadata = { title: "Statistiques TVA — VAT-gap" };

// VAT gap data 2011-2021 (% of GDP, approximate from report chart)
const vatData = [
  { year: "2011", total: 8.2, compliance: 2.1, policy: 6.1 },
  { year: "2012", total: 8.0, compliance: 2.0, policy: 6.0 },
  { year: "2013", total: 8.1, compliance: 2.1, policy: 6.0 },
  { year: "2014", total: 7.9, compliance: 2.0, policy: 5.9 },
  { year: "2015", total: 7.8, compliance: 1.9, policy: 5.9 },
  { year: "2016", total: 7.7, compliance: 2.0, policy: 5.7 },
  { year: "2017", total: 7.6, compliance: 2.0, policy: 5.6 },
  { year: "2018", total: 7.5, compliance: 2.0, policy: 5.5 },
  { year: "2019", total: 7.4, compliance: 1.9, policy: 5.5 },
  { year: "2020", total: 7.8, compliance: 2.1, policy: 5.7 },
  { year: "2021", total: 7.0, compliance: 1.9, policy: 5.1 },
];

const maxVal = 10;

export default function VatGapPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">Accueil</a><span className="breadcrumb-sep">›</span>
          <span>Statistiques</span><span className="breadcrumb-sep">›</span>
          <span>TVA-gap</span>
        </div>
      </div>

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">Statistiques</p>
          <h1>Projet VAT-gap</h1>
          <p className="page-hero-lead">
            L'analyse de l'écart de taxe sur la valeur ajoutée (VAT gap) suit le Programme
            d'analyse des lacunes de l'administration fiscale (RA-GAP) et utilise une approche
            descendante basée sur des données statistiques sur la valeur ajoutée sectorielle.
          </p>
        </div>
      </section>

      <div className="content-wrap">
        <main>
          <p className="section-label">Résultats principaux 2011–2021</p>

          {/* Key metrics */}
          <div className="stat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginBottom: 36 }}>
            <div className="stat-cell">
              <div className="stat-num">7%</div>
              <div className="stat-label">TVA gap total du PIB en 2021</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">2%</div>
              <div className="stat-label">Compliance gap moyen du PIB</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">−1pp</div>
              <div className="stat-label">Réduction du gap entre 2020 et 2021</div>
            </div>
          </div>

          {/* Chart */}
          <div className="vat-chart-wrap">
            <div className="vat-chart-title">VAT gap en % du PIB — Belgique (2011–2021)</div>
            <div className="vat-bars" style={{ height: 160 }}>
              {vatData.map(d => (
                <div key={d.year} className="vat-bar-group">
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 140, width: "100%", gap: 1 }}>
                    <div
                      className="vat-bar"
                      style={{
                        height: `${(d.compliance / maxVal) * 140}px`,
                        background: "#0094d4",
                        borderRadius: "2px 2px 0 0",
                      }}
                      title={`Compliance: ${d.compliance}%`}
                    />
                    <div
                      className="vat-bar"
                      style={{
                        height: `${(d.policy / maxVal) * 140}px`,
                        background: "#003878",
                        borderRadius: 0,
                      }}
                      title={`Policy: ${d.policy}%`}
                    />
                  </div>
                  <div className="vat-bar-year">{d.year.slice(2)}</div>
                </div>
              ))}
            </div>
            <div className="vat-legend">
              <div className="vat-legend-item">
                <div className="vat-legend-dot" style={{ background: "#003878" }} />
                Policy gap
              </div>
              <div className="vat-legend-item">
                <div className="vat-legend-dot" style={{ background: "#0094d4" }} />
                Compliance gap
              </div>
            </div>
          </div>

          {/* Data table */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Année</th>
                <th>VAT gap total (% PIB)</th>
                <th>Compliance gap</th>
                <th>Policy gap</th>
              </tr>
            </thead>
            <tbody>
              {vatData.map(d => (
                <tr key={d.year}>
                  <td><strong>{d.year}</strong></td>
                  <td>{d.total.toFixed(1)} %</td>
                  <td>{d.compliance.toFixed(1)} %</td>
                  <td>{d.policy.toFixed(1)} %</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prose">
            <h2>Méthodologie</h2>
            <p>
              La méthodologie consiste à estimer les recettes TVA théoriques sur la base
              de données économiques et des politiques existantes d'une part, et à mesurer
              la TVA effectivement déclarée et perçue d'autre part. La différence entre les
              recettes théoriques et réelles constitue le VAT gap total.
            </p>
            <p>
              Celui-ci peut être subdivisé en un <strong>compliance gap</strong> (déficit
              dû au non-respect des obligations par les contribuables) et un{" "}
              <strong>policy gap</strong> (déficit causé par les décisions politiques).
            </p>

            <h3>Compliance gap</h3>
            <ul>
              <li><strong>Assessment Gap</strong> : Différence entre la TVA qui aurait dû être déclarée et la TVA effectivement déclarée.</li>
              <li><strong>Collection Gap</strong> : Différence entre la TVA déclarée et les montants effectivement perçus.</li>
            </ul>

            <h3>Policy gap</h3>
            <ul>
              <li><strong>Expenditure Gap</strong> : Perte due aux taux de TVA réduits et aux exemptions.</li>
              <li><strong>Efficiency Gap</strong> : Perte de recettes due aux réductions tarifaires plus larges.</li>
            </ul>

            <h2>Principaux résultats</h2>
            <p>
              De 2011 à 2021, les recettes TVA sont restées stables autour de 7 % du PIB.
              Le compliance gap s'est élevé en moyenne à 2 % du PIB, principalement concentré
              dans le secteur des services professionnels et de gestion. Le VAT gap total a
              diminué sensiblement en 2021, passant d'environ 8 % à 7 % du PIB. Les taux de
              TVA réduits sur les denrées alimentaires constituaient la principale dépense
              fiscale, représentant 0,8–1,0 % du PIB.
            </p>

            <h2>Collaboration internationale</h2>
            <p>
              Ce projet est mené en collaboration avec le FMI dans le cadre du modèle
              VAT-gap IMF. La Studiedienst coordonne également la contribution aux données
              de la base de données PINE (Policy Instruments for the Environment) de
              l'OCDE, impliquant 31 contributeurs de huit services gouvernementaux différents.
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
                { label: "Publications", href: "/publications" },
              ].map(l => (
                <li key={l.href}><a href={l.href}>{l.label} <span>›</span></a></li>
              ))}
            </ul>
          </div>
          <div className="info-box">
            <strong>Source &amp; méthode</strong>
            Le projet VAT-gap suit le Revenue Administration Gap Analysis Program
            (RA-GAP) du FMI et utilise une approche descendante basée sur les données
            statistiques de la valeur ajoutée sectorielle de l'Institut des Comptes Nationaux.
          </div>
          <div className="info-box" style={{ marginTop: 0 }}>
            <strong>Portail Open Data</strong>
            Les données annuelles et mensuelles sont disponibles sur le portail Open Data
            du SPF Finances, lancé en janvier 2025.
          </div>
        </aside>
      </div>
    </>
  );
}
