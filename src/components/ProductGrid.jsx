import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products = [] }) {
  if (!products || products.length === 0) {
    return (
      <div className="tiora-empty-state">
        <h3 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          No Products Found
        </h3>
        <p style={{ fontSize: '0.8rem', color: '#555' }}>
          Check back soon for new curated fashion drops!
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
