import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { pathname } = useLocation();
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > 80) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '16px 24px',
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        maxWidth: '1560px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px 0 28px', height: '60px',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderRadius: '100px',
        border: '1px solid var(--nav-border)',
        boxShadow: 'var(--shadow)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, border-color 0.3s ease',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '100px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)',
          pointerEvents: 'none'
        }} />

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
          <img src="/logo.png" alt="NexoraTech" style={{ height: '48px', display: 'block' }}
            onError={e => { e.target.onerror = null; e.target.src = '/logo.svg' }}
          />
        </Link>

        <ul style={{
          display: 'flex', gap: '2px', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0,
          position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1
        }} className="nav-menu">
          {navLinks.map(link => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link to={link.path} style={{
                  fontSize: '0.95rem', fontWeight: isActive ? 600 : 450,
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  padding: '7px 20px', borderRadius: '40px',
                  transition: 'all 0.3s ease', textDecoration: 'none',
                  background: isActive ? 'var(--tag-bg)' : 'transparent',
                  border: isActive ? '1px solid rgba(37,99,235,0.12)' : '1px solid transparent',
                  letterSpacing: '0.2px'
                }}
                  onMouseEnter={e => {
                    e.target.style.background = isActive ? 'var(--tag-bg)' : 'rgba(37,99,235,0.04)';
                    if (!isActive) e.target.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = isActive ? 'var(--tag-bg)' : 'transparent';
                    if (!isActive) e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
          <button
            onClick={toggle}
            style={{
              width: '38px', height: '38px', borderRadius: '50%',
              border: '1px solid var(--border-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', background: 'transparent',
              color: 'var(--text)', fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--tag-bg)'; e.target.style.borderColor = 'var(--border)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'var(--border-light)' }}
            aria-label="Toggle theme"
          >
            {dark ? <HiSun /> : <HiMoon />}
          </button>
          <Link to="/contact" style={{
            padding: '9px 24px', borderRadius: '40px', fontSize: '0.88rem', fontWeight: 600,
            background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
            color: '#fff', textDecoration: 'none', transition: 'all 0.35s ease',
            boxShadow: '0 4px 16px rgba(37,99,235,0.25)',
            whiteSpace: 'nowrap', letterSpacing: '0.2px',
            border: 'none'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 8px 28px rgba(37,99,235,0.35)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 16px rgba(37,99,235,0.25)' }}
          >
            Get Started
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              background: 'var(--tag-bg)', border: '1px solid var(--border-light)',
              fontSize: '1.4rem', color: 'var(--text)', cursor: 'pointer', padding: '7px 10px',
              display: 'none', borderRadius: '40px', transition: 'all 0.2s',
              lineHeight: 1
            }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{
          marginTop: '8px',
          background: 'var(--glass-bg)', backdropFilter: 'blur(30px)',
          borderRadius: '24px', padding: '12px',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-lg)',
          animation: 'slideDown 0.25s ease'
        }}>
          {navLinks.map(link => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.path} to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block', padding: '13px 18px', fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 450, textDecoration: 'none',
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  borderRadius: '16px', marginBottom: '2px',
                  background: isActive ? 'var(--tag-bg)' : 'transparent',
                  border: isActive ? '1px solid rgba(37,99,235,0.08)' : '1px solid transparent',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--tag-bg)'; e.target.style.color = 'var(--primary)' }}
                onMouseLeave={e => { if (!isActive) { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-secondary)' } }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-menu { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
