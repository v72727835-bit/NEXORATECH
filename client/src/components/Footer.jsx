import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '2px solid #000',
      color: 'var(--text)'
    }}>
      <div className="container" style={{ padding: '60px 0 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          borderBottom: '2px solid #000'
        }}>
          <div style={{ padding: '32px 28px', borderRight: '2px solid #000' }}>
            <div style={{
              fontSize: '1.4rem', fontWeight: 800, marginBottom: '14px',
              letterSpacing: '-0.5px'
            }}>
              NEXORATECH
            </div>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.7,
              fontSize: '0.85rem', marginBottom: '18px', marginLeft: 'auto', marginRight: 'auto'
            }}>
              IT & software development company in Varanasi. We build web, mobile, and digital solutions that actually deliver.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['TW', 'LI', 'IG', 'GH'].map(s => (
                <span key={s} style={{
                  width: '34px', height: '34px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'var(--glass-bg)', border: '2px solid #000',
                  fontSize: '0.65rem', fontWeight: 700, cursor: 'default',
                  transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                >{s}</span>
              ))}
            </div>
          </div>

          <div style={{ padding: '32px 28px', borderRight: '2px solid #000' }}>
            <h4 style={{
              fontWeight: 700, fontSize: '0.82rem', marginBottom: '16px',
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--text-secondary)'
            }}>
              Pages
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/portfolio', label: 'Portfolio' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{
                    color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                    gap: '6px', transition: 'gap 0.2s'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.gap = '10px'; e.currentTarget.style.color = '#2563eb' }}
                    onMouseLeave={e => { e.currentTarget.style.gap = '6px'; e.currentTarget.style.color = '' }}
                  >
                    <HiArrowRight style={{ fontSize: '0.65rem' }} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '32px 28px', borderRight: '2px solid #000' }}>
            <h4 style={{
              fontWeight: 700, fontSize: '0.82rem', marginBottom: '16px',
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--text-secondary)'
            }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Web Development', 'Mobile Apps', 'SEO & Marketing', 'Cloud Solutions', 'UI/UX Design'].map(s => (
                <li key={s}>
                  <Link to="/services" style={{
                    color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                    gap: '6px', transition: 'gap 0.2s'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.gap = '10px'; e.currentTarget.style.color = '#2563eb' }}
                    onMouseLeave={e => { e.currentTarget.style.gap = '6px'; e.currentTarget.style.color = '' }}
                  >
                    <HiArrowRight style={{ fontSize: '0.65rem' }} /> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '32px 28px' }}>
            <h4 style={{
              fontWeight: 700, fontSize: '0.82rem', marginBottom: '16px',
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--text-secondary)'
            }}>
              Contact
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: HiMail, text: 'info@nexoratech.co.in' },
                { icon: HiPhone, text: '+91 8182868062' },
                { icon: HiLocationMarker, text: 'Varanasi, UP, India' },
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'var(--text)', fontSize: '0.83rem'
                }}>
                  <span style={{
                    width: '30px', height: '30px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    background: 'var(--glass-bg)', border: '2px solid #000',
                    fontSize: '0.75rem', flexShrink: 0
                  }}>
                    <item.icon />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          padding: '18px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '8px',
          color: 'var(--text-secondary)', fontSize: '0.8rem'
        }}>
          <span>&copy; {year} NexoraTech. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ cursor: 'default' }}>Privacy Policy</span>
            <span style={{ cursor: 'default' }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
