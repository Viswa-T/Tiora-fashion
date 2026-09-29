import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = [] }) {
  if (!products || products.length === 0) {
    return (
      <div className="tiora-empty-state">
        <span className="tiora-empty-icon">✦</span>
        <h3 className="tiora-empty-title">No Styles Found</h3>
        <p className="tiora-empty-text">
          Try choosing another category to explore our curated fashion finds.
        </p>
      </div>
    );
  }

  return (
    <div className="tiora-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
