import React from 'react'

const WestInAvo = () => {
  return (
    <main className="bg-[#faf9f5] text-zinc-900 selection:bg-[#9ef295] selection:text-black">
      {/* Banner Section */}
      <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col md:flex-row items-stretch pt-24 md:pt-0">
        <div className="w-full md:w-[45%] bg-gradient-to-br from-[#7e1a12] via-zinc-950 to-black flex flex-col justify-center px-8 md:px-16 py-12 md:py-0 relative z-10">
          <div className="max-w-md animate-in">
            <span className="inline-block bg-white/10 text-[#9ef295] border border-white/20 rounded-full px-4 py-1 text-[9px] md:text-[10px] font-display font-bold tracking-[0.4em] uppercase mb-6">
              Our Premium Avocado Brand
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[0.9] mb-6 md:mb-8 uppercase tracking-tighter">
              West-In <br/><span className="text-[#9ef295]">-Avo</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans mb-8 md:mb-10">
              Sourced from selected high-altitude orchards in Western India, West-In-Avo represents the peak of texture, richness, and buttery flavor profile.
            </p>
            
            {/* Product Attributes Tags */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white/60 uppercase tracking-widest font-bold">Western India Premium</span>
              <span className="px-3 py-1 bg-[#9ef295]/20 border border-[#9ef295]/30 rounded-full text-[9px] text-[#9ef295] uppercase tracking-widest font-bold">Selected Handpicked</span>
            </div>

            <div className="flex gap-4">
              <a href="#spec" className="w-full md:w-auto text-center bg-[#0d631b] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-display font-bold tracking-widest uppercase hover:bg-white hover:text-[#0d631b] transition-all shadow-xl">Get Brand Details</a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[55%] relative h-[400px] md:h-auto">
          <img alt="West-In-Avo Avocados" className="absolute inset-0 w-full h-full object-cover" src="/avocado_3d.png" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Technical Specs Bento */}
      <section id="spec" className="bg-zinc-950 py-12 md:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter">Brand <span className="text-[#9ef295]">Standards</span></h2>
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#7e1a12]"></div>
            </div>
            <p className="text-white/40 font-display font-bold uppercase tracking-widest text-[10px]">Exceptional Culinary Quality</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-l-4 border-[#9ef295]">
              <h4 className="font-display font-bold text-white/30 uppercase text-[9px] tracking-widest mb-4">Fat Content</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-white mb-2">High Dry Matter</p>
              <p className="text-[10px] text-white/40 font-sans">Rich, buttery mouthfeel</p>
            </div>
            <div className="bg-white/5 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-l-4 border-[#0d631b]">
              <h4 className="font-display font-bold text-white/30 uppercase text-[9px] tracking-widest mb-4">Origin</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-white mb-2">Western India</p>
              <p className="text-[10px] text-white/40 font-sans">High altitude micro-climates</p>
            </div>
            <div className="bg-white/5 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-l-4 border-[#7e1a12]">
              <h4 className="font-display font-bold text-white/30 uppercase text-[9px] tracking-widest mb-4">Post-Harvest</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-white mb-2">Cold Chain Managed</p>
              <p className="text-[10px] text-white/40 font-sans">Slowing ripening for export transit</p>
            </div>
            <div className="bg-white/5 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-l-4 border-white/20">
              <h4 className="font-display font-bold text-white/30 uppercase text-[9px] tracking-widest mb-4">Sizing</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-white mb-2">Counts 12 to 24</p>
              <p className="text-[10px] text-white/40 font-sans">Uniform grading for retail</p>
            </div>
          </div>

          {/* Dispatch Windows */}
          <div className="mt-12 md:mt-16">
            <h4 className="font-display font-bold text-white/30 uppercase text-[10px] tracking-widest mb-6 md:mb-8 text-center md:text-left">Harvest Calendar</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {['Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((month) => (
                <span key={month} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold">{month}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-zinc-900 mb-8">Supply agreements available for premium retail chains and hotels.</h2>
          <button className="w-full sm:w-auto bg-[#0d631b] text-white px-10 py-4 rounded-md font-bold tracking-widest uppercase hover:opacity-90 transition-all">Connect with Brand Manager</button>
        </div>
      </section>
    </main>
  )
}

export default WestInAvo
