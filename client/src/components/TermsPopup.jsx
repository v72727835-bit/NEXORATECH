import { useState, useEffect } from 'react';
import { HiX, HiShieldCheck } from 'react-icons/hi';

function TermsPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('terms_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('terms_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg)', borderRadius: '20px',
        border: '2px solid #000', maxWidth: '480px', width: '100%',
        padding: '36px 32px 28px', position: 'relative',
        boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
        animation: 'tp-fadeIn 0.4s ease'
      }}>
        <button onClick={() => setVisible(false)} style={{
          position: 'absolute', top: '12px', right: '12px',
          width: '32px', height: '32px', borderRadius: '50%',
          border: '1.5px solid var(--border)', background: 'transparent',
          color: 'var(--text-muted)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1rem', transition: 'all 0.2s'
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--tag-bg)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)' }}
        ><HiX /></button>

        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px', fontSize: '1.5rem', color: '#fff'
        }}><HiShieldCheck /></div>

        <h2 style={{
          textAlign: 'center', fontSize: '1.3rem', fontWeight: 700,
          color: 'var(--text)', marginBottom: '8px'
        }}>Terms & Conditions</h2>
        <p style={{
          textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.88rem',
          lineHeight: 1.6, marginBottom: '20px'
        }}>
          By continuing, you agree to our terms of service and privacy policy.
          We value your data and are committed to protecting your privacy.
        </p>

        <div style={{
          background: 'var(--bg-alt)', borderRadius: '12px',
          padding: '14px 16px', marginBottom: '20px',
          fontSize: '0.82rem', color: 'var(--text-secondary)',
          lineHeight: 1.6, maxHeight: '120px', overflowY: 'auto',
          border: '1px solid var(--border)'
        }}>
          <strong style={{ color: 'var(--text)' }}>1. Data Collection</strong> — We collect basic information to provide and improve our services.<br />
          <strong style={{ color: 'var(--text)' }}>2. Usage</strong> — Your information is used solely for service delivery and communication.<br />
          <strong style={{ color: 'var(--text)' }}>3. Security</strong> — We implement industry-standard measures to protect your data.<br />
          <strong style={{ color: 'var(--text)' }}>4. Cookies</strong> — We use essential cookies for website functionality.
        </div>

        <button onClick={accept} style={{
          width: '100%', padding: '13px', borderRadius: '40px',
          fontSize: '0.95rem', fontWeight: 600,
          background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
          color: '#fff', border: 'none', cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
          transition: 'all 0.3s ease'
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.45)' }}
          onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
        >
          I Accept
        </button>

        <p style={{
          textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)',
          marginTop: '12px'
        }}>
          By clicking "I Accept", you agree to our Terms & Conditions.
        </p>
      </div>

      <style>{`@keyframes tp-fadeIn { from { opacity: 0; transform: scale(0.92) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }`}</style>
    </div>
  );
}

export default TermsPopup;
