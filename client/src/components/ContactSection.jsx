import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheck } from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="section" style={{
      background: 'var(--bg)', position: 'relative', overflow: 'hidden',
      perspective: '1000px'
    }}>
      <div style={{
        position: 'absolute', top: '-15%', right: '-10%', width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.05), transparent 60%)',
        filter: 'blur(70px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-8%', width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.04), transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            Let's Connect
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800,
            color: 'var(--text)', marginBottom: '12px'
          }}>
            Ready to Build{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Something Great?</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '0.95rem',
            maxWidth: '520px', margin: '0 auto', lineHeight: 1.7
          }}>
            Tell us about your project and we'll get back to you within 24 hours. No pressure, no sales pitch.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px',
          alignItems: 'start', maxWidth: '1000px', margin: '0 auto'
        }}>
          <div style={{
            padding: '32px 28px', borderRadius: '20px',
            background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
            border: '2px solid #000',
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d'
          }}
            onMouseMove={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
              e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.15)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: HiMail, label: 'Email', val: 'info@nexoratechpvtltd.com' },
                { icon: HiPhone, label: 'Phone', val: '+91 8182868062' },
                { icon: HiLocationMarker, label: 'Location', val: '7X23+GCX, Amara Village, Bari bazar, Varanasi, Amara Khaira Chak, Uttar Pradesh 221106' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 16px', borderRadius: '12px',
                  background: 'var(--bg)', border: '1px solid var(--glass-border)'
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', color: '#fff', flexShrink: 0
                  }}>
                    <item.icon />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '1px' }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)' }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '20px', paddingTop: '18px',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex', gap: '8px', justifyContent: 'center'
            }}>
              {[
                { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/nexoratech' },
                { icon: FaTwitter, url: 'https://twitter.com/nexoratech' },
                { icon: FaInstagram, url: 'https://www.instagram.com/nexoratech' },
                { icon: FaGithub, url: 'https://github.com/nexoratech' },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg)', border: '2px solid #000',
                  fontSize: '0.8rem', color: 'var(--text)',
                  transition: 'all 0.2s', textDecoration: 'none'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#2563eb' }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = '#000' }}
                ><s.icon /></a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            padding: '32px 28px', borderRadius: '20px',
            background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
            border: '2px solid #000',
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d'
          }}
            onMouseMove={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
              e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.15)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <h3 style={{
              fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)',
              marginBottom: '20px', textAlign: 'center'
            }}>
              Send Us a Message
            </h3>
            <div style={{ display: 'grid', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required
                  style={inputS} />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required
                  style={inputS} />
              </div>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
                style={inputS} />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project *" required
                rows={4} style={{ ...inputS, resize: 'vertical' }} />
              <button type="submit" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px', borderRadius: '40px', fontSize: '0.95rem', fontWeight: 600,
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                color: '#fff', border: 'none', width: '100%', cursor: 'default',
                boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px) scale(1.02)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
                onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
              >
                {sent ? <><HiCheck /> Message Sent!</> : <><HiPaperAirplane /> Send Message</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputS = {
  width: '100%', padding: '11px 14px', borderRadius: '10px',
  border: '2px solid #000', fontSize: '0.88rem', outline: 'none',
  fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)',
  transition: 'all 0.2s'
};

export default ContactSection;
