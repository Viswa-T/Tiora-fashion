import React, { useState } from 'react';
import ProductPreviewModal from './ProductPreviewModal';

// Helper to format clean editorial style tags
function formatStyleTag(category, subcategory) {
  if (!subcategory) return category ? category.toUpperCase() : 'Fashion Look';

  const sub = subcategory.toLowerCase();
  const subFormatted =
    subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

  if (sub === 'tops') return 'Tops | Casual';
  if (sub === 't-shirts') return 'Tops | Streetwear';
  if (sub === 'shirts') return 'Shirts | Casual';
  if (sub === 'skirts') return 'Skirts | Trendy';
  if (sub === 'jeans') return 'Jeans | Denim';
  if (sub === 'jackets') return 'Jackets | Outerwear';
  if (sub === 'pants') return 'Pants | Chic';
  if (sub === 'polo t-shirts') return 'T-Shirts | Smart Casual';
  if (sub === 'korean trouser') return 'Trousers | Minimalist';
  if (sub === 'shoes') return 'Footwear | Casual';
  if (sub === 'watch') return 'Accessories | Watch';
  if (sub === 'coolers') return 'Accessories | Eyewear';

  return `${subFormatted} | Everyday`;
}

export default function ProductCard({ product }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  if (!product) return null;

  const {
    id,
    name,
    image,
    category,
    subcategory,
    price,
    amazonUrl
  } = product;

  const styleTag = formatStyleTag(category, subcategory);

  const handleCardClick = (e) => {
    if (
      e.target.closest('a') ||
      e.target.closest('.tiora-shop-now-btn')
    ) {
      return;
    }

    setIsPreviewOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (!e.target.closest('a')) {
        e.preventDefault();
        setIsPreviewOpen(true);
      }
    }
  };

  return (
    <>
      <article
        className="tiora-product-card"
        id={`product-${id}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View ${name || 'fashion item'} preview`}
      >
        {/* Portrait Fashion Image */}
        <div className="tiora-card-image-wrap">
          <img
            src={image}
            alt={name || 'Fashion Product'}
            className="tiora-card-image"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.style.backgroundColor = '#EFE9E2';
            }}
          />
        </div>

        {/* Card Metadata */}
        <div className="tiora-card-info">

          <h3 className="tiora-card-title" title={name}>
            {name}
          </h3>

          <p className="tiora-card-tag">
            {styleTag}
          </p>

          {/* Black Rounded Pill CTA Button */}
          <a
            href={amazonUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="tiora-shop-now-btn"
            aria-label={`Shop ${name || 'product'} on Amazon (opens in new tab)`}
            onClick={(e) => e.stopPropagation()}
          >
            <span>SHOP NOW →</span>
          </a>

        </div>
      </article>

      {/* Product Preview Modal */}
      <ProductPreviewModal
        product={product}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}