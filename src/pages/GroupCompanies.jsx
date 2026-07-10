import React from 'react'
import { motion } from 'framer-motion'

const GroupCompanies = () => {
  return (
    <main className="min-h-screen text-on-surface selection:bg-[#0d631b] selection:text-white bg-[#faf9f5]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#7e1a12] to-black flex items-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 animate-pulse duration-10000" 
            alt="Background" 
          />
        </div>
        <div className="px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 text-left">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1 }}
            className="text-[#9ef295] font-sans font-bold uppercase text-[10px] mb-4 block"
          >
            The Sam Agri Group
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white leading-none uppercase tracking-tighter"
          >
            Group <br />
            <span className="text-[#9ef295]">Entities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg text-white max-w-lg mt-8 font-sans"
          >
            A diversified portfolio of specialized entities, each driving innovation and excellence across the global fresh produce supply chain.
          </motion.p>
        </div>
      </section>

      {/* Our Partners / Affiliated Organizations */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">Partners & Affiliates</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-800 mt-4 uppercase tracking-tighter">Affiliated Organizations</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* West-In-Avo */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/assets/avocado.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="West-In-Avo" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Domestic Brand</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">West-In-Avo</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Premium Hass avocados grown in our domestic farms, tree-ripened quality for every table.</p>
              </div>
            </div>

            {/* Sam Berry */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/assets/sam_berry_basket.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam Berry" onError={(e) => { e.target.src = '/assets/berries.jpg' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Domestic Brand</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">Sam Berry</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">A lush assortment of locally sourced berries and seasonal gift baskets.</p>
              </div>
            </div>

            {/* Sam's Delight */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/assets/almond.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam's Delight" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Domestic Brand</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">Sam's Delight</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Our flagship range of premium almonds and nutritious dry fruits.</p>
              </div>
            </div>

            {/* Sam Alpine */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam Alpine" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Domestic Brand</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">Sam Alpine</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">High-altitude blueberries grown for intense flavor and nutrition.</p>
              </div>
            </div>

            {/* Ozar Tulip */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/assets/tulip.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Ozar Tulip" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Domestic Brand</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">Ozar Tulip</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Premium floriculture vertical specializing in exotic Dutch tulips.</p>
              </div>
            </div>

            {/* Sam's Wine */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/assets/pomogranatewine.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam's Wine" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Domestic Brand</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">Sam's Wine</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Artisanal fruit wines crafted from our finest pomegranate harvests.</p>
              </div>
            </div>

          </div>
        </div>
      </section>    </main>
  )
}

export default GroupCompanies
