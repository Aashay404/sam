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
        .sticky-social {
            position: fixed;
            right: 36px;
            bottom: 110px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 15px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .sticky-social.visible {
            opacity: 1;
            pointer-events: auto;
        }
        .sticky-social a {
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
        .sticky-social a:hover {
            background: #7e1a12;
            transform: translateX(-8px) scale(1.1);
            border-color: #9ef295;
            box-shadow: 0 15px 30px rgba(126, 26, 18, 0.4);
        }

        /* WhatsApp Button */
        .whatsapp-btn {
            position: fixed;
            right: 30px;
            bottom: 30px;
            z-index: 1000;
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
      <div className={`sticky-social ${isVisible ? 'visible' : ''}`}>
          <a href="https://www.facebook.com/SamAgriGroup/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/samagrigroup/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/samagrigroup/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>

      <a href="https://wa.me/914027906577" target="_blank" rel="noopener noreferrer" className={`whatsapp-btn ${isVisible ? 'visible' : ''}`}>
          <i className="fab fa-whatsapp"></i>
      </a>
    </>
  )
}

export default StickyIcons
