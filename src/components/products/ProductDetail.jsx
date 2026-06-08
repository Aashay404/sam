import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Info, Wind, Thermometer, Droplets } from 'lucide-react'

const productData = {
  'pomegranate-arils': {
    name: 'Pomegranate Arils',
    image: '/pomegranate.png',
    headline: 'Ruby Red Nuggets of Pure Nutrition',
    description: 'Our pomegranate arils are extracted from the finest pomegranates grown in our GAP certified farms. Each aril is a burst of sweetness and nutrition, processed in our high-care facility to ensure maximum freshness.',
    nutrition: { calories: '83 kcal', fiber: '4g', vitaminC: '17%', potassium: '236mg' },
    storage: 'Keep refrigerated between 0°C to 4°C. Best consumed within 7-10 days of packing.'
  },
  'coconut-chunks': {
    name: 'Coconut Chunks',
    image: '/coconut.png',
    headline: 'Freshly Cut Tropical Goodness',
    description: 'Fresh cut coconut chunks, processed with hygiene and precision. Perfect for snacking, desserts, or smoothies. Sourced from the coastal groves of South India.',
    nutrition: { calories: '354 kcal', fiber: '9g', vitaminC: '5%', potassium: '356mg' },
    storage: 'Refrigerate immediately. Store in an airtight container for lasting freshness.'
  }
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = productData[id] || productData['pomegranate-arils']

  return (
    <div className="product-detail-page">
      {/* Dole Style Hero */}
      <section style={{ 
        height: '80vh', 
        background: 'var(--bg-dark)', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '100px'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                {product.name}
              </h1>
              <h3 className="serif" style={{ fontStyle: 'italic', color: 'var(--primary-green)', fontSize: '2rem', marginBottom: '2rem' }}>
                {product.headline}
              </h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                {product.description}
              </p>
              <button className="btn-cta">Where to Buy</button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ 
                width: '100%', 
                height: '600px', 
                background: 'rgba(255,255,255,0.02)', 
                borderRadius: '50% 50% 0 0',
                position: 'absolute',
                top: '50px',
                zIndex: -1
              }}></div>
              <img src={product.image} alt={product.name} style={{ width: '100%', transform: 'rotate(-5deg)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Sections - Dole Style Branding */}
      <section style={{ padding: '8rem 0', background: '#fff', color: '#1a1a1a' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '24px' }}>
              <div style={{ color: 'var(--primary-green)', marginBottom: '1.5rem' }}>
                <Thermometer size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#1a1a1a' }}>Optimal Storage</h3>
              <p style={{ color: '#666' }}>{product.storage}</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '24px' }}>
              <div style={{ color: 'var(--primary-green)', marginBottom: '1.5rem' }}>
                <Droplets size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#1a1a1a' }}>Preparation</h3>
              <p style={{ color: '#666' }}>Ready to eat. No peeling or cutting required. Packed in modified atmosphere for longevity.</p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--primary-green)', borderRadius: '24px', color: '#fff' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <Info size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Nutritional Facts</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Calories</span> <strong>{product.nutrition.calories}</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Fiber</span> <strong>{product.nutrition.fiber}</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Vitamin C</span> <strong>{product.nutrition.vitaminC}</strong></li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Potassium</span> <strong>{product.nutrition.potassium}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
