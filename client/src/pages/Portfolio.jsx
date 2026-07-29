import { HiArrowRight } from 'react-icons/hi';

const completed = [
  {
    title: 'Bright Jewels - E-commerce',
    category: 'Web Development',
    desc: 'A beautifully designed e-commerce website for a jewelry brand with smooth browsing, product catalog, and payment gateway integration.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
  },
  {
    title: 'Tender Search Software',
    category: 'Custom Software',
    desc: 'A powerful tool to search and filter government tenders from the GeM portal, saving time and improving accuracy.',
    tech: ['Python', 'React', 'PostgreSQL', 'API'],
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    title: 'CA Portfolio Website',
    category: 'Web Development',
    desc: 'A professional and clean website for a Chartered Accountant practice, building credibility and attracting clients.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  },
  {
    title: 'Business Management CRM',
    category: 'Custom Software',
    desc: 'A comprehensive CRM solution for managing clients, invoices, and business operations efficiently.',
    tech: ['Node.js', 'React', 'MongoDB', 'AWS'],
    gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
  },
  {
    title: 'Restaurant Booking App',
    category: 'Mobile App',
    desc: 'A cross-platform mobile app for restaurant table reservations with real-time availability and push notifications.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
  },
  {
    title: 'Digital Marketing Dashboard',
    category: 'Web Development',
    desc: 'An analytics dashboard for tracking SEO performance, ad campaigns, and social media metrics in real time.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
  },
  {
    title: 'HR Management Portal',
    category: 'Web Application',
    desc: 'End-to-end HR management system handling payroll, attendance, leaves, and employee performance tracking.',
    tech: ['Angular', 'Java', 'MySQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
  },
  {
    title: 'E-Learning Platform',
    category: 'Full Stack',
    desc: 'An interactive learning platform with video lessons, quizzes, certificates, and progress tracking for students.',
    tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
    gradient: 'linear-gradient(135deg, #14b8a6, #2dd4bf)',
  },
];

const upcoming = [
  {
    title: 'AI-Powered Chat Assistant',
    desc: 'Smart chatbot using LLMs for automated customer support and lead generation across multiple industries.',
    tag: 'Coming Q3 2026',
  },
  {
    title: 'Blockchain Supply Chain',
    desc: 'Decentralized supply chain tracking solution with real-time transparency and smart contract automation.',
    tag: 'Coming Q4 2026',
  },
  {
    title: 'HealthTech Mobile App',
    desc: 'Patient management and telemedicine platform with AI diagnostics, appointment scheduling, and EHR integration.',
    tag: 'Coming 2027',
  },
  {
    title: 'Smart City Dashboard',
    desc: 'IoT-powered city management dashboard for traffic, waste, energy, and public safety monitoring.',
    tag: 'Coming 2027',
  },
];

function Portfolio() {
  return (
    <>
      <section style={{
        padding: '100px 0 60px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg)'
      }}>
        <div style={{
          position: 'absolute', top: '-30%', right: '-20%', width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
          filter: 'blur(80px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(60px)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block', padding: '6px 18px', borderRadius: '40px',
            background: 'var(--tag-bg)', color: 'var(--primary)',
            fontSize: '0.82rem', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(37,99,235,0.12)'
          }}>
            Our Work
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text)',
            lineHeight: 1.1, marginBottom: '16px'
          }}>
            Projects We've{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Built &amp; Planned</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7
          }}>
            Every project we deliver comes from real effort, late nights, and a commitment to doing things right — not just fast.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 60px', background: 'var(--bg)', perspective: '1200px' }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px'
          }}>
            <div style={{
              width: '6px', height: '32px', borderRadius: '4px',
              background: 'linear-gradient(180deg, #2563eb, #06b6d4)', flexShrink: 0
            }} />
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>Completed Projects</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '2px 0 0' }}>
                {completed.length} projects delivered
              </p>
            </div>
          </div>
          <div className="port-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px',
            transformStyle: 'preserve-3d'
          }}>
            {completed.map((p, i) => (
              <div key={i} className="port-card" style={{
                padding: '28px 22px', borderRadius: '18px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative', overflow: 'hidden',
                transformStyle: 'preserve-3d', cursor: 'default',
                display: 'flex', flexDirection: 'column'
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(37,99,235,0.15)`;
                  const shine = e.currentTarget.querySelector('.port-shine');
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
                  const shine = e.currentTarget.querySelector('.port-shine');
                  if (shine) { shine.style.opacity = '0'; }
                }}
              >
                <div className="port-shine" style={{
                  position: 'absolute', inset: '0', borderRadius: '18px',
                  pointerEvents: 'none', opacity: '0',
                  transition: 'opacity 0.3s ease', zIndex: '1'
                }} />
                <div style={{
                  position: 'relative', zIndex: '2',
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: p.gradient, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', color: '#fff', marginBottom: '16px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.12)'
                }}>
                  {p.title.charAt(0)}
                </div>
                <div style={{ position: 'relative', zIndex: '2', flex: 1 }}>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: '6px',
                    background: 'var(--tag-bg)', color: 'var(--primary)',
                    fontSize: '0.7rem', fontWeight: 600, marginBottom: '10px'
                  }}>
                    {p.category}
                  </span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text)', lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '14px' }}>{p.desc}</p>
                </div>
                <div style={{
                  position: 'relative', zIndex: '2',
                  display: 'flex', flexWrap: 'wrap', gap: '6px'
                }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      padding: '3px 8px', borderRadius: '6px',
                      background: 'var(--bg)', border: '1px solid var(--border)',
                      fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '40px 0 80px', background: 'var(--bg)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)'
        }} />
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px'
          }}>
            <div style={{
              width: '6px', height: '32px', borderRadius: '4px',
              background: 'linear-gradient(180deg, #f59e0b, #fbbf24)', flexShrink: 0
            }} />
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>Upcoming Projects</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '2px 0 0' }}>
                What we're building next
              </p>
            </div>
          </div>
          <div className="port-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px',
            transformStyle: 'preserve-3d'
          }}>
            {upcoming.map((p, i) => (
              <div key={i} className="port-card" style={{
                padding: '28px 22px', borderRadius: '18px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px dashed rgba(128,128,128,0.3)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative', overflow: 'hidden',
                transformStyle: 'preserve-3d', cursor: 'default',
                display: 'flex', flexDirection: 'column',
                opacity: 0.85
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px rgba(0,0,0,0.1)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', color: '#fff', marginBottom: '16px',
                  boxShadow: '0 6px 20px rgba(245,158,11,0.2)'
                }}>
                  <HiArrowRight />
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text)', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '14px', flex: 1 }}>{p.desc}</p>
                <span style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
                  background: 'rgba(245,158,11,0.12)', color: '#f59e0b',
                  fontSize: '0.72rem', fontWeight: 600, alignSelf: 'flex-start'
                }}>
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .port-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          transform-style: preserve-3d;
        }
        @media (max-width: 1024px) {
          .port-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .port-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

export default Portfolio;
