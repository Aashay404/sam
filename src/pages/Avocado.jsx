import React from 'react'
import { Link } from 'react-router-dom'

const Avocado = () => {
  return (
    <main className="bg-black text-white selection:bg-[#9ef295] selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col md:flex-row items-stretch pt-24 md:pt-0">
        <div className="w-full md:w-[45%] bg-gradient-to-br from-[#0d631b] via-[#4caf50] to-black flex flex-col justify-center px-8 md:px-16 py-12 md:pt-32 md:pb-16 relative z-10">
          <div className="max-w-md animate-in">
            <span className="inline-block bg-white/10 text-white border border-white/20 rounded-full px-4 py-1 text-[9px] md:text-[10px] font-display font-bold tracking-[0.4em] uppercase mb-6">
              Creamy & Nutrient Dense
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[0.9] mb-6 md:mb-8 uppercase tracking-tighter">
              Premium <br /><span className="text-[#9ef295]">Avocado</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans mb-8 md:mb-10">
              Nurtured in the optimal micro-climates of Southern India, our Hass and local varieties offer unmatched texture and flavor profile.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-white">HASS</span>
                <span className="text-[8px] md:text-[9px] font-display font-bold uppercase tracking-widest text-[#9ef295]">Variety</span>
              </div>
              <div className="w-px h-10 md:h-12 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-white">GLOBAL</span>
                <span className="text-[8px] md:text-[9px] font-display font-bold uppercase tracking-widest text-[#9ef295]">Standard</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex-1 relative h-[400px] md:h-auto">
          <img src="/avocado_3d.png" className="w-full h-full object-cover" alt="Premium Avocado" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 md:py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <img src="/farm_3d.png" className="w-full h-full object-cover grayscale" alt="Farm" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter">Structured <span className="text-[#9ef295]">Assortment</span></h2>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans">
              Our avocados are graded by size and maturity to ensure they arrive at your shelf at the perfect stage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:border-[#9ef295]/30 transition-all group">
                <i className="fas fa-weight-hanging text-[#9ef295] text-lg md:text-xl mb-6 block"></i>
                <h4 className="font-display font-bold uppercase tracking-widest text-white mb-2 text-sm md:text-base">Grading</h4>
                <p className="text-[10px] md:text-xs text-white/40">Weights ranging from 200g to 450g per fruit.</p>
              </div>
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:border-[#9ef295]/30 transition-all group">
                <i className="fas fa-snowflake text-[#9ef295] text-lg md:text-xl mb-6 block"></i>
                <h4 className="font-display font-bold uppercase tracking-widest text-white mb-2 text-sm md:text-base">Cool Chain</h4>
                <p className="text-[10px] md:text-xs text-white/40">Transported at 5-7°C for maximum freshness.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#0d631b] to-zinc-900 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 md:mb-8">Nutritional Profile</h3>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <span className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-[#9ef295] font-bold text-xs md:text-sm">01</span>
                    <span className="text-white/80 font-sans text-xs md:text-sm">High in Healthy Monounsaturated Fats</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <span className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-[#9ef295] font-bold text-xs md:text-sm">02</span>
                    <span className="text-white/80 font-sans text-xs md:text-sm">Rich in Potassium and Vitamin E</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <span className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-[#9ef295] font-bold text-xs md:text-sm">03</span>
                    <span className="text-white/80 font-sans text-xs md:text-sm">High Fiber content for digestion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-black text-center">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 md:mb-12 uppercase tracking-tighter">Ready to <span className="text-[#9ef295]">Source</span>?</h2>
        <div className="flex justify-center">
          <a href="#" className="w-full sm:w-auto bg-[#0d631b] text-white px-10 py-4 md:py-5 rounded-full font-display font-bold uppercase tracking-widest hover:bg-white hover:text-[#0d631b] transition-all">Download Catalogue</a>
        </div>
      </section>
    </main>
  )
}

export default Avocado
