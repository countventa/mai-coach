import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* HEADER AVEC BOUTON MES CONSEILS */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <img
            src="/Logo.PNG"
            alt="Mai Coach logo"
            style={{ cursor: "pointer", height: "50px" }}
          />
        </Link>

        <div style={{ flex: 1, marginLeft: 16 }}>
          <h1>Mai Coach</h1>
          <p>Your fitness and motivation space, training e-books !</p>
        </div>

        {/* BOUTON MES CONSEILS EN HAUT */}
        <div>
          <Link href="/advice" className="button">
            Advice
          </Link>
        </div>
      </header>

      <div className="grid">
        <main>
          {/* ░░░ SECTION 1 : Bienvenue ░░░ */}
          <div className="card">
            <h2>Welcome to Mai Coach !</h2>
            <p>Access the shop now.</p>

            <div style={{ marginTop: 16 }}>
              <Link href="/shop" className="button">
                Visit the shop
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* 🔥 ░░░ SECTION 2 : COMING SOON (NOUVELLE) ░░░ */}
          <div className="card">
            <h2>Coming Soon</h2>

            <div className="soon-card">
              <img
                src="/65BC2CB7-A342-4A58-B685-D3E8BCD1E122.png"
                alt="Venta's Cookbook"
                className="soon-img"
              />
              <h3 className="soon-title">Venta's Cookbook</h3>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* ░░░ SECTION 3 : Available Stuff ░░░ */}
          <div className="card">
            <h2>Available Stuff</h2>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/ebook-preview.jpg"
                alt="Venta's 5/7 Workout"
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  marginBottom: "12px",
                }}
              />
              <h3>Venta's 5/7 Workout</h3>
            </div>

            {/* BOUTON MES CONSEILS DANS LA SECTION (optionnel) */}
            <div style={{ marginTop: "16px" }}>
              <Link href="/advice" className="button">
                Advice
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* ░░░ SECTION 4 : How It Works ░░░ */}
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
            <h4>Featured</h4>
            <img
              src="/ebook-preview.jpg"
              alt="Aperçu de l'ebook Venta 5/7 Workout"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <p className="price">14.99 $</p>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/shop" className="button">
                Buy
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
