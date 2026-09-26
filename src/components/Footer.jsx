import React from 'react';

export default function Footer() {
  return (
    <footer className="tiora-footer">

      {/* Instagram */}
      <a
  href="https://www.instagram.com/tiora_findz/"
  target="_blank"
  rel="noopener noreferrer"
  className="tiora-instagram-link"
  aria-label="Tiora Instagram"
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
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
</a>
      <div className="tiora-footer-brand">TIORA</div>

      <div className="tiora-footer-slogan">FIND · FEEL · FLEX</div>

      
      <div className="tiora-footer-copyright">
        © 2026 TIORA. ALL RIGHTS RESERVED.
      </div>

      <p className="tiora-footer-disclosure">
        As an Amazon Associate, Tiora may earn from qualifying purchases.
      </p>
    </footer>
  );
}