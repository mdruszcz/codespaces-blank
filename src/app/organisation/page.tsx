import type { Metadata } from "next";

export const metadata: Metadata = { title: "Organisation" };

export default function OrganisationPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">Accueil</a><span className="breadcrumb-sep">›</span>
          <span>Organisation</span>
        </div>
      </div>

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">Structure institutionnelle</p>
          <h1>Organisation de la Studiedienst</h1>
          <p className="page-hero-lead">
            La Studiedienst soutient le gouvernement et le management dans la définition,
            le suivi, la gestion et l'évaluation des politiques socio-économiques,
            budgétaires et fiscales.
          </p>
        </div>
      </section>

      <div className="content-wrap">
        <main>
          <p className="section-label">Contexte organisationnel</p>

          <div className="prose">
            <p>
              La Studiedienst fait partie de l'Administration générale Expertise et support
              politiques (AABEO). L'Administration est chargée de l'élaboration, de la
              coordination, de la mise en œuvre et du suivi de la législation dans les
              matières relevant de la compétence du SPF Finances. L'AABEO se compose
              de quatre services opérationnels (dont la Studiedienst) et de deux services
              de support.
            </p>
            <p>
              Tandis que la Studiedienst se concentre sur la réalisation d'études portant
              sur l'impact des options politiques et l'analyse des résultats des politiques
              menées, le Service Réglementation traite et conseille sur les aspects
              législatifs. Le Service Coordination Fiscale apporte un soutien aux
              investissements internationaux et à la conclusion et gestion des accords de
              siège en matière fiscale. Le Centre de connaissance assure la gestion et la
              mise à disposition de toutes les informations et sources d'information
              pertinentes.
            </p>

            <h2>Les quatre directions</h2>

            <h3>Direction 1 — Estimations macro-budgétaires</h3>
            <ul>
              <li>Estimation des recettes fiscales dans le cadre des travaux budgétaires.</li>
              <li>Estimation et calcul des transferts aux communautés et régions dans le cadre de la Loi spéciale de financement.</li>
              <li>Élaboration et présentation de la note sur les recettes fiscales au comité de pilotage du Trésor (CODIT).</li>
              <li>Développement de modèles de prévision des recettes fiscales.</li>
            </ul>

            <h3>Direction 2 — Politique fiscale générale et microsimulations</h3>
            <ul>
              <li>Suivi des développements nationaux et internationaux en matière de fiscalité.</li>
              <li>Développement et exploitation de modèles de microsimulation fiscale.</li>
              <li>Secrétariat de la Section Fiscalité et Parafiscalité du Conseil supérieur des Finances.</li>
              <li>Participation aux groupes de travail sur la politique fiscale au niveau de l'OCDE et de l'UE.</li>
              <li>Réalisation d'études générales sur la fiscalité d'un point de vue économique.</li>
            </ul>

            <h3>Direction 3 — Financement des entités fédérées</h3>
            <ul>
              <li>Suivi et exécution du cadre réglementaire relatif au financement des entités fédérées, dont la loi spéciale de financement.</li>
              <li>Secrétariat de la Conférence interministérielle des Finances et du Budget.</li>
              <li>Secrétariat autonome de la Section indépendante "Besoins de financement des pouvoirs publics" du Conseil supérieur des Finances.</li>
              <li>Suivi des développements statistiques européens et belges relatifs aux comptes des administrations publiques.</li>
            </ul>

            <h3>Direction 4 — Centralisation des recettes et analyses</h3>
            <ul>
              <li>Gestion et analyse des données/statistiques relatives aux recettes et déclarations.</li>
              <li>Attribution des ressources des recettes aux différents niveaux de pouvoir et institutions.</li>
              <li>Estimation de l'impact budgétaire des mesures fiscales relatives aux impôts indirects.</li>
              <li>Estimations et calculs des avances et centimes additionnels communaux à l'impôt des personnes physiques versés aux communes.</li>
            </ul>

            <h2>Parties prenantes</h2>
            <p>
              La Studiedienst exerce des tâches variées pour et avec un grand nombre de
              parties prenantes. En voici une liste quasi complète, bien que non exhaustive,
              car celle-ci dépend aussi des projets qui varient d'année en année :
            </p>
            <ul>
              <li>Cellule politique du Ministre des Finances</li>
              <li>Formateur</li>
              <li>Conseil supérieur des Finances — sections Fiscalité, Besoins de financement, et Commission d'étude sur le vieillissement</li>
              <li>Régions, Communautés et Communes</li>
              <li>Comité de pilotage du Trésor (CODIT)</li>
              <li>Conférence interministérielle des Finances et du Budget</li>
              <li>Institut des Comptes Nationaux</li>
              <li>Banque Nationale de Belgique</li>
              <li>Bureau fédéral du Plan</li>
              <li>Cour des comptes</li>
              <li>OCDE</li>
              <li>Commission européenne</li>
              <li>FMI</li>
            </ul>
          </div>
        </main>

        <aside className="sidebar">
          <div className="sidebar-card">
            <div className="sidebar-card-head">
              <span className="sidebar-card-dot" />Navigation
            </div>
            <ul className="sidebar-nav">
              {[
                { label: "Accueil", href: "/" },
                { label: "Modèles de microsimulation", href: "/recherche/modeles" },
                { label: "Publications", href: "/publications" },
                { label: "Statistiques TVA", href: "/statistiques/vat-gap" },
              ].map(l => (
                <li key={l.href}><a href={l.href}>{l.label} <span>›</span></a></li>
              ))}
            </ul>
          </div>
          <div className="info-box">
            <strong>Personnel 2025</strong>
            La Studiedienst compte 33 fonctionnaires (soit 31,1 équivalents temps plein),
            répartis en 4 directions sous la direction de Liesbet Vanclooster,
            Administrateur de la Studiedienst.
          </div>
          <div className="sidebar-card">
            <div className="sidebar-card-head">
              <span className="sidebar-card-dot" />Administration générale
            </div>
            <ul className="sidebar-nav">
              {[
                { label: "AABEO", href: "#" },
                { label: "Fisconetplus", href: "#" },
                { label: "FOD Financiën", href: "#" },
              ].map(l => (
                <li key={l.label}><a href={l.href}>{l.label} <span>›</span></a></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
