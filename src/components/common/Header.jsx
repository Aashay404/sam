import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAssortmentOpen, setMobileAssortmentOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileAssortmentOpen(false)
    document.body.style.overflow = 'auto'
  }, [location])

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen
    setMobileMenuOpen(nextState)
    document.body.style.overflow = nextState ? 'hidden' : 'auto'
  }

  const toggleMobileAssortment = (e) => {
    e.preventDefault()
    setMobileAssortmentOpen(!mobileAssortmentOpen)
  }

  return (
    <>
      <style>{`
        /* --- Horizontal Nav Styles --- */
        .navbar-h {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 30px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 3000;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            background: transparent;
            backdrop-filter: blur(0px);
            font-family: 'Outfit', sans-serif;
        }
        
        .navbar-h.scrolled {
            background: rgba(126, 26, 18, 0.98);
            backdrop-filter: blur(30px) saturate(150%);
            padding: 12px 80px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-logo-h img {
            height: 60px;
            width: auto;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
        }
        
        .navbar-h.scrolled .navbar-logo-h img {
            height: 45px;
        }

        .nav-links-h {
            display: flex;
            gap: 35px;
            list-style: none;
            align-items: center;
        }

        .nav-links-h a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            text-shadow: 0 4px 10px rgba(0,0,0,0.5);
            display: inline-flex;
            align-items: center;
        }

        .navbar-h.scrolled .nav-links-h a {
            color: #9ef295;
            text-shadow: none;
        }

        .nav-links-h a:hover {
            color: #9ef295 !important;
            opacity: 1;
        }

        .nav-links-h a::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 0;
            height: 2px;
            background: #9ef295;
            transition: width 0.3s ease;
        }

        .nav-links-h a:hover::after {
            width: 100%;
        }

        /* Dropdown Logic - Premium Styling */
        .has-dropdown-h {
            position: relative;
            padding-bottom: 5px;
        }

        .dropdown-menu-h {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            min-width: 260px;
            padding: 15px 0;
            border-radius: 8px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(15px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0,0,0,0.05);
        }

        .has-dropdown-h:hover .dropdown-menu-h {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .dropdown-menu-h::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            width: 100%;
            height: 20px;
            background: transparent;
        }

        .dropdown-menu-h a {
            color: #1a1c18 !important;
            padding: 10px 25px;
            display: block;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-shadow: none !important;
            transition: all 0.3s ease;
        }

        .dropdown-menu-h a:hover {
            background: #f8f9f8;
            color: #7e1a12 !important;
            padding-left: 30px;
        }

        .dropdown-menu-h a::after { display: none !important; }

        /* Mobile Menu Overlay */
        .mobile-menu-h {
            position: fixed;
            top: 0;
            right: -70%;
            width: 70%;
            height: 100vh;
            background: #7e1a12;
            z-index: 4000;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
            padding: 80px 40px;
            overflow-y: auto;
            box-shadow: -10px 0 30px rgba(0,0,0,0.3);
        }

        .mobile-menu-h.active {
            right: 0;
        }

        .mobile-links-h {
            list-style: none;
            text-align: left;
            width: 100%;
        }

        .mobile-links-h li {
            margin: 25px 0;
            opacity: 0;
            transform: translateX(20px);
            transition: all 0.5s ease;
        }

        .mobile-menu-h.active .mobile-links-h li {
            opacity: 1;
            transform: translateX(0);
        }

        .mobile-links-h a {
            color: white;
            text-decoration: none;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-family: 'Outfit', sans-serif;
            transition: color 0.3s ease;
        }

        .mobile-links-h .highlight-green {
            color: #9ef295 !important;
        }

        .mobile-close-h {
            position: absolute;
            top: 30px;
            right: 30px;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }

        /* Mobile Dropdown Styling */
        .mobile-dropdown-h {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
            list-style: none;
            padding-left: 0;
            margin-top: 15px;
            width: 100%;
            border-left: 2px solid rgba(158, 242, 149, 0.3);
            margin-left: 5px;
        }

        .mobile-dropdown-h.active {
            max-height: 500px;
            transition: max-height 0.8s ease-in-out;
        }

        .mobile-dropdown-h li {
            margin: 12px 0 12px 20px !important;
            text-align: left;
        }

        .mobile-dropdown-h a {
            font-size: 15px !important;
            font-weight: 400 !important;
            color: rgba(255, 255, 255, 0.7) !important;
            letter-spacing: 0.1em !important;
            text-transform: uppercase;
        }

        .mobile-toggle-h {
            display: none !important;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }

        @media (max-width: 1024px) {
            .navbar-h { padding: 15px 25px; background: transparent; }
            .navbar-h.scrolled { 
                padding: 12px 25px; 
                background: rgba(126, 26, 18, 1) !important;
                box-shadow: 0 10px 40px rgba(0,0,0,0.4);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .nav-links-h { display: none !important; }
            .mobile-toggle-h { 
                display: block !important; 
                margin-left: auto;
            }
            .navbar-logo-h img { height: 40px; }
        }

        @media (max-width: 480px) {
            .navbar-h { padding: 15px 16px; }
            .navbar-h.scrolled { padding: 12px 16px; }
            .navbar-logo-h img { height: 35px; }
        }
      `}</style>

      <nav className={`navbar-h ${scrolled ? 'scrolled' : ''}`} id="main-nav-h">
        <div className="navbar-logo-h">
          <Link to="/">
            <img src="/assets/logo2.png" alt="Sam Agri" onError={(e) => { e.target.src = 'https://via.placeholder.com/120x40?text=SAM+AGRI' }} />
          </Link>
        </div>

        <ul className="nav-links-h">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li className="has-dropdown-h">
            <Link to="#">Products <i className="fas fa-chevron-down ml-2 text-[10px] opacity-50"></i></Link>
            <div className="dropdown-menu-h">
              <Link to="/pomegranate-arils">Pomegranate Arils</Link>
              <Link to="/coconut-chunks">Coconut Chunks</Link>
              <Link to="/dried-arils">Dried Arils</Link>
              <Link to="/pomegranate-fruit">Pomegranate Fruit</Link>
              <Link to="/iqf-arils">IQF Aril</Link>
            </div>
          </li>
          <li><Link to="/infrastructure">Infrastructure</Link></li>
          <li><Link to="/sustainability">Sustainability</Link></li>
          <li><Link to="/group-companies">Group Companies</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>

        <div className="mobile-toggle-h" id="mobile-toggle-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-h ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu-overlay">
        <div className="mobile-close-h" id="mobile-close-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-times"></i>
        </div>
        <ul className="mobile-links-h">
          <li style={{ transitionDelay: '0.1s' }}><Link to="/">Home</Link></li>
          <li style={{ transitionDelay: '0.2s' }}><Link to="/about-us">About Samagri</Link></li>
          
          {/* Mobile Products Accordion */}
          <li className="w-full" style={{ transitionDelay: '0.3s' }}>
            <a href="javascript:void(0)" className="flex items-center justify-start gap-4 w-full highlight-green" id="mobile-assortment-toggle" onClick={toggleMobileAssortment}>
              Products <i className="fas fa-chevron-down text-xs opacity-50 transition-transform duration-300" style={{ transform: mobileAssortmentOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
            </a>
            <ul className={`mobile-dropdown-h ${mobileAssortmentOpen ? 'active' : ''}`} id="mobile-assortment-list">
              <li><Link to="/pomegranate-arils">Pomegranate Arils</Link></li>
              <li><Link to="/coconut-chunks">Coconut Chunks</Link></li>
              <li><Link to="/dried-arils">Dried Arils</Link></li>
              <li><Link to="/pomegranate-fruit">Pomegranate Fruit</Link></li>
              <li><Link to="/iqf-arils">IQF Aril</Link></li>
            </ul>
          </li>

          <li style={{ transitionDelay: '0.4s' }}><Link to="/infrastructure">Infrastructure</Link></li>
          <li style={{ transitionDelay: '0.5s' }}><Link to="/sustainability">Sustainability</Link></li>
          <li style={{ transitionDelay: '0.6s' }}><Link to="/group-companies">Group Companies</Link></li>
          <li style={{ transitionDelay: '0.8s' }}><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
