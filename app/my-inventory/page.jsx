"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        // Si pas connecté, redirige vers login
        window.location.href = "/login";
        return;
      }

      // Sinon charge les achats
      const { data } = await supabase
        .from("purchases")
        .select("*")
        .eq("user_id", user.id);

      setPurchases(data);
      setLoading(false);
    }

    load();
  }, []);

  async function downloadPDF(path) {
    const { data } = await supabase.storage
      .from("pdfs")
      .createSignedUrl(path, 60);

    window.open(data.signedUrl, "_blank");
  }

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Mes PDF</h1>
      {purchases?.map(p => (
        <div key={p.id}>
          <p>{p.product_name}</p>
          <button onClick={() => downloadPDF(p.pdf_path)}>
            Télécharger
          </button>
        </div>
      ))}
    </div>
  );
}
