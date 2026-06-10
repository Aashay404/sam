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
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">Partners & Affiliates</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-zinc-800 mt-4 uppercase tracking-tighter">Affiliated Organizations</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          
          {/* Row 1 — 3 partners */}
          <div className="dp-row w-full max-w-6xl mx-auto px-6 justify-center" style={{ gap: '24px', marginBottom: '24px' }}>
            <div className="dp-card border border-zinc-200/60 shadow-md rounded-2xl group hover:border-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400" alt="Westfalia Fruit" />
              <div className="dp-info text-left">
                <h3>Westfalia Fruit</h3>
                <p>Leading multinational supplier of fresh fruit, specializing in avocados.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card border border-zinc-200/60 shadow-md rounded-2xl group hover:border-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400" alt="Dvori Or" />
              <div className="dp-info text-left">
                <h3>Dvori Or</h3>
                <p>Strategic agricultural production partner based in Israel.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card border border-zinc-200/60 shadow-md rounded-2xl group hover:border-primary transition-all duration-300">
              <img src="/apeda.webp" alt="APEDA" />
              <div className="dp-info text-left">
                <h3>APEDA</h3>
                <p>Agricultural and Processed Food Products Export Development Authority of India.</p>
                <a href="#">Know More</a>
              </div>
            </div>
          </div>

          {/* Row 2 — 3 partners */}
          <div className="dp-row w-full max-w-6xl mx-auto px-6 justify-center" style={{ gap: '24px' }}>
            <div className="dp-card border border-zinc-200/60 shadow-md rounded-2xl group hover:border-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400" alt="NABARD" />
              <div className="dp-info text-left">
                <h3>NABARD</h3>
                <p>National Bank for Agriculture and Rural Development supporting rural growth.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card border border-zinc-200/60 shadow-md rounded-2xl group hover:border-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=400" alt="Suix Trade GMBH" />
              <div className="dp-info text-left">
                <h3>Suix Trade GMBH</h3>
                <p>Global marketing and distribution partner located in Switzerland.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card border border-zinc-200/60 shadow-md rounded-2xl group hover:border-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400" alt="Zohara Farms" />
              <div className="dp-info text-left">
                <h3>Zohara Farms</h3>
                <p>State-of-the-art agricultural farming partner specializing in fresh produce.</p>
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Entities */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-sans font-black text-zinc-800 uppercase tracking-[0.3em] mb-12 border-b border-zinc-200 pb-4">Processing Entities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Sam Agritech Limited */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam Agritech" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Medchal, Telangana</span>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 leading-tight">Sam Agritech <br />Limited</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Flagship processing hub for Pomegranate Arils & Coconut Chunks.</p>
              </div>
            </div>

            {/* Sam Agri Ventures Ltd */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam Agri Ventures" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Chittoor, Andhra Pradesh</span>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 leading-tight">Sam Agri <br />Ventures Ltd</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Strategic processing facility located in the Srini Food Park.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Logistics */}
      <section className="pb-12 md:pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-sans font-black text-zinc-800 uppercase tracking-[0.3em] mb-12 border-b border-zinc-200 pb-4">Infrastructure & Logistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Sam Agri Fresh Pvt Ltd */}
            <div className="group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg border border-zinc-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sam Agri Fresh" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <span className="text-[#9ef295] font-bold text-[10px] uppercase tracking-widest mb-2">Nashik, Maharashtra</span>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 leading-tight">Sam Agri <br />Fresh Pvt Ltd</h3>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">Direct-from-farm whole fruit trade and logistics center.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Marketing Hubs */}
      <section className="pb-20 md:pb-32 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-sans font-black text-zinc-800 uppercase tracking-[0.3em] mb-12 border-b border-zinc-200 pb-4">Global Marketing & Trade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Switzerland */}
            <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md border border-zinc-200 transition-all duration-700 hover:scale-[1.02] hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Switzerland" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                <h3 className="text-xl font-sans font-bold text-white mb-2">Suix Trade GMBH</h3>
                <p className="text-[#9ef295] text-[10px] uppercase tracking-widest font-bold">Switzerland</p>
              </div>
            </div>

            {/* Dubai */}
            <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md border border-zinc-200 transition-all duration-700 hover:scale-[1.02] hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Dubai" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                <h3 className="text-xl font-sans font-bold text-white mb-2 leading-tight">Sam Tulip Fruit <br />& Juice Trading</h3>
                <p className="text-[#9ef295] text-[10px] uppercase tracking-widest font-bold">Dubai, UAE</p>
              </div>
            </div>

            {/* Israel */}
            <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md border border-zinc-200 transition-all duration-700 hover:scale-[1.02] hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Israel" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                <h3 className="text-xl font-sans font-bold text-white mb-2">Zohara Farms LLC</h3>
                <p className="text-[#9ef295] text-[10px] uppercase tracking-widest font-bold">Israel</p>
              </div>
            </div>

            {/* Hong Kong */}
            <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md border border-zinc-200 transition-all duration-700 hover:scale-[1.02] hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Hong Kong" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                <h3 className="text-xl font-sans font-bold text-white mb-2">Sam Tulip HK LLC</h3>
                <p className="text-[#9ef295] text-[10px] uppercase tracking-widest font-bold">Hong Kong</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GroupCompanies
