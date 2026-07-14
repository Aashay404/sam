import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalPresenceMap from '../components/GlobalPresenceMap'

const INDIA_HQ = {
  name: 'INDIA HQ',
  geo: [74.5, 18.9],   // Nashik region
  code: 'in',
  id: 356,
  desc: "Central hub for Sam Agri's global fresh produce logistics and sustainable agriculture."
}

const DESTINATIONS = [
  { name: 'USA', id: 840, geo: [-98, 38], code: 'us', flag: '🇺🇸', region: 'Americas', desc: 'Premier market for our fresh pomegranate arils and whole-fruit exports.' },
  { name: 'UK', id: 826, geo: [-1.5, 52.5], code: 'gb', flag: '🇬🇧', region: 'Europe', desc: 'Key distribution hub supplying premium fresh produce to major UK retailers.' },
  { name: 'NETHERLANDS', id: 528, geo: [5.3, 52.1], code: 'nl', flag: '🇳🇱', region: 'Europe', desc: 'Strategic cold-chain gateway for our European fresh-produce logistics.' },
  { name: 'SWITZERLAND', id: 756, geo: [8.2, 46.8], code: 'ch', flag: '🇨🇭', region: 'Europe', desc: 'Premium market for organic certified pomegranate arils and fresh cut fruits.' },
  { name: 'BELGIUM', id: 56, geo: [4.4, 50.5], code: 'be', flag: '🇧🇪', region: 'Europe', desc: 'Key European distribution gateway and retail partner for premium produce.' },
  { name: 'GERMANY', id: 276, geo: [10.4, 51.2], code: 'de', flag: '🇩🇪', region: 'Europe', desc: 'High-demand market recognizing our BRC AA and Global GAP quality standards.' },
  { name: 'FRANCE', id: 250, geo: [2.3, 46.2], code: 'fr', flag: '🇫🇷', region: 'Europe', desc: 'Retail and foodservice partnerships across the French premium segment.' },
  { name: 'SPAIN', id: 724, geo: [-3.7, 40.4], code: 'es', flag: '🇪🇸', region: 'Europe', desc: 'Growing footprint in the Iberian Peninsula fresh-produce sector.' },
  { name: 'UAE', id: 784, geo: [54.3, 24.0], code: 'ae', flag: '🇦🇪', region: 'Middle East & Africa', desc: 'Primary Middle East distribution hub for our fresh and processed range.' },
  { name: 'HONG KONG', id: 344, geo: [114.1, 22.3], code: 'hk', flag: '🇭🇰', region: 'Asia-Pacific', desc: 'Gateway to South-East Asian premium fresh produce markets.' },
  { name: 'NEW ZEALAND', id: 554, geo: [174.8, -40.9], code: 'nz', flag: '🇳🇿', region: 'Asia-Pacific', desc: 'Growing market for our shelf-stable and individually quick frozen (IQF) arils.' },
  { name: 'SINGAPORE', id: 702, geo: [103.8, 1.35], code: 'sg', flag: '🇸🇬', region: 'Asia-Pacific', desc: 'High-density premium retail market for fresh cut coconut chunks and arils.' },
  { name: 'THAILAND', id: 764, geo: [100.9, 15.87], code: 'th', flag: '🇹🇭', region: 'Asia-Pacific', desc: 'Expanding partnership in South-East Asia for tropical processed fruits.' },
  { name: 'QATAR', id: 634, geo: [51.18, 25.35], code: 'qa', flag: '🇶🇦', region: 'Middle East & Africa', desc: 'Premium GCC market demanding high-care certified horticultural products.' },
  { name: 'EGYPT', id: 818, geo: [30.8, 26.8], code: 'eg', flag: '🇪🇬', region: 'Middle East & Africa', desc: 'Strategic North African hub for logistics and seasonal fruit sourcing simulation.' },
  { name: 'POLAND', id: 616, geo: [19.1, 51.9], code: 'pl', flag: '🇵🇱', region: 'Europe', desc: 'Fast-growing retail distribution network for fresh-cut fruit selections.' },
  { name: 'IRELAND', id: 372, geo: [-8.2, 53.4], code: 'ie', flag: '🇮🇪', region: 'Europe', desc: 'Direct supply channels to major Irish retail chains for fresh arils.' },
  { name: 'AUSTRALIA', id: 36, geo: [133.7, -25.2], code: 'au', flag: '🇦🇺', region: 'Asia-Pacific', desc: 'Premium Southern Hemisphere partner for year-round fresh fruit imports.' },
  { name: 'GHANA', id: 288, geo: [-1.0, 7.9], code: 'gh', flag: '🇬🇭', region: 'Middle East & Africa', desc: 'Developing trade partner for integrated horticultural export networks.' },
  { name: 'MYANMAR', id: 104, geo: [95.9, 21.9], code: 'mm', flag: '🇲🇲', region: 'Asia-Pacific', desc: 'South-East Asian partner for region-specific fresh agricultural exports.' }
]

const COLORS = {
  ocean: 'transparent',
  land: '#e2e8f0',
  landStroke: '#ffffff',
  india: '#0d631b',
  highlight: '#83d57c',
  highlightFg: '#0d631b',
  trail: '#7e1a12',
  dot: '#7e1a12',
  dotActive: '#0d631b',
  plane: '#7e1a12',
}

const Home = () => {
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const treeContainerRef = useRef(null)

  // Tree states
  const [hoveredCountry, setHoveredCountry] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [treeConnections, setTreeConnections] = useState([])

  const filteredDestinations = DESTINATIONS.filter(d => {
    const matchesRegion = selectedRegion === 'All' || d.region === selectedRegion;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  useEffect(() => {
    // Scroll to section if hash exists (e.g. from nav clicks)
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  useEffect(() => {
    const updatePaths = () => {
      if (!treeContainerRef.current) return
      const containerRect = treeContainerRef.current.getBoundingClientRect()
      const newConnections = []

      // HQ Node
      const hqNode = treeContainerRef.current.querySelector('#tree-node-hq')
      if (!hqNode) return
      const hqRect = hqNode.getBoundingClientRect()
      const hqPoint = {
        x: hqRect.right - containerRect.left,
        y: hqRect.top + hqRect.height / 2 - containerRect.top
      }

      const regionList = ['Americas', 'Europe', 'Middle East & Africa', 'Asia-Pacific']
      regionList.forEach((regionName) => {
        const regionId = regionName.replace(/&/g, 'and').replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase()
        const regionNode = treeContainerRef.current.querySelector(`#tree-node-region-${regionId}`)
        if (!regionNode) return
        const regionRect = regionNode.getBoundingClientRect()
        
        const regionLeft = {
          x: regionRect.left - containerRect.left,
          y: regionRect.top + regionRect.height / 2 - containerRect.top
        }
        const regionRight = {
          x: regionRect.right - containerRect.left,
          y: regionRect.top + regionRect.height / 2 - containerRect.top
        }

        // Draw HQ -> Region curve
        const dx = regionLeft.x - hqPoint.x
        const cp1x = hqPoint.x + dx * 0.4
        const cp1y = hqPoint.y
        const cp2x = hqPoint.x + dx * 0.6
        const cp2y = regionLeft.y
        const hqToRegionD = `M ${hqPoint.x} ${hqPoint.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${regionLeft.x} ${regionLeft.y}`

        const isRegionActive = hoveredCountry && DESTINATIONS.find(d => d.code === hoveredCountry.code)?.region === regionName

        newConnections.push({
          id: `path-hq-${regionId}`,
          d: hqToRegionD,
          active: !!isRegionActive
        })

        // Draw Region -> Countries curves
        const countriesInRegion = DESTINATIONS.filter(d => d.region === regionName)
        countriesInRegion.forEach((country) => {
          const countryNode = treeContainerRef.current.querySelector(`#tree-node-country-${country.code}`)
          if (!countryNode) return
          const countryRect = countryNode.getBoundingClientRect()
          const countryLeft = {
            x: countryRect.left - containerRect.left,
            y: countryRect.top + countryRect.height / 2 - containerRect.top
          }

          const cdx = countryLeft.x - regionRight.x
          const ccp1x = regionRight.x + cdx * 0.4
          const ccp1y = regionRight.y
          const ccp2x = regionRight.x + cdx * 0.6
          const ccp2y = countryLeft.y
          const regionToCountryD = `M ${regionRight.x} ${regionRight.y} C ${ccp1x} ${ccp1y}, ${ccp2x} ${ccp2y}, ${countryLeft.x} ${countryLeft.y}`

          const isCountryActive = hoveredCountry?.code === country.code

          newConnections.push({
            id: `path-region-${regionId}-country-${country.code}`,
            d: regionToCountryD,
            active: isCountryActive
          })
        })
      })

      setTreeConnections(newConnections)
    }

    // Run first time
    updatePaths()
    
    // Add small delay to ensure rendering and font loading completes
    const timer = setTimeout(updatePaths, 300)

    window.addEventListener('resize', updatePaths)
    return () => {
      window.removeEventListener('resize', updatePaths)
      clearTimeout(timer)
    }
  }, [hoveredCountry])

  return (
    <main>
      {/* 1. Banner Section (Hero Video) */}
      <section className="hero-section relative w-full bg-black flex flex-col lg:flex-row items-center justify-center">
        {/* The video container */}
        <div className="absolute inset-0 w-full h-full z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="https://zzcy8relwrw9zbfi.public.blob.vercel-storage.com/Sam_agri_music_and_caption.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>
        </div>

        {/* Text Banner Content - Overlaid on all screens */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6">
          <div className="animate-in max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-normal mb-6" style={{ lineHeight: '1.4', wordSpacing: '4px' }}>
              Pioneers in <br />
              <span className="text-[#9ef295]">Pomegranate Arils</span>
            </h1>
            <div className="w-20 h-1 bg-[#9ef295] mx-auto mb-8"></div>
            <p className="text-white/60 font-sans tracking-[0.3em] uppercase text-[10px] sm:text-xs">Integrated Excellence Since 1998</p>
          </div>
        </div>

        {/* Bounce arrow - only visible on desktop */}
        <div className="hidden lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 lg:text-white/30 lg:animate-bounce lg:z-20">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* 2. About Samagri */}
      <section id="about" className="about-section bg-white pt-6 pb-16 md:pt-8 md:pb-24 px-6 md:px-12 overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto relative z-10 w-full">
          <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-blue-200 pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase leading-none">
                About{" "}<span className="text-secondary">Sam Agri</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-blue-200">
            <div className="lg:row-span-2 flex flex-col items-center justify-center p-10 md:p-14 border-b md:border-r lg:border-r lg:border-b-0 border-blue-200 bg-primary text-white group transition-all duration-700 hover:bg-secondary">
              <div className="relative mb-6">
                <h3 className="text-8xl md:text-[10rem] font-serif font-black leading-none group-hover:scale-105 transition-transform duration-700 text-center">
                  25
                </h3>
                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
              </div>
              <p className="text-xl md:text-2xl font-black uppercase tracking-widest text-center leading-tight">
                YEARS OF<br />EXPERIENCE
              </p>
              <div className="w-12 h-1 bg-white/30 mt-8 group-hover:w-24 transition-all duration-700"></div>
            </div>
            <div className="p-10 md:p-12 text-center border-b md:border-r-0 lg:border-r border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                2000+
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                ACRES OF GLOBAL GAP CERTIFIED
              </p>
            </div>
            <div className="p-10 md:p-12 text-center border-b md:border-r lg:border-r border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                25+
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                COUNTRIES OF EXPORT
              </p>
            </div>
            <div className="p-10 md:p-12 text-center border-b border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                4
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                HIGH CARE FACILITIES
              </p>
            </div>
            <div className="p-10 md:p-12 text-center border-b md:border-r lg:border-r lg:border-b-0 border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                10,000+
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                MTPA & GROWING
              </p>
            </div>
            <div className="p-10 md:p-12 text-center border-b lg:border-r lg:border-b-0 border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                165K <span className="text-2xl md:text-3xl font-sans font-light">SQ.FT</span>
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                HIGH CARE PROCESS AREA
              </p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 p-10 md:p-12 text-center group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                100%
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                SUSTAINABLE ENERGY
              </p>
            </div>
          </div>
        </div>
      </section>

{/* 3. Our Assortment */}
<section id="produce" className="bg-black pt-3 pb-8 md:pt-4 md:pb-12 lg:pt-28 lg:pb-20 px-6 md:px-12 overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-center" style={{ background: '#000' }}>
  <div className="max-w-screen-2xl mx-auto relative w-full">
    <div className="mb-4 md:mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
      <div>
        <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase leading-none">
          {"Our "}<span className="text-secondary">Assortment</span>
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 lg:h-[480px]">

      {/* Pomegranate Arils - keep as is */}
      <Link to="/pomegranate-arils" className="relative group lg:row-span-2 overflow-hidden h-[380px] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/10">
        <img src="/arils_3d.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Pomegranate Arils" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 pb-16">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            POMEGRANATE <br /> ARILS
          </h4>
        </div>
      </Link>

      {/* Coconut Chunks */}
      <Link to="/coconut-chunks" className="relative group overflow-hidden h-[240px] border-b md:border-r lg:border-r border-white/10">
        <img src="/coconut_3d.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Coconut Chunks" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 pb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            COCONUT <br /> CHUNKS
          </h4>
        </div>
      </Link>

      {/* Whole Fruit */}
      <Link to="/whole-fruit" className="relative group overflow-hidden h-[240px] border-b lg:border-r border-white/10">
        <img src="/pomegranate_3d.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Whole Fruit" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 pb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            WHOLE <br /> FRUIT
          </h4>
        </div>
      </Link>

      {/* Frozen Juice */}
      <Link to="#" className="relative group overflow-hidden h-[240px] border-b border-white/10">
        <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Frozen Juice" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 pb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            FROZEN <br /> JUICE
          </h4>
        </div>
      </Link>

      {/* Dried Arils */}
      <Link to="/dried-arils" className="relative group overflow-hidden h-[240px] border-b md:border-b-0 md:border-r border-white/10">
        <img src="/assets/dried-arils.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Dried Arils" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 pb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            DRIED <br /> ARILS
          </h4>
        </div>
      </Link>

      {/* IQF Aril */}
      <Link to="/iqf-arils" className="relative group overflow-hidden h-[240px] border-b md:border-b-0 lg:border-r border-white/10">
        <img src="/assets/pomogranatearils.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="IQF Aril" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 pb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            IQF <br /> ARIL
          </h4>
        </div>
      </Link>

      {/* Wine */}
      <Link to="#" className="relative group overflow-hidden h-[240px] border-b md:border-b-0 border-white/10">
        <img src="/assets/pomogranatewine.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Wines" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-6 pb-4">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}>
            WINE
          </h4>
        </div>
      </Link>

    </div>
  </div>
</section>

      {/* 4. GLOBAL PRESENCE — Centered India Map with Radial Markets */}
      <section id="global-presence" className="bg-slate-50/50 pt-20 pb-20 px-6 md:px-12 overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-screen-2xl mx-auto relative w-full">
          {/* Section Header */}
          <div className="mb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase leading-none">
                Global{" "}<span className="text-secondary">Presence</span>
              </h2>
              <p className="text-sm text-slate-500 mt-3 font-normal max-w-xl">
                Connecting our sourcing hubs in Nashik and Hyderabad to international fresh fruit markets across the globe.
              </p>
            </div>
            {/* Quick stats */}
            <div className="flex gap-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span>Sourcing Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span>20+ Global Markets</span>
              </div>
            </div>
          </div>

          {/* New Map Layout */}
          <GlobalPresenceMap />
        </div>
      </section>

      {/* 5. Domestic Presence */}
      <section id="domestic" className="bg-[#0a0a0a] min-h-screen pt-3 pb-10 md:pt-5 md:pb-16 px-6 md:px-12 overflow-hidden" style={{ paddingBottom: '80px' }}>
        <div className="max-w-screen-2xl mx-auto relative w-full">
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase leading-none">
                Domestic{" "}<span className="text-[#9ef295]">Presence</span>
              </h2>
            </div>
          </div>

          <div className="dp-row dp-row-top mt-2">
            <div className="dp-card" data-name="West-In-Avo">
              <img src="/assets/avocado.jpg" alt="West-In-Avo" />
              <div className="dp-info">
                <h3>West-In-Avo</h3>
                <p>Premium Hass avocados grown in our domestic farms, tree-ripened quality for every table.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
            <div className="dp-card" data-name="Sam Berry">
              <img src="/assets/sam_berry_basket.png" alt="Sam Berry" />
              <div className="dp-info">
                <h3>Sam Berry</h3>
                <p>A lush assortment of locally sourced berries and seasonal gift baskets.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
            <div className="dp-card" data-name="Sam's Delight">
              <img src="/assets/almond.jpg" alt="Sam's Delight" />
              <div className="dp-info">
                <h3>Sam's Delight</h3>
                <p>Our flagship range of premium almonds and nutritious dry fruits.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
            <div className="dp-card" data-name="Sam Alpine">
              <img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800" alt="Sam Alpine" />
              <div className="dp-info">
                <h3>Sam Alpine</h3>
                <p>High-altitude blueberries grown for intense flavor and nutrition.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
          </div>
          <div className="dp-row dp-row-bottom">
            <div className="dp-card" data-name="Ozar Tulip">
              <img src="/assets/tulip.jpg" alt="Ozar Tulip" />
              <div className="dp-info">
                <h3>Ozar Tulip</h3>
                <p>Premium floriculture vertical specializing in exotic Dutch tulips.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
            <div className="dp-card" data-name="Sam's Wine">
              <img src="/assets/pomogranatewine.png" alt="Sam's Wine" />
              <div className="dp-info">
                <h3>Sam's Wine</h3>
                <p>Artisanal fruit wines crafted from our finest pomegranate harvests.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
            <div className="dp-card" data-name="Sidvin">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" alt="Sidvin" />
              <div className="dp-info">
                <h3>Sidvin</h3>
                <p>Real estate and infrastructure services supporting agricultural growth.</p>
                <Link to="/group-companies">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Certifications */}
      <section id="certifications" className="bg-white py-8 md:py-12 px-6 md:px-12 overflow-hidden border-t border-zinc-100">
        <div className="max-w-screen-2xl mx-auto relative w-full">
          <div className="mb-10 md:mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-zinc-100 pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase leading-none">
                Our{" "}<span className="text-secondary">Certifications</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
            <a href="https://www.globalgap.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/globalgapnew.png" className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="Global GAP" />
            </a>
            <a href="https://www.brcgs.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/brc.png" className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="BRCGS" />
            </a>
            <a href="https://www.iso.org/publication/PUB200220.html?utm_source=google&utm_medium=ppc_paid_social&utm_campaign=ISO22000&gad_source=1&gad_campaignid=23276729455&gbraid=0AAAAABtQACEufWfeWwUoDPL3DH_xtnMu1&gclid=CjwKCAjw5s_QBhAdEiwADD_gBgpQ8CU9iLKyxxJYkj73VLR4oXxB7oGBw0nKCIv8HFViNCJStEFwrRoC5PYQAvD_BwE" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/iso.png" className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="ISO 22000" />
            </a>
            <a href="https://www.fssai.gov.in/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/fssai.png" className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="FSSAI" />
            </a>
            <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/fda.png" className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="US FDA" />
            </a>
            <a href="https://www.sedex.com/solutions/smeta-audit/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/ssmeta1234.png" className="max-h-18 md:max-h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="SMETA" />
            </a>
            <a href="https://www.fairtrade.net/en/for-business/how-to-get-involved/get-certified.html" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-full h-24">
              <img src="/fairtrade.png" className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="Fairtrade" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
