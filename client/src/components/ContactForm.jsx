import { useState } from 'react';
import axios from 'axios';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });
    try {
      await axios.post('/api/contact', form);
      setStatus({ type: 'success', text: 'Thank you! We will get back to you shortly.' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact-form" style={{
      background: 'var(--bg)', position: 'relative', overflow: 'hidden',
      perspective: '1000px'
    }}>
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px',
          alignItems: 'start'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 1.8rem)', fontWeight: 800,
              color: 'var(--text)', marginBottom: '16px'
            }}>
              Let's Discuss Your Project
            </h2>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.7,
              fontSize: '0.95rem', marginBottom: '32px'
            }}>
              Ready to take your business to the next level? Fill out the form and our team will reach out within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { icon: HiMail, label: 'Email', value: 'info@nexoratechpvtltd.com' },
                { icon: HiPhone, label: 'Phone', value: '+91 8182868062' },
                { icon: HiLocationMarker, label: 'Location', value: '7X23+GCX, Amara Village, Bari bazar, Varanasi, Amara Khaira Chak, Uttar Pradesh 221106' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '18px 20px', borderRadius: '14px',
                  background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                  border: '2px solid #000',
                  display: 'flex', alignItems: 'center', gap: '14px',
                  transition: 'all 0.3s ease', cursor: 'default'
                }}
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-2px)`;
                    e.currentTarget.style.boxShadow = `0 15px 30px -8px rgba(0,0,0,0.12)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', color: '#fff', flexShrink: 0
                  }}>
                    <item.icon />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            padding: '36px', borderRadius: '18px',
            background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
            border: '2px solid #000',
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d'
          }}
            onMouseMove={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
              e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.15)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ display: 'grid', gap: '16px' }}>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required
                style={inputStyle} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required
                  style={inputStyle} />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
                  style={inputStyle} />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project *" required
                rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              <button type="submit" disabled={loading} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px', borderRadius: '40px', fontSize: '0.95rem', fontWeight: 600,
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                color: '#fff', border: 'none', cursor: 'default', width: '100%',
                boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { if (!loading) { e.target.style.transform = 'translateY(-2px) scale(1.02)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' } }}
                onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
              >
                {loading ? 'Sending...' : <><HiPaperAirplane /> Send Message</>}
              </button>
              {status.text && (
                <div style={{
                  padding: '12px 16px', borderRadius: '10px', textAlign: 'center', fontSize: '0.88rem',
                  background: status.type === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                  border: `1px solid ${status.type === 'success' ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
                  color: status.type === 'success' ? '#10b981' : '#ef4444',
                  fontWeight: 500
                }}>
                  {status.text}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 16px', borderRadius: '10px',
  border: '2px solid #000', fontSize: '0.9rem', outline: 'none',
  fontFamily: 'inherit', background: 'var(--bg)',
  transition: 'all 0.2s', color: 'var(--text)'
};

export default ContactForm;
