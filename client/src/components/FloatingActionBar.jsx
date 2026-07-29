import { useState, useEffect } from 'react';
import {
  FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane,
  FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaCommentDots
} from 'react-icons/fa';

const config = {
  showFacebook: true,
  showInstagram: true,
  showWhatsapp: true,
  showTelegram: true,
  showLinkedIn: true,
  showPhone: true,
  showEmail: true,
  showChat: true,
};

const links = {
  facebook: 'https://facebook.com/nexoratech',
  instagram: 'https://instagram.com/nexoratech',
  whatsapp: 'https://wa.me/918182868062',
  telegram: 'https://t.me/nexoratech',
  linkedin: 'https://linkedin.com/company/nexoratech',
  phone: 'tel:+918182868062',
  email: 'mailto:info@nexoratechpvtltd.com',
  chat: '#',
};

const buttons = [
  {
    key: 'facebook', icon: FaFacebookF, label: 'Facebook',
    bg: '#1877F2', link: links.facebook, show: config.showFacebook,
  },
  {
    key: 'instagram', icon: FaInstagram, label: 'Instagram',
    bg: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)', link: links.instagram, show: config.showInstagram,
  },
  {
    key: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp Chat',
    bg: '#25D366', link: links.whatsapp, show: config.showWhatsapp,
  },
  {
    key: 'telegram', icon: FaTelegramPlane, label: 'Telegram',
    bg: '#0088cc', link: links.telegram, show: config.showTelegram,
  },
  {
    key: 'linkedin', icon: FaLinkedinIn, label: 'LinkedIn',
    bg: '#0A66C2', link: links.linkedin, show: config.showLinkedIn,
  },
  {
    key: 'phone', icon: FaPhoneAlt, label: 'Call Now',
    bg: '#ff9800', link: links.phone, show: config.showPhone,
  },
  {
    key: 'email', icon: FaEnvelope, label: 'Email Us',
    bg: '#ef4444', link: links.email, show: config.showEmail,
  },
  {
    key: 'chat', icon: FaCommentDots, label: 'Live Chat',
    bg: '#6366f1', link: links.chat, show: config.showChat,
  },
].filter(b => b.show);

function FloatingActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <div className={`fab-wrapper ${visible ? 'fab-visible' : ''}`}>
        {buttons.map((b, i) => {
          const isExternal = !b.link.startsWith('tel:') && !b.link.startsWith('mailto:');
          return (
            <a
              key={b.key}
              href={b.link}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
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
          );
        })}
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
