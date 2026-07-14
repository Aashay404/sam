import React, { useState } from 'react';
import indiaMapData from './indiaMapData.json';

const COUNTRIES_LEFT = [
  { name: 'USA', code: 'us', x: 160, y: 80, desc: 'Premier market for our fresh pomegranate arils and whole-fruit exports.' },
  { name: 'UK', code: 'gb', x: 120, y: 150, desc: 'Key distribution hub supplying premium fresh produce to major UK retailers.' },
  { name: 'Netherlands', code: 'nl', x: 100, y: 220, desc: 'Strategic cold-chain gateway for our European fresh-produce logistics.' },
  { name: 'France', code: 'fr', x: 110, y: 290, desc: 'Retail and foodservice partnerships across the French premium segment.' },
  { name: 'UAE', code: 'ae', x: 130, y: 360, desc: 'Primary Middle East distribution hub for our fresh and processed range.' },
  { name: 'Qatar', code: 'qa', x: 160, y: 430, desc: 'Premium GCC market demanding high-care certified horticultural products.' },
  { name: 'Spain', code: 'es', x: 200, y: 500, desc: 'Growing footprint in the Iberian Peninsula fresh-produce sector.' }
];

const COUNTRIES_RIGHT = [
  { name: 'Japan', code: 'jp', x: 800, y: 90, desc: 'Premium market recognizing our high quality standards and safety compliance.' },
  { name: 'Hong Kong', code: 'hk', x: 820, y: 160, desc: 'Gateway to South-East Asian premium fresh produce markets.' },
  { name: 'Singapore', code: 'sg', x: 830, y: 230, desc: 'High-density premium retail market for fresh cut coconut chunks and arils.' },
  { name: 'Australia', code: 'au', x: 820, y: 300, desc: 'Premium Southern Hemisphere partner for year-round fresh fruit imports.' },
  { name: 'New Zealand', code: 'nz', x: 800, y: 370, desc: 'Growing market for our shelf-stable and individually quick frozen (IQF) arils.' },
  { name: 'Thailand', code: 'th', x: 770, y: 440, desc: 'Expanding partnership in South-East Asia for tropical processed fruits.' },
  { name: 'Myanmar', code: 'mm', x: 730, y: 510, desc: 'South-East Asian partner for region-specific fresh agricultural exports.' }
];

const GlobalPresenceMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Nashik and Hyderabad absolute coordinates on our 1000x620 SVG grid
  const mapOffsetX = 350;
  const mapOffsetY = 120;
  const mapScale = 0.49;

  const nashikX = mapOffsetX + 135 * mapScale;
  const nashikY = mapOffsetY + 415 * mapScale;

  const hyderabadX = mapOffsetX + 220 * mapScale;
  const hyderabadY = mapOffsetY + 450 * mapScale;

  // Helper to calculate smooth curved line paths
  const getCurvePath = (startX, startY, endX, endY) => {
    const dx = endX - startX;
    const cp1x = startX + dx * 0.4;
    const cp1y = startY;
    const cp2x = startX + dx * 0.6;
    const cp2y = endY;
    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dashflow {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .connection-curve {
          transition: stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease;
        }
        .connection-curve.active {
          animation: dashflow 1.2s linear infinite;
        }
        .country-card-g {
          cursor: pointer;
        }
      `}} />

      {/* Desktop View */}
      <div className="hidden lg:block relative w-full p-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* SVG Layer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 620"
          className="w-full h-auto z-10"
        >
          {/* 1. Connection Curves */}
          <g>
            {/* Left Group curves starting from Nashik */}
            {COUNTRIES_LEFT.map((c) => {
              const isHovered = hoveredCountry?.code === c.code;
              // Connection point at right side of country card (x + 140, y + 17)
              const curve = getCurvePath(nashikX, nashikY, c.x + 140, c.y + 17);
              return (
                <path
                  key={c.code}
                  d={curve}
                  fill="none"
                  stroke={isHovered ? '#10b981' : 'rgba(148, 163, 184, 0.25)'}
                  strokeWidth={isHovered ? 2.5 : 1.2}
                  strokeDasharray={isHovered ? '6,6' : 'none'}
                  className={`connection-curve ${isHovered ? 'active' : ''}`}
                  opacity={isHovered ? 1 : 0.7}
                />
              );
            })}

            {/* Right Group curves starting from Hyderabad */}
            {COUNTRIES_RIGHT.map((c) => {
              const isHovered = hoveredCountry?.code === c.code;
              // Connection point at left side of country card (x, y + 17)
              const curve = getCurvePath(hyderabadX, hyderabadY, c.x, c.y + 17);
              return (
                <path
                  key={c.code}
                  d={curve}
                  fill="none"
                  stroke={isHovered ? '#10b981' : 'rgba(148, 163, 184, 0.25)'}
                  strokeWidth={isHovered ? 2.5 : 1.2}
                  strokeDasharray={isHovered ? '6,6' : 'none'}
                  className={`connection-curve ${isHovered ? 'active' : ''}`}
                  opacity={isHovered ? 1 : 0.7}
                />
              );
            })}
          </g>

          {/* 2. Central India Map */}
          <g transform={`translate(${mapOffsetX}, ${mapOffsetY}) scale(${mapScale})`}>
            {indiaMapData.map((state) => {
              const isHighlighted = state.id === 'mh' || state.id === 'tg';
              return (
                <path
                  key={state.id}
                  d={state.d}
                  fill={isHighlighted ? 'rgba(16, 185, 129, 0.15)' : 'rgba(15, 23, 42, 0.03)'}
                  stroke={isHighlighted ? '#10b981' : 'rgba(148, 163, 184, 0.35)'}
                  strokeWidth={isHighlighted ? 1.5 : 0.8}
                />
              );
            })}
          </g>

          {/* 3. Location Markers */}
          {/* Nashik */}
          <g transform={`translate(${nashikX}, ${nashikY})`}>
            <circle r="18" fill="rgba(16, 185, 129, 0.12)" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle r="10" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
            <circle r="7" fill="#0d631b" stroke="#10b981" strokeWidth="1.5" />
            <clipPath id="logo-clip-n">
              <circle r="6" />
            </clipPath>
            <image href="/assets/logo2.png" x="-6" y="-6" height="12" width="12" clipPath="url(#logo-clip-n)" />
          </g>

          {/* Hyderabad */}
          <g transform={`translate(${hyderabadX}, ${hyderabadY})`}>
            <circle r="18" fill="rgba(16, 185, 129, 0.12)" className="animate-ping" style={{ animationDuration: '3.5s' }} />
            <circle r="10" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
            <circle r="7" fill="#0d631b" stroke="#10b981" strokeWidth="1.5" />
            <clipPath id="logo-clip-h">
              <circle r="6" />
            </clipPath>
            <image href="/assets/logo2.png" x="-6" y="-6" height="12" width="12" clipPath="url(#logo-clip-h)" />
          </g>

          {/* 4. Left Group Country Cards */}
          {COUNTRIES_LEFT.map((c) => {
            const isHovered = hoveredCountry?.code === c.code;
            return (
              <g
                key={c.code}
                className="country-card-g"
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Background shadow card */}
                <rect
                  x={c.x}
                  y={c.y}
                  width="140"
                  height="34"
                  rx="10"
                  fill="#ffffff"
                  stroke={isHovered ? '#10b981' : 'rgba(226, 232, 240, 0.8)'}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-all duration-300"
                  style={{ filter: isHovered ? 'drop-shadow(0 4px 6px rgba(16,185,129,0.1))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.02))' }}
                />
                {/* Flag Image inside SVG */}
                <image
                  href={`https://flagcdn.com/w40/${c.code}.png`}
                  x={c.x + 12}
                  y={c.y + 10}
                  width="20"
                  height="14"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Text Label */}
                <text
                  x={c.x + 42}
                  y={c.y + 21}
                  fontFamily="'Outfit', sans-serif"
                  fontSize="11"
                  fontWeight="700"
                  fill={isHovered ? '#10b981' : '#475569'}
                  className="transition-colors duration-300"
                >
                  {c.name.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* 5. Right Group Country Cards */}
          {COUNTRIES_RIGHT.map((c) => {
            const isHovered = hoveredCountry?.code === c.code;
            return (
              <g
                key={c.code}
                className="country-card-g"
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Background shadow card */}
                <rect
                  x={c.x}
                  y={c.y}
                  width="140"
                  height="34"
                  rx="10"
                  fill="#ffffff"
                  stroke={isHovered ? '#10b981' : 'rgba(226, 232, 240, 0.8)'}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-all duration-300"
                  style={{ filter: isHovered ? 'drop-shadow(0 4px 6px rgba(16,185,129,0.1))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.02))' }}
                />
                {/* Flag Image inside SVG */}
                <image
                  href={`https://flagcdn.com/w40/${c.code}.png`}
                  x={c.x + 12}
                  y={c.y + 10}
                  width="20"
                  height="14"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Text Label */}
                <text
                  x={c.x + 42}
                  y={c.y + 21}
                  fontFamily="'Outfit', sans-serif"
                  fontSize="11"
                  fontWeight="700"
                  fill={isHovered ? '#10b981' : '#475569'}
                  className="transition-colors duration-300"
                >
                  {c.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Interactive Details Panel (Always visible at the bottom of the map) */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-6 min-h-[85px] w-full text-left">
          {hoveredCountry ? (
            <div className="flex gap-4 items-start animate-in">
              <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                <img
                  src={`https://flagcdn.com/w80/${hoveredCountry.code}.png`}
                  className="w-12 h-8.5 object-cover rounded-md shadow-sm border border-slate-200"
                  alt={hoveredCountry.name}
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-extrabold text-slate-800 tracking-wide uppercase">{hoveredCountry.name}</h4>
                  <span className="text-[9px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Direct Export Market
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-normal max-w-4xl leading-relaxed">
                  {hoveredCountry.desc}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-lg">💡</span>
              <p className="text-xs font-medium">Hover over any country card above to explore our export profile for that destination.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile/Tablet Fallback (Vertical List) */}
      <div className="lg:hidden w-full flex flex-col gap-6">
        {/* Nashik Map Card for Mobile */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 612 696"
            className="w-full max-w-[200px] h-auto"
          >
            <g>
              {indiaMapData.map((state) => {
                const isHighlighted = state.id === 'mh' || state.id === 'tg';
                return (
                  <path
                    key={state.id}
                    d={state.d}
                    fill={isHighlighted ? 'rgba(16, 185, 129, 0.18)' : 'rgba(15, 23, 42, 0.03)'}
                    stroke={isHighlighted ? '#10b981' : 'rgba(148, 163, 184, 0.35)'}
                    strokeWidth={isHighlighted ? 1.5 : 0.8}
                  />
                );
              })}
            </g>
            <g transform={`translate(${135}, ${415})`}>
              <circle r="14" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
              <circle r="10" fill="#0d631b" stroke="#10b981" strokeWidth="2" />
            </g>
            <g transform={`translate(${220}, ${450})`}>
              <circle r="14" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
              <circle r="10" fill="#0d631b" stroke="#10b981" strokeWidth="2" />
            </g>
          </svg>
          <div className="w-full text-center">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider font-serif">INDIA HQ</h3>
            <p className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest mt-0.5">Nashik & Hyderabad</p>
          </div>
        </div>

        {/* List of Countries */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">
            Global Export Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[...COUNTRIES_LEFT, ...COUNTRIES_RIGHT].map((c) => (
              <div
                key={c.code}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  className="w-6 h-4 object-cover rounded-sm shadow-sm"
                  alt={c.name}
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{c.name}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresenceMap;
