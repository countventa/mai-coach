export default function Subscribe(){
  return (
    <div className="container">
      <header style={{display:'flex',alignItems:'center',gap:16}}>
        <img src="/logo.jpg" alt="logo" />
        <h2>Souscription</h2>
      </header>
      <div className="card" style={{marginTop:18}}>
        <h3>Abonnement hebdomadaire — 4,99 $/semaine</h3>
        <p>Clique pour payer via Stripe:</p>
        <p><a className="button" href={`/api/create-checkout-session?mode=subscription&price=${process.env.NEXT_PUBLIC_PRICE_SUB_WEEKLY_ID || 'price_yyy'}`}>S'abonner</a></p>
        <p style={{marginTop:12}}>Après paiement, l'accès aux ebooks sera activé pour le client (webhook à ajouter pour automatiser).</p>
      </div>
    </div>
  )
}
