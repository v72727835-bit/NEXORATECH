import { useState, useEffect } from 'react';
import { HiDownload, HiX } from 'react-icons/hi';

function DownloadPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('download-popup-dismissed');
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem('download-popup-dismissed', 'true');
  };

  if (!show) return null;

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99998,
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px', animation: 'fadeIn 0.3s ease'
      }}>
        <div style={{
          maxWidth: '420px', width: '100%', padding: '36px 32px 28px',
          borderRadius: '20px', background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)', border: '2px solid #000',
          position: 'relative', textAlign: 'center',
          animation: 'scaleIn 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
        }}>
          <button onClick={dismiss} style={{
            position: 'absolute', top: '12px', right: '12px',
            width: '32px', height: '32px', borderRadius: '50%',
            border: '1px solid var(--border)', background: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '1rem', color: 'var(--text)',
            transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--tag-bg)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--bg)' }}
            aria-label="Close"
          >
            <HiX />
          </button>

          <div style={{
            width: '64px', height: '64px', borderRadius: '18px',
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', color: '#fff', margin: '0 auto 18px',
            boxShadow: '0 8px 30px rgba(37,99,235,0.25)'
          }}>
            <HiDownload />
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
            Get the NexoraTech App
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
            Download our app to stay updated with the latest projects, services, and exclusive offers.
          </p>

          <a href="#" onClick={e => { e.preventDefault(); dismiss() }} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 32px', borderRadius: '40px', fontSize: '0.92rem', fontWeight: 600,
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(37,99,235,0.3)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 40px rgba(37,99,235,0.4)' }}
            onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 8px 30px rgba(37,99,235,0.3)' }}
          >
            <HiDownload /> Download Now
          </a>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '16px' }}>
            Available for Android & iOS. Coming soon on Web.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
}

export default DownloadPopup;
