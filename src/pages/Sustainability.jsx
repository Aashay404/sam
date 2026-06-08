import React from 'react'

const Sustainability = () => {
  return (
    <div className="sustainability-page text-[#f5f5f5] bg-[#0f0f0f]">
      {/* Hero Header */}
      <section className="min-h-[40vh] flex items-center justify-center pt-32 pb-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6">
            Our Commitment to <br/>
            <span className="italic text-[#2D5A27] font-serif">Sustainability</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            At Sam Agri, sustainability is at the core of our operations. We ensure that our farming practices are environmentally friendly and ethically sound.
          </p>
        </div>
      </section>

      {/* Sustainability Grid */}
      <section className="py-16 md:py-28 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <li className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-leaf text-xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Global GAP</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Certified Good Agricultural Practices (G.A.P.) across all captive farms ensuring clean and safe production.
              </p>
            </li>
            <li className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-handshake text-xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Fairtrade</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Ensuring ethical treatment, safe working conditions, and fair wages for all our farming and production partners.
              </p>
            </li>
            <li className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-tint text-xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Water Management</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Implementing advanced drip irrigation, soil moisture tracking, and water conservation techniques.
              </p>
            </li>
            <li className="bg-[#161616] p-8 md:p-10 rounded-[2rem] border border-zinc-800 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-2xl flex items-center justify-center text-[#2D5A27] mb-6">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Hygiene & Safety</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                BRCGS & ISO 22000 certified cleanroom facilities enforcing the highest levels of global food safety protocols.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Sustainability
