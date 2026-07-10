import React from 'react'

const IqfArils = () => {
  return (
    <main className="iqf-body bg-[#4a0a05] text-white selection:bg-[#7e1a12] selection:text-white">
      <style>{`
        .iqf-body {
          font-family: 'DM Sans', sans-serif;
        }
        .iqf-body h1, .iqf-body h2, .iqf-body h3, .iqf-body h4 {
          font-family: 'Outfit', sans-serif !important;
        }
        .iqf-body .font-sans {
          font-family: 'DM Sans', sans-serif !important;
        }
        .iqf-body .font-serif {
          font-family: 'Outfit', sans-serif !important;
        }
      `}</style>
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col md:flex-row items-stretch pt-24 md:pt-0">
        {/* Content Side */}
        <div className="w-full md:w-[50%] bg-gradient-to-br from-[#4a0a05] to-[#1a0505] flex flex-col justify-center px-8 md:px-20 py-16 md:py-0 relative z-10">
          <div className="max-w-xl animate-in">
            <div className="inline-block border-[1px] border-white/30 px-10 py-4 mb-10 backdrop-blur-sm bg-white/5">
              <span className="text-white text-2xl md:text-3xl font-serif font-bold uppercase tracking-[0.3em]">IQF Aril</span>
            </div>
            
            <h2 className="text-[#9ef295] text-sm font-bold uppercase tracking-[0.4em] mb-6">Frozen Excellence</h2>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-sans mb-12 font-light">
              Manually extracted from single-variety <span className="text-[#9ef295] font-bold">Bhagwa</span> pomegranates and processed through an Individually Quick Freezing (IQF) method, our arils retain full aril integrity, natural colour, and juice content — free from clumping or cold-chain degradation. 
              <br /><br />
              With a 24-month frozen shelf life and year-round dispatch capability, this product is purpose-built for juice processors, food manufacturers, catering operations, and large-format retail requiring a consistent, high-throughput frozen ingredient with zero preparation overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#spec" className="group relative overflow-hidden px-10 py-5 bg-[#0d631b] text-white rounded-full font-bold tracking-widest uppercase transition-all hover:pr-14 shadow-[0_20px_40px_rgba(13,99,27,0.3)] hover:shadow-[#0d631b]/40 inline-block text-center">
                <span className="relative z-10">Frozen Specifications</span>
                <i className="fas fa-snowflake absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-[50%] relative h-[500px] md:h-auto">
          <img alt="Frozen IQF Arils" className="absolute inset-0 w-full h-full object-cover scale-105" src="/assets/pomogranatearils.jpg" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=IQF+Arils' }} />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a0505] via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section id="spec" className="bg-[#faf9f5] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden text-zinc-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d631b]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Attributes */}
            <div className="lg:col-span-7">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-12">Product Attributes</h4>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-zinc-200 text-zinc-700 font-bold text-sm shadow-sm flex items-center gap-4 hover:border-[#0d631b]/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#9ef295]"></div>
                  No Clumping
                </div>
                <div className="bg-white p-6 rounded-2xl border border-zinc-200 text-zinc-700 font-bold text-sm shadow-sm flex items-center gap-4 hover:border-[#0d631b]/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#9ef295]"></div>
                  Ideal for Juicing
                </div>
                <div className="bg-white p-6 rounded-2xl border border-zinc-200 text-zinc-700 font-bold text-sm shadow-sm flex items-center gap-4 hover:border-[#0d631b]/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#9ef295]"></div>
                  Processing Grade
                </div>
              </div>
            </div>

            {/* Right: Storage Requirement */}
            <div className="lg:col-span-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-12">Storage Requirement</h4>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-zinc-50 relative overflow-hidden">
                <div className="relative z-10">
                  <h5 className="text-xl font-bold text-zinc-800 mb-4">Frozen Cold Chain</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8">Maintained at -20°C throughout transit & storage to ensure zero degradation of aril integrity.</p>
                  
                  <div className="inline-flex items-center px-6 py-3 bg-[#e0f2fe] text-[#0369a1] rounded-full text-xs font-black tracking-widest uppercase border border-[#bae6fd]">
                    -20°C / 24 Months
                  </div>
                </div>
                {/* Cold Frost Effect */}
                <div className="absolute -bottom-10 -right-10 text-6xl text-blue-50">
                  <i className="fas fa-snowflake opacity-20"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 pt-20 border-t border-zinc-100 text-zinc-800">
            <div className="bg-zinc-50 p-8 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Shelf Life</h5>
              <p className="text-xl font-bold text-zinc-800 leading-tight">24 Months <br /><span className="text-sm font-medium text-zinc-500">(Frozen)</span></p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Variety</h5>
              <p className="text-xl font-bold text-zinc-800">Bhagwa (Single Variety)</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Sourcing Model</h5>
              <p className="text-xl font-bold text-zinc-800">Captive & Contract Farms</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Supply Capability</h5>
              <p className="text-xl font-bold text-zinc-800">365-Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center bg-white text-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-1 bg-secondary mx-auto mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-10 leading-tight italic">Purpose-built for juice processors and high-throughput manufacturers.</h2>
          <button className="px-12 py-5 bg-primary text-white rounded-full font-bold tracking-widest uppercase hover:bg-zinc-900 transition-all shadow-xl">Request Technical Spec</button>
        </div>
      </section>
    </main>
  )
}

export default IqfArils
