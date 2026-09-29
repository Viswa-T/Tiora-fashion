import React from 'react';

export default function SortBar({
  sortBy = 'newest',
  onSortChange,
  totalCount = 0
}) {
  const displayCount = totalCount >= 100 ? '100+ Styles' : `${totalCount} Styles`;

  return (
    <div className="tiora-sort-bar">
      <div className="tiora-sort-left">
        {/* Sliders / Sort Icon matching Reference 2 */}
        <div className="tiora-sort-icon-wrap" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
        </div>

        {/* Real working Sort Select */}
        <div className="tiora-sort-select-wrap">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="tiora-sort-select"
            aria-label="Sort products by"
          >
            <option value="oldest">Oldest First</option>
            <option value="newest">Newest First</option>
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
          </select>

          <svg
            className="tiora-sort-arrow"
            width="12"
            height="12"
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
        </div>
      </div>

      {/* Dynamic Count */}
      <div className="tiora-sort-count">{displayCount}</div>
    </div>
  );
}
