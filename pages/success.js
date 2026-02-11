import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Success() {
  const router = useRouter()
  const [price, setPrice] = useState(null)

  useEffect(() => {
    if (router.isReady) {
      setPrice(router.query.price)
    }
  }, [router.isReady, router.query.price])

  const ebook1Price = "price_1SSfRjCJAqOVi5PlLYbjPMRV"
  const ebook2Price = "price_1SyuoBCJAqOVi5PlOTzsy1eo"

  let downloadLink = null
  let title = "Paiement réussi"

  if (price === ebook1Price) {
    downloadLink = "/Venta 5_7 Workout (FINAL).pdf"
    title = "Venta 5/7 Workout"
  }

  if (price === ebook2Price) {
    downloadLink = "/ebooks/ventas-cookbook.pdf"
    title = "Venta's Cookbook"
  }

  return (
    <div className="container">
      <h2>Paiement réussi ✅</h2>
      <p>Merci pour ton achat.</p>

      {!price && <p>Chargement...</p>}

      {price && !downloadLink && (
        <p>Impossible d’identifier l’ebook acheté. Contacte le support.</p>
      )}

      {downloadLink && (
        <>
          <p>Ton ebook <strong>{title}</strong> est prêt :</p>
          <p>
            <a className="button" href={downloadLink} target="_blank" rel="noreferrer">
              Télécharger le PDF
            </a>
          </p>
        </>
      )}
    </div>
  )
}
