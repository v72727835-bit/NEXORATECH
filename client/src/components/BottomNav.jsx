import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiUserGroup, HiCube, HiBriefcase, HiPhone } from 'react-icons/hi';

const links = [
  { path: '/', icon: HiHome, label: 'Home' },
  { path: '/about', icon: HiUserGroup, label: 'About' },
  { path: '/services', icon: HiCube, label: 'Services' },
  { path: '/portfolio', icon: HiBriefcase, label: 'Portfolio' },
  { path: '/contact', icon: HiPhone, label: 'Contact' },
];

function BottomNav() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="bottom-nav">
        {links.map(link => {
          const isActive = pathname === link.path;
          return (
            <Link key={link.path} to={link.path} className={`bn-link ${isActive ? 'bn-active' : ''}`}>
              <div className="bn-icon-wrap">
                <link.icon />
              </div>
              <span className="bn-label">{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <style>{`
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: var(--nav-bg);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border-top: 1px solid var(--nav-border);
          padding: 6px 8px;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.06);
        }
        @media (max-width: 768px) {
          .bottom-nav { display: flex; }
          main { padding-bottom: 70px; }
        }
        .bn-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 12px;
          transition: all 0.25s ease;
          min-width: 52px;
        }
        .bn-icon-wrap {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          color: var(--text-secondary);
          transition: all 0.25s ease;
          border-radius: 8px;
        }
        .bn-link.bn-active .bn-icon-wrap {
          color: #fff;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .bn-link:not(.bn-active):hover .bn-icon-wrap {
          background: var(--tag-bg);
          color: var(--primary);
        }
        .bn-label {
          font-size: 0.62rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.25s ease;
          letter-spacing: 0.3px;
        }
        .bn-link.bn-active .bn-label {
          color: var(--primary);
        }
      `}</style>
    </>
  );
}

export default BottomNav;
