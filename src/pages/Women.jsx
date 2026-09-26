import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Women({ products = [], onNavigate }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  // Filter for women's products
  const womenProducts = useMemo(() => {
    return products.filter((p) => p.category === 'women');
  }, [products]);

  // Extract unique available subcategories for women
  const subcategories = useMemo(() => {
    const list = Array.from(
      new Set(womenProducts.map((p) => p.subcategory).filter(Boolean))
    );
    return ['all', ...list];
  }, [womenProducts]);

  // Filtered by subcategory
  const displayedProducts = useMemo(() => {
    if (selectedSubcategory === 'all') return womenProducts;
    return womenProducts.filter((p) => p.subcategory === selectedSubcategory);
  }, [womenProducts, selectedSubcategory]);

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
        <Header currentPath="/women" onNavigate={handleNavigate} />

        {/* Collection Section Heading */}
        <div className="tiora-section-heading">
          <h2 className="tiora-section-title">
            <span>✨</span> WOMEN'S COLLECTION
          </h2>
          <span className="tiora-section-badge">{displayedProducts.length} LOOKS</span>
        </div>
    
        {/* Subcategory Filter Pills */}
        {subcategories.length > 2 && (
          <nav className="tiora-filter-bar" aria-label="Women subcategories">
            {subcategories.map((sub) => (
              <button
                key={sub}
                type="button"
                className={`tiora-filter-chip ${selectedSubcategory === sub ? 'active' : ''}`}
                onClick={() => setSelectedSubcategory(sub)}
              >
                {sub}
              </button>
            ))}
          </nav>
        )}

        {/* 2-Column Product Grid */}
        <ProductGrid products={displayedProducts} />

        {/* Collection Navigation Buttons */}

{/* Explore Women's Collection */}
{/* Explore Women's Meesho Collection */}
<a
  href="https://affiliate.meesho.com/collection/OTk5OTQwMDo6Ojo6Om5vcm1hbA=="
  target="_blank"
  rel="noopener noreferrer"
  className="tiora-action-btn"
  aria-label="Explore Women's Meesho collection"
>
  <span>EXPLORE Meesho'S COLLECTION</span>
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
</a>

{/* Explore Men's Collection */}
<button
  type="button"
  className="tiora-action-btn"
  onClick={() => handleNavigate('/men')}
  aria-label="Explore Men's collection"
>
  <span>EXPLORE MEN'S COLLECTION</span>
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

        <Footer />
      </div>
    </div>
  );
}
