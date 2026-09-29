import React, { useEffect } from 'react';

export default function ProductPreviewModal({ product, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const { name, image, category, subcategory, amazonUrl } = product;

  // Clean formatted category tag (e.g., "Tops | Casual")
  const categoryTag = subcategory
    ? `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} | ${category === 'women' ? 'Women' : 'Men'}`
    : category
    ? category.toUpperCase()
    : 'Fashion Look';

  return (
    <div
      className="tiora-preview-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${name || 'Product'} Preview`}
      onClick={onClose}
    >
      <div
        className="tiora-preview-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="tiora-preview-close-btn"
          onClick={onClose}
          aria-label="Close preview"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Product Portrait Image */}
        <div className="tiora-preview-image-wrap">
          <img
            src={image}
            alt={name || 'Fashion Product'}
            className="tiora-preview-image"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.style.backgroundColor = '#EAE4DC';
            }}
          />
        </div>

        {/* Content Details */}
        <div className="tiora-preview-details">
          <span className="tiora-preview-category-tag">{categoryTag}</span>
          <h2 className="tiora-preview-title">{name}</h2>

          {/* Amazon Affiliate CTA */}
          <a
            href={amazonUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="tiora-preview-amazon-btn"
            aria-label={`Shop ${name || 'product'} on Amazon (opens in new tab)`}
          >
            <span>SHOP ON AMAZON</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
