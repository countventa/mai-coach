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

      {/* ⚠️ WARNING déplacé ici */}
      <p style={{ marginTop: 16, fontWeight: 500 }}>
        ⚠️ WARNING : DOWNLOAD THE EBOOK IMMEDIATELY AFTER PAYMENT, OTHERWISE IT WILL BE LOST !
      </p>

      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:18, marginTop:18 }}>

        {/* Ebook 1 */}
        <div className="card" style={{ textAlign: 'center' }}>
          <img
            src="/ebook-preview.jpg"
            alt="Venta's 5/7 Workout"
            style={{ width: '220px', maxWidth: '100%', borderRadius: 12, marginBottom: 12 }}
          />
          <h3>Venta 5/7 Workout</h3>
          <p>Complete training program. PDF format.</p>
          <p className="price">14.99 $</p>
          <p>
            <a
              className="button"
              href="/api/create-checkout-session?mode=payment&price=price_1SSfRjCJAqOVi5PlLYbjPMRV"
            >
              Buy
            </a>
          </p>
        </div>

        {/* Ebook 2 */}
        <div className="card" style={{ textAlign: 'center' }}>
          <img
            src="/65BC2CB7-A342-4A58-B685-D3E8BCD1E122.png"
            alt="Venta's Cookbook"
            style={{ width: '220px', maxWidth: '100%', borderRadius: 12, marginBottom: 12 }}
          />
          <h3>Venta&apos;s Cookbook</h3>
          <p>Exclusive cookbook. PDF format.</p>
          <p className="price">19.99 $</p>
          <p>
            <a
              className="button"
              href="/api/create-checkout-session?mode=payment&price=price_1SyuoBCJAqOVi5PlOTzsy1eo"
            >
              Buy
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
