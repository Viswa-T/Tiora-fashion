import React, { useEffect, useState } from 'react';

export default function ProductCard({ product }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPreviewOpen]);

  if (!product) return null;

  const { name, image, amazonUrl } = product;

  return (
    <>
      {/* =========================================================
          NORMAL PRODUCT CARD
          ========================================================= */}
      <article
        className="tiora-product-card"
        id={`product-${product.id}`}
      >
        {/* Clickable Product Image */}
        <div
          className="tiora-product-image-container"
          onClick={() => setIsPreviewOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`Preview ${name || 'product'}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsPreviewOpen(true);
            }
          }}
        >
          <img
            src={image}
            alt={name || 'Fashion Look'}
            className="tiora-product-image"
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.style.backgroundColor = '#eaeaea';
            }}
          />
        </div>

        {/* Product Meta */}
        <div className="tiora-product-meta">
          <h2 className="tiora-product-title">
            SHOP NOW ✨
          </h2>

          {name && (
            <p
              className="tiora-product-name"
              title={name}
            >
              {name}
            </p>
          )}
        </div>

        {/* Normal Amazon Button */}
        <a
          href={amazonUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="tiora-amazon-btn"
          aria-label={`Shop ${name || 'product'} on Amazon (opens in new tab)`}
          onClick={(e) => e.stopPropagation()}
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
{/* =========================================================
    PRODUCT PREVIEW POPUP
    ========================================================= */}
{isPreviewOpen && (
  <div
    className="tiora-product-preview"
    role="dialog"
    aria-modal="true"
    aria-label={`${name || 'Product'} preview`}
  >
    <div className="tiora-preview-card">

      {/* Product Image */}
      <div className="tiora-preview-image-container">
        <img
          src={image}
          alt={name || 'Fashion Look'}
          className="tiora-preview-image"
        />
      </div>

      {/* Same text as normal card */}
      <div className="tiora-preview-meta">
        <h2 className="tiora-preview-title">
          SHOP NOW ✨
        </h2>

        {name && (
          <p className="tiora-preview-name">
            {name}
          </p>
        )}
      </div>

      {/* Amazon Button */}
      <a
        href={amazonUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="tiora-preview-amazon-btn"
      >
        <span>SHOP ON AMAZON</span>

        <svg
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

      {/* Down Arrow */}
      <button
        type="button"
        className="tiora-preview-close"
        onClick={() => setIsPreviewOpen(false)}
        aria-label="Close product preview"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

    </div>
  </div>
)}
</>
  );
}