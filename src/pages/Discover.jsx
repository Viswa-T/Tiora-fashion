import React, { useState, useMemo } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import SortBar from '../components/SortBar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const DISCOVER_TABS = [
  { id: 'all', label: 'All Styles' },
  { id: 'women', label: "Women's Fashion" },
  { id: 'men', label: "Men's Fashion" },
  { id: 'tops', label: 'Tops & Tees' },
  { id: 'shirts', label: 'Shirts' },
  { id: 'jeans', label: 'Jeans & Denim' },
  { id: 'outerwear', label: 'Jackets & Outerwear' }
];

export default function Discover({ products = [], onNavigate }) {
  const [selectedTab, setSelectedTab] = useState('all');
  const [sortBy, setSortBy] = useState('oldest');
  const [visibleCount, setVisibleCount] = useState(20);

  // Filter products by tab
  const filteredProducts = useMemo(() => {
    if (selectedTab === 'all') return products;
    if (selectedTab === 'women') return products.filter((p) => p.category === 'women');
    if (selectedTab === 'men') return products.filter((p) => p.category === 'men');
    if (selectedTab === 'tops') {
      return products.filter((p) =>
        ['tops', 't-shirts', 'polo t-shirts'].includes((p.subcategory || '').toLowerCase())
      );
    }
    if (selectedTab === 'shirts') {
      return products.filter((p) => (p.subcategory || '').toLowerCase() === 'shirts');
    }
    if (selectedTab === 'jeans') {
      return products.filter((p) =>
        ['jeans', 'pants', 'korean trouser'].includes((p.subcategory || '').toLowerCase())
      );
    }
    if (selectedTab === 'outerwear') {
      return products.filter((p) => (p.subcategory || '').toLowerCase() === 'jackets');
    }
    return products;
  }, [products, selectedTab]);

  // Sort products deterministically
  const sortedProducts = useMemo(() => {
  const list = [...filteredProducts];

  if (sortBy === 'newest') {
    return list.sort((a, b) => b.id - a.id);
  }

  if (sortBy === 'oldest') {
    return list.sort((a, b) => a.id - b.id);
  }

  if (sortBy === 'price-low') {
    return list.sort((a, b) => {
      const priceA = Number((a.price || '').replace(/[₹,\s]/g, ''));
      const priceB = Number((b.price || '').replace(/[₹,\s]/g, ''));

      return priceA - priceB;
    });
  }

  if (sortBy === 'price-high') {
    return list.sort((a, b) => {
      const priceA = Number((a.price || '').replace(/[₹,\s]/g, ''));
      const priceB = Number((b.price || '').replace(/[₹,\s]/g, ''));

      return priceB - priceA;
    });
  }

  return list;
}, [filteredProducts, sortBy]);

  const displayedProducts = useMemo(() => {
    return sortedProducts.slice(0, visibleCount);
  }, [sortedProducts, visibleCount]);

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
    setVisibleCount(20);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <div className="tiora-page-wrapper">
      <AnnouncementBar />

      <div className="tiora-main-container">
        <Header
          currentPath="/discover"
          onNavigate={onNavigate}
          showBack={true}
        />

        {/* Discover Hero Banner */}
        <section className="tiora-collection-hero" aria-label="Discover Banner">
          <div className="tiora-col-hero-card tiora-discover-hero-card">
            <div className="tiora-col-hero-bg">
              <img
                src="/products/women/women-dis.png"
                alt="TIORA Fashion Discoveries"
                className="tiora-col-hero-img"
                style={{ objectPosition: 'center 20%' }}
                loading="eager"
              />
              <div className="tiora-col-hero-overlay" />
            </div>

            <div className="tiora-col-hero-content">
              <h1 className="tiora-col-hero-title">
                <span>Curated</span>
                <span>Discoveries</span>
              </h1>

              <p className="tiora-col-hero-sub">
                Handpicked editorial fashion edits.
                <br />
                Direct Amazon links for Women and Men.
              </p>
            </div>
          </div>
        </section>

        {/* Discover Category Filter Tabs */}
        <nav className="tiora-discover-tabs-nav" aria-label="Discover Categories">
          <div className="tiora-discover-tabs-scroll">
            {DISCOVER_TABS.map((tab) => {
              const isActive = selectedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`tiora-discover-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Sort Bar */}
        <SortBar
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={sortedProducts.length}
        />

        {/* 2-Column Product Grid */}
        <ProductGrid products={displayedProducts} />

        {/* Load More Button */}
        {visibleCount < sortedProducts.length && (
          <div className="tiora-load-more-wrap">
            <p className="tiora-load-more-counter">
              Showing {displayedProducts.length} of {sortedProducts.length} styles
            </p>
            <button
              type="button"
              className="tiora-load-more-btn"
              onClick={handleLoadMore}
              aria-label="Load more styles"
            >
              <span>LOAD MORE STYLES ↓</span>
            </button>
          </div>
        )}

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
