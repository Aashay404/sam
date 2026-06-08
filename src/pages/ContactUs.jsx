import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  return (
    <>
      <style>{`
        .form-input {
            width: 100%;
            background: #ffffff;
            border: 2px solid #d4d4d8;
            padding: 1.25rem;
            border-radius: 1rem;
            outline: none;
            transition: all 0.3s ease;
            font-family: 'Outfit', sans-serif;
            color: #1a1c18;
        }

        .form-input:focus {
            border-color: #7e1a12;
            box-shadow: 0 0 0 4px rgba(126, 26, 18, 0.05);
        }

        .form-input::placeholder {
            color: #71717a;
        }
      `}</style>

      <main className="text-on-surface bg-[#faf9f5]">
        {/* Premium Contact Layout */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row pt-20 lg:pt-0">
          {/* Left: Brand Info (Dark Red) */}
          <div className="lg:w-[45%] bg-[#4a0a05] relative flex flex-col justify-center p-8 md:p-12 lg:p-20 overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#7e1a12]/80 to-black/90"></div>

            <div className="relative z-10 animate-in">
              <span className="text-[#9ef295] font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-4 md:mb-6 block">Connect With Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-none uppercase tracking-tighter mb-8 md:mb-12">
                GET IN <br /><span className="text-[#9ef295]">TOUCH</span>
              </h1>

              <div className="space-y-8 md:space-y-12">
                <div className="flex items-start gap-4 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#9ef295] group-hover:bg-[#9ef295] group-hover:text-[#4a0a05] transition-all duration-500">
                    <i className="fas fa-map-marker-alt text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white/40 font-bold uppercase tracking-widest text-[9px] mb-1 md:mb-2">Headquarters</h4>
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">Begumpet, Hyderabad,<br />Telangana, India 500016</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#9ef295] group-hover:bg-[#9ef295] group-hover:text-[#4a0a05] transition-all duration-500">
                    <i className="fas fa-phone-alt text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white/40 font-bold uppercase tracking-widest text-[9px] mb-1 md:mb-2">Call Us</h4>
                    <p className="text-white text-base md:text-lg font-bold">+91 40 2790 6577</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#9ef295] group-hover:bg-[#9ef295] group-hover:text-[#4a0a05] transition-all duration-500">
                    <i className="fas fa-envelope text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white/40 font-bold uppercase tracking-widest text-[9px] mb-1 md:mb-2">Email</h4>
                    <p className="text-white text-base md:text-lg font-bold">info@samagri.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10 flex gap-6">
                <a href="#" className="text-white/40 hover:text-[#9ef295] transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
                <a href="#" className="text-white/40 hover:text-[#9ef295] transition-colors"><i className="fab fa-instagram text-lg"></i></a>
                <a href="#" className="text-white/40 hover:text-[#9ef295] transition-colors"><i className="fab fa-facebook-f text-lg"></i></a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (Clean Surface) */}
          <div className="lg:w-[55%] bg-[#faf9f5] flex flex-col justify-center p-8 md:p-12 lg:p-20">
            <div className="max-w-2xl w-full mx-auto animate-in">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4 uppercase">ENQUIRY FORM</h2>
              <p className="text-on-surface-variant mb-8 md:mb-10 font-medium text-sm md:text-base">Please fill out the form below and our global team will contact you within 24 hours.</p>

              {submitted ? (
                <div className="bg-primary/10 border border-primary/20 text-primary p-6 rounded-2xl mb-8">
                  <h4 className="font-bold text-lg mb-2">Thank you!</h4>
                  <p className="text-sm">Your message has been received. Our team will get back to you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Full Name" required />
                  </div>
                  <div className="relative">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="relative">
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-input" placeholder="Subject / Nature of Enquiry" required />
                </div>

                <div className="relative">
                  <textarea name="message" value={formData.message} onChange={handleChange} className="form-input h-32 resize-none" placeholder="Your Message" required></textarea>
                </div>

                <div className="pt-4 md:pt-6">
                  <button type="submit" className="w-full md:w-auto bg-secondary text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl flex items-center justify-center gap-4 group">
                    Send Message
                    <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactUs
