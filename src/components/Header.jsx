import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header({ currentPath = '/', onNavigate, showBack = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    } else if (onNavigate) {
      onNavigate('/');
    }
  };

  return (
    <>
      <header className="tiora-header" role="banner">
        {/* Left Action: Back Arrow or Hamburger */}
        <div className="tiora-header-left">
          {showBack || currentPath !== '/' ? (
            <button
              type="button"
              className="tiora-header-icon-btn"
              onClick={handleBackClick}
              aria-label="Go back to home"
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
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="tiora-header-icon-btn"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
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
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          )}
        </div>

        {/* Center Brand: TIORA + FIND · FEEL · FLEX */}
        <div className="tiora-header-center">
          <a
            href="/"
            onClick={handleBrandClick}
            className="tiora-brand-link"
            aria-label="TIORA Homepage"
          >
            <div className="tiora-brand-logo">
              <span className="tiora-logo-star">✦</span>
              <span className="tiora-logo-text">TIORA</span>
            </div>
            <span className="tiora-brand-tagline">FIND · FEEL · FLEX</span>
          </a>
        </div>

        {/* Right Action: Instagram Icon */}
        <div className="tiora-header-right">
          <a
            href="https://www.instagram.com/tiora_findz/"
            target="_blank"
            rel="noopener noreferrer"
            className="tiora-header-icon-btn"
            aria-label="Follow TIORA on Instagram"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
    </>
  );
}
