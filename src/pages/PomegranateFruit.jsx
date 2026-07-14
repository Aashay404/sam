import React from 'react'

const PomegranateFruit = () => {
  return (
    <>
      <style>{`
        .fruit-page-body {
          --cream: #FAF7F2;
          --peel: #C94B1E;
          --peel-light: #FAECE7;
          --peel-mid: #D85A30;
          --peel-dark: #993C1D;
          --seed: #7B1C1C;
          --text: #1A1410;
          --text-mid: #5C4A3A;
          --text-muted: #9A8878;
          --border: rgba(90,50,30,0.12);
          --border-med: rgba(90,50,30,0.22);
          --white: #FFFFFF;
          --radius: 12px;
          --radius-sm: 8px;
          background: linear-gradient(135deg, #7e1a12 0%, #000 100%);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
        }

        /* ── HERO ── */
        .hero-fruit {
          display: flex;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-left-fruit {
          width: 45%;
          background: linear-gradient(135deg, #7e1a12 0%, #000 100%);
          display: flex; flex-direction: column; justify-content: center;
          padding: 8rem 4rem 5rem;
          position: relative; z-index: 10;
          animation: fadeUpFruit 0.7s ease both;
        }

        .hero-right-fruit {
          width: 55%;
          position: relative;
          overflow: hidden;
          animation: fadeInFruit 0.9s ease both;
        }
        .hero-right-fruit img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          transition: transform 8s ease;
        }
        .hero-right-fruit:hover img { transform: scale(1.04); }
        
        .hero-right-overlay-fruit {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #000 0%, rgba(0,0,0,0.18) 40%, transparent 100%);
          z-index: 2;
        }

        .hero-eyebrow-fruit {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #9ef295;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 99px;
          padding: 6px 16px;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .hero-title-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-title-fruit em {
          font-style: normal;
          color: #9ef295;
        }

        .hero-desc-fruit {
          font-size: 15px; line-height: 1.8;
          color: rgba(255,255,255,0.65);
          max-width: 380px;
          margin-bottom: 2rem;
        }

        .hero-specs-strip-fruit {
          display: flex; gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-spec-item-fruit { display: flex; flex-direction: column; gap: 3px; }
        .hero-spec-val-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 24px; font-weight: 700;
          color: #9ef295;
        }
        .hero-spec-lbl-fruit {
          font-size: 10px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
        }

        .btn-primary-fruit {
          background: #0d631b;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 99px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          display: inline-block;
        }
        .btn-primary-fruit:hover { background: #fff; color: #0d631b; transform: translateY(-1px); }
        
        .btn-ghost-fruit {
          color: rgba(255,255,255,0.6);
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 1px;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }
        .btn-ghost-fruit:hover { color: #9ef295; }

        /* ── ATTRIBUTES ── */
        .section-fruit {
          padding: 5rem 5rem;
          background: #ffffff;
          animation: fadeUpFruit 0.7s ease both;
        }
        .section-header-fruit {
          display: flex; align-items: baseline; gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .section-title-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 30px; font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .section-rule-fruit {
          flex: 1; height: 1px;
          background: rgba(90, 50, 30, 0.15);
        }

        .badges-grid-fruit {
          display: flex; flex-wrap: wrap; gap: 10px;
          margin-bottom: 3rem;
        }
        .badge-fruit {
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--peel-dark);
          background: var(--peel-light);
          border: 1px solid rgba(201,75,30,0.2);
          padding: 6px 16px;
          border-radius: 99px;
        }

        /* ── SPECS GRID ── */
        .specs-grid-fruit {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border-med);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .spec-cell-fruit {
          padding: 1.5rem 1.5rem 1.8rem;
          background: var(--white);
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .spec-cell-fruit:last-child { border-right: none; }
        .spec-cell-fruit:hover { background: #FFF8F5; }
        
        .spec-label-fruit {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted);
          margin-bottom: 10px;
        }
        .spec-value-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 20px; font-weight: 600;
          color: var(--text);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .spec-note-fruit {
          font-size: 11px; color: var(--text-muted);
        }

        /* ── STORY STRIP ── */
        .story-strip-fruit {
          background: var(--peel-dark);
          padding: 4rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-strip-fruit h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 600; color: #fff;
          line-height: 1.2; letter-spacing: -0.02em;
        }
        .story-strip-fruit h2 em { font-style: normal; color: #FAC775; }
        .story-strip-fruit p {
          font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.72);
          margin-top: 1rem;
        }
        
        .story-facts-fruit {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .story-fact-fruit {
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .fact-num-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 32px; font-weight: 700;
          color: #FAC775;
          line-height: 1;
          min-width: 64px;
        }
        .fact-desc-fruit {
          font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.75);
          padding-top: 4px;
        }

        /* ── FEATURES ── */
        .features-grid-fruit {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card-fruit {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.75rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .feature-card-fruit:hover {
          border-color: rgba(201,75,30,0.3);
          transform: translateY(-3px);
        }
        .feature-icon-fruit {
          width: 44px; height: 44px;
          background: var(--peel-light);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .feature-card-fruit h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
        }
        .feature-card-fruit p {
          font-size: 13px; line-height: 1.7;
          color: var(--text-mid);
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUpFruit {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInFruit {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hero-fruit { flex-direction: column; min-height: auto; }
          .hero-left-fruit { width: 100%; padding: 6rem 2rem 3rem; }
          .hero-right-fruit { width: 100%; min-height: 340px; }
          .section-fruit { padding: 3rem 2rem; }
          .specs-grid-fruit { grid-template-columns: repeat(2, 1fr); }
          .spec-cell-fruit:nth-child(2) { border-right: none; }
          .spec-cell-fruit:nth-child(3) { border-right: 1px solid var(--border); border-top: 1px solid var(--border); }
          .spec-cell-fruit:nth-child(4) { border-right: none; border-top: 1px solid var(--border); }
          .story-strip-fruit { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 2rem; }
          .features-grid-fruit { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fruit-page-body">
        {/* HERO */}
        <section className="hero-fruit">
          {/* LEFT 45% */}
          <div className="hero-left-fruit">
            <div className="hero-eyebrow-fruit">Pioneer in Whole Fruit</div>
            <h1 className="hero-title-fruit">Pomegranate<br /><em>Fruit</em></h1>
            <p className="hero-desc-fruit">
              Sourced exclusively from captive and contract farms, our whole Bhagwa pomegranates are globally MRL compliant and fully traceable from seedling to shipping carton.
            </p>

            <div className="hero-specs-strip-fruit">
              <div className="hero-spec-item-fruit">
                <span className="hero-spec-val-fruit">90d</span>
                <span className="hero-spec-lbl-fruit">Shelf Life</span>
              </div>
              <div className="hero-spec-item-fruit">
                <span className="hero-spec-val-fruit">365</span>
                <span className="hero-spec-lbl-fruit">Days Supply</span>
              </div>
              <div className="hero-spec-item-fruit">
                <span className="hero-spec-val-fruit">0</span>
                <span className="hero-spec-lbl-fruit">Residues</span>
              </div>
            </div>

            <div className="hero-actions-fruit">
              <a href="#contact" className="btn-primary-fruit mr-4">Request Spec</a>
              <a href="#attributes" className="btn-ghost-fruit">View Specs</a>
            </div>
          </div>

          {/* RIGHT 55% */}
          <div className="hero-right-fruit">
            <img
              src="/pomegranate_3d.png"
              alt="Whole export-grade Bhagwa pomegranate fruit"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Pomegranate+Fruit' }}
            />
            <div className="hero-right-overlay-fruit"></div>
          </div>
        </section>

        {/* ATTRIBUTES */}
        <section className="section-fruit" id="attributes">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-zinc-100 pb-6 w-full text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4 uppercase tracking-tighter">
                Product <span className="text-[#0d631b]">Overview</span>
              </h2>
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#0d631b]"></div>
            </div>
            <p className="text-zinc-400 font-display font-bold uppercase tracking-widest text-[10px]">Global Quality Standard</p>
          </div>

          <div className="badges-grid-fruit">
            <span className="badge-fruit">Global MRL Compliant</span>
            <span className="badge-fruit">Full Traceability</span>
            <span className="badge-fruit">Vibrant Red Peel</span>
            <span className="badge-fruit">High Brix Sweetness</span>
            <span className="badge-fruit">Export Ready</span>
            <span className="badge-fruit">90-Day Shelf Life</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left mb-12">
            <div className="bg-[#faf9f5] p-8 rounded-[1.5rem] border border-zinc-200/60 border-l-4 border-l-[#9ef295] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Availability</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">365-Day Supply</p>
              <p className="text-[10px] text-zinc-500 font-sans">Steady Year-Round Supply</p>
            </div>
            <div className="bg-[#faf9f5] p-8 rounded-[1.5rem] border border-zinc-200/60 border-l-4 border-l-[#0d631b] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Shelf Life</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">Up to 90 Days</p>
              <p className="text-[10px] text-zinc-500 font-sans">Controlled atmosphere</p>
            </div>
            <div className="bg-[#faf9f5] p-8 rounded-[1.5rem] border border-zinc-200/60 border-l-4 border-l-[#7e1a12] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Variety</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">Bhagwa</p>
              <p className="text-[10px] text-zinc-500 font-sans">Single variety</p>
            </div>
            <div className="bg-[#faf9f5] p-8 rounded-[1.5rem] border border-zinc-200/60 border-l-4 border-l-zinc-300 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Processing</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">Graded & Sorted</p>
              <p className="text-[10px] text-zinc-500 font-sans">Automated wash & size</p>
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="text-left border-t border-zinc-100 pt-8 w-full">
            <h4 className="font-bold text-zinc-400 uppercase text-[10px] tracking-widest mb-6">Availability Calendar</h4>
            <div className="flex flex-wrap gap-3">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <span key={month} className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-[#0d631b] text-xs font-bold bg-[#0d631b]/5">{month}</span>
              ))}
            </div>
          </div>
        </section>

        {/* STORY STRIP */}
        <section className="story-strip-fruit" id="story">
          <div>
            <h2>World-class<br /><em>export grade</em><br />whole fruit sourcing.</h2>
            <p>
              Our farms adhere to strict international horticultural standards. Using automated sorting and grading, we ensure each fruit meets exact size, color, and cosmetic criteria for premium retail displays.
            </p>
          </div>
          <div className="story-facts-fruit">
            <div className="story-fact-fruit">
              <div className="fact-num-fruit">100%</div>
              <div className="fact-desc-fruit">Traceability with complete digital audit trails from farm to delivery box</div>
            </div>
            <div className="story-fact-fruit">
              <div className="fact-num-fruit">7</div>
              <div className="fact-desc-fruit">Sourcing windows across peak regions for continuous availability</div>
            </div>
            <div className="story-fact-fruit">
              <div className="fact-num-fruit">#1</div>
              <div className="fact-desc-fruit">Choice for wholesale fruit importers in EU, UK, and Asia</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section-fruit" id="features">
          <div className="section-header-fruit">
            <h2 className="section-title-fruit">Why Choose Us</h2>
            <div className="section-rule-fruit"></div>
          </div>

          <div className="features-grid-fruit">
            <div className="feature-card-fruit">
              <div className="feature-icon-fruit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#D85A30" opacity="0.25"/>
                  <path d="M7 11l3 3 5-5" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Global MRL Compliant</h3>
              <p>Rigorous residue testing ensures compliance with EU, UK, and international pesticide standards.</p>
            </div>

            <div className="feature-card-fruit">
              <div className="feature-icon-fruit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.3"/>
                  <rect x="12" y="3" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.15"/>
                  <rect x="3" y="12" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.15"/>
                  <rect x="12" y="12" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.3"/>
                </svg>
              </div>
              <h3>Cold-Chain Maintained</h3>
              <p>Continuous cold-chain transport from packhouse to shipping container protects fruit freshness and skin gloss.</p>
            </div>

            <div className="feature-card-fruit">
              <div className="feature-icon-fruit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 3l2.2 5.5H19l-4.6 3.4 1.8 5.5L11 14l-5.2 3.4 1.8-5.5L3 8.5h5.8L11 3z" fill="#D85A30" opacity="0.3" stroke="#D85A30" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Vibrant Bhagwa Breed</h3>
              <p>Selected for deep ruby red skin, high seed counts, and sweet, juicy interior arils.</p>
            </div>

            <div className="feature-card-fruit">
              <div className="feature-icon-fruit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 6h14M4 11h14M4 16h9" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Full Traceability</h3>
              <p>Every carton is barcode-linked back to the specific contract farm and harvest day for total confidence.</p>
            </div>

            <div className="feature-card-fruit">
              <div className="feature-icon-fruit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4v14M4 11h14" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="11" cy="11" r="8" stroke="#D85A30" strokeWidth="1.2" opacity="0.4"/>
                </svg>
              </div>
              <h3>Automated Grading</h3>
              <p>State-of-the-art sorting lines group fruit precisely by size, color density, and surface quality.</p>
            </div>

            <div className="feature-card-fruit">
              <div className="feature-icon-fruit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 17l4-8 4 5 3-3 5 6" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Custom Export Packing</h3>
              <p>Shipped in corrugated, moisture-resistant packaging designed for long sea transits.</p>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section id="contact" className="py-20 text-center border-t border-zinc-200" style={{ background: '#FAF7F2' }}>
          <div className="max-w-xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C94B1E] mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1410] mb-4 leading-tight">Ready to source at scale?</h2>
            <p className="text-sm md:text-base text-[#5c4a3a] mb-10">Request a sample kit or bulk pricing. Our team responds within 24 hours.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:sales@samagrigroup.com" className="btn-primary-fruit">Request a Sample</a>
              <a href="tel:+910000000000" className="btn-ghost-fruit text-[#5c4a3a] border-zinc-400 self-center">+91 00000 00000</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PomegranateFruit
