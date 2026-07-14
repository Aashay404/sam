import React from 'react'

const Pmg = () => {
  return (
    <>
      <style>{`
        .pmg-body {
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
          font-family: 'Outfit', sans-serif;
        }

        /* ── HERO ── */
        .hero-pmg {
          display: flex;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-left-pmg {
          width: 45%;
          background: linear-gradient(135deg, #7e1a12 0%, #000 100%);
          display: flex; flex-direction: column; justify-content: center;
          padding: 8rem 4rem 5rem;
          position: relative; z-index: 10;
          animation: fadeUpPmg 0.7s ease both;
        }

        .hero-right-pmg {
          width: 55%;
          position: relative;
          overflow: hidden;
          animation: fadeInPmg 0.9s ease both;
        }
        .hero-right-pmg img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          transition: transform 8s ease;
        }
        .hero-right-pmg:hover img { transform: scale(1.04); }
        
        .hero-right-overlay-pmg {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #000 0%, rgba(0,0,0,0.18) 40%, transparent 100%);
          z-index: 2;
        }

        .hero-stat-pill-pmg {
          position: absolute; z-index: 3;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 99px;
          padding: 8px 18px;
          color: #fff;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.04em;
        }
        .pill-1-pmg { top: 15%; right: 8%; }
        .pill-2-pmg { bottom: 14%; right: 8%; }
        .pill-3-pmg { bottom: 8%; left: 8%; }

        .hero-eyebrow-pmg {
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

        .hero-title-pmg {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-title-pmg em {
          font-style: normal;
          color: #9ef295;
        }

        .hero-desc-pmg {
          font-size: 15px; line-height: 1.8;
          color: rgba(255,255,255,0.65);
          max-width: 380px;
          margin-bottom: 2rem;
        }

        .hero-specs-strip-pmg {
          display: flex; gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-spec-item-pmg { display: flex; flex-direction: column; gap: 3px; }
        .hero-spec-val-pmg {
          font-family: 'Outfit', sans-serif;
          font-size: 24px; font-weight: 700;
          color: #9ef295;
        }
        .hero-spec-lbl-pmg {
          font-size: 10px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
        }

        .btn-primary-pmg {
          background: #0d631b;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 99px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          display: inline-block;
        }
        .btn-primary-pmg:hover { background: #fff; color: #0d631b; transform: translateY(-1px); }
        
        .btn-ghost-pmg {
          color: rgba(255,255,255,0.6);
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 1px;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }
        .btn-ghost-pmg:hover { color: #9ef295; }

        /* ── ATTRIBUTES ── */
        .section-pmg {
          padding: 5rem 5rem;
          animation: fadeUpPmg 0.7s ease both;
        }
        .section-header-pmg {
          display: flex; align-items: baseline; gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .section-title-pmg {
          font-family: 'Outfit', sans-serif;
          font-size: 30px; font-weight: 600;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .section-rule-pmg {
          flex: 1; height: 1px;
          background: rgba(255, 255, 255, 0.25);
        }

        .badges-grid-pmg {
          display: flex; flex-wrap: wrap; gap: 10px;
          margin-bottom: 3rem;
        }
        .badge-pmg {
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--peel-dark);
          background: var(--peel-light);
          border: 1px solid rgba(201,75,30,0.2);
          padding: 6px 16px;
          border-radius: 99px;
        }

        /* ── SPECS GRID ── */
        .specs-grid-pmg {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border-med);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .spec-cell-pmg {
          padding: 1.5rem 1.5rem 1.8rem;
          background: var(--white);
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .spec-cell-pmg:last-child { border-right: none; }
        .spec-cell-pmg:hover { background: #FFF8F5; }
        
        .spec-label-pmg {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted);
          margin-bottom: 10px;
        }
        .spec-value-pmg {
          font-family: 'Outfit', sans-serif;
          font-size: 20px; font-weight: 600;
          color: var(--text);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .spec-note-pmg {
          font-size: 11px; color: var(--text-muted);
        }

        /* ── STORY STRIP ── */
        .story-strip-pmg {
          background: var(--peel-dark);
          padding: 4rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-strip-pmg h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 600; color: #fff;
          line-height: 1.2; letter-spacing: -0.02em;
        }
        .story-strip-pmg h2 em { font-style: normal; color: #FAC775; }
        .story-strip-pmg p {
          font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.72);
          margin-top: 1rem;
        }
        
        .story-facts-pmg {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .story-fact-pmg {
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .fact-num-pmg {
          font-family: 'Outfit', sans-serif;
          font-size: 32px; font-weight: 700;
          color: #FAC775;
          line-height: 1;
          min-width: 64px;
        }
        .fact-desc-pmg {
          font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.75);
          padding-top: 4px;
        }

        /* ── FEATURES ── */
        .features-grid-pmg {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card-pmg {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.75rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .feature-card-pmg:hover {
          border-color: rgba(201,75,30,0.3);
          transform: translateY(-3px);
        }
        .feature-icon-pmg {
          width: 44px; height: 44px;
          background: var(--peel-light);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .feature-card-pmg h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
        }
        .feature-card-pmg p {
          font-size: 13px; line-height: 1.7;
          color: var(--text-mid);
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUpPmg {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInPmg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hero-pmg { flex-direction: column; min-height: auto; }
          .hero-left-pmg { width: 100%; padding: 6rem 2rem 3rem; }
          .hero-right-pmg { width: 100%; min-height: 340px; }
          .section-pmg { padding: 3rem 2rem; }
          .specs-grid-pmg { grid-template-columns: repeat(2, 1fr); }
          .spec-cell-pmg:nth-child(2) { border-right: none; }
          .spec-cell-pmg:nth-child(3) { border-right: 1px solid var(--border); border-top: 1px solid var(--border); }
          .spec-cell-pmg:nth-child(4) { border-right: none; border-top: 1px solid var(--border); }
          .story-strip-pmg { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 2rem; }
          .features-grid-pmg { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pmg-body">
        {/* HERO */}
        <section className="hero-pmg">
          {/* LEFT 45% — Dark gradient + H1 + Info */}
          <div className="hero-left-pmg">
            <div className="hero-eyebrow-pmg">Pioneer in Arils</div>
            <h1 className="hero-title-pmg">Pomegranate<br /><em>Arils</em></h1>
            <p className="hero-desc-pmg">
              Sam Agri is the first and largest exporter of Pomegranate Arils from India, offering 365 days of supply through our global sourcing network.
            </p>

            <div className="hero-specs-strip-pmg">
              <div className="hero-spec-item-pmg">
                <span className="hero-spec-val-pmg">365</span>
                <span className="hero-spec-lbl-pmg">Days supply</span>
              </div>
              <div className="hero-spec-item-pmg">
                <span className="hero-spec-val-pmg">14d</span>
                <span className="hero-spec-lbl-pmg">Shelf life</span>
              </div>
              <div className="hero-spec-item-pmg">
                <span className="hero-spec-val-pmg">0</span>
                <span className="hero-spec-lbl-pmg">Additives</span>
              </div>
            </div>

            <div className="hero-actions-pmg">
              <a href="#contact" className="btn-primary-pmg mr-4">Request Spec</a>
              <a href="#attributes" className="btn-ghost-pmg">View Specs</a>
            </div>
          </div>

          {/* RIGHT 55% — Full bleed Pomegranate Aril Photo */}
          <div className="hero-right-pmg">
            <img
              src="/arils_3d.png"
              alt="Fresh pomegranate arils — deep red Bhagwa variety"
            />
            <div className="hero-right-overlay-pmg"></div>
          </div>
        </section>

        {/* ATTRIBUTES */}
        <section className="section-pmg" id="attributes">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter">
              Product <span className="text-[#9ef295]">Attributes</span>
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#9ef295]"></div>
          </div>

          <div className="badges-grid-pmg">
            <span className="badge-pmg">Dark-Red</span>
            <span className="badge-pmg">Sweet Profile</span>
            <span className="badge-pmg">Soft-Seeded</span>
            <span className="badge-pmg">No Preservatives</span>
            <span className="badge-pmg">No Additives</span>
            <span className="badge-pmg">Jan – Dec Availability</span>
          </div>

          <div className="specs-grid-pmg">
            <div className="spec-cell-pmg">
              <div className="spec-label-pmg">Availability</div>
              <div className="spec-value-pmg">365-Day<br />Supply</div>
            </div>
            <div className="spec-cell-pmg">
              <div className="spec-label-pmg">Shelf Life</div>
              <div className="spec-value-pmg">12–14 Days</div>
              <div className="spec-note-pmg">Packaging dependent</div>
            </div>
            <div className="spec-cell-pmg">
              <div className="spec-label-pmg">Variety</div>
              <div className="spec-value-pmg">Bhagwa</div>
              <div className="spec-note-pmg">Single variety</div>
            </div>
            <div className="spec-cell-pmg">
              <div className="spec-label-pmg">Processing</div>
              <div className="spec-value-pmg">Manual<br />Extraction</div>
            </div>
          </div>
        </section>

        {/* STORY STRIP */}
        <section className="story-strip-pmg" id="story">
          <div>
            <h2>World's largest<br /><em>manual-extracted</em><br />aril supplier.</h2>
            <p>
              Sourced from the finest Bhagwa pomegranate cultivars, our arils are manually extracted by skilled hands — preserving integrity, natural colour, and authentic sweetness at every stage.
            </p>
          </div>
          <div className="story-facts-pmg">
            <div className="story-fact-pmg">
              <div className="fact-num-pmg">#1</div>
              <div className="fact-desc-pmg">Ranked world's largest manual aril extraction facility by volume</div>
            </div>
            <div className="story-fact-pmg">
              <div className="fact-num-pmg">12</div>
              <div className="fact-desc-pmg">Months of uninterrupted supply — Jan through Dec, every year</div>
            </div>
            <div className="story-fact-pmg">
              <div className="fact-num-pmg">0</div>
              <div className="fact-desc-pmg">Additives, preservatives or artificial agents in every shipment</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section-pmg" id="features">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter">
              Why <span className="text-[#9ef295]">Choose Us</span>
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#9ef295]"></div>
          </div>

          <div className="features-grid-pmg">
            <div className="feature-card-pmg">
              <div className="feature-icon-pmg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#D85A30" opacity="0.25"/>
                  <path d="M7 11l3 3 5-5" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Bulk-Ready Consistency</h3>
              <p>Every batch is uniform in size, colour, and sweetness profile — ready to integrate into your production line without rework.</p>
            </div>

            <div className="feature-card-pmg">
              <div className="feature-icon-pmg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.3"/>
                  <rect x="12" y="3" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.15"/>
                  <rect x="3" y="12" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.15"/>
                  <rect x="12" y="12" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.3"/>
                </svg>
              </div>
              <h3>Year-Round Availability</h3>
              <p>Our controlled cultivation and cold-chain logistics guarantee uninterrupted supply across all 12 months, regardless of season.</p>
            </div>

            <div className="feature-card-pmg">
              <div className="feature-icon-pmg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 3l2.2 5.5H19l-4.6 3.4 1.8 5.5L11 14l-5.2 3.4 1.8-5.5L3 8.5h5.8L11 3z" fill="#D85A30" opacity="0.3" stroke="#D85A30" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Premium Bhagwa Cultivar</h3>
              <p>Sourced exclusively from Bhagwa variety pomegranates — known for deep red colour, high Brix sweetness, and soft-seeded texture.</p>
            </div>

            <div className="feature-card-pmg">
              <div className="feature-icon-pmg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 6h14M4 11h14M4 16h9" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Zero-Additive Promise</h3>
              <p>No preservatives, no artificial colour, no binding agents. What leaves our facility is exactly what nature produced.</p>
            </div>

            <div className="feature-card-pmg">
              <div className="feature-icon-pmg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4v14M4 11h14" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="11" cy="11" r="8" stroke="#D85A30" strokeWidth="1.2" opacity="0.4"/>
                </svg>
              </div>
              <h3>Scalable Volume Orders</h3>
              <p>From trial shipments to full container loads — our fulfillment infrastructure scales with your demand, on your timeline.</p>
            </div>

            <div className="feature-card-pmg">
              <div className="feature-icon-pmg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 17l4-8 4 5 3-3 5 6" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Cold-Chain Logistics</h3>
              <p>Temperature-controlled storage and export packaging maintains the 12–14 day shelf life from our facility to your door.</p>
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
              <a href="mailto:sales@samagrigroup.com" className="btn-primary-pmg">Request a Sample</a>
              <a href="tel:+910000000000" className="btn-ghost-pmg text-[#5c4a3a] border-zinc-400 self-center">+91 00000 00000</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Pmg
