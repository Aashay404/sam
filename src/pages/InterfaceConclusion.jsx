import React from 'react'

const InterfaceConclusion = () => {
  return (
    <main className="min-h-screen flex flex-col pt-32 text-white selection:bg-red-500 selection:text-white" style={{ background: 'linear-gradient(135deg, #7e1a12 0%, #1a0505 100%)', backgroundAttachment: 'fixed' }}>
      {/* Upper Half: Our Certifications */}
      <section className="py-24 px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Quality & Safety Standards</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white uppercase leading-none">Global <span className="text-red-500">Certifications</span></h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {/* Global GAP */}
            <a href="https://www.globalgap.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/globalgapnew.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="Global GAP" />
            </a>
            {/* BRC */}
            <a href="https://www.brcgs.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/brc.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="BRCGS" />
            </a>
            {/* ISO */}
            <a href="https://www.iso.org/publication/PUB200220.html?utm_source=google&utm_medium=ppc_paid_social&utm_campaign=ISO22000&gad_source=1&gad_campaignid=23276729455&gbraid=0AAAAABtQACEufWfeWwUoDPL3DH_xtnMu1&gclid=CjwKCAjw5s_QBhAdEiwADD_gBgpQ8CU9iLKyxxJYkj73VLR4oXxB7oGBw0nKCIv8HFViNCJStEFwrRoC5PYQAvD_BwE" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/iso.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="ISO 22000" />
            </a>
            {/* FSSAI */}
            <a href="https://www.fssai.gov.in/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/fssai.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="FSSAI" />
            </a>
            {/* US FDA */}
            <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/fda.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="US FDA" />
            </a>
            {/* SEDEX / SMETA */}
            <a href="https://www.sedex.com/solutions/smeta-audit/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/ssmeta1234.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="SMETA" />
            </a>
            {/* Fairtrade */}
            <a href="https://www.fairtrade.net/en/for-business/how-to-get-involved/get-certified.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full">
              <img src="/fairtrade.png" className="h-20 w-auto object-contain invert mix-blend-screen" alt="Fairtrade" />
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 px-12 bg-transparent border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-red-500"></div>
                <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Social Buzz</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white uppercase leading-none">Instagram <span className="text-red-500">Feed</span></h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Follow our journey</p>
                <p className="text-xs font-bold text-red-500">@samagrigroup</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <i className="fab fa-instagram text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram Post" />
            </div>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram Post" />
            </div>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1615485290382-441e4d019cb5?q=80&w=2000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram Post" />
            </div>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram Post" />
            </div>
          </div>

          <div className="flex justify-center">
            <a href="https://instagram.com/samagrigroup" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-12 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40">
              Visit Official Instagram <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default InterfaceConclusion
