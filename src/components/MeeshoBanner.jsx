import React from 'react';

const MEESHO_URLS = {
  women: 'https://affiliate.meesho.com/collection/OTk5OTQwMDo6Ojo6Om5vcm1hbA==',
  men: 'https://affiliate.meesho.com/collection/OTk5OTk4Nzo6Ojo6Om5vcm1hbA=='
};

export default function MeeshoBanner({ category = 'women' }) {
  const isWomen = category === 'women';
  const url = isWomen ? MEESHO_URLS.women : MEESHO_URLS.men;
  const title = isWomen ? "EXPLORE WOMEN'S\nMEESHO COLLECTIONS" : "EXPLORE MEN'S\nMEESHO COLLECTIONS";
  const image = isWomen ? '/products/women-cover.jpg' : '/products/men-cover.jpg';

  return (
    <section className="tiora-meesho-banner" aria-label="Meesho Collection Promo">
      <div className="tiora-meesho-card">
        <div className="tiora-meesho-bg">
          <img
            src={image}
            alt={isWomen ? "Women's Meesho Collection" : "Men's Meesho Collection"}
            className="tiora-meesho-img"
            loading="eager"
          />
          <div className="tiora-meesho-overlay" />
        </div>

        <div className="tiora-meesho-content">
          <span className="tiora-meesho-badge">EXCLUSIVE FINDS</span>
          <h3 className="tiora-meesho-title">
            {title.split('\n').map((line, i) => (
              <span key={i} className="tiora-meesho-title-line">
                {line}
              </span>
            ))}
          </h3>

          <p className="tiora-meesho-subtitle">
            More styles. More finds. Just for you.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="tiora-meesho-cta-btn"
            aria-label={`Explore ${isWomen ? "Women's" : "Men's"} Meesho Collection (opens in new tab)`}
          >
            <span>EXPLORE NOW →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
