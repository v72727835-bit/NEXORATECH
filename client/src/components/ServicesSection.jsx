import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import {
  HiCode, HiDeviceMobile, HiChartBar, HiCloud, HiCube, HiColorSwatch
} from 'react-icons/hi';

const services = [
  { icon: HiCode, title: 'Web Development', desc: 'Websites that actually bring in business. Fast, reliable, built to last.' },
  { icon: HiDeviceMobile, title: 'Mobile Apps', desc: 'Apps people enjoy using, not just downloading and forgetting.' },
  { icon: HiChartBar, title: 'SEO & Digital Marketing', desc: 'Honest strategies that help real customers find you online.' },
  { icon: HiCloud, title: 'Cloud Solutions', desc: 'Infrastructure that grows with you. No downtime, no surprises.' },
  { icon: HiCube, title: 'Custom Software', desc: 'Built exactly what you need — no more, no less.' },
  { icon: HiColorSwatch, title: 'UI/UX Design', desc: 'Interfaces that make sense. No manual needed.' },
];

const gradients = [
  'linear-gradient(135deg, #2563eb, #3b82f6)',
  'linear-gradient(135deg, #8b5cf6, #a78bfa)',
  'linear-gradient(135deg, #f59e0b, #fbbf24)',
  'linear-gradient(135deg, #06b6d4, #22d3ee)',
  'linear-gradient(135deg, #10b981, #34d399)',
  'linear-gradient(135deg, #ec4899, #f472b6)',
];

function ServicesSection() {
  return (
    <section className="section" id="services" style={{ background: 'var(--bg)', perspective: '1200px' }}>
      <div className="container">
        <h2 className="section-title">What We Build</h2>
        <p className="section-subtitle">
          Here's what we actually do — no fluff, just real work that makes a difference.
        </p>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '50px', transformStyle: 'preserve-3d'
        }}>
          {services.map((s, i) => (
            <div key={i} style={{
              width: '240px', height: '240px', borderRadius: '50%',
              padding: '28px', display: 'flex', flexDirection: 'column',
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
                  width: '50px', height: '50px', borderRadius: '50%',
                  background: gradients[i], display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', color: '#fff', marginBottom: '14px',
                  boxShadow: `0 6px 20px ${gradients[i].includes('2563eb') ? 'rgba(37,99,235,0.3)' : 'rgba(0,0,0,0.15)'}`
                }}>
                  <s.icon />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.82rem' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 28px', borderRadius: '40px', fontSize: '0.92rem', fontWeight: 600,
            color: 'var(--primary)', textDecoration: 'none',
            border: '1.5px solid rgba(37,99,235,0.2)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--tag-bg)'; e.target.style.borderColor = 'rgba(37,99,235,0.4)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(37,99,235,0.2)' }}
          >
            See All Services <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
