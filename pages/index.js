"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [questDone, setQuestDone] = useState([false, false, false]);

  const colors = ["#378ADD", "#1D9E75", "#BA7517", "#D4537E", "#7F77DD"];

  function spawnParticles(x, y, big) {
    const count = big ? 20 : 8;
    for (let j = 0; j < count; j++) {
      const p = document.createElement("div");
      p.className = "particle";
      const angle = (j / count) * 2 * Math.PI;
      const dist = big ? 80 + Math.random() * 80 : 40 + Math.random() * 40;
      p.style.cssText = `left:${x}px;top:${y}px;background:${colors[j % colors.length]};--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1100);
    }
    const ring = document.createElement("div");
    ring.className = "ring-burst";
    ring.style.cssText = `left:${x - 20}px;top:${y - 20}px;width:40px;height:40px;`;
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 700);
  }

  function handleQuest(i) {
    const el = document.getElementById(`qcb-${i}`);
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const next = [...questDone];
    next[i] = !next[i];
    setQuestDone(next);
    if (next[i]) spawnParticles(cx, cy, false);
    if (next.every(Boolean)) {
      setTimeout(() => spawnParticles(window.innerWidth / 2, window.innerHeight / 2, true), 200);
      const t = document.createElement("div");
      t.className = "all-done-toast";
      t.textContent = "All quests done — keep it up!";
      document.body.appendChild(t);
      setTimeout(() => t.classList.add("show"), 50);
      setTimeout(() => {
        t.classList.remove("show");
        setTimeout(() => t.remove(), 400);
      }, 2500);
    }
  }

  return (
    <div className="container">
      <style>{`
        .quest-item { display:flex; align-items:center; gap:14px; padding:14px 0; border-bottom:0.5px solid rgba(0,0,0,0.08); cursor:pointer; user-select:none; }
        .quest-item:last-of-type { border-bottom:none; }
        .quest-cb { width:26px; height:26px; border-radius:50%; border:2px solid #ccc; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.25s cubic-bezier(0.34,1.56,0.64,1); }
        .quest-cb.checked { background:#1D9E75; border-color:#1D9E75; transform:scale(1.15); }
        .quest-ck { opacity:0; transform:scale(0); transition:all 0.2s cubic-bezier(0.34,1.56,0.64,1); color:#fff; font-size:13px; }
        .quest-cb.checked .quest-ck { opacity:1; transform:scale(1); }
        .quest-lbl { font-size:15px; transition:all 0.2s; }
        .quest-lbl.done { text-decoration:line-through; color:#aaa; }
        .progress-bg { height:6px; background:#f0f0f0; border-radius:99px; margin-top:14px; overflow:hidden; }
        .progress-fill { height:100%; border-radius:99px; background:#1D9E75; transition:width 0.5s cubic-bezier(0.34,1.56,0.64,1); }
        .particle { position:fixed; width:10px; height:10px; border-radius:50%; pointer-events:none; z-index:9999; animation:flyOut 0.9s ease-out forwards; }
        @keyframes flyOut { 0%{transform:translate(0,0) scale(1);opacity:1} 100%{transform:translate(var(--dx),var(--dy)) scale(0);opacity:0} }
        .ring-burst { position:fixed; border-radius:50%; border:3px solid #1D9E75; pointer-events:none; z-index:9998; animation:ringOut 0.6s ease-out forwards; }
        @keyframes ringOut { 0%{transform:scale(0.5);opacity:0.8} 100%{transform:scale(2.5);opacity:0} }
        .all-done-toast { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%) scale(0.7); background:#fff; border:1px solid #5DCAA5; border-radius:12px; padding:16px 28px; font-size:18px; font-weight:600; color:#1D9E75; z-index:9999; opacity:0; transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1); pointer-events:none; }
        .all-done-toast.show { opacity:1; transform:translate(-50%,-50%) scale(1); }
      `}</style>

      {/* HEADER AVEC BOUTON ADVICE */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <img
            src="/Logo.PNG"
            alt="Mai Coach logo"
            style={{ cursor: "pointer", height: "50px" }}
          />
        </Link>

        <div style={{ flex: 1, marginLeft: 16 }}>
          <h1>Mai</h1>
          <p>Your fitness and motivation space, training e-books !</p>
        </div>

        {/* Advice button + Marlon qui dépasse par le haut */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "100%",
              marginBottom: -12,
              height: 70,
              width: 110,
              overflow: "hidden",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <img
              src="/Marlon Inex.PNG"
              alt="Marlon"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: -10,
                height: 210,
                width: "auto",
              }}
            />
          </div>

          <Link
            href="/advice"
            className="button"
            style={{ position: "relative", zIndex: 2 }}
          >
            Advice
          </Link>
        </div>
      </header>

      <div className="grid">
        <main>
          {/* SECTION 1 */}
          <div className="card">
            <h2>Welcome to Mai !</h2>
            <p>Access the shop now.</p>
            <div style={{ marginTop: 16 }}>
              <Link href="/shop" className="button">
                Visit the shop
              </Link>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* SECTION 2 : Available Stuff */}
          <div className="card">
            <h2>Available Stuff</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 12,
              }}
            >
              {/* Ebook 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src="/ebook-preview.jpg"
                  alt="Venta's 5/7 Workout"
                  style={{ width: "200px", borderRadius: "10px", marginBottom: "12px" }}
                />
                <h3>Venta&apos;s 5/7 Workout</h3>
                <p className="price">14.99 $</p>
                <div style={{ marginTop: 10 }}>
                  <a
                    className="button"
                    href="/api/create-checkout-session?mode=payment&price=price_1SSfRjCJAqOVi5PlLYbjPMRV"
                  >
                    Buy
                  </a>
                </div>
              </div>

              {/* Ebook 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src="/65BC2CB7-A342-4A58-B685-D3E8BCD1E122.png"
                  alt="Venta's Cookbook"
                  style={{ width: "200px", borderRadius: "10px", marginBottom: "12px" }}
                />
                <h3>Venta&apos;s Cookbook</h3>
                <p className="price">19.99 $</p>
                <div style={{ marginTop: 10 }}>
                  <a
                    className="button"
                    href="/api/create-checkout-session?mode=payment&price=price_1SyuoBCJAqOVi5PlOTzsy1eo"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* SECTION 3 : How It Works */}
          <div className="card">
            <h3>How It Works</h3>
            <ol>
              <li>Choose your program and complete your purchase</li>
              <li>Download your ebook instantly after payment</li>
              <li>Build muscle and crush your goals!</li>
            </ol>
          </div>

          <div style={{ height: 24 }} />

          {/* SECTION 4 : Available Soon */}
          <div className="card">
            <h2>Coming Soon 🔒</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="/MRLWK.png"
                  alt="Marlon's Workout"
                  style={{
                    width: "200px",
                    borderRadius: "10px",
                    marginBottom: "12px",
                    filter: "brightness(0.45) blur(0.5px)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0,0,0,0.75)",
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  🕐 Available Soon
                </div>
              </div>
              <h3>Marlon&apos;s Workout</h3>
              <p style={{ color: "#888", fontSize: "13px", marginTop: 4 }}>
                Stay tuned — something big is coming.
              </p>
            </div>
          </div>

          <div style={{ height: 24 }} />

          {/* SECTION 5 : Daily Quests */}
          <div className="card">
            <h2>Daily Quests</h2>

            {[
              { icon: "💧", label: "Drink 2.5L of water" },
              { icon: "👟", label: "10k steps" },
              { icon: "💊", label: "Take creatine" },
            ].map((q, i) => (
              <div key={i} className="quest-item" onClick={() => handleQuest(i)}>
                <span style={{ fontSize: 18, width: 28 }}>{q.icon}</span>
                <div className={`quest-cb ${questDone[i] ? "checked" : ""}`} id={`qcb-${i}`}>
                  <span className="quest-ck">✓</span>
                </div>
                <span className={`quest-lbl ${questDone[i] ? "done" : ""}`}>{q.label}</span>
              </div>
            ))}

            <div className="progress-bg">
              <div
                className="progress-fill"
                style={{ width: `${(questDone.filter(Boolean).length / 3) * 100}%` }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                color: "#999",
                marginTop: 6,
              }}
            >
              <span>{questDone.filter(Boolean).length} / 3 completed</span>
              <span>{Math.round((questDone.filter(Boolean).length / 3) * 100)}%</span>
            </div>
          </div>
        </main>

        <aside>
          <div className="card">
            <h4>Featured</h4>
            <img
              src="/65BC2CB7-A342-4A58-B685-D3E8BCD1E122.png"
              alt="Venta's Cookbook"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }}
            />
            <p style={{ margin: 0, fontWeight: 600 }}>Venta&apos;s Cookbook</p>
            <p className="price" style={{ marginTop: 6 }}>19.99 $</p>
            <div style={{ display: "flex", gap: 8 }}>
              <a
                className="button"
                href="/api/create-checkout-session?mode=payment&price=price_1SyuoBCJAqOVi5PlOTzsy1eo"
              >
                Buy
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}