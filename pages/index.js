import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* HEADER AVEC BOUTON ADVICE */}
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
          <h1>Mai</h1>
          <p>Your fitness and motivation space, training e-books !</p>
        </div>

        <div>
          <Link href="/advice" className="button">
            Advice
          </Link>
        </div>
      </header>

      <div className="grid">
        <main>
          {/* SECTION 1 */}
          <div className="card">
            <h2>Welcome to Mai !</h2>
            <p>Access the shop now.</p>

            <div style={{ marginTop: 16 }}>
              <Link href="/shop" className="button">
                Visit the shop
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* SECTION 2 : Available Stuff */}
          <div className="card">
            <h2>Available Stuff</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 12,
              }}
            >
              {/* Ebook 1 */}
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
                <h3>Venta&apos;s 5/7 Workout</h3>
                <p className="price">14.99 $</p>

                <div style={{ marginTop: 10 }}>
                  <a
                    className="button"
                    href="/api/create-checkout-session?mode=payment&price=price_1SSfRjCJAqOVi5PlLYbjPMRV"
                  >
                    Buy
                  </a>
                </div>
              </div>

              {/* Ebook 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src="/65BC2CB7-A342-4A58-B685-D3E8BCD1E122.png"
                  alt="Venta's Cookbook"
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    marginBottom: "12px",
                  }}
                />
                <h3>Venta&apos;s Cookbook</h3>
                <p className="price">19.99 $</p>

                <div style={{ marginTop: 10 }}>
                  <a
                    className="button"
                    href="/api/create-checkout-session?mode=payment&price=price_1SyuoBCJAqOVi5PlOTzsy1eo"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* SECTION 3 : How It Works */}
          <div className="card">
            <h3>How It Works</h3>
            <ol>
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
              src="/65BC2CB7-A342-4A58-B685-D3E8BCD1E122.png"
              alt="Venta's Cookbook"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <p style={{ margin: 0, fontWeight: 600 }}>Venta&apos;s Cookbook</p>
            <p className="price" style={{ marginTop: 6 }}>19.99 $</p>

            <div style={{ display: "flex", gap: 8 }}>
              <a
                className="button"
                href="/api/create-checkout-session?mode=payment&price=price_1SyuoBCJAqOVi5PlOTzsy1eo"
              >
                Buy
              </a>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Mai</p>
      </footer>
    </div>
  );
}
