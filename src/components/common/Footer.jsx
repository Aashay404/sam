import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <style>{`
        .glass-footer {
            background: linear-gradient(135deg, #0d631b 0%, #002204 100%); 
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
      <footer className="glass-footer text-white pt-10 md:pt-14 pb-8 px-6 md:px-12 mt-0 font-sans relative z-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="col-span-1 md:col-span-2">
                  <div className="mb-6">
                      <img src="/assets/logo2.png" className="h-14 w-auto" alt="Sam Agri Logo" onError={(e) => { e.target.src = 'https://via.placeholder.com/120x40?text=SAM+AGRI' }} />
                  </div>
                  <p className="text-white/60 max-w-md leading-relaxed text-sm">
                      India's largest integrated exporter of fresh fruits and vegetables. Pioneering excellence in fresh produce for the global market for over 25 years.
                  </p>
              </div>
              
              <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9ef295] mb-8">Our Assortment</h5>
                  <ul className="space-y-4 font-medium text-sm">
                      <li><Link to="/pomegranate-arils" className="text-white/40 hover:text-white transition-colors">Pomegranate Arils</Link></li>
                      <li><Link to="/coconut-chunks" className="text-white/40 hover:text-white transition-colors">Coconut Chunks</Link></li>
                      <li><Link to="/dried-arils" className="text-white/40 hover:text-white transition-colors">Dried Arils</Link></li>
                      <li><Link to="/whole-fruit" className="text-white/40 hover:text-white transition-colors">Whole Fruit</Link></li>
                      <li><Link to="/iqf-arils" className="text-white/40 hover:text-white transition-colors">IQF Aril</Link></li>
                  </ul>
              </div>
              
              <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9ef295] mb-8">Corporate</h5>
                  <ul className="space-y-4 font-medium text-sm">
                      <li><Link to="/about-us" className="text-white/40 hover:text-white transition-colors">About Us</Link></li>
                      <li><Link to="/infrastructure" className="text-white/40 hover:text-white transition-colors">Infrastructure</Link></li>
                      <li><Link to="/group-companies" className="text-white/40 hover:text-white transition-colors">Group Companies</Link></li>
                      <li><Link to="/sustainability" className="text-white/40 hover:text-white transition-colors">Sustainability</Link></li>
                      <li><Link to="/contact-us" className="text-white/40 hover:text-white transition-colors">Contact Us</Link></li>
                  </ul>
              </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">© 2024 Sam Agri Group. All Rights Reserved.</p>
              <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  <a href="#" className="hover:text-[#9ef295] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#9ef295] transition-colors">Accessibility</a>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
