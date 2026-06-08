import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/common/Header'
import StickyIcons from './components/common/StickyIcons'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import ProductDetail from './components/products/ProductDetail'
import AboutUs from './pages/AboutUs'
import Sustainability from './pages/Sustainability'
import Locations from './pages/Locations'
import Advantage from './pages/Advantage'

// Import all ported pages
import Avocado from './pages/Avocado'
import ContactUs from './pages/ContactUs'
import DriedArils from './pages/DriedArils'
import Exotics from './pages/Exotics'
import FreshFigs from './pages/FreshFigs'
import GroupCompanies from './pages/GroupCompanies'
import Infrastructure from './pages/Infrastructure'
import InterfaceConclusion from './pages/InterfaceConclusion'
import IqfArils from './pages/IqfArils'
import Pmg from './pages/Pmg'
import PomegranateFruit from './pages/PomegranateFruit'
import WholeFruit from './pages/WholeFruit'
import CoconutChunks from './pages/CoconutChunks'
import WestInAvo from './pages/WestInAvo'

// Scroll to top helper when navigating routes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app overflow-x-hidden w-full relative">
        <Header />
        <StickyIcons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/global-presence" element={<Locations />} />
          <Route path="/advantage" element={<Advantage />} />
          
          {/* Assortment & Product Pages */}
          <Route path="/avocado" element={<Avocado />} />
          <Route path="/coconut-chunks" element={<CoconutChunks />} />
          <Route path="/dried-arils" element={<DriedArils />} />
          <Route path="/exotics" element={<Exotics />} />
          <Route path="/fresh-figs" element={<FreshFigs />} />
          <Route path="/iqf-arils" element={<IqfArils />} />
          <Route path="/pomegranate-arils" element={<Pmg />} />
          <Route path="/pomegranate-fruit" element={<PomegranateFruit />} />
          <Route path="/whole-fruit" element={<WholeFruit />} />
          <Route path="/west-in-avo" element={<WestInAvo />} />
          
          {/* Corporate Pages */}
          <Route path="/group-companies" element={<GroupCompanies />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Conclusion */}
          <Route path="/conclusion" element={<InterfaceConclusion />} />
          <Route path="/interface-conclusion" element={<InterfaceConclusion />} />
          
          {/* Generic Product Detail */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
