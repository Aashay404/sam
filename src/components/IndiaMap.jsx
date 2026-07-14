import React from 'react';
import indiaMapData from './indiaMapData.json';

const IndiaMap = ({ className = '' }) => {
  // Nashik and Hyderabad coordinates on the 612x696 SVG grid
  const nashikX = 135;
  const nashikY = 415;
  const hyderabadX = 220;
  const hyderabadY = 450;

  return (
    <div className={`relative w-full max-w-[280px] mx-auto ${className}`}>
      {/* Map Card Wrapper */}
      <div className="relative p-4 rounded-3xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col items-center">
        {/* Decorative Background Glow */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Map of India */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 612 696"
          className="w-full h-auto z-10"
          aria-label="Map of India"
          style={{ maxHeight: '280px' }}
        >
          {/* Render State Paths */}
          <g>
            {indiaMapData.map((state) => {
              const isHighlighted = state.id === 'mh' || state.id === 'tg';
              return (
                <path
                  key={state.id}
                  id={`india-state-${state.id}`}
                  d={state.d}
                  aria-label={state.name}
                  fill={isHighlighted ? 'rgba(16, 185, 129, 0.18)' : 'rgba(15, 23, 42, 0.03)'}
                  stroke={isHighlighted ? '#10b981' : 'rgba(148, 163, 184, 0.35)'}
                  strokeWidth={isHighlighted ? 1.5 : 0.8}
                  className="transition-all duration-300 hover:fill-emerald-500/20"
                />
              );
            })}
          </g>

          {/* Glowing Nashik Location & Sam Agri Logo Node */}
          {/* This <g> carries the id="tree-node-hq" so tree curves attach directly to the logo! */}
          <g id="tree-node-hq" transform={`translate(${nashikX}, ${nashikY})`}>
            {/* Glowing Pulse Rings */}
            <circle r="22" fill="rgba(16, 185, 129, 0.12)" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle r="14" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
            
            {/* Solid Marker Background */}
            <circle r="10" fill="#0d631b" stroke="#10b981" strokeWidth="2" />
            
            {/* Small circular Sam Agri Logo inside Nashik marker */}
            <clipPath id="logo-clip">
              <circle r="9" />
            </clipPath>
            <image
              href="/assets/logo2.png"
              x="-9"
              y="-9"
              height="18"
              width="18"
              clipPath="url(#logo-clip)"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>

          {/* Glowing Hyderabad Location & Sam Agri Logo Node */}
          <g id="tree-node-hyd" transform={`translate(${hyderabadX}, ${hyderabadY})`}>
            {/* Glowing Pulse Rings */}
            <circle r="22" fill="rgba(16, 185, 129, 0.12)" className="animate-ping" style={{ animationDuration: '3.5s' }} />
            <circle r="14" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
            
            {/* Solid Marker Background */}
            <circle r="10" fill="#0d631b" stroke="#10b981" strokeWidth="2" />
            
            {/* Small circular Sam Agri Logo inside Hyderabad marker */}
            <clipPath id="logo-clip-hyd">
              <circle r="9" />
            </clipPath>
            <image
              href="/assets/logo2.png"
              x="-9"
              y="-9"
              height="18"
              width="18"
              clipPath="url(#logo-clip-hyd)"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>

        {/* HQ Caption Info */}
        <div className="w-full mt-4 border-t border-slate-100 pt-3 text-left z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider font-serif">INDIA HQ</h3>
          </div>
          <p className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest">Nashik & Hyderabad</p>
          <p className="text-[11px] text-slate-500 mt-1.5 font-normal leading-relaxed">
            Global export headquarters, sourcing hubs and cold storage logistics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
