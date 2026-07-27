import ContactForm from '../components/ContactForm';
import { HiLocationMarker, HiClock, HiPhone } from 'react-icons/hi';

function Contact() {
  return (
    <>
      <section style={{
        padding: '140px 0 80px', textAlign: 'center',
        position: 'relative', overflow: 'hidden', background: 'var(--bg)'
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-15%', width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
          filter: 'blur(70px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '450px', height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(60px)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px 6px 6px', borderRadius: '40px',
            background: 'var(--tag-bg)', color: 'var(--primary)',
            fontSize: '0.82rem', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(37,99,235,0.12)'
          }}>
            <span style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.65rem', color: '#fff'
            }}>&#10003;</span>
            Contact
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800,
            color: 'var(--text)', lineHeight: 1.1, marginBottom: '20px'
          }}>
            Let's{' '}
            <span style={{
              background: 'linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              animation: 'ab-shimmer 4s linear infinite'
            }}>Build Something</span> Together
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7
          }}>
            Have a project in mind? We would love to hear from you. Reach out and let us make it happen.
          </p>
        </div>
      </section>
      <ContactForm />

      <section className="section" style={{
        background: 'var(--bg)', position: 'relative', overflow: 'hidden',
        perspective: '1000px'
      }}>
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>Visit Our Office</h2>
          <p className="section-subtitle" style={{ marginBottom: '24px' }}>
            We are based in Varanasi — come say hello, or reach out online.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px',
            alignItems: 'stretch'
          }}>
            <div style={{
              borderRadius: '18px', overflow: 'hidden', border: '2px solid #000',
              minHeight: '360px', position: 'relative'
            }}>
              <iframe
                title="NexoraTech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.453907629256!2d82.993244!3d25.285778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e319d2e4f0b8d%3A0x2e4f0b8d398e319d!2sAmara%20Khaira%20Chak%2C%20Uttar%20Pradesh%20221106!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0, minHeight: '360px', display: 'block' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{
              padding: '36px', borderRadius: '18px',
              background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
              border: '2px solid #000', display: 'flex',
              flexDirection: 'column', justifyContent: 'center'
            }}>
              <h3 style={{
                fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)',
                marginBottom: '20px'
              }}>Our Address</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: '#fff', flexShrink: 0, marginTop: '2px'
                  }}>
                    <HiLocationMarker />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>Address</div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.5 }}>
                      7X23+GCX, Amara Village, Bari bazar, Varanasi,<br />
                      Amara Khaira Chak, Uttar Pradesh 221106
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: '#fff', flexShrink: 0, marginTop: '2px'
                  }}>
                    <HiPhone />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>Phone</div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)' }}>+91 8182868062</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: '#fff', flexShrink: 0, marginTop: '2px'
                  }}>
                    <HiClock />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>Working Hours</div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)' }}>Mon – Sat: 9:00 AM – 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ab-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </>
  );
}

export default Contact;
