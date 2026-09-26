import React from 'react';

export default function ProductCard({ product }) {
  if (!product) return null;

  const { name, image, amazonUrl, subcategory } = product;

  return (
    <article className="tiora-product-card" id={`product-${product.id}`}>
      <div className="tiora-product-image-container">
        <img
          src={image}
          alt={name || 'Fashion Look'}
          className="tiora-product-image"
          loading="lazy"
          onError={(e) => {
            // fallback placeholder if image fails
            e.currentTarget.onerror = null;
            e.currentTarget.style.backgroundColor = '#eaeaea';
          }}
        />
      </div>

      <div className="tiora-product-meta">
        <h2 className="tiora-product-title">SHOP NOW ✨</h2>
        {name && <p className="tiora-product-name" title={name}>{name}</p>}
      </div>

      <a
        href={amazonUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="tiora-amazon-btn"
        aria-label={`Shop ${name || 'product'} on Amazon (opens in new tab)`}
      >
        <span>SHOP ON AMAZON</span>
        <svg
          className="tiora-amazon-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </article>
  );
}
