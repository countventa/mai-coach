import Link from 'next/link';

export default function MesConseils() {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      
      {/* Logo cliquable vers l'accueil */}
      <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <Link href="/">
          <img 
            src="/1BDAB43E-0386-44E2-AE67-CE391159B804.png" 
            alt="logo" 
            style={{ cursor: 'pointer', height: 60 }} 
          />
        </Link>
        <h1>Mes conseils</h1>
      </header>

      <p>
        These tips are <strong>personal advice</strong>, meaning they may vary depending on the individual. I’m sharing them to help you out! 😉
      </p>

      <h2>I / My Mass Gain Plan</h2>
      <ul>
        <li>🍽️ 3000 kcal/day — 293g carbs, 150g protein, 129g fat (Calories distribution: Breakfast 15%, Lunch 30%, Dinner 35%, Snacks 20%)</li>
        <li>💧 2.5L (minimum) of water per day</li>
        <li>🚶‍♂️ 10,000 steps per day</li>
      </ul>

      <h2>II / Supplements (optional but useful)</h2>
      <ul>
        <li>⚡ Creatine: 7g/day → post-workout</li>
        <li>🥤 Whey Gainer: 100g + water → post-workout</li>
        <li>🌿 Ashwagandha (if stressed, anxious, or having sleep issues): 500mg before bed</li>
      </ul>

      <h2>III / Rest</h2>
      <ul>
        <li>🛌 Rest is extremely important for building muscle — no rest = no muscle growth.</li>
        <li>I recommend getting at least 8 hours of sleep per night (minimum).</li>
        <li>⏱️ During your workout, take at least 2 min 30 sec of rest between sets.</li>
      </ul>
    </div>
  );
}

