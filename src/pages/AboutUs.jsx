import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const milestones = [
    { year: '1996', desc: 'Incorporation of Sam Agri', isSecondary: false },
    { year: '2000', desc: 'Started marketing of exotic vegetables in India', isSecondary: false },
    { year: '2001', desc: 'Commenced export operations', isSecondary: false },
    { year: '2005', desc: 'Establishment of captive GAP certified farms', isSecondary: false },
    { year: '2006', tag: 'Facility I:', desc: 'Established our first high care facility for arils', isSecondary: true },
    { year: '2007', tag: 'India First:', desc: 'Commenced export of arils to international markets', isSecondary: true },
    { year: '2009', desc: 'Crossed 100 MT of Pomegranate Arils export in a calendar year', isSecondary: true },
    { year: '2010', desc: 'Export of Coconut chunks to international markets', isSecondary: true },
    { year: '2014', tag: 'Facility II:', desc: 'Expansion of capacity with new facility @ Bangalore', isSecondary: false },
    { year: '2016', tag: 'India First:', desc: 'Fresh Figs to international markets', isSecondary: false },
    { year: '2018', desc: 'Crossed 1000 MT of pomegranate Arils export in a calendar year', isSecondary: false },
    { year: '2019', tag: 'Facility III:', desc: 'Expansion of capacity with new facility @ Nashik', isSecondary: false },
  ]

  const markets = [
    { code: 'gb', name: 'UK' },
    { code: 'us', name: 'USA' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'be', name: 'Belgium' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'es', name: 'Spain' },
    { code: 'ae', name: 'UAE' },
    { code: 'hk', name: 'Hong Kong' },
  ]

  const team = [
    {
      name: 'GVK Naidu',
      role: 'Managing Director',
      image: '/assets/team/gvknaidu.png',
      bio: [
        'Spearheads strategy, growth & diversifications of the group',
        '30+ years of agri-business experience & serial entrepreneur',
        'Graduate from UAS, Bangalore'
      ]
    },
    {
      name: 'Priyatham V',
      role: 'CEO',
      image: '/assets/team/priyatham.png',
      bio: [
        'Spearheads international marketing & finance of the group',
        '18+ years of experience in investment banking & agri business',
        'Graduate from BITS Pilani & MBA from IIM Lucknow'
      ]
    },
    {
      name: 'David Levin',
      role: 'Marketing Director',
      image: '/assets/team/david.png',
      bio: [
        'Responsible for marketing in Europe & Sourcing from Israel',
        '35+ years of international fresh produce marketing experience',
        'Engineering Graduate from Fairleigh Dickinson University, US'
      ]
    },
    {
      name: 'KN Rao',
      role: 'Technical Director',
      image: '/assets/team/knrao.png',
      bio: [
        'Responsible for Technology, Research & NPD initiative of the group',
        '25+ years of experience in farming, high care processing, food safety & hygiene',
        'Graduate in Agriculture from AP Agriculture University'
      ]
    },
    {
      name: 'Ajay TG',
      role: 'Head – Domestic Business',
      image: '/assets/team/ajay.png',
      bio: [
        'Responsible for domestic business division of Sam Agri',
        '12+ years of experience in hotel, catering & fresh produce industry',
        'Graduate in Hotel Management & MBA from Christ University'
      ]
    },
    {
      name: 'Suresh Babu',
      role: 'Manager - Finance',
      image: '/assets/team/suresh.png',
      bio: [
        'Responsible for finance, accounts, banking & logistics of the group',
        '20+ years of experience in finance & accounting domains',
        'Graduate in Commerce'
      ]
    },
    {
      name: 'Marcel Bangerter',
      role: 'Marketing Director, Switzerland',
      image: '/assets/team/marcel.png',
      bio: [
        'Responsible for marketing of Sam Agri products in Switzerland market',
        'Founder of suiXtrade GmbH and the Zoë Ray brand',
        'Has 20+ years of experience in investment banking and fresh produce marketing.'
      ]
    }
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="bg-[#faf9f5] text-on-surface selection:bg-secondary/20 selection:text-secondary min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#7e1a12] to-black flex items-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" 
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
            Our Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-none uppercase tracking-tighter"
          >
            Group <br />
            <span className="text-[#9ef295]">Profile</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg text-white max-w-lg mt-8 font-sans"
          >
            Nurturing heritage, delivering perfection. A legacy built on quality since 1996.
          </motion.p>
        </div>
      </section>

      {/* Who We Are (Kaybee Style) */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="space-y-6 md:space-y-8 text-left"
            >
              <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest rounded-full">
                Our Story
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
                WHO WE <span className="text-secondary">ARE</span>
              </h2>
              <div className="w-20 h-1.5 bg-secondary"></div>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-sans">
                Sam Agri group founded in 1996 is a leading integrated exporter of fresh produce from India. Sam Agri is a pioneer in creating new product categories for export from India including fresh pomegranate arils, fresh cut coconut chunks, fresh figs, dried arils etc.
              </p>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-80 font-sans">
                Sam Agri has integrated operations including nursery, captive farms, processing facilities and marketing channels across South India.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-12 pt-4 md:pt-8">
                <div className="p-6 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                  <h4 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">25+</h4>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-500">Years of Growth</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-2xl border-l-4 border-secondary">
                  <h4 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-2">1000+</h4>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-500">MT Arils Annually</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-zinc-100">
                <img 
                  src="https://images.unsplash.com/photo-1541344999736-83eca272f6fc?q=80&w=2000" 
                  className="w-full h-full object-cover" 
                  alt="Quality Produce" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/5 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Milestones */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4 uppercase tracking-tighter">
              OUR <span className="text-secondary">MILESTONES</span>
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto"></div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10"
          >
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className={`relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 text-left ${
                  m.isSecondary ? 'border-secondary' : 'border-primary'
                }`}
              >
                <div className={`text-4xl font-serif font-bold mb-2 ${m.isSecondary ? 'text-secondary' : 'text-primary'}`}>
                  {m.year}
                </div>
                {m.tag && (
                  <p className={`text-xs font-black uppercase tracking-[0.1em] mb-2 ${
                    m.isSecondary ? 'text-secondary' : 'text-primary'
                  }`}>
                    {m.tag}
                  </p>
                )}
                <p className="text-sm font-bold text-zinc-600 leading-relaxed font-sans">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Infrastructure & Quality */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8 bg-surface-container-low p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-zinc-100 hover:shadow-2xl transition-all duration-300 group text-left"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <i className="fas fa-industry text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                State-of-the-art <span className="text-[#83d57c]">Infrastructure</span>
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-sans">
                Operating 4 high-care processing facilities strategically located in South India&apos;s major growing regions. Match highest standards of hygiene and automation.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8 bg-secondary/5 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-zinc-100 hover:shadow-2xl transition-all duration-300 group text-left"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <i className="fas fa-award text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                Quality & <span className="text-secondary/60">Food Safety</span>
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-sans">
                Global accreditations including BRC, ISO:22000, HACCP, and SMETA. End-to-end traceability for every single pack.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Markets */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4 uppercase tracking-[0.2em]">
              OUR MARKETS
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto"></div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 justify-center"
          >
            {markets.map((m, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex flex-col items-center gap-3 md:gap-4 group cursor-default"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={`https://flagcdn.com/w160/${m.code}.png`} 
                    className="w-full h-full object-cover" 
                    alt={m.name} 
                  />
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">
                  {m.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-surface-container-low py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              The Minds Behind Sam Agri
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-on-surface leading-tight uppercase tracking-tighter">
              OUR <span className="text-secondary">LEADERSHIP</span>
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img 
                      src={member.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                      alt={member.name} 
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=' + member.name }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 z-10">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4 md:mb-6">
                        {member.role}
                      </p>
                      <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/70 font-medium border-t border-white/20 pt-4 md:pt-6 text-left">
                        {member.bio.map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-3">
                            <i className="fas fa-check text-secondary text-[10px] mt-1 flex-shrink-0"></i>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Default Info (Fades out on hover, preventing layout shifts by retaining space) */}
                  <div className="p-6 md:p-8 group-hover:opacity-0 transition-opacity duration-500 text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-black text-xs uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
