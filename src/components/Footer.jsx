import React from 'react';

export default function Footer({ onNavigate }) {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="tiora-footer" role="contentinfo">
      <div className="tiora-footer-top">
        {/* Brand Header */}
        <div className="tiora-footer-brand-section">
          <div className="tiora-footer-brand">
            <span className="tiora-footer-brand-star">✦</span>
            <span className="tiora-footer-brand-text">TIORA</span>
          </div>
          <p className="tiora-footer-tagline">FIND · FEEL · FLEX</p>
          <p className="tiora-footer-desc">
            TIORA is your premier fashion discovery feed. We hand-curate modern,
            timeless, and streetwear looks directly connected to official Amazon
            and Meesho collections.
          </p>

          <a
            href="https://www.instagram.com/tiora_findz/"
            target="_blank"
            rel="noopener noreferrer"
            className="tiora-footer-social-btn"
            aria-label="Follow TIORA on Instagram"
          >
            <svg
              width="18"
              height="18"
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
            <span>@tiora_findz</span>
          </a>
        </div>

        {/* Navigation Columns */}
        <div className="tiora-footer-links-grid">
          <div className="tiora-footer-col">
            <h4 className="tiora-footer-col-title">COLLECTIONS</h4>
            <ul className="tiora-footer-links">
              <li>
                <a href="/" onClick={(e) => handleNavClick(e, '/')}>
                  Home
                </a>
              </li>
              <li>
                <a href="/women" onClick={(e) => handleNavClick(e, '/women')}>
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="/men" onClick={(e) => handleNavClick(e, '/men')}>
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="/discover" onClick={(e) => handleNavClick(e, '/discover')}>
                  Discover & Trending
                </a>
              </li>
            </ul>
          </div>

          <div className="tiora-footer-col">
            <h4 className="tiora-footer-col-title">ABOUT & INFO</h4>
            <ul className="tiora-footer-links">
              <li>
                <span className="tiora-footer-static-item">Fashion Affiliate Platform</span>
              </li>
              <li>
                <span className="tiora-footer-static-item">Direct Amazon Stores</span>
              </li>
              <li>
                <span className="tiora-footer-static-item">Curated Daily Drops</span>
              </li>
              <li>
                <span className="tiora-footer-static-item">Verified Product Links</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure & Legal */}
      <div className="tiora-footer-bottom">
        <p className="tiora-footer-disclosure">
          <strong>Affiliate Disclosure:</strong> TIORA is a participant in affiliate advertising programs,
          including the Amazon Services LLC Associates Program and the Meesho Affiliate Program,
          designed to provide a means for sites to earn advertising fees by linking to qualifying products.
        </p>

        <p className="tiora-footer-copy">
          © {new Date().getFullYear()} TIORA · ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}