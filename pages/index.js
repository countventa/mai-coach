import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/">
          <img src="/logo.jpg" alt="Mai Coach logo" style={{ cursor: "pointer" }} />
        </Link>
        <div>
          <h1>Mai Coach</h1>
          <p>
            Ton espace forme et motivation — ebooks d'entraînement, disponibles à l'unité.
          </p>
        </div>
      </header>

      <div className="grid">
        <main>
          <div className="card">
            <h2>Bienvenue sur Mai Coach</h2>
            <p>
              Accède au programme <strong>Venta 5/7 Workout</strong> en achat unique (15 $).
            </p>
            <div style={{ marginTop: 16 }}>
              <Link href="/shop" className="button">
                Voir la boutique
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />

          <div className="card">
            <h3>How It Works</h3>
            <ol>
              <li>Access the shop</li>
              <li>Choose your program and complete your purchase</li>
              <li>Download your ebook instantly after payment</li>
              <li>Build muscle and crush your goals!</li>
              <li>⚠️ WARNING : DOWNLOAD THE EBOOK IMMEDIATELY AFTER PAYMENT, OTHERWISE IT WILL BE LOST FOREVER</li>
            </ol>
          </div>
        </main>

        <aside>
          <div className="card">
            <h4>À la une</h4>
            <img
              src="/ebook-preview.jpg"
              alt="Aperçu de l'ebook Venta 5/7 Workout"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <p className="price">15 $ — paiement unique</p>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/shop" className="button">
                Acheter
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
