import React from 'react';

export default function Header({ currentPath = '/', onNavigate }) {
  const handleClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <header className="tiora-header">
      <a
        href="/"
        onClick={(e) => handleClick(e, '/')}
        className="tiora-avatar-link"
        aria-label="Tiora Home"
      >
        <img
          src="/logo.png"
          alt="Tiora"
          className="tiora-avatar"
          width="66"
          height="66"
        />
      </a>

      <h1 className="tiora-brand-title">
        <a href="/" onClick={(e) => handleClick(e, '/')}>
          TIORA
        </a>
      </h1>

      <p className="tiora-slogan">FIND · FEEL · FLEX</p>

      {/* Minimal category navigation tabs */}
      <nav className="tiora-nav-tabs" aria-label="Collections">
        <a
          href="/"
          onClick={(e) => handleClick(e, '/')}
          className={`tiora-nav-tab ${currentPath === '/' ? 'active' : ''}`}
        >
          HOME
        </a>
        <a
          href="/women"
          onClick={(e) => handleClick(e, '/women')}
          className={`tiora-nav-tab ${currentPath === '/women' ? 'active' : ''}`}
        >
          WOMEN
        </a>
        <a
          href="/men"
          onClick={(e) => handleClick(e, '/men')}
          className={`tiora-nav-tab ${currentPath === '/men' ? 'active' : ''}`}
        >
          MEN
        </a>
      </nav>
    </header>
  );
}
