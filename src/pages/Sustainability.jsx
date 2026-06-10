import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Leaf, Handshake, Droplet, ShieldCheck, Sun, Eye, Award, 
  GraduationCap, Heart, CheckCircle2, ChevronRight, BarChart3, 
  Activity, Sparkles, Sprout, ShieldAlert, BadgeCheck, FileText, ClipboardCheck
} from 'lucide-react'

const Sustainability = () => {
  // Main Tabs State: 'environment', 'women-empowerment', 'ethical-sourcing', 'sam-foundation'
  const [activeTab, setActiveTab] = useState('environment')

  // Subtopic states for each section
  const [activeEnvSubtopic, setActiveEnvSubtopic] = useState(0)
  const [activeWomenSubtopic, setActiveWomenSubtopic] = useState(0)
  const [activeSourcingSubtopic, setActiveSourcingSubtopic] = useState(0)
  const [activeSourcingStep, setActiveSourcingStep] = useState(0)
  const [activeSamSubtopic, setActiveSamSubtopic] = useState(0)

  // 1. Environment Subtopics
  const envSubtopics = [
    {
      title: "Water Conservation",
      icon: <Droplet className="w-5 h-5" />,
      desc: "We maximize resource efficiency through advanced drip irrigation systems, smart soil moisture mapping, and water recycling facilities. This reduces our farming water footprint by up to 40%."
    },
    {
      title: "Soil Health & Bio-diversity",
      icon: <Sprout className="w-5 h-5" />,
      desc: "By implementing crop rotation, cover cropping, and organic compost enrichment, we restore soil biodiversity. Healthy soil naturally traps more carbon and holds moisture better."
    },
    {
      title: "Integrated Pest Management",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "We prioritize biological controls and natural predators over synthetic inputs, ensuring our crops are residue-free and minimizing ecological impact on local wildlife."
    },
    {
      title: "Renewable Energy",
      icon: <Sun className="w-5 h-5" />,
      desc: "Our high-care processing facilities are partially powered by rooftop solar installations, aiming for a 30% reduction in grid energy reliance by 2028."
    }
  ]

  // Certifications list for Environment
  const certifications = [
    { name: "Global G.A.P", logo: "/globalgapnew.png" },
    { name: "BRCGS", logo: "/brc.png" },
    { name: "ISO 22000", logo: "/iso.png" },
    { name: "SMETA", logo: "/smeta.png" },
    { name: "FSSAI", logo: "/fssai.png" },
    { name: "APEDA", logo: "/apeda.png" },
    { name: "US FDA", logo: "/fda.png" },
    { name: "Fairtrade", logo: "/fairtrade.png" }
  ]

  // 2. Women Empowerment
  const womenSubtopics = [
    {
      title: "Economic Autonomy",
      icon: <Award className="w-5 h-5" />,
      desc: "Every female employee receives her wages directly into her own bank account, fostering financial literacy, savings, and decision-making power in their households."
    },
    {
      title: "Safe & Equal Workplace",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "We enforce zero-tolerance safety policies, provide safe company transport for night-shifts, and offer equal pay for equal work, exceeding regional baselines."
    },
    {
      title: "Health & Wellbeing",
      icon: <Heart className="w-5 h-5" />,
      desc: "On-site maternal healthcare counseling, regular health checkups, and cleanroom ergonomics optimize physical wellbeing and sanitary safety."
    },
    {
      title: "Leadership Pathways",
      icon: <Sparkles className="w-5 h-5" />,
      desc: "We provide targeted training to transition female field operators into supervisor, quality assurance auditor, and lab analyst positions."
    }
  ]

  const womenStats = [
    { number: "70%", label: "Workforce", desc: "Of processing center positions are proudly held by women." },
    { number: "100%", label: "Direct Banking", desc: "No cash payments. Promoting financial independence." },
    { number: "120+", label: "Monthly Training", desc: "Hours dedicated to hygiene, quality control, and skills." },
    { number: "500+", label: "Families Impacted", desc: "Boosting household incomes across regional villages." }
  ]

  // 3. Ethical Sourcing Supply Chain Journey Steps
  const sourcingSteps = [
    {
      step: "01",
      title: "Nursery",
      desc: "We supply growers with certified, disease-resistant plant material to ensure high yields and healthy crops from day one."
    },
    {
      step: "02",
      title: "Contract Sourcing",
      desc: "Direct buy-back contracts at guaranteed fair minimum prices protect farmers from volatile wholesale market crashes."
    },
    {
      step: "03",
      title: "On-Farm Training",
      desc: "Our agronomists conduct frequent soil/water testing and teach integrated pest management directly to growers."
    },
    {
      step: "04",
      title: "Cold Chain Intake",
      desc: "Immediate cooling and transport in temperature-controlled reefers maintain quality and reduce post-harvest waste."
    },
    {
      step: "05",
      title: "Traceability",
      desc: "Digital tracking barcodes link exports to the exact grower farm block and date of harvest."
    }
  ]

  const sourcingSubtopics = [
    {
      title: "Fairtrade Compliance",
      icon: <Handshake className="w-5 h-5" />,
      desc: "Under Fairtrade terms, we return premium funds back to community committees to finance school expansions, medical equipment, and water wells."
    },
    {
      title: "Digital Traceability",
      icon: <BarChart3 className="w-5 h-5" />,
      desc: "Our proprietary barcode tracking ensures global buyers can scan any product and find its farm coordinates, agronomist report, and packing date."
    },
    {
      title: "Direct Farmer Support",
      icon: <Sprout className="w-5 h-5" />,
      desc: "We provide interest-free advance payments for agricultural inputs and subsidize soil health diagnostics for marginal smallholders."
    }
  ]

  // 4. Sam Foundation Subtopics
  const samSubtopics = [
    {
      title: "Rural Education Support",
      icon: <GraduationCap className="w-5 h-5" />,
      desc: "The foundation constructs classrooms, supplies computers to village schools, and provides scholarships to encourage girls to complete higher education."
    },
    {
      title: "Clean Drinking Water",
      icon: <Droplet className="w-5 h-5" />,
      desc: "We build community Reverse Osmosis (RO) water plants in fluoride-affected villages, providing safe drinking water to thousands of families."
    },
    {
      title: "Community Healthcare",
      icon: <Heart className="w-5 h-5" />,
      desc: "Free diagnostic medical camps, vision checkups, dental hygiene camps, and primary care access in remote farming belts."
    },
    {
      title: "Drought & Disaster Relief",
      icon: <Sprout className="w-5 h-5" />,
      desc: "Providing emergency water tankers, livestock fodder banks, and food rations during severe dry spells or seasonal anomalies."
    }
  ]

  return (
    <div className="sustainability-page text-on-surface bg-white min-h-screen font-sans">
      
      {/* Hero Header Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000" 
            className="w-full h-full object-cover opacity-45" 
            alt="Sustainability Background" 
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black/90"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-in">
          <span className="text-[#9ef295] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
            Our Responsibility
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-tight mb-6 uppercase tracking-tighter">
            Responsible Growth from <br/>
            <span className="italic text-[#9ef295]">Root to Market</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            At Sam Agri, sustainability is not a checkbox; it is the core of our operations. 
            We integrate environmental stewardship, female empowerment, ethical supply chains, 
            and community development into a single, cohesive model.
          </p>
        </div>
      </section>

      {/* Main Navigation Tabs */}
      <section className="py-6 px-6 sticky top-[80px] z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-100/90 border border-zinc-200/80 rounded-2xl md:rounded-full p-1.5 flex flex-wrap md:flex-nowrap justify-between gap-1 shadow-md">
            {[
              { id: 'environment', label: 'Environment', icon: <Leaf className="w-4 h-4" /> },
              { id: 'women-empowerment', label: 'Women Empowerment', icon: <Award className="w-4 h-4" /> },
              { id: 'ethical-sourcing', label: 'Ethical Sourcing', icon: <Handshake className="w-4 h-4" /> },
              { id: 'sam-foundation', label: 'Sam Foundation', icon: <Heart className="w-4 h-4" /> }
            ].map((tab) => {
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2.5 px-4 md:px-6 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 w-full md:w-auto ${
                    active 
                      ? 'bg-[#2D5A27] text-white shadow-lg border border-emerald-700/50' 
                      : 'text-zinc-500 hover:text-[#2D5A27] hover:bg-zinc-200/50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Content */}
      <main className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: ENVIRONMENT */}
          {activeTab === 'environment' && (
            <motion.div
              key="environment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Heading */}
              <div className="text-center md:text-left border-l-4 border-[#2D5A27] pl-4">
                <span className="text-[#2D5A27] text-xs font-black tracking-widest uppercase block mb-1">Our Planet</span>
                <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800">Environment & Responsible Farming</h2>
              </div>

              {/* Grid: Subtopics (Left) & Photograph (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left Half: Vertical Subtopics Tabs */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                    Our agricultural methods focus on replenishing natural resources. From smart water tracking to organic biodiversity enrichment, we ensure our ecosystem remains robust for generations to come.
                  </p>
                  
                  <div className="space-y-4">
                    {envSubtopics.map((sub, idx) => {
                      const active = activeEnvSubtopic === idx
                      return (
                        <div 
                          key={idx}
                          onClick={() => setActiveEnvSubtopic(idx)}
                          className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                            active 
                              ? 'bg-[#2D5A27]/5 border-[#2D5A27]/30 shadow-md' 
                              : 'bg-zinc-50/50 border-zinc-200/80 hover:border-zinc-300'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl transition-all duration-355 ${
                              active ? 'bg-[#2D5A27] text-white' : 'bg-zinc-100 text-zinc-500'
                            }`}>
                              {sub.icon}
                            </div>
                            <div>
                              <h4 className={`text-sm md:text-base font-bold transition-colors ${
                                active ? 'text-[#2D5A27]' : 'text-zinc-800'
                              }`}>
                                {sub.title}
                              </h4>
                              {active && (
                                <motion.p 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="text-zinc-600 text-xs md:text-sm mt-3 leading-relaxed"
                                >
                                  {sub.desc}
                                </motion.p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Half: Photograph */}
                <div className="lg:col-span-5 relative group">
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                    <img 
                      src="/farm_3d.png" 
                      alt="Organic farm environment" 
                      className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] text-[#9ef295] font-black uppercase tracking-widest block mb-1">Captive Farms</span>
                      <p className="text-white text-xs font-medium">100% GAP compliance across our farming operations.</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: WOMEN EMPOWERMENT */}
          {activeTab === 'women-empowerment' && (
            <motion.div
              key="women-empowerment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Heading & Intro */}
              <div className="border-l-4 border-[#2D5A27] pl-4 max-w-3xl">
                <span className="text-[#2D5A27] text-xs font-black tracking-widest uppercase block mb-1">Social Impact</span>
                <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800 mb-4">Empowering Women in Agriculture</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  We believe that empowering women leads to stronger communities. At our processing and packaging centers, 
                  women form the backbone of our operations, achieving economic independence, leadership roles, and technical expertise.
                </p>
              </div>

              {/* Grid: Left (Photograph + Numbers) & Right (Vertical Tabs) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left Half: Photograph & Interactive Numbers Grid */}
                <div className="lg:col-span-6 space-y-8">
                  {/* Photo */}
                  <div className="relative group overflow-hidden rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                    <img 
                      src="/women_empowerment.png" 
                      alt="Women operators in high care facility" 
                      className="w-full h-[280px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=600' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Numbers List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {womenStats.map((stat, idx) => (
                      <div 
                        key={idx}
                        className="bg-zinc-50/50 border border-zinc-200 rounded-2xl p-5 hover:border-[#2D5A27]/50 transition-all duration-300"
                      >
                        <div className="text-3xl font-black text-secondary font-sans mb-1">{stat.number}</div>
                        <div className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">{stat.label}</div>
                        <p className="text-zinc-600 text-xs leading-relaxed">{stat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Half: Vertical Tabs */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">Key Areas of Focus</div>
                  <div className="flex flex-col gap-4">
                    {womenSubtopics.map((sub, idx) => {
                      const active = activeWomenSubtopic === idx
                      return (
                        <div 
                          key={idx}
                          onClick={() => setActiveWomenSubtopic(idx)}
                          className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5 ${
                            active 
                              ? 'bg-[#2D5A27]/5 border-[#2D5A27]/30 shadow-lg' 
                              : 'bg-zinc-50/50 border-zinc-200/80 hover:border-zinc-300'
                          }`}
                        >
                          <div className={`p-3 rounded-xl transition-all ${
                            active ? 'bg-[#2D5A27] text-white' : 'bg-zinc-100 text-zinc-500'
                          }`}>
                            {sub.icon}
                          </div>
                          <div className="space-y-1">
                            <h4 className={`text-sm md:text-base font-bold transition-colors ${
                              active ? 'text-[#2D5A27]' : 'text-zinc-800'
                            }`}>
                              {sub.title}
                            </h4>
                            {active && (
                              <motion.p 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-zinc-600 text-xs md:text-sm pt-2 leading-relaxed"
                              >
                                {sub.desc}
                              </motion.p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: ETHICAL SOURCING */}
          {activeTab === 'ethical-sourcing' && (
            <motion.div
              key="ethical-sourcing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Heading & Intro */}
              <div className="border-l-4 border-[#2D5A27] pl-4 max-w-3xl">
                <span className="text-[#2D5A27] text-xs font-black tracking-widest uppercase block mb-1">Supply Chain Integrity</span>
                <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800 mb-4">Ethical Sourcing & Fairtrade</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Ethical sourcing is the bedrock of our global supply chain. We build direct, transparent relationships with 
                  smallholder farmers, ensuring guaranteed fair minimum prices, agronomy guidance, and absolute traceability from field to shelf.
                </p>
              </div>

              {/* Journey Stepper Component */}
              <div className="bg-zinc-50/50 border border-zinc-200 rounded-3xl p-6 md:p-10">
                <h3 className="text-base md:text-lg font-bold text-zinc-800 mb-6 text-center">Demonstrating the Supply Chain Journey</h3>
                
                {/* Horizontal steps bar */}
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                  {/* Step Connector Line */}
                  <div className="absolute top-[34px] left-[8%] right-[8%] bg-zinc-200 z-0 hidden md:block" style={{ height: '2px' }}></div>
                  
                  {sourcingSteps.map((step, idx) => {
                    const active = activeSourcingStep === idx
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSourcingStep(idx)}
                        className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-3 w-full md:w-[18%] text-left md:text-center group"
                      >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold font-sans text-base transition-all duration-355 ${
                          active 
                            ? 'bg-[#2D5A27] text-white scale-110 shadow-lg border border-emerald-600' 
                            : 'bg-zinc-100 text-zinc-500 border border-zinc-200 group-hover:border-[#2d5a27]/50'
                        }`}>
                          {step.step}
                        </div>
                        <div>
                          <div className={`text-xs md:text-sm font-bold transition-colors ${
                            active ? 'text-primary' : 'text-zinc-500 group-hover:text-zinc-800'
                          }`}>
                            {step.title}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Step Detail Card */}
                <div className="mt-8 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="max-w-2xl space-y-3">
                    <span className="text-[#2D5A27] text-[10px] font-bold uppercase tracking-widest">
                      Stage {sourcingSteps[activeSourcingStep].step} Details
                    </span>
                    <h4 className="text-lg font-bold text-zinc-800">{sourcingSteps[activeSourcingStep].title}</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">{sourcingSteps[activeSourcingStep].desc}</p>
                  </div>
                  <div className="flex-shrink-0 bg-[#2D5A27]/10 border border-[#2D5A27]/25 rounded-2xl px-6 py-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold text-zinc-800 tracking-wide">Fully Traceable Step</span>
                  </div>
                </div>
              </div>

              {/* Grid: Left (Subtopics) & Right (Photo + Testimonial) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Half: Sourcing Subtopics */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">Grower Support Systems</div>
                  <div className="space-y-4">
                    {sourcingSubtopics.map((sub, idx) => {
                      const active = activeSourcingSubtopic === idx
                      return (
                        <div 
                          key={idx}
                          onClick={() => setActiveSourcingSubtopic(idx)}
                          className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                            active 
                              ? 'bg-[#2D5A27]/5 border-[#2D5A27]/30 shadow-lg' 
                              : 'bg-zinc-50/50 border-zinc-200/80 hover:border-zinc-300'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl transition-all ${
                              active ? 'bg-[#2D5A27] text-white' : 'bg-zinc-100 text-zinc-500'
                            }`}>
                              {sub.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className={`text-sm md:text-base font-bold transition-colors ${
                                active ? 'text-[#2D5A27]' : 'text-zinc-800'
                              }`}>
                                {sub.title}
                              </h4>
                              {active && (
                                <motion.p 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="text-zinc-600 text-xs md:text-sm mt-3 leading-relaxed"
                                >
                                  {sub.desc}
                                </motion.p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Half: Photo + Testimonial */}
                <div className="lg:col-span-6 space-y-8">
                  {/* Photo */}
                  <div className="relative group overflow-hidden rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                    <img 
                      src="/ethical_sourcing.png" 
                      alt="Agronomist assisting farmer on field" 
                      className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                  </div>

                  {/* Farmer Testimonial Card */}
                  <div className="bg-[#2D5A27]/5 border border-[#2D5A27]/20 backdrop-blur-md rounded-3xl p-6 md:p-8 relative shadow-xl">
                    <div className="text-4xl text-[#2D5A27] font-serif absolute top-4 left-6 opacity-20">“</div>
                    <blockquote className="text-zinc-600 text-sm md:text-base italic leading-relaxed pl-4 relative z-10">
                      Partnering with Sam Agri gave us price security and the agronomy skills to double our yield. We now farm with confidence, knowing we have a trusted partner.
                    </blockquote>
                    <div className="mt-5 pl-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2D5A27] flex items-center justify-center text-xs font-bold text-white">
                        RK
                      </div>
                      <div>
                        <cite className="not-italic text-sm font-bold text-zinc-800 block">Ramappa K.</cite>
                        <span className="text-zinc-500 text-[10px] uppercase font-semibold">Pomegranate Grower, Anantapur District</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: SAM FOUNDATION */}
          {activeTab === 'sam-foundation' && (
            <motion.div
              key="sam-foundation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Heading & Intro */}
              <div className="border-l-4 border-[#2D5A27] pl-4 max-w-3xl">
                <span className="text-[#2D5A27] text-xs font-black tracking-widest uppercase block mb-1">Corporate Social Responsibility</span>
                <h2 className="text-3xl md:text-5xl font-sans font-black text-zinc-800 mb-4">The Sam Foundation</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  The Sam Foundation is our social impact initiative dedicated to uplifting the rural communities that support us. 
                  Through targeted investments in education, health, and clean drinking water, we aim to build resilient farming villages.
                </p>
              </div>

              {/* Grid Layout: Horizontal tabs (CSR subtopics) */}
              <div className="space-y-8">
                
                {/* Horizontal CSR subtopic selectors */}
                <div className="flex flex-wrap md:flex-nowrap gap-3 bg-zinc-100 border border-zinc-200 rounded-2xl p-2">
                  {samSubtopics.map((sub, idx) => {
                    const active = activeSamSubtopic === idx
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSamSubtopic(idx)}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-355 ${
                          active 
                            ? 'bg-[#2D5A27] text-white shadow-md' 
                            : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/50'
                        }`}
                      >
                        {sub.icon}
                        <span className="truncate">{sub.title}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Subtopic description & Image Panel */}
                <div className="bg-zinc-50/50 border border-zinc-200 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-[#2D5A27] text-[10px] font-black uppercase tracking-widest block">CSR Initiative Focus</span>
                    <h3 className="text-xl md:text-2xl font-sans font-black text-zinc-800">
                      {samSubtopics[activeSamSubtopic].title}
                    </h3>
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                      {samSubtopics[activeSamSubtopic].desc}
                    </p>
                    <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-zinc-500">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Direct Community Funding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Verified Social Metrics</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-zinc-200 shadow-xl">
                    <img 
                      src="/sam_foundation.png" 
                      alt="Sam Foundation village support" 
                      className="w-full h-[220px] md:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105 animate-in"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

    </div>
  )
}

export default Sustainability
