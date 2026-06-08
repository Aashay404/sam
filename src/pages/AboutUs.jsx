import React from 'react'
import { motion } from 'framer-motion'
import { Ship, Truck, Factory, Users, Award, Zap, Globe } from 'lucide-react'

const AboutUs = () => {
  return (
    <div className="about-page text-[#f5f5f5] bg-[#0f0f0f]">
      {/* Title Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-32 pb-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight mb-6">
            Pioneering Global <span className="italic text-[#2D5A27] font-serif">Exports</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            A 25-year legacy of delivering India's finest horticulture to the world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-28 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <img src="/pomegranate.png" alt="Infrastructure" className="rounded-[30px] w-full shadow-2xl border border-zinc-800" />
            </div>
            <div className="space-y-6">
              <h4 className="text-[#2D5A27] font-bold tracking-widest text-xs uppercase">OUR COMPANY</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-black leading-tight text-white">Quality. Innovation. <br/>Trust.</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Sam Agri group founded in 1996 is a leading integrated exporter of fresh produce from India. Sam Agri is a pioneer in creating new product categories for export from India including fresh pomegranate arils, fresh cut coconut chunks, fresh figs, dried arils etc.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Sam Agri has integrated operations including nursery, captive farms, processing facilities and marketing channels across South India. We are the only fresh cut fruit exporter from India operating from multiple high care processing facilities offering 365 days supplies and better logistics connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Superplum Style Infographic - The Supply Chain */}
      <section className="py-16 md:py-28 px-6 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              From <span className="italic text-[#2D5A27] font-serif">Farm</span> to <span className="italic text-[#2D5A27] font-serif">Global Market</span>
            </h2>
            <p className="text-zinc-400 mt-3 text-sm md:text-base font-sans">Supply chain integration and control</p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
            {/* Horizontal connector line on desktop */}
            <div className="absolute top-[40px] left-[10%] right-[10%] bg-zinc-800 z-0 hidden lg:block" style={{ height: '2px' }}></div>
            {/* Vertical connector line on mobile */}
            <div className="absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[2px] bg-zinc-800 z-0 lg:hidden"></div>

            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Nursery', text: 'Proprietary high-yield seeds' },
              { icon: <Factory className="w-6 h-6" />, title: 'Captive Farms', text: '100% GAP Certified' },
              { icon: <Users className="w-6 h-6" />, title: 'Processing', text: 'ISO 22000 Cleanrooms' },
              { icon: <Ship className="w-6 h-6" />, title: 'Logistics', text: 'Cold-chain management' },
              { icon: <Globe className="w-6 h-6" />, title: 'Global Markets', text: 'UK, EU, USA, UAE' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 w-full max-w-[240px] lg:w-[18%] text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1a1a1a] border-2 border-[#2D5A27] rounded-full flex items-center justify-center mb-4 text-[#2D5A27] shadow-xl transition-transform hover:scale-105 duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans px-2">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">25+</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Years Experience</p>
            </div>
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">1000mt</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Annual Exports</p>
            </div>
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">100%</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Traceability</p>
            </div>
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">20+</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
