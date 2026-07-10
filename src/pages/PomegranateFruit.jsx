import React from 'react'

const PomegranateFruit = () => {
  return (
    <main className="fruit-body bg-[#4a0a05] text-on-surface selection:bg-[#7e1a12] selection:text-white">
      <style>{`
        .fruit-body {
          font-family: 'DM Sans', sans-serif;
        }
        .fruit-body h1, .fruit-body h2, .fruit-body h3, .fruit-body h4 {
          font-family: 'Outfit', sans-serif !important;
        }
        .fruit-body .font-sans {
          font-family: 'DM Sans', sans-serif !important;
        }
        .fruit-body .font-serif {
          font-family: 'Outfit', sans-serif !important;
        }
      `}</style>
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col md:flex-row items-stretch pt-24 md:pt-0">
        {/* Content Side */}
        <div className="w-full md:w-[50%] bg-gradient-to-br from-[#4a0a05] to-[#1a0505] flex flex-col justify-center px-8 md:px-20 py-16 md:py-0 relative z-10">
          <div className="max-w-xl animate-in">
            <div className="inline-block border-[1px] border-white/30 px-10 py-4 mb-10 backdrop-blur-sm bg-white/5">
              <span className="text-white text-2xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em]">Pomegranate Fruit</span>
            </div>
            
            <h2 className="text-[#9ef295] text-sm font-bold uppercase tracking-[0.4em] mb-6">Bhagwa Pomegranate</h2>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-sans mb-12 font-light">
              Sourced exclusively from captive and contract-managed farms, our <span className="text-[#9ef295] font-bold">Bhagwa</span> whole pomegranates are cultivated and harvested under stringent compliance protocols — meeting global MRL standards for export-ready supply. 
              <br /><br />
              Full traceability from farm to dispatch ensures audit-ready documentation for importers, distributors, and retail chains. With a robust shelf life of up to 90 days and a 365-day supply capability across seven peak harvest windows, this is a reliable, scalable SKU for high-volume trade buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#spec" className="group relative overflow-hidden px-10 py-5 bg-[#0d631b] text-white rounded-full font-bold tracking-widest uppercase transition-all hover:pr-14 shadow-[0_20px_40px_rgba(13,99,27,0.3)] hover:shadow-[#0d631b]/40 inline-block text-center">
                <span className="relative z-10">Technical Specifications</span>
                <i className="fas fa-arrow-right absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-[50%] relative h-[500px] md:h-auto">
          <img alt="Whole Pomegranate Fruit" className="absolute inset-0 w-full h-full object-cover scale-105" src="/pomegranate_3d.png" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Pomegranate+Fruit' }} />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a0505] via-transparent to-transparent"></div>
          <div className="absolute bottom-12 right-12 text-right hidden md:block">
            <span className="text-white/20 text-8xl font-serif font-bold italic select-none">Quality First</span>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section id="spec" className="bg-[#faf9f5] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Feature Grid */}
            <div className="lg:col-span-7">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-12">Global Export Standards</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-check-double"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Global MRL Compliant</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Adhering to the strictest international residue limits for safe consumption.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Full Traceability</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Complete digital record from seedling to final delivery box.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-ship"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Export Ready</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Specially treated and packed for long-distance international transit.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Audit-Ready</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Instant documentation access for distributors and retail chains.</p>
                </div>
              </div>
            </div>

            {/* Right: Logistics & Windows */}
            <div className="lg:col-span-5 space-y-12 text-zinc-800">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-zinc-50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-10">Dispatch Windows</h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Jan</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Feb</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Mar</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-zinc-100 text-zinc-300 text-xs font-bold">Apr</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-zinc-100 text-zinc-300 text-xs font-bold">May</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-zinc-100 text-zinc-300 text-xs font-bold">Jun</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Jul</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Aug</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Sep</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-zinc-100 text-zinc-300 text-xs font-bold">Oct</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-zinc-100 text-zinc-300 text-xs font-bold">Nov</div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary text-white text-xs font-bold shadow-lg shadow-secondary/20">Dec</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d631b] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 transition-transform group-hover:scale-110"></div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-6">Supply Capability</h4>
                <p className="text-3xl font-serif font-bold text-white mb-2">365 Days</p>
                <p className="text-sm text-white/60">Continuous year-round availability for global partners.</p>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-zinc-200">
            <div className="flex items-center gap-8">
              <div className="text-5xl font-serif font-bold text-secondary">90</div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Max Shelf Life</h5>
                <p className="text-sm font-bold text-zinc-600 italic">Days (Cold Chain)</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-5xl font-serif font-bold text-primary">01</div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Variety Selection</h5>
                <p className="text-sm font-bold text-zinc-600 italic">Bhagwa (Exclusive)</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-5xl font-serif font-bold text-zinc-800">100%</div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Traceability</h5>
                <p className="text-sm font-bold text-zinc-600 italic">Farm to Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-1 bg-secondary mx-auto mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-10 leading-tight">Reliable, scalable SKU for high-volume international trade.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-zinc-900 text-white rounded-full font-bold tracking-widest uppercase hover:bg-primary transition-all shadow-xl">Contact Sales</button>
            <button className="px-12 py-5 border-2 border-zinc-900 text-zinc-900 rounded-full font-bold tracking-widest uppercase hover:bg-zinc-900 hover:text-white transition-all">Technical Datasheet</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PomegranateFruit
