import React, { useState, useMemo } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import SortBar from '../components/SortBar';
import ProductGrid from '../components/ProductGrid';
import MeeshoBanner from '../components/MeeshoBanner';
import Footer from '../components/Footer';

const WOMEN_CATEGORIES = [
  { id: 'all', label: 'All', subcategories: [] },
  {
    id: 'tops',
    label: 'Tops',
    subcategories: ['tops', 't-shirts'],
    image: '/products/women/women-002.jpg'
  },
  {
    id: 'shirts',
    label: 'Shirts',
    subcategories: ['shirts'],
    image: '/products/women/women-013.jpg'
  },
  {
    id: 'jeans',
    label: 'Jeans',
    subcategories: ['jeans'],
    image: '/products/women/women-011.jpg'
  },
  {
    id: 'skirts',
    label: 'Skirts',
    subcategories: ['skirts'],
    image: '/products/women/women-001.jpg'
  },
  {
    id: 'jackets',
    label: 'Outerwear',
    subcategories: ['jackets'],
    image: '/products/women/women-004.jpg'
  },
  {
    id: 'pants',
    label: 'Pants',
    subcategories: ['pants'],
    image: '/products/women/women-020.jpg'
  }
];

const MEN_CATEGORIES = [
  { id: 'all', label: 'All', subcategories: [] },
  {
    id: 't-shirts',
    label: 'T-Shirts',
    subcategories: ['T-shirts', 'polo t-shirts'],
    image: '/products/men/men-036.jpg'
  },
  {
    id: 'shirts',
    label: 'Shirts',
    subcategories: ['shirts'],
    image: '/products/men/men-001.jpg'
  },
  {
    id: 'jeans',
    label: 'Jeans',
    subcategories: ['jeans'],
    image: '/products/men/men-034.jpg'
  },
  {
    id: 'trouser',
    label: 'Trousers',
    subcategories: ['korean trouser'],
    image: '/products/men/men-032.jpg'
  },
  {
    id: 'jackets',
    label: 'Outerwear',
    subcategories: ['jackets'],
    image: '/products/men/men-035.jpg'
  },
  {
    id: 'shoes',
    label: 'Shoes',
    subcategories: ['shoes'],
    image: '/products/men/men-037.jpg'
  },
  {
    id: 'watch',
    label: 'Watches',
    subcategories: ['watch'],
    image: '/products/men/men-040.jpg'
  },
  {
    id: 'coolers',
    label: 'Sunglasses',
    subcategories: ['coolers'],
    image: '/products/men/men-042.jpg'
  }
];

export default function CollectionPage({
  category = 'women',
  products = [],
  onNavigate
}) {
  const isWomen = category === 'women';
  const categoriesList = isWomen ? WOMEN_CATEGORIES : MEN_CATEGORIES;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('oldest');
  const [visibleCount, setVisibleCount] = useState(16);

  // 1. Filter by category
  const baseCategoryProducts = useMemo(() => {
    return products.filter((p) => p.category === category);
  }, [products, category]);

  // 2. Filter by subcategory
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return baseCategoryProducts;

    const matchedCategoryConfig = categoriesList.find((c) => c.id === selectedCategory);
    if (!matchedCategoryConfig || matchedCategoryConfig.subcategories.length === 0) {
      return baseCategoryProducts;
    }

    return baseCategoryProducts.filter((p) => {
      const pSub = (p.subcategory || '').toLowerCase();
      return matchedCategoryConfig.subcategories.some(
        (sub) => sub.toLowerCase() === pSub
      );
    });
  }, [baseCategoryProducts, selectedCategory, categoriesList]);

  // 3. Sort products deterministically
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'newest') {
      // Newest first (highest id)
      return list.sort((a, b) => b.id - a.id);
    }
    if (sortBy === 'oldest') {
      // Oldest first (lowest id)
      return list.sort((a, b) => a.id - b.id);
    }
    if (sortBy === 'name-asc') {
      return list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    }
    if (sortBy === 'name-desc') {
      return list.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
    }
    return list;
  }, [filteredProducts, sortBy]);

  // 4. Products to render based on load more
  const displayedProducts = useMemo(() => {
    return sortedProducts.slice(0, visibleCount);
  }, [sortedProducts, visibleCount]);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setVisibleCount(16); // Reset pagination on category change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 16);
  };

  return (
    <div className="tiora-page-wrapper">
      <AnnouncementBar />

      <div className="tiora-main-container">
        <Header
          currentPath={`/${category}`}
          onNavigate={onNavigate}
          showBack={true}
        />

        {/* Collection Hero Banner matching Reference Image 2 */}
        <section className="tiora-collection-hero" aria-label="Collection Banner">
          <div className="tiora-col-hero-card">
            <div className="tiora-col-hero-bg">
              <img
                src={isWomen ? '/products/women/women-front.jpg' : '/products/men/men-front.jpg'}
                alt={isWomen ? "Women's Collection Cover" : "Men's Collection Cover"}
                className="tiora-col-hero-img"
                loading="eager"
              />
              <div className="tiora-col-hero-overlay" />
            </div>

            <div className="tiora-col-hero-content">
              <h1 className="tiora-col-hero-title">
                {isWomen ? (
                  <>
                    <span>Women's</span>
                    <span>Collection</span>
                  </>
                ) : (
                  <>
                    <span>Men's</span>
                    <span>Collection</span>
                  </>
                )}
              </h1>

              <p className="tiora-col-hero-sub">
                {isWomen ? (
                  <>
                    Trendy outfits for every mood.
                    <br />
                    Everyday style, effortless you.
                  </>
                ) : (
                  <>
                    Refined looks for everyday wear.
                    <br />
                    Effortless style, curated for you.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Category Navigation with Circular Items matching Reference Image 2 */}
        <CategoryNav
          categories={categoriesList}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Sort Bar with real Sort Options & Dynamic Count */}
        <SortBar
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={sortedProducts.length}
        />

        {/* 2-Column Portrait Product Grid */}
        <ProductGrid products={displayedProducts} />

        {/* Load More Button if more products exist */}
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

        {/* Meesho Collection Promotional CTA */}
        <MeeshoBanner category={category} />

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
