import React from 'react'

const Advantage = () => {
  return (
    <div className="advantage-page text-[#f5f5f5] bg-[#0f0f0f]">
      {/* Title Section */}
      <section className="min-h-[40vh] flex items-center justify-center pt-32 pb-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6">
            The Sam Agri <span className="italic text-[#2D5A27] font-serif">Advantage</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Why leading global retailers and food companies choose Sam Agri as their trusted supply chain partner.
          </p>
        </div>
      </section>
      
      {/* Advantage Grid */}
      <section className="py-16 md:py-28 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-link text-xl"></i>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Integrated Operations</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                From high-care nurseries to captive farming operations, we control the entire value chain. This ensures 100% full batch traceability and superior quality control at every stage.
              </p>
            </div>
            <div className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-building text-xl"></i>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">State-of-the-Art Facilities</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Operating multiple high-care, temperature-controlled processing facilities in Nashik, Bangalore, and Hyderabad to guarantee 365 days of consistent, premium supply.
              </p>
            </div>
            <div className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-certificate text-xl"></i>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Global Certifications</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Accredited with BRCGS (AA Grade), Global G.A.P., ISO 22000, US FDA registry, SMETA, and Fairtrade, satisfying strict international safety standards.
              </p>
            </div>
            <div className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Product Innovation</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Pioneering brand-new fresh-cut fruit and vegetable categories for international trade, including fresh pomegranate arils and fresh cut coconut chunks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Advantage
