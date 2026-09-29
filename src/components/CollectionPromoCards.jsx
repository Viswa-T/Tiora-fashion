import React from 'react';

export default function CollectionPromoCards({ onNavigate }) {
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
    <section className="tiora-promo-cards-grid" aria-label="Collections">
      {/* Women's Card */}
      <div
        className="tiora-promo-card"
        onClick={(e) => handleClick(e, '/women')}
        role="button"
        tabIndex={0}
        aria-label="Explore Women's Collection"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e, '/women');
          }
        }}
      >
        <div className="tiora-promo-bg-wrap">
          <img
            src="/products/women-cover.jpg"
            alt="Women's Collection"
            className="tiora-promo-img"
            loading="eager"
          />
          <div className="tiora-promo-overlay" />
        </div>

        <div className="tiora-promo-content">
          <h3 className="tiora-promo-title">
            <span>WOMEN'S</span>
            <span>COLLECTION</span>
          </h3>

          <button
            type="button"
            className="tiora-promo-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleClick(e, '/women');
            }}
            aria-label="Explore Women's Collection"
          >
            <span>EXPLORE →</span>
          </button>
        </div>
      </div>

      {/* Men's Card */}
      <div
        className="tiora-promo-card"
        onClick={(e) => handleClick(e, '/men')}
        role="button"
        tabIndex={0}
        aria-label="Explore Men's Collection"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e, '/men');
          }
        }}
      >
        <div className="tiora-promo-bg-wrap">
          <img
            src="/products/men-cover.jpg"
            alt="Men's Collection"
            className="tiora-promo-img"
            loading="eager"
          />
          <div className="tiora-promo-overlay" />
        </div>

        <div className="tiora-promo-content">
          <h3 className="tiora-promo-title">
            <span>MEN'S</span>
            <span>COLLECTION</span>
          </h3>

          <button
            type="button"
            className="tiora-promo-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleClick(e, '/men');
            }}
            aria-label="Explore Men's Collection"
          >
            <span>EXPLORE →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
