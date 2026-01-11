import Link from 'next/link'

export default function Shop() {
  return (
    <div className="container">
      <header style={{ display:'flex', alignItems:'center', gap:16 }}>
        <Link href="/">
          <img src="/Logo.PNG" alt="Logo" style={{ cursor: 'pointer' }} />
        </Link>
        <h2>Shop - EBooks</h2>
      </header>

      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:18, marginTop:18 }}>
        <div className="card">
          <h3>Venta 5/7 Workout</h3>
          <p>Complete training program. PDF format.</p>
          <p className="price">14.99 $</p>
          <p>
            <a
              className="button"
              href={`/api/create-checkout-session?mode=payment&price=${process.env.NEXT_PUBLIC_PRICE_ONE_TIME_ID || 'price_xxx'}`}
            >
              Buy
            </a>
          </p>
        </div>
      </div>

      <p style={{marginTop:20}}>⚠️ WARNING : DOWNLOAD THE EBOOK IMMEDIATELY AFTER PAYMENT, OTHERWISE IT WILL BE LOST !</p>
    </div>
  )
}
