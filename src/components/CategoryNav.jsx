import React, { useRef } from 'react';

export default function CategoryNav({
  categories = [],
  selectedCategory = 'all',
  onSelectCategory
}) {
  const scrollContainerRef = useRef(null);

  return (
    <nav className="tiora-cat-nav-wrapper" aria-label="Category Navigation">
      <div className="tiora-cat-nav-scroll" ref={scrollContainerRef}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              className={`tiora-cat-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isActive}
              aria-label={`Filter by ${cat.label}`}
            >
              <div className={`tiora-cat-circle ${cat.id === 'all' ? 'tiora-cat-circle-all' : ''}`}>
                {cat.id === 'all' ? (
                  <svg
                    className="tiora-cat-all-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                ) : (
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="tiora-cat-img"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <span className="tiora-cat-label">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
