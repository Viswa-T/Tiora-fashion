import React from 'react';

export default function CategoryCard({ title, image, path, onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <a
      href={path}
      onClick={handleClick}
      className="tiora-category-card"
      aria-label={`Browse ${title} collection`}
    >
      <img
        src={image}
        alt={title}
        className="tiora-category-image"
        loading="lazy"
        onError={(e) => {
          // fallback in case of missing image
          e.currentTarget.src = title.toLowerCase().includes('women')
            ? '/products/women/women-001.jpg'
            : '/products/men/men-001.jpg';
        }}
      />
      <div className="tiora-category-caption">{title}</div>
    </a>
  );
}
