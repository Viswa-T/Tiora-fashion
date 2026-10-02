import React, { useMemo } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import CollectionPromoCards from '../components/CollectionPromoCards';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

export default function Home({ products = [], onNavigate }) {
  // Curate a trending subset of products (3 women + 3 men = 6 items)
  // as visually shown in Reference Image 1
  const trendingProducts = useMemo(() => {
    const women = products.filter((p) => p.category === 'women');
    const men = products.filter((p) => p.category === 'men');

    // Pick top items
    const selectedWomen = women.slice(0, 4);
    const selectedMen = men.slice(0, 4);

    return [...selectedWomen, ...selectedMen];
  }, [products]);

  const handleViewAll = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/discover');
    } else {
      window.history.pushState(null, '', '/discover');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="tiora-page-wrapper">
      <Popup />
      <AnnouncementBar />

      <div className="tiora-main-container">
        <Header currentPath="/" onNavigate={onNavigate} />

        {/* Hero Section Carousel */}
        <HeroCarousel onNavigate={onNavigate} />

        {/* Women's and Men's Collection Promotional Cards */}
        <CollectionPromoCards onNavigate={onNavigate} />

        {/* Trending Looks Section */}
        <section className="tiora-trending-section" aria-labelledby="trending-title">
          <div className="tiora-trending-header">
            <h2 id="trending-title" className="tiora-trending-title">
              <span>Trending Looks</span>
              <span className="tiora-title-underline" aria-hidden="true" />
            </h2>

            <a
              href="/discover"
              onClick={handleViewAll}
              className="tiora-view-all-link"
              aria-label="View all trending fashion looks"
            >
              <span>View All</span>
              <span className="tiora-arrow">→</span>
            </a>
          </div>

          <ProductGrid products={trendingProducts} />
        </section>

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
