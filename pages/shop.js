import Link from 'next/link'
export default function Shop(){
  return (
    <div className="container">
      <header style={{display:'flex',alignItems:'center',gap:16}}>
        <img src="/logo.jpg" alt="logo" />
        <h2>Boutique — Ebooks</h2>
      </header>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,marginTop:18}}>
        <div className="card">
          <h3>Venta 5/7 Workout</h3>
          <p>Programme complet d'entraînement. Format PDF.</p>
          <p className="price">15 $</p>
          <p><a className="button" href={`/api/create-checkout-session?mode=payment&price=${process.env.NEXT_PUBLIC_PRICE_ONE_TIME_ID || 'price_xxx'}`}>Acheter maintenant</a></p>
          <p style={{marginTop:8}}>Ou <Link href="/subscribe"><a>souscris</a></Link> pour y accéder.</p>
        </div>

        <div className="card">
          <h3>Abonnement hebdomadaire</h3>
          <p>Accès illimité aux ebooks tant que l'abonnement est actif.</p>
          <p className="price">4,99 $ / semaine</p>
          <p><a className="button" href={`/api/create-checkout-session?mode=subscription&price=${process.env.NEXT_PUBLIC_PRICE_SUB_WEEKLY_ID || 'price_yyy'}`}>S'abonner</a></p>
        </div>
      </div>

      <p style={{marginTop:20}}>*</p>
    </div>
  )
}
