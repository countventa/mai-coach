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
          
          {/* ░░░ SECTION 1 : Bienvenue ░░░ */}
          <div className="card">
            <h2>Bienvenue sur Mai Coach</h2>
            <p>Accède à la boutique dès maintenant !</p>

            <div style={{ marginTop: 16 }}>
              <Link href="/shop" className="button">
                Voir la boutique
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />


          {/* ░░░ SECTION 2 : Available Stuff — AJOUTÉE ICI ░░░ */}
          <div className="card">
            <h2>Available Stuff</h2>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/ebook-preview.jpg"  // ← Change si ton image a un autre nom
                alt="Venta's 5/7 Workout"
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  marginBottom: "12px",
                }}
              />

              <h3>Venta's 5/7 Workout</h3>
            </div>
          </div>

          <div style={{ height: 24 }} />


          {/* ░░░ SECTION 3 : How It Works ░░░ */}
          <div className="card">
            <h3>How It Works</h3>
            <ol>
              <li>Access the shop</li>
              <li>Choose your program and complete your purchase</li>
              <li>Download your ebook instantly after payment</li>
              <li>Build muscle and crush your goals!</li>
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
