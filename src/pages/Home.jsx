import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const INDIA_HQ = {
  name: 'INDIA HQ',
  geo: [74.5, 18.9],   // Nashik region
  code: 'in',
  id: 356,
  desc: "Central hub for Sam Agri's global fresh produce logistics and sustainable agriculture."
}

const DESTINATIONS = [
  { name: 'USA', id: 840, geo: [-98, 38], code: 'us', desc: 'Premier market for our fresh pomegranate arils and whole-fruit exports.' },
  { name: 'UK', id: 826, geo: [-1.5, 52.5], code: 'gb', desc: 'Key distribution hub supplying premium fresh produce to major UK retailers.' },
  { name: 'NETHERLANDS', id: 528, geo: [5.3, 52.1], code: 'nl', desc: 'Strategic cold-chain gateway for our European fresh-produce logistics.' },
  { name: 'SWITZERLAND', id: 756, geo: [8.2, 46.8], code: 'ch', desc: 'Premium market for organic certified pomegranate arils and fresh cut fruits.' },
  { name: 'BELGIUM', id: 56, geo: [4.4, 50.5], code: 'be', desc: 'Key European distribution gateway and retail partner for premium produce.' },
  { name: 'GERMANY', id: 276, geo: [10.4, 51.2], code: 'de', desc: 'High-demand market recognizing our BRC AA and Global GAP quality standards.' },
  { name: 'FRANCE', id: 250, geo: [2.3, 46.2], code: 'fr', desc: 'Retail and foodservice partnerships across the French premium segment.' },
  { name: 'SPAIN', id: 724, geo: [-3.7, 40.4], code: 'es', desc: 'Growing footprint in the Iberian Peninsula fresh-produce sector.' },
  { name: 'UAE', id: 784, geo: [54.3, 24.0], code: 'ae', desc: 'Primary Middle East distribution hub for our fresh and processed range.' },
  { name: 'HONG KONG', id: 344, geo: [114.1, 22.3], code: 'hk', desc: 'Gateway to South-East Asian premium fresh produce markets.' },
  { name: 'NEW ZEALAND', id: 554, geo: [174.8, -40.9], code: 'nz', desc: 'Growing market for our shelf-stable and individually quick frozen (IQF) arils.' },
  { name: 'SINGAPORE', id: 702, geo: [103.8, 1.35], code: 'sg', desc: 'High-density premium retail market for fresh cut coconut chunks and arils.' },
  { name: 'THAILAND', id: 764, geo: [100.9, 15.87], code: 'th', desc: 'Expanding partnership in South-East Asia for tropical processed fruits.' },
  { name: 'QATAR', id: 634, geo: [51.18, 25.35], code: 'qa', desc: 'Premium GCC market demanding high-care certified horticultural products.' },
  { name: 'EGYPT', id: 818, geo: [30.8, 26.8], code: 'eg', desc: 'Strategic North African hub for logistics and seasonal fruit sourcing simulation.' },
  { name: 'POLAND', id: 616, geo: [19.1, 51.9], code: 'pl', desc: 'Fast-growing retail distribution network for fresh-cut fruit selections.' },
  { name: 'IRELAND', id: 372, geo: [-8.2, 53.4], code: 'ie', desc: 'Direct supply channels to major Irish retail chains for fresh arils.' },
  { name: 'AUSTRALIA', id: 36, geo: [133.7, -25.2], code: 'au', desc: 'Premium Southern Hemisphere partner for year-round fresh fruit imports.' },
  { name: 'GHANA', id: 288, geo: [-1.0, 7.9], code: 'gh', desc: 'Developing trade partner for integrated horticultural export networks.' },
  { name: 'MYANMAR', id: 104, geo: [95.9, 21.9], code: 'mm', desc: 'South-East Asian partner for region-specific fresh agricultural exports.' }
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

  // Map state
  const [currentDest, setCurrentDest] = useState({
    name: 'India HQ',
    code: 'in',
    desc: "Central hub for Sam Agri's global fresh produce operations and sustainable agriculture."
  })
  const [statusText, setStatusText] = useState('India HQ')
  const [isFlying, setIsFlying] = useState(false)

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
    const d3 = window.d3
    const topojson = window.topojson

    if (!d3 || !topojson) {
      console.warn('D3 or TopoJSON libraries are not available on the window object.')
      return
    }

    let svg, projection, pathGen, worldData
    let rafId = null
    let destIdx = 0
    let timer1 = null
    let timer2 = null
    let timer3 = null
    let hqPulseRafId = null

    const W = wrapRef.current.offsetWidth
    const H = wrapRef.current.offsetHeight
    svgRef.current.setAttribute('width', W)
    svgRef.current.setAttribute('height', H)

    projection = d3.geoNaturalEarth1()
      .scale(W / 5.6)
      .translate([W / 2, H / 2])

    pathGen = d3.geoPath().projection(projection)

    function drawMap(world) {
      svg = d3.select(svgRef.current)
      svg.selectAll('*').remove()

      const currentW = +svgRef.current.getAttribute('width')
      const currentH = +svgRef.current.getAttribute('height')

      /* ocean */
      svg.append('rect')
        .attr('width', currentW)
        .attr('height', currentH)
        .attr('fill', COLORS.ocean)

      /* graticule grid */
      const grat = d3.geoGraticule()()
      svg.append('path')
        .datum(grat)
        .attr('d', pathGen)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(15,23,42,0.04)')
        .attr('stroke-width', 0.6)

      /* countries */
      const countries = topojson.feature(world, world.objects.countries)
      svg.append('g').attr('id', 'gp-countries')
        .selectAll('path')
        .data(countries.features)
        .join('path')
        .attr('class', 'gp-country')
        .attr('id', d => `gp-c-${d.id}`)
        .attr('d', pathGen)
        .attr('fill', COLORS.land)
        .attr('stroke', COLORS.landStroke)
        .attr('stroke-width', 0.4)

      /* country borders */
      const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
      svg.append('path')
        .datum(borders)
        .attr('d', pathGen)
        .attr('fill', 'none')
        .attr('stroke', COLORS.landStroke)
        .attr('stroke-width', 0.3)

      /* Layer order */
      svg.append('g').attr('id', 'gp-trails')
      svg.append('g').attr('id', 'gp-markers')
      svg.append('g').attr('id', 'gp-plane-g')

      /* India HQ marker */
      drawHQMarker()

      /* Destination dots */
      const mG = d3.select(svgRef.current).select('#gp-markers')
      DESTINATIONS.forEach(d => {
        const px = projection(d.geo)
        if (!px) return
        /* glow ring */
        mG.append('circle')
          .attr('cx', px[0]).attr('cy', px[1])
          .attr('r', 3)
          .attr('fill', 'none')
          .attr('stroke', COLORS.dot)
          .attr('stroke-width', 1)
          .attr('opacity', 0.4)
          .attr('id', `gp-ring-${d.code}`)
        /* dot */
        mG.append('circle')
          .attr('cx', px[0]).attr('cy', px[1])
          .attr('r', 3.5)
          .attr('fill', COLORS.dot)
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 0.8)
          .attr('id', `gp-dot-${d.code}`)
        /* country label */
        mG.append('text')
          .attr('x', px[0] + 6)
          .attr('y', px[1] + 3)
          .attr('fill', 'rgba(15,23,42,0.45)')
          .attr('font-size', '7px')
          .attr('font-family', 'Outfit,sans-serif')
          .attr('font-weight', '700')
          .attr('letter-spacing', '0.08em')
          .text(d.name)
      })

      /* Plane icon */
      const planeG = d3.select(svgRef.current).select('#gp-plane-g')
        .append('g')
        .attr('id', 'gp-plane')
        .attr('opacity', 0)

      /* Airplane shape */
      planeG.append('path')
        .attr('d', [
          'M 0,-3.5',
          'L 9,0',
          'L 0,3.5',
          'L 1.5,0',
          'Z',
          'M -4,-1.8 L 0,0 L -4,1.8 Z',
          'M 3.5,-1.2 L 6.5,0 L 3.5,1.2 Z'
        ].join(' '))
        .attr('fill', COLORS.plane)
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.4)

      /* Plane glow */
      planeG.append('circle')
        .attr('r', 10)
        .attr('fill', 'rgba(126,26,18,0.08)')
        .attr('id', 'gp-plane-glow')
    }

    function drawHQMarker() {
      const px = projection(INDIA_HQ.geo)
      if (!px) return
      const mG = d3.select(svgRef.current).select('#gp-markers')

      /* pulsing ring */
      mG.append('circle')
        .attr('cx', px[0]).attr('cy', px[1])
        .attr('r', 8)
        .attr('fill', 'none')
        .attr('stroke', COLORS.india)
        .attr('stroke-width', 1.2)
        .attr('id', 'gp-hq-pulse')

      /* solid dot */
      mG.append('circle')
        .attr('cx', px[0]).attr('cy', px[1])
        .attr('r', 5.5)
        .attr('fill', COLORS.india)
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)

      /* label */
      mG.append('text')
        .attr('x', px[0] + 10)
        .attr('y', px[1] + 4)
        .attr('fill', COLORS.india)
        .attr('font-size', '9px')
        .attr('font-family', 'Outfit,sans-serif')
        .attr('font-weight', '800')
        .attr('letter-spacing', '0.12em')
        .text('INDIA HQ')

      /* animate pulse ring */
      let pulseT = 0
      const pulseRing = d3.select(svgRef.current).select('#gp-hq-pulse')
      function pulseTick() {
        pulseT = (pulseT + 0.012) % 1
        const r = 8 + pulseT * 18
        const opc = (1 - pulseT) * 0.6
        if (!pulseRing.empty()) {
          pulseRing.attr('r', r).attr('opacity', opc)
        }
        hqPulseRafId = requestAnimationFrame(pulseTick)
      }
      pulseTick()
    }

    function setCountryHighlight(id, on) {
      const el = d3.select(svgRef.current).select(`#gp-c-${id}`)
      if (el.empty()) return
      el.transition().duration(600)
        .attr('fill', on ? COLORS.highlight : COLORS.land)
        .attr('stroke', on ? COLORS.highlightFg : COLORS.landStroke)
        .attr('stroke-width', on ? 0.8 : 0.4)
    }

    function bezierPt(t, p0, cp, p1) {
      const m = 1 - t
      return [
        m * m * p0[0] + 2 * m * t * cp[0] + t * t * p1[0],
        m * m * p0[1] + 2 * m * t * cp[1] + t * t * p1[1]
      ]
    }

    function bezierTangent(t, p0, cp, p1) {
      const m = 1 - t
      return [
        2 * m * (cp[0] - p0[0]) + 2 * t * (p1[0] - cp[0]),
        2 * m * (cp[1] - p0[1]) + 2 * t * (p1[1] - cp[1])
      ]
    }

    function controlPoint(p0, p1) {
      const mx = (p0[0] + p1[0]) / 2
      const my = (p0[1] + p1[1]) / 2
      const dx = p1[0] - p0[0]
      const dy = p1[1] - p0[1]
      const len = Math.sqrt(dx * dx + dy * dy)
      const arc = Math.min(len * 0.38, 130)
      return [mx + dy * (arc / len) * 0.25, my - Math.abs(dx) * (arc / len) * 0.55 - arc * 0.35]
    }

    function animateFlight(dest, onDone) {
      const p0 = projection(INDIA_HQ.geo)
      const p1 = projection(dest.geo)
      if (!p0 || !p1) { onDone(); return }

      const cp = controlPoint(p0, p1)
      const dur = 2600 + Math.random() * 400

      /* clear old trail */
      d3.select(svgRef.current).select('#gp-trails').selectAll('*').remove()

      /* trail path element */
      const trail = d3.select(svgRef.current).select('#gp-trails').append('path')
        .attr('fill', 'none')
        .attr('stroke', COLORS.trail)
        .attr('stroke-width', 1.6)
        .attr('stroke-dasharray', '5,5')
        .attr('stroke-linecap', 'round')
        .attr('opacity', 0.55)

      /* make plane visible */
      const planeG = d3.select(svgRef.current).select('#gp-plane').attr('opacity', 1)

      /* React State Status Update */
      setStatusText(`→ ${dest.name}`)
      setIsFlying(true)
      setCurrentDest({
        name: `En route to ${dest.name}`,
        code: dest.code,
        desc: `Dispatching fresh produce from India HQ to ${dest.name}…`
      })

      const t0 = performance.now()

      function tick(now) {
        const elapsed = now - t0
        const rawT = Math.min(elapsed / dur, 1)
        const eT = d3.easeCubicInOut(rawT)

        /* plane position + angle */
        const pos = bezierPt(eT, p0, cp, p1)
        const tan = bezierTangent(eT, p0, cp, p1)
        const ang = Math.atan2(tan[1], tan[0]) * 180 / Math.PI
        planeG.attr('transform', `translate(${pos[0]},${pos[1]}) rotate(${ang})`)

        /* build trail by sampling bezier up to current t */
        const steps = Math.max(2, Math.round(eT * 40))
        let d = `M${p0[0]},${p0[1]}`
        for (let i = 1; i <= steps; i++) {
          const s = d3.easeCubicInOut(i / 40)
          const pt = bezierPt(s, p0, cp, p1)
          d += ` L${pt[0]},${pt[1]}`
        }
        trail.attr('d', d)

        if (rawT < 1) {
          rafId = requestAnimationFrame(tick)
        } else {
          /* ARRIVED */
          planeG.attr('opacity', 0)
          setCountryHighlight(dest.id, true)
          setCurrentDest(dest)
          setStatusText(dest.name)
          setIsFlying(false)

          /* activate destination dot */
          d3.select(svgRef.current).select(`#gp-dot-${dest.code}`)
            .attr('fill', COLORS.dotActive)
            .attr('r', 7)
            .attr('stroke', '#fff')
            .attr('stroke-width', 1.5)
          d3.select(svgRef.current).select(`#gp-ring-${dest.code}`)
            .attr('stroke', COLORS.dotActive)

          /* linger 2.8 s then call done */
          timer1 = setTimeout(onDone, 2800)
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    function resetDest(dest) {
      if (!dest) return
      setCountryHighlight(dest.id, false)
      d3.select(svgRef.current).select(`#gp-dot-${dest.code}`)
        .attr('fill', COLORS.dot)
        .attr('r', 3.5)
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.8)
      d3.select(svgRef.current).select(`#gp-ring-${dest.code}`)
        .attr('stroke', COLORS.dot)
    }

    function cycle() {
      const dest = DESTINATIONS[destIdx]
      animateFlight(dest, () => {
        const justDone = dest
        destIdx = (destIdx + 1) % DESTINATIONS.length
        timer2 = setTimeout(() => {
          resetDest(justDone)
          d3.select(svgRef.current).select('#gp-trails').selectAll('*').remove()
          cycle()
        }, 600)
      })
    }

    // Fetch world map and initialize D3 elements
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        worldData = world
        drawMap(world)
        timer3 = setTimeout(cycle, 1200) // start flight loop
      })
      .catch(err => console.warn('Sam Agri map load error:', err))

    // Handle resize
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null }
        if (!worldData) return
        const newW = wrapRef.current.offsetWidth
        const newH = wrapRef.current.offsetHeight
        svgRef.current.setAttribute('width', newW)
        svgRef.current.setAttribute('height', newH)
        projection = d3.geoNaturalEarth1()
          .scale(newW / 5.6)
          .translate([newW / 2, newH / 2])
        pathGen = d3.geoPath().projection(projection)
        drawMap(worldData)
        destIdx = 0
        cycle()
      }, 320)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup animations and timers on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId) cancelAnimationFrame(rafId)
      if (hqPulseRafId) cancelAnimationFrame(hqPulseRafId)
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <main>
      {/* 1. Banner Section (Hero Video) */}
      <section className="relative w-full h-screen bg-black flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        {/* The video container */}
        <div className="absolute inset-0 w-full h-full z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-agriculture-and-tractor-in-a-field-41604-large.mp4" type="video/mp4" />
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
      <section id="about" className="bg-white pt-6 pb-16 md:pt-8 md:pb-24 px-6 md:px-12 overflow-hidden relative">
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
                EXPORT COUNTRIES
              </p>
            </div>
            <div className="p-10 md:p-12 text-center border-b border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                4
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                HACCP & BRC CERTIFIED
              </p>
            </div>
            <div className="p-10 md:p-12 text-center border-b md:border-r lg:border-r lg:border-b-0 border-blue-200 group hover:bg-slate-50 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px]">
              <h4 className="text-5xl md:text-6xl font-serif font-black text-primary mb-3 uppercase tracking-tighter">
                10K+
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-tight">
                MTPA PROCESSING CAPACITY
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
                RENEWABLE ENERGY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Assortment */}
      <section id="produce" className="bg-black pt-3 pb-8 md:pt-4 md:pb-12 lg:pt-4 lg:pb-20 px-6 md:px-12 overflow-hidden" style={{ paddingTop: '60px', marginTop: '-20px', background: '#000' }}>
        <div className="max-w-screen-2xl mx-auto relative w-full">
          <div className="mb-4 md:mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase leading-none">
                {"Our "}<span className="text-secondary">Assortment</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 lg:h-[480px]">
            <Link to="/pomegranate-arils" className="relative group lg:row-span-2 overflow-hidden h-[380px] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/10">
              <img src="/arils_3d.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Pomegranate Arils" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  POMEGRANATE <br /> ARILS
                </h4>
              </div>
            </Link>
 
            <Link to="/coconut-chunks" className="relative group overflow-hidden h-[240px] border-b md:r-r lg:border-r border-white/10">
              <img src="/coconut_3d.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Coconut Chunks" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  COCONUT <br /> CHUNKS
                </h4>
              </div>
            </Link>
 
            <Link to="/whole-fruit" className="relative group overflow-hidden h-[240px] border-b lg:border-r border-white/10">
              <img src="/pomegranate_3d.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Whole Fruit" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  WHOLE <br /> FRUIT
                </h4>
              </div>
            </Link>
 
            <Link to="#" className="relative group overflow-hidden h-[240px] border-b border-white/10">
              <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Frozen Juice" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  FROZEN <br /> JUICE
                </h4>
              </div>
            </Link>
 
            <Link to="/dried-arils" className="relative group overflow-hidden h-[240px] border-b md:border-b-0 md:border-r border-white/10">
              <img src="/assets/pomogranatearils.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Dried Arils" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  DRIED <br /> ARILS
                </h4>
              </div>
            </Link>
 
            <Link to="/iqf-arils" className="relative group overflow-hidden h-[240px] border-b md:border-b-0 lg:border-r border-white/10">
              <img src="/assets/ivfarils.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="IQF Aril" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  IQF <br /> ARIL
                </h4>
              </div>
            </Link>
 
            <Link to="#" className="relative group overflow-hidden h-[240px] border-b md:border-b-0 border-white/10">
              <img src="/assets/pomogranatewine.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Wines" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-2xl">
                  WINES
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE — Interactive D3 World Map */}
      <section id="global-presence" className="bg-white pt-8 pb-4 md:pt-12 md:pb-6 px-6 md:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative w-full">
          {/* Section Header */}
          <div className="mb-4 md:mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-0">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-primary uppercase leading-none">
                Global{" "}<span className="text-secondary">Presence</span>
              </h2>
            </div>
          </div>

          {/* Map Canvas */}
          <div id="gp-map-wrap" ref={wrapRef} className="relative w-full mb-0 overflow-hidden" style={{
            height: '520px',
            background: 'linear-gradient(160deg, #f8fafc 0%, #f1f5f9 100%)',
            borderRadius: '2rem',
            border: '2px solid #cbd5e1',
            boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.02), 0 10px 30px rgba(0,0,0,0.04)'
          }}>
            <svg id="gp-world-map" ref={svgRef} style={{ width: '100%', height: '100%', display: 'block' }}></svg>


            {/* Flight Status (top-right) */}
            <div id="gp-status-pill" className="absolute top-5 right-5 flex items-center gap-2 rounded-full px-4 py-2 z-20" style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <span id="gp-status-dot" className="w-2 h-2 rounded-full" style={{ backgroundColor: isFlying ? '#f59e0b' : '#0d631b' }}></span>
              <span id="gp-status-text" style={{ color: '#4b5563', fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>{statusText}</span>
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              borderRadius: '2rem'
            }}></div>
          </div>
        </div>
      </section>

      {/* 5. Domestic Presence */}
      <section id="domestic" className="bg-[#0a0a0a] min-h-screen pt-8 pb-10 md:pt-12 md:pb-16 px-6 md:px-12 overflow-hidden" style={{ paddingBottom: '80px' }}>
        <div className="max-w-screen-2xl mx-auto relative w-full">
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase leading-none">
                Domestic{" "}<span className="text-[#9ef295]">Presence</span>
              </h2>
            </div>
          </div>

          <div className="dp-row dp-row-top mt-8">
            <div className="dp-card">
              <img src="/assets/avocado.jpg" alt="West-In-Avo" />
              <div className="dp-info">
                <h3>West-In-Avo</h3>
                <p>Premium Hass avocados grown in our domestic farms, tree-ripened quality for every table.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card">
              <img src="/assets/sam_berry_basket.png" alt="Sam Berry" />
              <div className="dp-info">
                <h3>Sam Berry</h3>
                <p>A lush assortment of locally sourced berries and seasonal gift baskets.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card">
              <img src="/assets/almond.jpg" alt="Sam's Delight" />
              <div className="dp-info">
                <h3>Sam's Delight</h3>
                <p>Our flagship range of premium papaya and tropical delicacies.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card">
              <img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800" alt="Sam Alpine" />
              <div className="dp-info">
                <h3>Sam Alpine</h3>
                <p>High-altitude blueberries grown for intense flavor and nutrition.</p>
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
          <div className="dp-row dp-row-bottom">
            <div className="dp-card">
              <img src="/assets/tulip.jpg" alt="Ozar Tulip" />
              <div className="dp-info">
                <h3>Ozar Tulip</h3>
                <p>Premium floriculture vertical specializing in exotic Dutch tulips.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card">
              <img src="/assets/pomogranatewine.png" alt="Sam's Wine" />
              <div className="dp-info">
                <h3>Sam's Wine</h3>
                <p>Artisanal fruit wines crafted from our finest pomegranate harvests.</p>
                <a href="#">Know More</a>
              </div>
            </div>
            <div className="dp-card">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" alt="Sidvin" />
              <div className="dp-info">
                <h3>Sidvin</h3>
                <p>Real estate and infrastructure services supporting agricultural growth.</p>
                <a href="#">Know More</a>
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