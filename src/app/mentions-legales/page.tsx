// mentions-legales/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">Accueil</a><span className="breadcrumb-sep">›</span>
          <span>Mentions légales</span>
        </div>
      </div>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">Informations légales</p>
          <h1>Mentions légales</h1>
          <p className="page-hero-lead">
            Informations relatives à l'éditeur responsable, aux droits d'auteur
            et aux conditions d'utilisation du présent site web.
          </p>
        </div>
      </section>
      <div className="content-wrap full" style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 80px" }}>
        <div className="prose">
          <h2>Éditeur responsable</h2>
          <p>
            <strong>Service Public Fédéral Finances</strong><br />
            Service d'études — Administration générale Expertise et support politiques (AABEO)<br />
            North Galaxy, Boulevard du Roi Albert II 33, bte 70<br />
            1030 Bruxelles — Belgique<br />
            <a href="https://www.fin.belgium.be" style={{ color: "#0057a8" }}>www.fin.belgium.be</a>
          </p>

          <h2>Responsable de la publication</h2>
          <p>
            <strong>Liesbet Vanclooster</strong>, Administrateur de la Studiedienst<br />
            Didier Leemans, Administrateur général de l'Administration générale Expertise et
            support politiques (AABEO)
          </p>

          <h2>Droits d'auteur</h2>
          <p>
            Sauf mention contraire, les contenus publiés sur ce site web sont la propriété
            du SPF Finances. Toute reproduction, même partielle, est autorisée sous réserve
            de mentionner clairement la source : "SPF Finances — Service d'études".
          </p>
          <p>
            Les données statistiques et publications accessibles sur ce site peuvent être
            réutilisées librement conformément aux conditions de la licence ouverte
            applicable aux données gouvernementales belges.
          </p>

          <h2>Protection des données personnelles</h2>
          <p>
            Le SPF Finances traite vos données à caractère personnel conformément au
            Règlement général sur la protection des données (RGPD) et à la législation
            belge applicable. Pour toute question relative à la protection de vos données,
            vous pouvez contacter notre délégué à la protection des données (DPO) via
            le site <a href="https://www.fin.belgium.be" style={{ color: "#0057a8" }}>www.fin.belgium.be</a>.
          </p>

          <h2>Avertissement</h2>
          <p>
            Le SPF Finances s'efforce de fournir des informations précises et actualisées
            sur ce site. Néanmoins, il ne peut être tenu responsable des erreurs ou
            omissions dans les contenus publiés, ni des dommages résultant de l'utilisation
            de ces informations. Les liens vers des sites externes n'engagent pas la
            responsabilité du SPF Finances.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies fonctionnels nécessaires à son bon fonctionnement.
            Aucun cookie de suivi ou de profilage n'est utilisé sans votre consentement
            préalable. Pour en savoir plus, consultez notre politique en matière de cookies.
          </p>
        </div>
      </div>
    </>
  );
}
