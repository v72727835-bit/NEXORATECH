import { Link } from 'react-router-dom';
import { HiArrowRight, HiHome, HiUserGroup, HiUsers, HiChartBar, HiClipboardList, HiLightningBolt, HiShare, HiServer, HiCube, HiCode, HiDeviceMobile, HiCloud, HiColorSwatch, HiShieldCheck, HiSupport } from 'react-icons/hi';

const servicesList = [
  { icon: HiHome, title: 'Real Estate Complete Solutions', desc: 'Complete digital ecosystem for real estate businesses — listings, CRM, payments, and more.' },
  { icon: HiUserGroup, title: 'HRMS', desc: 'Human Resource Management System — manage payroll, attendance, leaves, and employee data.' },
  { icon: HiUsers, title: 'CRM', desc: 'Customer Relationship Management — track leads, manage deals, and grow relationships.' },
  { icon: HiChartBar, title: 'DSR', desc: 'Daily Sales Report — automated sales tracking with real-time analytics and insights.' },
  { icon: HiClipboardList, title: 'PMS', desc: 'Project Management System — plan, track, and deliver projects on time.' },
  { icon: HiLightningBolt, title: 'LMS', desc: 'Lead Management System — capture, qualify, and convert leads efficiently.' },
  { icon: HiShare, title: 'MLM', desc: 'Multi-Level Marketing — manage networks, commissions, and downlines with ease.' },
  { icon: HiServer, title: 'ERP', desc: 'Enterprise Resource Planning — integrate finance, inventory, HR, and operations.' },
  { icon: HiCube, title: 'Customized Software', desc: 'Tailored software & mobile applications built exactly for your business needs.' },
  { icon: HiCode, title: 'Web Development', desc: 'Secure, high-performance websites built to last.' },
  { icon: HiDeviceMobile, title: 'Mobile App Development', desc: 'Cross-platform apps people love using.' },
  { icon: HiCloud, title: 'Cloud Solutions', desc: 'Scalable infrastructure that grows with you.' },
  { icon: HiColorSwatch, title: 'UI/UX Design', desc: 'Clean, intuitive interfaces that make sense.' },
  { icon: HiShieldCheck, title: 'Cybersecurity', desc: 'We find vulnerabilities before they do.' },
  { icon: HiSupport, title: 'IT Consulting', desc: 'Honest advice. No unnecessary upsells.' },
];

const gradients = [
  'linear-gradient(135deg, #2563eb, #3b82f6)',
  'linear-gradient(135deg, #8b5cf6, #a78bfa)',
  'linear-gradient(135deg, #f59e0b, #fbbf24)',
  'linear-gradient(135deg, #06b6d4, #22d3ee)',
  'linear-gradient(135deg, #10b981, #34d399)',
  'linear-gradient(135deg, #ec4899, #f472b6)',
  'linear-gradient(135deg, #ef4444, #f87171)',
  'linear-gradient(135deg, #6366f1, #818cf8)',
  'linear-gradient(135deg, #14b8a6, #2dd4bf)',
  'linear-gradient(135deg, #2563eb, #3b82f6)',
  'linear-gradient(135deg, #8b5cf6, #a78bfa)',
  'linear-gradient(135deg, #f59e0b, #fbbf24)',
  'linear-gradient(135deg, #06b6d4, #22d3ee)',
  'linear-gradient(135deg, #10b981, #34d399)',
  'linear-gradient(135deg, #ec4899, #f472b6)',
];

function Services() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section style={{
        padding: '140px 0 80px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg)'
      }}>
        <div style={{
          position: 'absolute', top: '-30%', right: '-20%', width: '600px', height: '600px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(50px)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block', padding: '6px 18px', borderRadius: '40px',
            background: 'var(--tag-bg)', color: 'var(--primary)',
            fontSize: '0.82rem', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(37,99,235,0.12)'
          }}>
            What We Do
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text)',
            lineHeight: 1.1, marginBottom: '20px'
          }}>
            Services That{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Actually Deliver</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7
          }}>
            No fluff, no buzzwords. Here's exactly what we can do for you — and we do it well.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 40px', background: 'var(--bg)', perspective: '1200px' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
            transformStyle: 'preserve-3d'
          }}>
            {servicesList.map((s, i) => (
              <div key={i} onClick={scrollToForm} style={{
                padding: '28px 22px', borderRadius: '18px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative', overflow: 'hidden',
                transformStyle: 'preserve-3d', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '16px'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${0}deg) rotateX(${0}deg) translateY(-6px) scale(1.02)`;
                  e.currentTarget.style.boxShadow = `0 30px 60px -15px rgba(37,99,235,0.3)`;
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.animation = 'svc-pulse 1.2s ease-in-out infinite';
                  const icon = e.currentTarget.querySelector('.svc-icon');
                  if (icon) icon.style.animation = 'svc-icon-bounce 0.6s ease-out';
                  const shine = e.currentTarget.querySelector('.card-shine');
                  if (shine) { shine.style.opacity = '1'; }
                }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  const shine = e.currentTarget.querySelector('.card-shine');
                  if (shine) {
                    const sx = (e.clientX - rect.left) / rect.width * 100;
                    const sy = (e.clientY - rect.top) / rect.height * 100;
                    shine.style.background = `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.15), transparent 60%)`;
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = '#000';
                  e.currentTarget.style.animation = 'none';
                  const icon = e.currentTarget.querySelector('.svc-icon');
                  if (icon) icon.style.animation = 'none';
                  const shine = e.currentTarget.querySelector('.card-shine');
                  if (shine) { shine.style.opacity = '0'; }
                }}
              >
                <div className="card-shine" style={{
                  position: 'absolute', inset: '0', borderRadius: '18px',
                  pointerEvents: 'none', opacity: '0',
                  transition: 'opacity 0.3s ease', zIndex: '1'
                }} />
                <div className="svc-icon" style={{
                  position: 'relative', zIndex: '2', flexShrink: 0,
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: gradients[i], display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', color: '#fff',
                  boxShadow: `0 6px 20px rgba(0,0,0,0.15)`
                }}>
                  <s.icon />
                </div>
                <div style={{ position: 'relative', zIndex: '2', flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px', color: 'var(--text)' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.4, fontSize: '0.78rem', margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '40px 0', textAlign: 'center',
        background: 'var(--bg)', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.03), transparent 60%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800,
            color: 'var(--text)', marginBottom: '16px'
          }}>
            Not Sure What You Need?
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem',
            maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7
          }}>
            That's okay. Tell us about your project and we'll figure it out together — no pressure, no sales pitch.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '16px 36px', borderRadius: '40px', fontSize: '1rem', fontWeight: 600,
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
            onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
          >
            Let's Talk <HiArrowRight />
          </Link>
        </div>
      </section>
      <style>{`
        @keyframes svc-pulse {
          0%, 100% { transform: perspective(1000px) translateY(-6px) scale(1.02); }
          50% { transform: perspective(1000px) translateY(-8px) scale(1.03); }
        }
        @keyframes svc-icon-bounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.25) rotate(-5deg); }
          60% { transform: scale(0.95) rotate(3deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </>
  );
}

export default Services;
