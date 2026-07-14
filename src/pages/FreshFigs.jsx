import React from 'react'

const FreshFigs = () => {
  return (
    <main className="bg-[#faf9f5] text-on-surface selection:bg-[#7e1a12] selection:text-white">
      {/* Banner */}
      <section className="min-h-screen bg-gradient-to-br from-[#7e1a12] to-black relative flex flex-col md:flex-row items-center px-6 md:px-12 overflow-hidden pt-24 md:pt-0">
        <div className="w-full md:max-w-xl text-white relative z-10 animate-in py-12 md:pt-32 md:pb-16">
          <span className="text-[#9ef295] font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Exotic Indian Variety</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-none mb-6 md:mb-8 uppercase tracking-tighter">Fresh <br /><span className="italic text-[#9ef295]">Figs</span></h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans mb-8 md:mb-10">
            We are the pioneers in exporting fresh figs from India, bringing unique sweetness and texture to global markets.
          </p>
          <a href="#catalog" className="w-full md:w-auto text-center bg-[#0d631b] text-white px-10 py-4 md:py-5 rounded-full font-display font-bold tracking-widest uppercase hover:bg-white hover:text-[#0d631b] transition-all inline-block">View Catalog</a>
        </div>
        <div className="w-full md:absolute md:right-0 md:top-0 h-[400px] md:h-full md:w-1/2">
          <img src="/figs_3d.png" className="w-full h-full object-cover" alt="Fresh Figs" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Fresh+Figs' }} />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Product Specs */}
      <section id="catalog" className="py-12 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5d4037] uppercase">Hand-Picked Perfection</h2>
            <p className="text-sm md:text-lg text-zinc-600 leading-relaxed">
              Our figs are harvested at peak ripeness and processed with extreme care to maintain their delicate structure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 bg-zinc-50 rounded-2xl border-l-4 border-[#0d631b]">
                <h4 className="font-bold text-[#5d4037] mb-2 uppercase text-[10px] tracking-widest">Shelf Life</h4>
                <p className="text-xl md:text-2xl font-serif font-bold">5–7 Days</p>
                <p className="text-[10px] text-zinc-400">Strict cold chain (0-2°C)</p>
              </div>
              <div className="p-6 md:p-8 bg-zinc-50 rounded-2xl border-l-4 border-[#7e1a12]">
                <h4 className="font-bold text-[#5d4037] mb-2 uppercase text-[10px] tracking-widest">Varieties</h4>
                <p className="text-xl md:text-2xl font-serif font-bold">Dinkar</p>
                <p className="text-[10px] text-zinc-400">& Deanna variants</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem]">
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-[#0d631b]">Technical Specifications</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex justify-between border-b border-zinc-200 pb-4">
                <span className="text-zinc-500 font-medium text-xs md:text-sm">Brix Content</span>
                <span className="font-bold text-xs md:text-sm">14 - 18%</span>
              </li>
              <li className="flex justify-between border-b border-zinc-200 pb-4">
                <span className="text-zinc-500 font-medium text-xs md:text-sm">Packing Size</span>
                <span className="font-bold text-right text-xs md:text-sm">160g, 1kg, 2.5kg</span>
              </li>
              <li className="flex justify-between border-b border-zinc-200 pb-4">
                <span className="text-zinc-500 font-medium text-xs md:text-sm">Logistics</span>
                <span className="font-bold text-xs md:text-sm">Air Freight</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FreshFigs
