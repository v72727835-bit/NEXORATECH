import { Link } from 'react-router-dom';
import { HiArrowRight, HiCalendar, HiUserGroup, HiChip } from 'react-icons/hi';

const projects = [
  {
    title: 'ShopLocal E-Commerce',
    category: 'Web Development',
    desc: 'Full-featured e-commerce for local businesses. Handles 10k+ daily transactions.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
    stats: '10k+ Daily Transactions'
  },
  {
    title: 'MediTrack Healthcare',
    category: 'Mobile App',
    desc: 'Patient management app for clinics. Serving 50+ clinics across India.',
    tech: ['React Native', 'Firebase', 'Twilio'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    stats: '50+ Clinics'
  },
  {
    title: 'RestroPro POS',
    category: 'Custom Software',
    desc: 'Restaurant management with POS, inventory tracking, analytics.',
    tech: ['Next.js', 'PostgreSQL', 'Redis'],
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    stats: '30+ Restaurants'
  },
  {
    title: 'PropView Real Estate',
    category: 'Web Platform',
    desc: 'Real estate platform with virtual tours and AI recommendations.',
    tech: ['Next.js', 'Python', 'AWS'],
    gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
    stats: '5k+ Properties'
  },
  {
    title: 'EduLearn LMS',
    category: 'Web Development',
    desc: 'Learning management system for coaching institutes. 20k+ active students.',
    tech: ['React', 'Express', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    stats: '20k+ Students'
  },
  {
    title: 'LogiTrack Fleet',
    category: 'Custom Software',
    desc: 'Fleet management with real-time GPS tracking and route optimization.',
    tech: ['React Native', 'Node.js', 'Mapbox'],
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    stats: '15+ Companies'
  },
];

const projAnim = `
@keyframes proj-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes proj-scroll-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
`;

function ProjectsSection() {
  const allProjects = [...projects, ...projects];

  return (
    <>
      <style>{projAnim}</style>
      <section className="section" style={{
        background: 'var(--bg)', position: 'relative', overflow: 'hidden',
        perspective: '1000px'
      }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
          filter: 'blur(70px)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', right: '-8%', width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
              Our Work
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800,
              color: 'var(--text)', marginBottom: '12px'
            }}>
              Featured Projects
            </h2>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.95rem',
              maxWidth: '540px', margin: '0 auto', lineHeight: 1.7
            }}>
              Real projects we have built for real clients. Each one tells a story of problem-solving and craftsmanship.
            </p>
          </div>
        </div>

        <div style={{
          overflow: 'hidden', padding: '10px 0 40px',
          margin: '0 calc(-50vw + 50%)', width: '100vw'
        }}>
          <div style={{
            display: 'flex', gap: '24px',
            animation: 'proj-scroll 40s linear infinite',
            width: 'fit-content'
          }}
            onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused'; }}
            onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running'; }}
          >
            {allProjects.map((p, i) => (
              <div key={i} style={{
                width: '380px', flexShrink: 0,
                borderRadius: '18px', overflow: 'hidden',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                transformStyle: 'preserve-3d', cursor: 'default'
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-6px) scale(1.03)`;
                  e.currentTarget.style.boxShadow = `0 30px 60px -15px rgba(0,0,0,0.25)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{
                  height: '140px',
                  background: p.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', inset: '0',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)'
                  }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <HiChip style={{ fontSize: '2.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }} />
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 600 }}>{p.title}</div>
                  </div>
                </div>
                <div style={{ padding: '22px 20px 24px' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'
                  }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '40px',
                      background: p.gradient,
                      color: '#fff', fontSize: '0.68rem', fontWeight: 600
                    }}>
                      {p.category}
                    </span>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      color: 'var(--text-secondary)', fontSize: '0.72rem'
                    }}>
                      <HiCalendar style={{ fontSize: '0.75rem' }} /> 2024
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)',
                    marginBottom: '8px'
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)', lineHeight: 1.6,
                    fontSize: '0.82rem', marginBottom: '12px'
                  }}>
                    {p.desc}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px'
                  }}>
                    <HiUserGroup style={{ color: '#2563eb', fontSize: '0.8rem' }} />
                    <span style={{ color: 'var(--text)', fontSize: '0.78rem', fontWeight: 600 }}>{p.stats}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {p.tech.map((t, j) => (
                      <span key={j} style={{
                        padding: '3px 8px', borderRadius: '5px',
                        background: 'var(--tag-bg)', color: 'var(--text-secondary)',
                        fontSize: '0.68rem', fontWeight: 500,
                        border: '1px solid var(--glass-border)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px'
            }}>
              Want to see your project here? Let's make it happen.
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 32px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600,
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px) scale(1.03)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
              onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
            >
              Start Your Project <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
