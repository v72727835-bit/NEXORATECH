import { Link } from 'react-router-dom';
import { HiArrowRight, HiCode, HiDeviceMobile, HiChartBar, HiCloud, HiCube, HiColorSwatch, HiShieldCheck, HiSupport } from 'react-icons/hi';

const servicesList = [
  {
    icon: HiCode, color: '#2563eb', title: 'Web Development',
    desc: 'Secure websites built to last.'
  },
  {
    icon: HiDeviceMobile, color: '#8b5cf6', title: 'Mobile App Development',
    desc: 'Apps people love using.'
  },
  {
    icon: HiChartBar, color: '#f59e0b', title: 'SEO & Digital Marketing',
    desc: 'Real strategies. Real customers.'
  },
  {
    icon: HiCloud, color: '#06b6d4', title: 'Cloud Solutions',
    desc: 'Infrastructure that grows with you.'
  },
  {
    icon: HiCube, color: '#10b981', title: 'Custom Software',
    desc: 'Built exactly what you need.'
  },
  {
    icon: HiColorSwatch, color: '#ec4899', title: 'UI/UX Design',
    desc: 'Interfaces that make sense.'
  },
  {
    icon: HiShieldCheck, color: '#ef4444', title: 'Cybersecurity',
    desc: 'We find vulnerabilities before they do.'
  },
  {
    icon: HiSupport, color: '#6366f1', title: 'IT Consulting',
    desc: 'Honest advice. No upsells.'
  },
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
];

function Services() {
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

      <section style={{ padding: '0 0 100px', background: 'var(--bg)', perspective: '1200px' }}>
        <div className="container">
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '60px', transformStyle: 'preserve-3d'
          }}>
            {servicesList.map((s, i) => (
              <div key={i} style={{
                width: '260px', height: '260px', borderRadius: '50%',
                padding: '32px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(12px)',
                border: '2px solid #000',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative', overflow: 'hidden',
                transformStyle: 'preserve-3d', cursor: 'default'
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.06)`;
                  e.currentTarget.style.boxShadow = `0 30px 60px -12px rgba(0,0,0,0.25)`;
                  const shine = e.currentTarget.querySelector('.card-shine');
                  if (shine) {
                    const sx = (e.clientX - rect.left) / rect.width * 100;
                    const sy = (e.clientY - rect.top) / rect.height * 100;
                    shine.style.background = `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.12), transparent 60%)`;
                    shine.style.opacity = '1';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                  const shine = e.currentTarget.querySelector('.card-shine');
                  if (shine) { shine.style.opacity = '0'; }
                }}
              >
                <div className="card-shine" style={{
                  position: 'absolute', inset: '0', borderRadius: '50%',
                  pointerEvents: 'none', opacity: '0',
                  transition: 'opacity 0.3s ease', zIndex: '1'
                }} />
                <div style={{ position: 'relative', zIndex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: gradients[i], display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', color: '#fff', marginBottom: '16px',
                    boxShadow: `0 8px 24px ${s.color}40`
                  }}>
                    <s.icon />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text)' }}>
                    {s.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.85rem' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 0', textAlign: 'center',
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
    </>
  );
}

export default Services;
