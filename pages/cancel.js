import Link from 'next/link'

export default function Cancel() {
  return (
    <div className="container">
      <header style={{ display:'flex', alignItems:'center', gap:16 }}>
        <Link href="/">
          <img 
            src="/Logo.PNG" 
            alt="Logo" 
            style={{ cursor: 'pointer', height: '50px' }} 
          />
        </Link>
        <h2>Payment Cancelled</h2>
      </header>

      <div className="card" style={{ marginTop: 18 }}>
        <p>Your payment was cancelled.</p>
        <p>You can try again anytime.</p>

        <div style={{ marginTop: 16 }}>
          <Link href="/" className="button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
