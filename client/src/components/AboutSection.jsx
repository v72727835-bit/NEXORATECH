import { Link } from 'react-router-dom';
import { HiArrowRight, HiLightBulb, HiUsers, HiBadgeCheck, HiTrendingUp, HiHeart, HiSparkles, HiEye } from 'react-icons/hi';

const stats = [
  { icon: HiLightBulb, value: '50+', label: 'Projects Delivered' },
  { icon: HiUsers, value: '30+', label: 'Happy Clients' },
  { icon: HiBadgeCheck, value: '4.9', label: 'Avg. Rating' },
  { icon: HiTrendingUp, value: '300%', label: 'Client Growth' },
];

const abt = `
@keyframes ab-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
@keyframes ab-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes ab-pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
`;

function AboutSection() {
  return (
    <>
      <style>{abt}</style>
      <section className="section" style={{
        background: 'var(--bg)', position: 'relative', overflow: 'hidden',
        perspective: '800px'
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 60%)',
          filter: 'blur(80px)', pointerEvents: 'none',
          animation: 'ab-pulse 5s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-8%', width: '450px', height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.05), transparent 60%)',
          filter: 'blur(70px)', pointerEvents: 'none',
          animation: 'ab-pulse 7s ease-in-out infinite 2s'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, transformStyle: 'preserve-3d' }}>

          <div style={{
            display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px',
            alignItems: 'center', marginBottom: '80px', transformStyle: 'preserve-3d'
          }}
            onMouseMove={e => {
              const c = e.currentTarget;
              const rect = c.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              const children = c.querySelectorAll('.ab-layer');
              children.forEach((el, i) => {
                const d = (i + 1) * 4;
                el.style.transform = `translateZ(${d * 3}px) translateX(${x * d}px) translateY(${y * d}px)`;
              });
            }}
            onMouseLeave={e => {
              const children = e.currentTarget.querySelectorAll('.ab-layer');
              children.forEach(el => { el.style.transform = ''; });
            }}
          >
            <div style={{ transformStyle: 'preserve-3d' }}>
              <div className="ab-layer" style={{ transition: 'transform 0.2s ease-out' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '6px 16px 6px 6px', borderRadius: '40px',
                  background: 'var(--tag-bg)', color: 'var(--primary)',
                  fontSize: '0.82rem', fontWeight: 600, marginBottom: '20px',
                  border: '1px solid rgba(37,99,235,0.12)'
                }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', color: '#fff'
                  }}>&#10003;</span>
                  About NexoraTech
                </span>
              </div>
              <div className="ab-layer" style={{ transition: 'transform 0.2s ease-out' }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800,
                  lineHeight: 1.12, marginBottom: '24px', color: 'var(--text)'
                }}>
                  Building Digital Products{' '}
                  <span style={{
                    background: 'linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    animation: 'ab-shimmer 4s linear infinite'
                  }}>That Matter</span>
                </h2>
              </div>
              <div className="ab-layer" style={{ transition: 'transform 0.25s ease-out' }}>
                <p style={{
                  color: 'var(--text-secondary)', lineHeight: 1.8,
                  fontSize: '0.95rem', marginBottom: '16px'
                }}>
                  We started NexoraTech in 2024 from Varanasi with a simple belief — great software shouldn't come with corporate baggage. No jargon, no hidden costs, no treating you like a number.
                </p>
              </div>
              <div className="ab-layer" style={{ transition: 'transform 0.3s ease-out' }}>
                <p style={{
                  color: 'var(--text-secondary)', lineHeight: 1.8,
                  fontSize: '0.95rem', marginBottom: '28px'
                }}>
                  Today we are a compact team of developers, designers, and marketers who genuinely care about every project. Whether you are a bootstrapped startup or an established brand, you get the same dedication.
                </p>
              </div>
              <div className="ab-layer" style={{ transition: 'transform 0.35s ease-out' }}>
                <Link to="/about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 32px', borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600,
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  color: '#fff', textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
                  transition: 'all 0.3s ease',
                  transformStyle: 'preserve-3d'
                }}
                  onMouseEnter={e => { e.target.style.transform = 'translateY(-2px) scale(1.03)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
                  onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
                >
                  Our Story <HiArrowRight />
                </Link>
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
              transformStyle: 'preserve-3d'
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: '28px 22px', borderRadius: '16px',
                  background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                  border: '2px solid #000',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default'
                }}
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) translateZ(30px)`;
                    e.currentTarget.style.boxShadow = `0 30px 60px -15px rgba(0,0,0,0.3)`;
                    e.currentTarget.style.borderColor = '#333';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = '#000';
                  }}
                >
                  <div style={{
                    fontSize: '1.8rem', color: '#2563eb', marginBottom: '4px',
                    lineHeight: 1, filter: 'drop-shadow(0 4px 8px rgba(37,99,235,0.3))'
                  }}>
                    <s.icon />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: '50px 0', borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            marginBottom: '50px', transformStyle: 'preserve-3d'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px 6px 6px', borderRadius: '40px',
                background: 'var(--tag-bg)', color: 'var(--primary)',
                fontSize: '0.82rem', fontWeight: 600, marginBottom: '12px',
                border: '1px solid rgba(37,99,235,0.12)'
              }}>
                <span style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', color: '#fff'
                }}>&#10003;</span>
                Our Values
              </span>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800,
                color: 'var(--text)', margin: 0
              }}>
                What Drives Us
              </h3>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px',
              transformStyle: 'preserve-3d'
            }}>
              {[
                { icon: HiHeart, title: 'Radical Honesty', desc: 'We tell you what you need to hear, not what you want to hear. Clear communication, fair pricing, no surprises.' },
                { icon: HiSparkles, title: 'Quality Craftsmanship', desc: 'Every line of code, every pixel, every campaign is built with care. We do not cut corners.' },
                { icon: HiEye, title: 'Client Success First', desc: 'Your growth is our growth. We measure our success by the results you achieve.' },
              ].map((v, i) => (
                <div key={i} style={{
                  padding: '30px 26px', borderRadius: '14px',
                  background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                  border: '2px solid #000',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default', transformStyle: 'preserve-3d'
                }}
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateZ(25px)`;
                    e.currentTarget.style.boxShadow = `0 30px 60px -15px rgba(0,0,0,0.25)`;
                    e.currentTarget.style.borderColor = '#333';
                    const icon = e.currentTarget.querySelector('.ab-value-icon');
                    if (icon) { icon.style.transform = `translateZ(35px) scale(1.1)`; }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = '#000';
                    const icon = e.currentTarget.querySelector('.ab-value-icon');
                    if (icon) { icon.style.transform = ''; }
                  }}
                >
                  <div className="ab-value-icon" style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', color: '#fff', marginBottom: '14px',
                    transition: 'transform 0.3s ease',
                    boxShadow: '0 6px 16px rgba(37,99,235,0.3)'
                  }}>
                    <v.icon />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>{v.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.88rem', margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', transformStyle: 'preserve-3d' }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', fontWeight: 800,
              color: 'var(--text)', marginBottom: '8px'
            }}>
              Want to Work With Us?
            </h3>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.95rem',
              marginBottom: '28px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              We are always looking for interesting projects and passionate clients. Let us build something great together.
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
              Get in Touch <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
