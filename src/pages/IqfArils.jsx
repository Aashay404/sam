import React from 'react'

const IqfArils = () => {
  return (
    <>
      <style>{`
        .iqf-page-body {
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
        .hero-iqf {
          display: flex;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-left-iqf {
          width: 45%;
          background: linear-gradient(135deg, #7e1a12 0%, #000 100%);
          display: flex; flex-direction: column; justify-content: center;
          padding: 8rem 4rem 5rem;
          position: relative; z-index: 10;
          animation: fadeUpIqf 0.7s ease both;
        }

        .hero-right-iqf {
          width: 55%;
          position: relative;
          overflow: hidden;
          animation: fadeInIqf 0.9s ease both;
        }
        .hero-right-iqf img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          transition: transform 8s ease;
        }
        .hero-right-iqf:hover img { transform: scale(1.04); }
        
        .hero-right-overlay-iqf {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #000 0%, rgba(0,0,0,0.18) 40%, transparent 100%);
          z-index: 2;
        }

        .hero-eyebrow-iqf {
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

        .hero-title-iqf {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-title-iqf em {
          font-style: normal;
          color: #9ef295;
        }

        .hero-desc-iqf {
          font-size: 15px; line-height: 1.8;
          color: rgba(255,255,255,0.65);
          max-width: 380px;
          margin-bottom: 2rem;
        }

        .hero-specs-strip-iqf {
          display: flex; gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-spec-item-iqf { display: flex; flex-direction: column; gap: 3px; }
        .hero-spec-val-iqf {
          font-family: 'Outfit', sans-serif;
          font-size: 24px; font-weight: 700;
          color: #9ef295;
        }
        .hero-spec-lbl-iqf {
          font-size: 10px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
        }

        .btn-primary-iqf {
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
        .btn-primary-iqf:hover { background: #fff; color: #0d631b; transform: translateY(-1px); }
        
        .btn-ghost-iqf {
          color: rgba(255,255,255,0.6);
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 1px;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }
        .btn-ghost-iqf:hover { color: #9ef295; }

        /* ── ATTRIBUTES ── */
        .section-iqf {
          padding: 5rem 5rem;
          animation: fadeUpIqf 0.7s ease both;
        }
        .section-header-iqf {
          display: flex; align-items: baseline; gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .section-title-iqf {
          font-family: 'Outfit', sans-serif;
          font-size: 30px; font-weight: 600;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .section-rule-iqf {
          flex: 1; height: 1px;
          background: rgba(255, 255, 255, 0.25);
        }

        .badges-grid-iqf {
          display: flex; flex-wrap: wrap; gap: 10px;
          margin-bottom: 3rem;
        }
        .badge-iqf {
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--peel-dark);
          background: var(--peel-light);
          border: 1px solid rgba(201,75,30,0.2);
          padding: 6px 16px;
          border-radius: 99px;
        }

        /* ── SPECS GRID ── */
        .specs-grid-iqf {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border-med);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .spec-cell-iqf {
          padding: 1.5rem 1.5rem 1.8rem;
          background: var(--white);
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .spec-cell-iqf:last-child { border-right: none; }
        .spec-cell-iqf:hover { background: #FFF8F5; }
        
        .spec-label-iqf {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted);
          margin-bottom: 10px;
        }
        .spec-value-iqf {
          font-family: 'Outfit', sans-serif;
          font-size: 20px; font-weight: 600;
          color: var(--text);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .spec-note-iqf {
          font-size: 11px; color: var(--text-muted);
        }

        /* ── STORY STRIP ── */
        .story-strip-iqf {
          background: var(--peel-dark);
          padding: 4rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-strip-iqf h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 600; color: #fff;
          line-height: 1.2; letter-spacing: -0.02em;
        }
        .story-strip-iqf h2 em { font-style: normal; color: #FAC775; }
        .story-strip-iqf p {
          font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.72);
          margin-top: 1rem;
        }
        
        .story-facts-iqf {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .story-fact-iqf {
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .fact-num-iqf {
          font-family: 'Outfit', sans-serif;
          font-size: 32px; font-weight: 700;
          color: #FAC775;
          line-height: 1;
          min-width: 64px;
        }
        .fact-desc-iqf {
          font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.75);
          padding-top: 4px;
        }

        /* ── FEATURES ── */
        .features-grid-iqf {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card-iqf {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.75rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .feature-card-iqf:hover {
          border-color: rgba(201,75,30,0.3);
          transform: translateY(-3px);
        }
        .feature-icon-iqf {
          width: 44px; height: 44px;
          background: var(--peel-light);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .feature-card-iqf h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
        }
        .feature-card-iqf p {
          font-size: 13px; line-height: 1.7;
          color: var(--text-mid);
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUpIqf {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInIqf {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hero-iqf { flex-direction: column; min-height: auto; }
          .hero-left-iqf { width: 100%; padding: 6rem 2rem 3rem; }
          .hero-right-iqf { width: 100%; min-height: 340px; }
          .section-iqf { padding: 3rem 2rem; }
          .specs-grid-iqf { grid-template-columns: repeat(2, 1fr); }
          .spec-cell-iqf:nth-child(2) { border-right: none; }
          .spec-cell-iqf:nth-child(3) { border-right: 1px solid var(--border); border-top: 1px solid var(--border); }
          .spec-cell-iqf:nth-child(4) { border-right: none; border-top: 1px solid var(--border); }
          .story-strip-iqf { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 2rem; }
          .features-grid-iqf { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="iqf-page-body">
        {/* HERO */}
        <section className="hero-iqf">
          {/* LEFT 45% */}
          <div className="hero-left-iqf">
            <div className="hero-eyebrow-iqf">Pioneer in Frozen</div>
            <h1 className="hero-title-iqf">IQF Pomegranate<br /><em>Arils</em></h1>
            <p className="hero-desc-iqf">
              Manually extracted from single-variety Bhagwa pomegranates and processed through Individually Quick Freezing (IQF) to retain absolute aril integrity, natural colour, and juice.
            </p>

            <div className="hero-specs-strip-iqf">
              <div className="hero-spec-item-iqf">
                <span className="hero-spec-val-iqf">730</span>
                <span className="hero-spec-lbl-iqf">Days Supply</span>
              </div>
              <div className="hero-spec-item-iqf">
                <span className="hero-spec-val-iqf">24m</span>
                <span className="hero-spec-lbl-iqf">Shelf Life</span>
              </div>
              <div className="hero-spec-item-iqf">
                <span className="hero-spec-val-iqf">0</span>
                <span className="hero-spec-lbl-iqf">Additives</span>
              </div>
            </div>

            <div className="hero-actions-iqf">
              <a href="#contact" className="btn-primary-iqf mr-4">Request Spec</a>
              <a href="#attributes" className="btn-ghost-iqf">View Specs</a>
            </div>
          </div>

          {/* RIGHT 55% */}
          <div className="hero-right-iqf">
            <img
              src="/assets/pomogranatearils.jpg"
              alt="Individually Quick Frozen (IQF) pomegranate arils"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=IQF+Arils' }}
            />
            <div className="hero-right-overlay-iqf"></div>
          </div>
        </section>

        {/* ATTRIBUTES */}
        <section className="section-iqf" id="attributes">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter">
              Product <span className="text-[#9ef295]">Attributes</span>
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#9ef295]"></div>
          </div>

          <div className="badges-grid-iqf">
            <span className="badge-iqf">IQF Frozen</span>
            <span className="badge-iqf">Sweet Profile</span>
            <span className="badge-iqf">No Clumping</span>
            <span className="badge-iqf">No Preservatives</span>
            <span className="badge-iqf">Zero Additives</span>
            <span className="badge-iqf">Year-Round Supply</span>
          </div>

          <div className="specs-grid-iqf">
            <div className="spec-cell-iqf">
              <div className="spec-label-iqf">Availability</div>
              <div className="spec-value-iqf">365-Day<br />Supply</div>
            </div>
            <div className="spec-cell-iqf">
              <div className="spec-label-iqf">Shelf Life</div>
              <div className="spec-value-iqf">24 Months</div>
              <div className="spec-note-iqf">Frozen at -20°C</div>
            </div>
            <div className="spec-cell-iqf">
              <div className="spec-label-iqf">Variety</div>
              <div className="spec-value-iqf">Bhagwa</div>
              <div className="spec-note-iqf">Single variety</div>
            </div>
            <div className="spec-cell-iqf">
              <div className="spec-label-iqf">Processing</div>
              <div className="spec-value-iqf">Individually<br />Quick Frozen</div>
            </div>
          </div>
        </section>

        {/* STORY STRIP */}
        <section className="story-strip-iqf" id="story">
          <div>
            <h2>World-class<br /><em>frozen IQF</em><br />aril technology.</h2>
            <p>
              Processed at state-of-the-art facilities using advanced flash freezing technology. Our IQF arils remain completely free-flowing, preventing clumping and preserving peak nutritional value.
            </p>
          </div>
          <div className="story-facts-iqf">
            <div className="story-fact-iqf">
              <div className="fact-num-iqf">#1</div>
              <div className="fact-desc-iqf">India's premium exporter of IQF Bhagwa pomegranate arils</div>
            </div>
            <div className="story-fact-iqf">
              <div className="fact-num-iqf">24</div>
              <div className="fact-desc-iqf">Months of guaranteed frozen shelf life at -20°C</div>
            </div>
            <div className="story-fact-iqf">
              <div className="fact-num-iqf">0</div>
              <div className="fact-desc-iqf">Clumping or ice crystal formation, ready for immediate use</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section-iqf" id="features">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter">
              Why <span className="text-[#9ef295]">Choose Us</span>
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#9ef295]"></div>
          </div>

          <div className="features-grid-iqf">
            <div className="feature-card-iqf">
              <div className="feature-icon-iqf">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#D85A30" opacity="0.25"/>
                  <path d="M7 11l3 3 5-5" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>No-Clumping Flow</h3>
              <p>Advanced IQF freezing ensures arils remain separate and free-flowing, perfect for immediate processing.</p>
            </div>

            <div className="feature-card-iqf">
              <div className="feature-icon-iqf">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.3"/>
                  <rect x="12" y="3" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.15"/>
                  <rect x="3" y="12" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.15"/>
                  <rect x="12" y="12" width="7" height="7" rx="1.5" fill="#D85A30" opacity="0.3"/>
                </svg>
              </div>
              <h3>Year-Round Dispatch</h3>
              <p>Maintained in state-of-the-art frozen storage, guaranteeing a continuous 365-day delivery window.</p>
            </div>

            <div className="feature-card-iqf">
              <div className="feature-icon-iqf">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 3l2.2 5.5H19l-4.6 3.4 1.8 5.5L11 14l-5.2 3.4 1.8-5.5L3 8.5h5.8L11 3z" fill="#D85A30" opacity="0.3" stroke="#D85A30" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Bhagwa Cultivar</h3>
              <p>Exclusively single-origin Bhagwa variety arils, famous for high Brix, vibrant ruby colour, and soft seed.</p>
            </div>

            <div className="feature-card-iqf">
              <div className="feature-icon-iqf">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 6h14M4 11h14M4 16h9" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Zero-Additive Promise</h3>
              <p>Absolutely no syrup, preservatives, coloring, or flavoring added. 100% natural fruit.</p>
            </div>

            <div className="feature-card-iqf">
              <div className="feature-icon-iqf">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4v14M4 11h14" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="11" cy="11" r="8" stroke="#D85A30" strokeWidth="1.2" opacity="0.4"/>
                </svg>
              </div>
              <h3>Scalable Logistics</h3>
              <p>Exported in bulk containers or custom packaging sizes to match industrial, retail, or catering needs.</p>
            </div>

            <div className="feature-card-iqf">
              <div className="feature-icon-iqf">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 17l4-8 4 5 3-3 5 6" stroke="#D85A30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Sub-Zero Cold Chain</h3>
              <p>Continuous -20°C monitoring from flash freeze to delivery to maintain absolute product stability.</p>
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
              <a href="mailto:sales@samagrigroup.com" className="btn-primary-iqf">Request a Sample</a>
              <a href="tel:+910000000000" className="btn-ghost-iqf text-[#5c4a3a] border-zinc-400 self-center">+91 00000 00000</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IqfArils
