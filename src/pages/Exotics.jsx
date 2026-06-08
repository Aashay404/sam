import React from 'react'

const Exotics = () => {
  return (
    <main className="pt-24 bg-black text-white selection:bg-[#9ef295] selection:text-black">
      {/* Banner Section */}
      <section className="relative h-[85vh] bg-gradient-to-br from-[#1a1a1a] via-[#4a148c] to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2070" className="w-full h-full object-cover grayscale" alt="Exotics Background" />
        </div>
        <div className="relative z-10 text-center px-12 animate-in">
          <span className="inline-block bg-white/10 text-[#9ef295] border border-white/20 rounded-full px-6 py-2 text-[10px] font-display font-bold tracking-[0.5em] uppercase mb-8">
            Beyond the Ordinary
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none uppercase tracking-tighter italic">
            Exotics & <span className="text-[#9ef295] not-italic">Prepared</span>
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto font-sans leading-relaxed mt-10">
            From hand-peeled garlic to exotic Asian vegetables, we deliver convenience and global flavors.
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <a href="#range" className="bg-[#9ef295] text-black px-10 py-4 rounded-full font-display font-bold uppercase tracking-widest hover:bg-white transition-all">Explore Range</a>
          </div>
        </div>
      </section>

      {/* Assortment Grid */}
      <section id="range" className="py-12 md:py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="group bg-white/5 p-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#9ef295]/30 transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1000" className="h-64 w-full object-cover rounded-[1.8rem] md:rounded-[2.8rem] group-hover:scale-105 transition-transform duration-700" alt="Asian Veg" />
            <div className="p-8 md:p-12">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 uppercase">Asian Veg</h4>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed font-sans">Okra, Drumsticks, and Baby Corn sourced from GAP-certified farmer networks.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group bg-[#7e1a12]/5 p-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#9ef295]/30 transition-all duration-500 md:mt-12">
            <img src="https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1000" className="h-64 w-full object-cover rounded-[1.8rem] md:rounded-[2.8rem] group-hover:scale-105 transition-transform duration-700" alt="Prepared" />
            <div className="p-8 md:p-12">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 uppercase">Prepared</h4>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed font-sans">Kitchen-ready peeled garlic, shallots, and cut sweet potato. sterile processing.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group bg-[#0d631b]/5 p-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#9ef295]/30 transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1490818385228-246ee3a44ad1?q=80&w=1000" className="h-64 w-full object-cover rounded-[1.8rem] md:rounded-[2.8rem] group-hover:scale-105 transition-transform duration-700" alt="Fruit Pots" />
            <div className="p-8 md:p-12">
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 uppercase">Fruit Pots</h4>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed font-sans">Fresh Pineapple and Papaya in grab-and-go pots for international retail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 md:py-24 px-6 md:px-12 bg-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 uppercase tracking-tighter">Bespoke <span className="italic text-[#9ef295]">Packaging</span></h2>
          <p className="text-white/40 font-sans text-base md:text-lg mb-8 md:mb-12">We offer customized preparation sizes and vacuum-sealed solutions.</p>
          <a href="#" className="inline-block border border-white/20 text-white px-10 py-4 md:py-5 rounded-full font-display font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Request Custom Specs</a>
        </div>
      </section>
    </main>
  )
}

export default Exotics
