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

        {/* Ebook 1 */}
        <div className="card">
          <h3>Venta 5/7 Workout</h3>
          <p>Complete training program. PDF format.</p>
          <p className="price">14.99 $</p>
          <p>
            <a
              className="button"
              href={`/api/create-checkout-session?mode=payment&price=price_1SSfRjCJAqOVi5PlLYbjPMRV`}
            >
              Buy
            </a>
          </p>
        </div>

        {/* Ebook 2 */}
        <div className="card">
          <h3>Venta's Cookbook</h3>
          <p>Exclusive cookbook. PDF format.</p>
          <p className="price">19.99 $</p>
          <p>
            <a
              className="button"
              href={`/api/create-checkout-session?mode=payment&price=price_1SyuoBCJAqOVi5PlOTzsy1eo`}
            >
              Buy
            </a>
          </p>
        </div>

      </div>

      <p style={{marginTop:20}}>
        ⚠️ WARNING : DOWNLOAD THE EBOOK IMMEDIATELY AFTER PAYMENT, OTHERWISE IT WILL BE LOST !
      </p>
    </div>
  )
}
