import type { Metadata } from "next";
export const metadata: Metadata = { title: "Déclaration d'accessibilité (EAA 2025)" };

export default function AccessibilitePage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">Accueil</a><span className="breadcrumb-sep">›</span>
          <span>Déclaration d'accessibilité</span>
        </div>
      </div>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">EAA 2025</p>
          <h1>Déclaration d'accessibilité</h1>
          <p className="page-hero-lead">
            Le SPF Finances s'engage à rendre son site web accessible conformément à la
            directive européenne sur l'accessibilité des sites web et des applications mobiles
            des organismes du secteur public et à l'European Accessibility Act (EAA) 2025.
          </p>
        </div>
      </section>
      <div className="content-wrap full" style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 80px" }}>
        <div className="prose">
          <h2>État de conformité</h2>
          <p>
            Ce site web est <strong>partiellement conforme</strong> aux Règles pour
            l'accessibilité des contenus Web (WCAG) 2.1, niveau AA, en raison des
            non-conformités et dérogations énumérées ci-après.
          </p>

          <h2>Contenu non accessible</h2>
          <h3>Non-conformités</h3>
          <ul>
            <li>Certaines visualisations de données (graphiques) ne disposent pas encore d'une alternative textuelle complète — nous travaillons à leur mise en conformité.</li>
            <li>Quelques documents PDF anciens ne sont pas entièrement accessibles ; des versions alternatives seront progressivement mises à disposition.</li>
            <li>Certaines pages peuvent présenter des contrastes insuffisants sur les appareils à faible luminosité.</li>
          </ul>

          <h2>Élaboration de cette déclaration d'accessibilité</h2>
          <p>
            Cette déclaration a été établie le <strong>1er janvier 2025</strong>. Elle a
            été révisée pour la dernière fois le <strong>1er mars 2026</strong>.
          </p>
          <p>
            L'évaluation de l'accessibilité a été réalisée par auto-évaluation interne par
            le Service d'études du SPF Finances.
          </p>

          <h2>Retour d'information et coordonnées de contact</h2>
          <p>
            Si vous constatez un défaut d'accessibilité qui vous empêche d'accéder à un
            contenu ou à une fonctionnalité, vous pouvez contacter le service responsable :
          </p>
          <p>
            <strong>SPF Finances — Service d'études</strong><br />
            North Galaxy, Boulevard du Roi Albert II 33, bte 70<br />
            1030 Bruxelles<br />
            Email : <a href="mailto:accessibility@fin.belgium.be" style={{ color: "#0057a8" }}>accessibility@fin.belgium.be</a>
          </p>

          <h2>Procédure d'application</h2>
          <p>
            En cas de réponse insatisfaisante à votre demande, vous pouvez introduire une
            réclamation auprès de l'Institut belge des services postaux et des
            télécommunications (IBPT) ou auprès du médiateur fédéral.
          </p>

          <h2>European Accessibility Act (EAA) 2025</h2>
          <p>
            Depuis le 28 juin 2025, le SPF Finances applique les dispositions de
            l'European Accessibility Act (EAA) pour l'ensemble de ses services numériques.
            Cette loi vise à harmoniser les exigences d'accessibilité pour les produits et
            services numériques à travers l'Union européenne, afin que les personnes
            handicapées puissent accéder à ceux-ci sur un pied d'égalité.
          </p>
        </div>
      </div>
    </>
  );
}
