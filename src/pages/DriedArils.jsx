import React from 'react'

const DriedArils = () => {
  return (
    <main className="bg-[#4a0a05] text-on-surface selection:bg-[#7e1a12] selection:text-white">
      {/* Premium Hero Section */}
      <section className="relative w-full min-h-screen md:h-screen overflow-hidden flex flex-col md:flex-row items-stretch pt-24 md:pt-0">
        {/* Content Side */}
        <div className="w-full md:w-[50%] bg-gradient-to-br from-[#4a0a05] to-[#1a0505] flex flex-col justify-center px-8 md:px-20 py-16 md:pt-32 md:pb-16 relative z-10">
          <div className="max-w-xl animate-in">
            <span className="inline-block bg-white/10 text-[#9ef295] border border-white/20 rounded-full px-4 py-1 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
              Shelf-Stable Excellence
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[0.9] mb-6 md:mb-8 uppercase tracking-tighter">
              Dried <br/><span className="text-[#9ef295]">Arils</span>
            </h1>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-sans mb-12 font-light">
              Crafted exclusively from <span className="text-[#9ef295] font-bold">Bhagwa</span> pomegranates using a slow-dry process that locks in vibrant colour, natural sugars, and soft-chewy texture, our dried arils carry a clean-label promise — no added sugars, no artificial preservatives, no compromises. 
              <br /><br />
              With an extended shelf life of up to 12 months, they are ideally positioned for snacking, bakery, confectionary, and functional food formulations — offering manufacturers and retailers a premium, shelf-stable ingredient with strong consumer appeal.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#spec" className="group relative overflow-hidden px-10 py-5 bg-[#0d631b] text-white rounded-full font-bold tracking-widest uppercase transition-all hover:pr-14 shadow-[0_20px_40px_rgba(13,99,27,0.3)] hover:shadow-[#0d631b]/40 inline-block text-center">
                <span className="relative z-10">Technical Specifications</span>
                <i className="fas fa-arrow-right absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-[50%] relative h-[500px] md:h-auto">
          <img alt="Dried Pomegranate Arils" className="absolute inset-0 w-full h-full object-cover scale-105" src="/assets/dried-arils.jpg" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Dried+Arils' }} />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a0505] via-transparent to-transparent"></div>
          <div className="absolute bottom-12 right-12 text-right hidden md:block">
            <span className="text-white/10 text-8xl font-serif font-bold italic select-none">Natural Pure</span>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section id="spec" className="bg-[#faf9f5] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Feature Grid */}
            <div className="lg:col-span-12">
              <div className="max-w-2xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4 md:mb-6 uppercase tracking-tighter">
                  Product <span className="text-primary">Overview</span>
                </h2>
                <div className="w-16 md:w-24 h-1 md:h-1.5 bg-primary"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Bright Red Colour</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Retains the natural vibrant ruby hue through our specialized drying method.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-cookie"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Soft & Chewy Texture</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Perfectly balanced moisture levels for an ideal snacking experience.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-cube"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">High Natural Sugars</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Concentrated natural sweetness with zero added sugars or syrups.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">No Additives</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">100% pure pomegranate fruit with no artificial preservatives.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-warehouse"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Shelf-Stable</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Durable and easy to store without the need for refrigeration.</p>
                </div>
                <div className="group bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 hover:border-primary/20 transition-all hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className="fas fa-blender"></i>
                  </div>
                  <h5 className="text-lg font-bold text-zinc-800 mb-2">Ingredient Ready</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">Ideally sized and textured for immediate use in manufacturing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-20 border-t border-zinc-200">
            <div className="bg-[#faf9f5] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-200/60 border-l-4 border-l-[#9ef295]">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Shelf Life</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">9-12 Months</p>
              <p className="text-[10px] text-zinc-500 font-sans">Packaging Dependent</p>
            </div>
            <div className="bg-[#faf9f5] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-200/60 border-l-4 border-l-[#0d631b]">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Variety</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">Bhagwa</p>
              <p className="text-[10px] text-zinc-500 font-sans">Single Variety</p>
            </div>
            <div className="bg-[#faf9f5] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-200/60 border-l-4 border-l-[#7e1a12]">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Processing</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">Slow-Dried</p>
              <p className="text-[10px] text-zinc-500 font-sans">Natural Dehydration</p>
            </div>
            <div className="bg-[#faf9f5] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-200/60 border-l-4 border-l-zinc-300">
              <h4 className="font-bold text-zinc-400 uppercase text-[9px] tracking-widest mb-4">Label Status</h4>
              <p className="text-lg md:text-xl font-serif font-bold text-zinc-800 mb-2">100% Natural</p>
              <p className="text-[10px] text-zinc-500 font-sans">Clean Label Promise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-1 bg-secondary mx-auto mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-10 leading-tight">A premium, shelf-stable ingredient with strong consumer appeal.</h2>
          <button className="px-12 py-5 bg-primary text-white rounded-full font-bold tracking-widest uppercase hover:bg-zinc-900 transition-all shadow-xl">Request Samples</button>
        </div>
      </section>
    </main>
  )
}

export default DriedArils
