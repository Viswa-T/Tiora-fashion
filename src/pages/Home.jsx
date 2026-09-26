import React from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home({ products = [], onNavigate }) {
  // Show a curated selection of 6 trending products on the home page (3 women, 3 men)
  const womenTrending = products.filter((p) => p.category === 'women').slice(0, 3);
  const menTrending = products.filter((p) => p.category === 'men').slice(0, 3);
  const trendingProducts = [...womenTrending, ...menTrending];

  const handleNavigate = (path) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="tiora-page-wrapper">
      <div className="tiora-container">
        <Header currentPath="/" onNavigate={handleNavigate} />

        {/* Category Cards (Women's and Men's) */}
        <section className="tiora-categories-grid" aria-label="Fashion Categories">
          <CategoryCard
            title="WOMEN'S"
            image="/products/women-cover.jpg"
            path="/women"
            onNavigate={handleNavigate}
          />
          
          <CategoryCard
            title="MEN'S"
            image="/products/men-cover.jpg"
            path="/men"
            onNavigate={handleNavigate}
          />  
        </section>

        {/* Trending Now Section */}
        <section aria-labelledby="trending-heading">
          <div className="tiora-section-heading">
            <h2 id="trending-heading" className="tiora-section-title">
              <span>🔥</span> TRENDING PICKS
            </h2>
            <span className="tiora-section-badge">CURATED</span>
          </div>

          <ProductGrid products={trendingProducts} />
        </section>

        {/* Quick Navigation Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <button
            type="button"
            className="tiora-action-btn"
            onClick={() => handleNavigate('/women')}
            aria-label="See all Women's collection"
          >
            <span>SEE ALL WOMEN'S</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            type="button"
            className="tiora-action-btn tiora-action-btn-secondary"
            onClick={() => handleNavigate('/men')}
            aria-label="See all Men's collection"
          >
            <span>SEE ALL MEN'S</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
