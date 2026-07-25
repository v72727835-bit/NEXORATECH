import { HiStar, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Rahul Sharma', role: 'Founder, Bright Jewels',
    quote: 'I was tired of agencies that over-promise and under-deliver. NexoraTech was different — they listened, understood what we needed, and built something we\'re genuinely proud of.',
    rating: 5, highlight: true
  },
  {
    name: 'Amit Verma', role: 'CEO, Tender Solutions',
    quote: 'They didn\'t try to sell us a fancy package — they built exactly what we needed, nothing more. Saved us hours of manual work every single day.',
    rating: 5, highlight: false
  },
  {
    name: 'Priya Singh', role: 'Chartered Accountant',
    quote: 'I was skeptical. Small city IT company? But the work spoke for itself. My website is clean, professional, and brings in clients.',
    rating: 5, highlight: false
  },
  {
    name: 'Vikas Gupta', role: 'Director, GreenEarth NGO',
    quote: 'They didn\'t treat us like a charity case — they treated us like a valued client. The platform is simple, secure, and our donors love it.',
    rating: 5, highlight: false
  },
  {
    name: 'Neha Patel', role: 'Owner, UrbanCart',
    quote: 'From the first call to launch, everything was transparent. No surprises, no last-minute upsells. Rare to find that level of honesty.',
    rating: 5, highlight: false
  },
  {
    name: 'Deepak Yadav', role: 'MD, Skyline Constructions',
    quote: 'They delivered exactly what we needed — modern, clean, and effective. The best part? They answered all my calls personally.',
    rating: 5, highlight: false
  },
];

const tmAnim = `
@keyframes tm-quote-in {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes tm-breathe {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.1); opacity: 0.6; }
}
`;

function Testimonials() {
  return (
    <>
      <style>{tmAnim}</style>
      <section className="section" style={{
        background: 'var(--bg)', position: 'relative', overflow: 'hidden',
        perspective: '1000px'
      }}>
        <div style={{
          position: 'absolute', top: '0', right: '0', width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
          filter: 'blur(70px)', pointerEvents: 'none',
          animation: 'tm-breathe 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', bottom: '0', left: '0', width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none',
          animation: 'tm-breathe 8s ease-in-out infinite 2s'
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
              Testimonials
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800,
              color: 'var(--text)', marginBottom: '12px'
            }}>
              Trusted by Real People
            </h2>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.95rem',
              maxWidth: '540px', margin: '0 auto', lineHeight: 1.7
            }}>
              No paid reviews. No fake names. Just honest feedback from real clients we have worked with.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: testimonials[0].highlight ? '1.4fr 1fr' : '1fr 1fr',
            gap: '24px', marginBottom: '24px'
          }}>
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} style={{
                gridColumn: t.highlight ? '1' : i === 2 ? '2' : 'auto',
                gridRow: t.highlight ? '1 / 3' : 'auto',
                padding: t.highlight ? '36px 32px' : '28px 24px',
                borderRadius: '20px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                transformStyle: 'preserve-3d', cursor: 'default',
                display: 'flex', flexDirection: 'column',
                animation: `tm-quote-in 0.6s ease-out ${i * 0.15}s both`
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  const rot = t.highlight ? 8 : 12;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * rot}deg) rotateX(${-y * rot}deg) translateY(-6px)`;
                  e.currentTarget.style.boxShadow = `0 30px 60px -15px rgba(0,0,0,0.2)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ color: '#f59e0b', display: 'flex', gap: '3px', marginBottom: t.highlight ? '18px' : '12px' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} style={{ fontSize: t.highlight ? '1rem' : '0.85rem' }} />
                  ))}
                </div>
                <p style={{
                  color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic',
                  fontSize: t.highlight ? '0.95rem' : '0.85rem',
                  margin: 0, flex: 1
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ fontWeight: 700, fontSize: t.highlight ? '1rem' : '0.9rem', color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: t.highlight ? '0.82rem' : '0.75rem', color: 'var(--text-secondary)' }}>{t.role}</div>
                </div>
                {t.highlight && (
                  <div style={{
                    marginTop: '16px', paddingTop: '14px',
                    borderTop: '1px solid var(--glass-border)',
                    fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: '4px'
                  }}>
                    <span style={{ fontSize: '0.6rem' }}>&#9679;</span> Verified Client
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
            marginBottom: '50px'
          }}>
            {testimonials.slice(3).map((t, i) => (
              <div key={i} style={{
                padding: '24px 20px', borderRadius: '16px',
                background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
                border: '2px solid #000',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                transformStyle: 'preserve-3d', cursor: 'default',
                animation: `tm-quote-in 0.6s ease-out ${(i + 3) * 0.12}s both`
              }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(0,0,0,0.18)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ color: '#f59e0b', display: 'flex', gap: '2px', marginBottom: '10px' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} style={{ fontSize: '0.8rem' }} />
                  ))}
                </div>
                <p style={{
                  color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic',
                  fontSize: '0.82rem', margin: 0, flex: 1
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: '14px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
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
              Become Our Next Happy Client <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
