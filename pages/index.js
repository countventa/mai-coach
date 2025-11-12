import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header>
        <img src="/logo.jpg" alt="Mai Coach logo" />
        <div>
          <h1>Mai Coach</h1>
          <p>
            Ton espace forme et motivation — ebooks d'entraînement, à l'unité
            ou en abonnement.
          </p>
        </div>
      </header>

      <div className="grid">
        <main>
          <div className="card">
            <h2>Bienvenue sur Mai Coach</h2>
            <p>
              Accède au programme <strong>Venta 5/7 Workout</strong> en achat
              unique (15 $) ou via abonnement hebdomadaire (4,99 $/semaine).
            </p>
            <div style={{ marginTop: 16 }}>
              <Link href="/shop" className="button">
                Voir la boutique
              </Link>
              <Link
                href="/subscribe"
                className="button"
                style={{ marginLeft: 8 }}
              >
                S&apos;abonner
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />

          <div className="card">
            <h3>Comment ça marche</h3>
            <ol>
              <li>Créer un compte (optionnel).</li>
              <li>Acheter un ebook ou souscrire à l&apos;abonnement.</li>
              <li>Télécharger les ebooks depuis l&apos;espace membre.</li>
            </ol>
          </div>
        </main>

        <aside>
          <div className="card">
            <h4>À la une</h4>
            <embed
              src="/Venta_5-7_Workout.pdf"
              style={{ width: "100%", height: 200 }}
              type="application/pdf"
            />
            <p className="price">15 $ — ou inclus dans l&apos;abonnement</p>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/shop" className="button">
                Acheter
              </Link>
              <Link href="/subscribe" className="button">
                S&apos;abonner
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Mai Coach</p>
      </footer>
    </div>
  );
}
