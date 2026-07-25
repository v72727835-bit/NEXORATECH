import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-alt)',
      borderTop: '2px solid #000',
      color: 'var(--text)'
    }}>
      <div className="container" style={{ padding: '60px 0 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '0',
          borderBottom: '2px solid #000',
          paddingBottom: '0',
          marginBottom: '0'
        }}>
          <div style={{
            padding: '32px 30px',
            borderRight: '2px solid #000',
            minHeight: '260px'
          }}>
            <div style={{
              fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              NEXORATECH
            </div>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.7,
              fontSize: '0.88rem', marginBottom: '20px'
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

          <div style={{
            padding: '32px 28px',
            borderRight: '2px solid #000',
            minHeight: '260px'
          }}>
            <h4 style={{
              fontWeight: 700, fontSize: '0.85rem', marginBottom: '18px',
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--text-secondary)'
            }}>
              Pages
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/portfolio', label: 'Portfolio' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{
                    color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500,
                    textDecoration: 'none', display: 'flex', alignItems: 'center',
                    gap: '6px', transition: 'gap 0.2s'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.gap = '10px'; e.currentTarget.style.color = '#2563eb' }}
                    onMouseLeave={e => { e.currentTarget.style.gap = '6px'; e.currentTarget.style.color = '' }}
                  >
                    <HiArrowRight style={{ fontSize: '0.7rem' }} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            padding: '32px 28px',
            borderRight: '2px solid #000',
            minHeight: '260px'
          }}>
            <h4 style={{
              fontWeight: 700, fontSize: '0.85rem', marginBottom: '18px',
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--text-secondary)'
            }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Web Development', 'Mobile Apps', 'SEO & Marketing', 'Cloud Solutions', 'UI/UX Design'].map(s => (
                <li key={s}>
                  <Link to="/services" style={{
                    color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500,
                    textDecoration: 'none', display: 'flex', alignItems: 'center',
                    gap: '6px', transition: 'gap 0.2s'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.gap = '10px'; e.currentTarget.style.color = '#2563eb' }}
                    onMouseLeave={e => { e.currentTarget.style.gap = '6px'; e.currentTarget.style.color = '' }}
                  >
                    <HiArrowRight style={{ fontSize: '0.7rem' }} /> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            padding: '32px 28px',
            minHeight: '260px'
          }}>
            <h4 style={{
              fontWeight: 700, fontSize: '0.85rem', marginBottom: '18px',
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--text-secondary)'
            }}>
              Contact
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                color: 'var(--text)', fontSize: '0.85rem'
              }}>
                <span style={{
                  width: '32px', height: '32px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'var(--glass-bg)', border: '2px solid #000',
                  fontSize: '0.8rem', flexShrink: 0
                }}>
                  <HiMail />
                </span>
                info@nexoratech.co.in
              </li>
              <li style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                color: 'var(--text)', fontSize: '0.85rem'
              }}>
                <span style={{
                  width: '32px', height: '32px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'var(--glass-bg)', border: '2px solid #000',
                  fontSize: '0.8rem', flexShrink: 0
                }}>
                  <HiPhone />
                </span>
                +91 8182868062
              </li>
              <li style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                color: 'var(--text)', fontSize: '0.85rem'
              }}>
                <span style={{
                  width: '32px', height: '32px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'var(--glass-bg)', border: '2px solid #000',
                  fontSize: '0.8rem', flexShrink: 0
                }}>
                  <HiLocationMarker />
                </span>
                Varanasi, UP, India
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          padding: '18px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          color: 'var(--text-secondary)', fontSize: '0.82rem'
        }}>
          <span>&copy; {year} NexoraTech. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
