import React from 'react';

export default function AnnouncementBar() {
  return (
    <aside className="tiora-announcement-bar" aria-label="Announcement">
      <div className="tiora-announcement-content">
        <span className="tiora-announcement-star">✦</span>
        <span>Curated Fashion Finds</span>
        <span className="tiora-announcement-divider">|</span>
        <span>Direct Links to Amazon</span>
        <span className="tiora-announcement-divider">|</span>
        <span>Updated Daily</span>
      </div>
    </aside>
  );
}
