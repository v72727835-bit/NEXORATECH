import { Link } from 'react-router-dom';
import { HiArrowRight, HiCode, HiUserGroup, HiLightBulb, HiTrendingUp, HiHeart, HiSparkles, HiEye, HiChip } from 'react-icons/hi';

const teamMembers = [
  { name: 'Narsing Kumar', img: '/images/team4.jpg' },
  { name: 'Pintu Kumar', img: '/images/team1.jpg' },
  { name: 'Prasnt Misra', img: '/images/team3.jpg' },
  { name: 'Nilansu Sing', img: '/images/team5.jpg' },
  { name: 'Brijesh Seth', img: '/images/team2.jpg' },
  { name: 'Navin Kumar', img: '/images/team6.jpg' },
];

const milestones = [
  { year: '2024', event: 'NexoraTech founded in Varanasi with a vision to empower businesses through technology.' },
  { year: '2024 Q2', event: 'Delivered first 10+ projects across web development and digital marketing.' },
  { year: '2025', event: 'Expanded team and services to include mobile apps and cloud solutions.' },
  { year: '2025 Q3', event: 'Served 30+ clients with 50+ successful projects delivered.' },
];

const abtAnim = `
@keyframes ab-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
`;

function About() {
  return (
    <>
      <style>{abtAnim}</style>

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
            About Us
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800,
            color: 'var(--text)', lineHeight: 1.1, marginBottom: '20px'
          }}>
            We Turn Ideas Into{' '}
            <span style={{
              background: 'linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              animation: 'ab-shimmer 4s linear infinite'
            }}>Real Products</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7
          }}>
            Empowering businesses through innovative technology solutions since 2024.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', perspective: '1000px' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'
          }}>
            <div>
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
                Our Mission
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800,
                color: 'var(--text)', lineHeight: 1.15, marginBottom: '20px'
              }}>
                Building Technology That{' '}
                <span style={{ color: '#2563eb' }}>Matters</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
                At NexoraTech, our mission is to harness the power of technology to drive innovation, simplify complex processes, and deliver exceptional digital solutions that transform businesses and lives.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
                Founded with a vision to revolutionize the digital landscape, we combine innovation, expertise, and passion to deliver exceptional software solutions. We believe in creating technology that not only meets today's needs but anticipates tomorrow's challenges.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Headquartered in Varanasi, we serve clients across India, helping them build a strong digital presence and streamline operations through custom technology solutions.
              </p>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
              transformStyle: 'preserve-3d'
            }}>
              {[
                { icon: HiCode, value: '50+', label: 'Projects', color: '#2563eb' },
                { icon: HiUserGroup, value: '30+', label: 'Clients', color: '#8b5cf6' },
                { icon: HiLightBulb, value: '4.9', label: 'Rating', color: '#f59e0b' },
                { icon: HiTrendingUp, value: '300%', label: 'Growth', color: '#10b981' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '28px 20px', borderRadius: '16px',
                  background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                  border: '2px solid #000', textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default'
                }}
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(15px)`;
                    e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.2)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div style={{ fontSize: '1.6rem', color: s.color, marginBottom: '6px' }}><s.icon /></div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text)' }}>{s.value}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px 6px 6px', borderRadius: '40px',
              background: 'var(--tag-bg)', color: 'var(--primary)',
              fontSize: '0.82rem', fontWeight: 600, marginBottom: '8px',
              border: '1px solid rgba(37,99,235,0.12)'
            }}>
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', color: '#fff'
              }}>&#10003;</span>
              Our Journey
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800,
              color: 'var(--text)', margin: 0
            }}>
              How We Got Here
            </h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {milestones.map((m, i) => (
              <div key={i} style={{
                padding: '28px 24px', borderRadius: '16px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000', position: 'relative', overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default'
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(0,0,0,0.15)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <span style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: '6px',
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  color: '#fff', fontSize: '0.78rem', fontWeight: 600, marginBottom: '12px'
                }}>
                  {m.year}
                </span>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem', margin: 0 }}>
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px 6px 6px', borderRadius: '40px',
              background: 'var(--tag-bg)', color: 'var(--primary)',
              fontSize: '0.82rem', fontWeight: 600, marginBottom: '8px',
              border: '1px solid rgba(37,99,235,0.12)'
            }}>
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', color: '#fff'
              }}>&#10003;</span>
              Our Team
            </span>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800,
              color: 'var(--text)', margin: 0
            }}>
              Meet the People Behind It All
            </h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px'
          }}>
            {teamMembers.map((m, i) => (
              <div key={i} style={{
                padding: '20px 14px', borderRadius: '14px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000', textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default'
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
                  e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(0,0,0,0.18)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <img src={m.img} alt={m.name} style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  objectFit: 'cover', margin: '0 auto 12px', display: 'block',
                  border: '2px solid #000'
                }} />
                <h4 style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.88rem' }}>{m.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{
        background: 'var(--bg)', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.03), transparent 60%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800,
            color: 'var(--text)', marginBottom: '12px'
          }}>
            Want to Work With Us?
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '30px',
            maxWidth: '480px', margin: '0 auto 30px', lineHeight: 1.7
          }}>
            We are always looking for interesting projects and passionate clients. Let us build something great together.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px', borderRadius: '40px', fontSize: '0.95rem', fontWeight: 600,
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px) scale(1.03)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
            onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
          >
            Get In Touch <HiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
