import React, { useState, useEffect } from 'react'

const StickyIcons = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('section.h-screen')
      const threshold = hero ? hero.offsetHeight - 150 : 150
      
      const mapWrap = document.getElementById('gp-map-wrap')
      let isOverlappingMap = false
      if (mapWrap) {
        const rect = mapWrap.getBoundingClientRect()
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight
        // Hide only if the map overlaps the bottom-right corner where icons sit (from bottom-160px to bottom-30px)
        isOverlappingMap = (rect.top < viewportHeight - 30 && rect.bottom > viewportHeight - 160)
      }

      if (window.scrollY > threshold && !isOverlappingMap) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        /* Sticky Social Bar */
        .social-icons {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .social-icons.visible {
          opacity: 1;
          pointer-events: auto;
        }

        /* Hide FB, IG, LI by default */
        .social-icons a:not(.whatsapp) {
          opacity: 0;
          transform: translateY(15px);
          pointer-events: none;
          transition: opacity 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        /* Stagger upward on hover */
        .social-icons:hover a:not(.whatsapp) {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .social-icons:hover a:nth-child(3) { transition-delay: 0s; }
        .social-icons:hover a:nth-child(2) { transition-delay: 0.08s; }
        .social-icons:hover a:nth-child(1) { transition-delay: 0.16s; }

        /* WhatsApp always visible at bottom */
        .social-icons a.whatsapp {
          width: 56px;
          height: 56px;
          background: #25D366;
          font-size: 28px;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
          opacity: 1;
          transform: none;
          pointer-events: all;
          order: 99;
        }

        .social-icons a {
            width: 48px;
            height: 48px;
            background: #0d631b;
            backdrop-filter: blur(8px);
            border: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 50%;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .social-icons a:hover:not(.whatsapp) {
            background: #7e1a12;
            transform: translateX(-8px) scale(1.1);
            border-color: #9ef295;
            box-shadow: 0 15px 30px rgba(126, 26, 18, 0.4);
        }

        /* WhatsApp Button */
        .whatsapp-btn {
            background: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease, box-shadow 0.3s;
        }
        .whatsapp-btn.visible {
            opacity: 1;
            pointer-events: auto;
        }
        .whatsapp-btn:hover {
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6);
        }
      `}</style>

      {/* Sticky Elements */}
      <div className={`social-icons ${isVisible ? 'visible' : ''}`}>
          <a href="https://www.facebook.com/SamAgriGroup/" className="facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/samagrigroup/" className="instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/samagrigroup/?originalSubdomain=in" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/914027906577" className={`whatsapp whatsapp-btn ${isVisible ? 'visible' : ''}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
      </div>
    </>
  )
}

export default StickyIcons
