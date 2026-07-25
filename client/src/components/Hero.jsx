import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import HeroBackground3D from './HeroBackground3D';

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        const target = parseFloat(value);
        const isDecimal = target % 1 !== 0;
        const duration = 3500;
        const steps = 60;
        const stepTime = duration / steps;
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(current);
          }
        }, stepTime);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  const display = value.includes('.') ? count.toFixed(1) : Math.round(count);
  return <span ref={ref}>{display}{suffix}</span>;
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--hero-bg)',
      position: 'relative', overflow: 'hidden',
      transition: 'background 0.3s ease'
    }}>
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
      }} />

      <HeroBackground3D />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '100px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px',
              borderRadius: '40px', background: 'var(--tag-bg)',
              color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600,
              border: '1px solid rgba(37,99,235,0.12)'
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#22c55e', display: 'inline-block',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              Building Since 2024
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 800, color: 'var(--text)',
            lineHeight: 1.12, marginBottom: '20px', letterSpacing: '-0.03em'
          }}>
            Technology That{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              position: 'relative'
            }}>
              Actually Works
              <span style={{
                position: 'absolute', bottom: '2px', left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                borderRadius: '2px', opacity: 0.3
              }} />
            </span>{' '}
            For Your Business
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'var(--text-muted)',
            lineHeight: 1.7, marginBottom: '36px', maxWidth: '600px', margin: '0 auto 36px'
          }}>
            Honestly? We just build things that work. Websites that load fast, apps people actually use, and strategies that bring real customers — not buzzwords.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 36px', borderRadius: '40px', fontSize: '1rem', fontWeight: 700,
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
              transition: 'all 0.3s ease', border: 'none',
              cursor: 'pointer'
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-3px) scale(1.02)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0) scale(1)'; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
            >
              Let's Talk <HiArrowRight />
            </Link>
            <Link to="/portfolio" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 36px', borderRadius: '40px', fontSize: '1rem', fontWeight: 600,
              color: 'var(--primary)', textDecoration: 'none',
              border: '1.5px solid rgba(37,99,235,0.2)',
              background: 'transparent', transition: 'all 0.3s ease'
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--tag-bg)'; e.target.style.borderColor = 'rgba(37,99,235,0.4)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(37,99,235,0.2)' }}
            >
              View Our Work
            </Link>
          </div>

          <div style={{
            display: 'flex', gap: '48px', marginTop: '50px', justifyContent: 'center',
            borderTop: '1px solid var(--border-light)', paddingTop: '30px'
          }}>
            {[
              { value: '50', suffix: '+', label: 'Projects Done' },
              { value: '30', suffix: '+', label: 'Happy Clients' },
              { value: '4.9', suffix: '', label: 'Client Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800,
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2
                }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
