import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import {
  HiHome, HiUserGroup, HiUsers, HiChartBar, HiClipboardList,
  HiLightningBolt, HiShare, HiServer, HiCube, HiColorSwatch
} from 'react-icons/hi';

const services = [
  { icon: HiHome, title: 'Real Estate Complete Solutions', gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)' },
  { icon: HiUserGroup, title: 'HRMS', desc: 'Human Resource Management System' },
  { icon: HiUsers, title: 'CRM', desc: 'Customer Relationship Management' },
  { icon: HiChartBar, title: 'DSR', desc: 'Daily Sales Report' },
  { icon: HiClipboardList, title: 'PMS', desc: 'Project Management System' },
  { icon: HiLightningBolt, title: 'LMS', desc: 'Lead Management System' },
  { icon: HiShare, title: 'MLM', desc: 'Multi-Level Marketing' },
  { icon: HiServer, title: 'ERP', desc: 'Enterprise Resource Planning' },
  { icon: HiCube, title: 'Customized Software', desc: 'Software & Mobile Applications' },
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
];

const scrollToForm = () => {
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
};

function ServicesSection() {
  return (
    <section className="section" id="services" style={{ background: 'var(--bg)', perspective: '1200px' }}>
      <div className="container">
        <h2 className="section-title">What We Build</h2>
        <p className="section-subtitle">
          From real estate to enterprise solutions — we build complete digital ecosystems for your business.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
          transformStyle: 'preserve-3d'
        }}>
          {services.map((s, i) => (
            <div key={i} onClick={scrollToForm} style={{
              padding: '28px 22px', borderRadius: '18px',
              background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
              border: '2px solid #000',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              position: 'relative', overflow: 'hidden',
              transformStyle: 'preserve-3d', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '16px'
            }}
              onMouseMove={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
                e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.18)`;
                const shine = e.currentTarget.querySelector('.card-shine');
                if (shine) {
                  const sx = (e.clientX - rect.left) / rect.width * 100;
                  const sy = (e.clientY - rect.top) / rect.height * 100;
                  shine.style.background = `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.1), transparent 60%)`;
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
                position: 'absolute', inset: '0', borderRadius: '18px',
                pointerEvents: 'none', opacity: '0',
                transition: 'opacity 0.3s ease', zIndex: '1'
              }} />
              <div style={{
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
                {s.desc && <p style={{ color: 'var(--text-secondary)', lineHeight: 1.4, fontSize: '0.78rem', margin: 0 }}>{s.desc}</p>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
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
