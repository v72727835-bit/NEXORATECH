import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const config = {
  showLinkedIn: true,
  showTwitter: true,
  showInstagram: true,
  showGithub: true,
};

const links = {
  linkedin: 'https://linkedin.com/company/nexoratech',
  twitter: 'https://twitter.com/nexoratech',
  instagram: 'https://instagram.com/nexoratech',
  github: 'https://github.com/nexoratech',
};

const buttons = [
  {
    key: 'linkedin', icon: FaLinkedinIn, label: 'LinkedIn',
    bg: '#0A66C2', link: links.linkedin, show: config.showLinkedIn,
  },
  {
    key: 'twitter', icon: FaTwitter, label: 'Twitter',
    bg: '#1DA1F2', link: links.twitter, show: config.showTwitter,
  },
  {
    key: 'instagram', icon: FaInstagram, label: 'Instagram',
    bg: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)', link: links.instagram, show: config.showInstagram,
  },
  {
    key: 'github', icon: FaGithub, label: 'GitHub',
    bg: '#333', link: links.github, show: config.showGithub,
  },
].filter(b => b.show);

function FloatingActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <div className={`fab-wrapper ${visible ? 'fab-visible' : ''}`}>
        {buttons.map((b, i) => (
            <a
              key={b.key}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className="fab-btn"
              aria-label={b.label}
              style={{
                background: b.bg,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <b.icon />
              <span className="fab-tooltip">{b.label}</span>
            </a>
          ))}
      </div>
      <style>{`
        .fab-wrapper {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%) translateX(100px);
          z-index: 99999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .fab-wrapper.fab-visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
          pointer-events: auto;
        }
        .fab-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
          animation: fab-slide-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          outline: none;
        }
        .fab-btn:hover {
          transform: scale(1.1) translateX(-6px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }
        .fab-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
        .fab-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(15,23,42,0.95);
          color: #fff;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          backdrop-filter: blur(8px);
        }
        .fab-btn:hover .fab-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(-2px);
        }
        @keyframes fab-slide-in {
          0% {
            opacity: 0;
            transform: translateX(60px) scale(0.6);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @media (max-width: 1024px) {
          .fab-btn { width: 50px; height: 50px; font-size: 1.05rem; }
          .fab-wrapper { gap: 10px; right: 16px; }
        }
        @media (max-width: 600px) {
          .fab-btn { width: 46px; height: 46px; font-size: 0.95rem; }
          .fab-wrapper { gap: 8px; right: 12px; }
          .fab-tooltip { display: none; }
        }
      `}</style>
    </>
  );
}

export default FloatingActionBar;
