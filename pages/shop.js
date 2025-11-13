import Link from 'next/link'

export default function Shop() {
  return (
    <div className="container">
      <header style={{ display:'flex', alignItems:'center', gap:16 }}>
        <Link href="/">
          <img src="/logo.jpg" alt="logo" style={{ cursor: 'pointer' }} />
        </Link>
        <h2>Boutique — Ebooks</h2>
      </header>

      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:18, marginTop:18 }}>
        <div className="card">
          <h3>Venta 5/7 Workout</h3>
          <p>Programme complet d'entraînement. Format PDF.</p>
          <p className="price">15 $</p>
          <p>
            <a
              className="button"
              href={`/api/create-checkout-session?mode=payment&price=${process.env.NEXT_PUBLIC_PRICE_ONE_TIME_ID || 'price_xxx'}`}
            >
              Acheter maintenant
            </a>
          </p>
        </div>
      </div>

      <p style={{marginTop:20}}>⚠️ WARNING : DOWNLOAD THE EBOOK IMMEDIATELY AFTER PAYMENT, OTHERWISE IT WILL BE LOST !</p>
    </div>
  )
}
