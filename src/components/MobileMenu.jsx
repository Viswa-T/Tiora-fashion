import React, { useEffect } from 'react';

export default function MobileMenu({ isOpen, onClose, currentPath, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    onClose();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div
      className="tiora-mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onClick={onClose}
    >
      <div
        className="tiora-mobile-menu-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tiora-mobile-menu-header">
          <div className="tiora-menu-brand">
            <span className="tiora-brand-star">✦</span>
            <span className="tiora-brand-text">TIORA</span>
          </div>
          <button
            type="button"
            className="tiora-menu-close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <p className="tiora-menu-tagline">FIND · FEEL · FLEX</p>

        <nav className="tiora-mobile-nav-links">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`tiora-mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}
          >
            <span>Home</span>
            <span className="tiora-nav-arrow">→</span>
          </a>
          <a
            href="/women"
            onClick={(e) => handleLinkClick(e, '/women')}
            className={`tiora-mobile-nav-item ${currentPath === '/women' ? 'active' : ''}`}
          >
            <span>Women's Collection</span>
            <span className="tiora-nav-arrow">→</span>
          </a>
          <a
            href="/men"
            onClick={(e) => handleLinkClick(e, '/men')}
            className={`tiora-mobile-nav-item ${currentPath === '/men' ? 'active' : ''}`}
          >
            <span>Men's Collection</span>
            <span className="tiora-nav-arrow">→</span>
          </a>
          <a
            href="/discover"
            onClick={(e) => handleLinkClick(e, '/discover')}
            className={`tiora-mobile-nav-item ${currentPath === '/discover' ? 'active' : ''}`}
          >
            <span>Discover & Trending</span>
            <span className="tiora-nav-arrow">→</span>
          </a>
        </nav>

        <div className="tiora-mobile-menu-footer">
          <a
            href="https://www.instagram.com/tiora_findz/"
            target="_blank"
            rel="noopener noreferrer"
            className="tiora-menu-instagram"
            aria-label="TIORA Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Follow @tiora_findz on Instagram</span>
          </a>

          <p className="tiora-menu-disclosure">
            TIORA is a fashion discovery platform. Links direct to official Amazon and Meesho stores.
          </p>
        </div>
      </div>
    </div>
  );
}
